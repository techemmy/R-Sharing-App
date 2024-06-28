import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LogInDto } from './dto/login.dto';

@Controller({ version: '1', path: 'auth' })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() registerDto: CreateUserDto) {
    return this.authService.register(registerDto);
  }

  @HttpCode(200)
  @Post('/login')
  login(@Body() loginUserDto: LogInDto) {
    return this.authService.login(loginUserDto);
  }
}
