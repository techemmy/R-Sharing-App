import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import config from 'src/config';
import { SchoolModule } from 'src/school/school.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: config.JWT_SECRET,
      signOptions: { expiresIn: '2h' },
    }),
    SchoolModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
