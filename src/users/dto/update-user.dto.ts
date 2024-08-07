import { PartialType, OmitType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['password'] as const),
) {
  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsString()
  @IsOptional()
  school?: string;

  // @IsEnum(AfricanCountriesAndTerritories)
  // @IsNotEmpty()
  // country: string;

  @IsString()
  @IsOptional()
  department: string;
}
