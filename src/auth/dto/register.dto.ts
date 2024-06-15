import { Transform } from 'class-transformer';
import { IsEmail, IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase().replaceAll(' ', '_'))
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  email: string;

  @IsString()
  @IsMongoId()
  school: string;

  @IsNotEmpty()
  password: string;
}
