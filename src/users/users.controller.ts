import {
  BadRequestException,
  Body,
  Req,
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

@UseGuards(AuthGuard)
@Controller({ version: '1', path: 'users' })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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
    console.log('here', updateUserDto);
    const user = await this.usersService.findById(id).select('-password');
    if (!user) {
      throw new BadRequestException('User does not exist');
    }
    if (user.username === updateUserDto.username) {
      return { data: user, message: 'It is your current username' };
    }

    const updatedUser = await this.usersService.updateUser(id, updateUserDto);
    return { data: updatedUser, message: 'User updated succesfully' };
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
