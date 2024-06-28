import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LogInDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: CreateUserDto) {
    const { password: _, ...user } = (
      await this.usersService.create(registerDto)
    ).toJSON();
    return user;
  }

  async login({
    emailOrUsername,
    password,
  }: LogInDto): Promise<{ access_token: string }> {
    let user;
    if (emailOrUsername.includes('@')) {
      user = await this.usersService.getUserByEmail(emailOrUsername);
    } else {
      user = await this.usersService.getUserByUsername(emailOrUsername);
    }

    if (!user) {
      throw new BadRequestException('User account not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new BadRequestException('Invalid password');
    }

    const { password: _, ...payload } = user.toJSON();
    return { access_token: await this.jwtService.signAsync(payload) };
  }

  getAllUsers() {
    return `This action returns all auth`;
  }
}
