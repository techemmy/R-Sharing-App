import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
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
