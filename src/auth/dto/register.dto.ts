import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';

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
  @IsOptional()
  school?: string;

  @IsNotEmpty()
  password: string;
}
