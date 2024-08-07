import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { IsMongooseIdPipe } from 'src/pipes/mongoose-id.pipe';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/guard';
import { SchoolService } from 'src/school/school.service';
import { JwtService } from '@nestjs/jwt';

@UseGuards(AuthGuard)
@Controller({ version: '1', path: 'users' })
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly schoolsService: SchoolService,
    private readonly jwtService: JwtService,
  ) {}

  @Get()
  async getAllUsers() {
    const users = await this.usersService.getUsers();
    return { data: users, message: 'Got all users' };
  }

  @Get(':id')
  async getUser(@Param('id', IsMongooseIdPipe) userId: string) {
    const user = await this.usersService.findById(userId).select('-password');
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return { data: user, message: 'Got user succesfully' };
  }

  @Get('username/:username')
  async getUserByUsername(@Param('username') username: string) {
    const user = await this.usersService
      .getUserByUsername(username)
      .select('-password');
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return { data: user, message: 'Got user succesfully' };
  }

  @Get('email/:email')
  async getUserByEmail(@Param('email') email: string) {
    const user = await this.usersService
      .getUserByEmail(email)
      .select('-password');
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return { data: user, message: 'Got user succesfully' };
  }

  @Patch(':userId')
  async updatedUser(
    @Param('userId') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const user = await this.usersService.findById(id).select('-password');
    if (!user) {
      throw new BadRequestException('User does not exist');
    }

    const school = await this.schoolsService.findById(updateUserDto.school);
    if (!school) {
      throw new BadRequestException('School does not exist');
    }

    if (updateUserDto.username === user.username) {
      delete updateUserDto.username;
    }

    const updatedUser = await this.usersService.updateUser(id, updateUserDto);
    const updated_token = await this.jwtService.signAsync(updatedUser.toJSON());

    return {
      updated_token,
      message: 'User updated succesfully',
    };
  }

  @HttpCode(204)
  @Delete(':userId')
  async deleteUser(@Param('userId') id: string) {
    const user = await this.usersService.findById(id).select('-password');
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return await this.usersService.removeUser(id);
  }
}
