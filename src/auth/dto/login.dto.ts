import { IsNotEmpty, IsString } from 'class-validator';

export class LogInDto {
  @IsString()
  @IsNotEmpty()
  emailOrUsername: string;

  @IsNotEmpty()
  password: string;
}
