import { Transform } from 'class-transformer';
import { IsObjectId } from 'nestjs-object-id';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  email: string;

  @IsString()
  @IsObjectId()
  school: string;

  @IsNotEmpty()
  password: string;
}
