import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(5)
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase().trim().replaceAll(' ', '_'))
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim().toLowerCase())
  email: string;

  @IsNotEmpty()
  password: string;
}
