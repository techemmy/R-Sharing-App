import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LogInDto {
  @MinLength(5)
  @IsString()
  @IsNotEmpty()
  emailOrUsername: string;

  @IsNotEmpty()
  password: string;
}
