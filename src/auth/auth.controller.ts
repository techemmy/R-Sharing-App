import { Controller, Post, Body } from '@nestjs/common';
import { SchoolService } from 'src/school/school.service';
import { AuthService } from './auth.service';
import { LogInDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller({ version: '1', path: 'auth' })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('/login')
  login(@Body() loginUserDto: LogInDto) {
    return this.authService.login(loginUserDto);
  }
}
