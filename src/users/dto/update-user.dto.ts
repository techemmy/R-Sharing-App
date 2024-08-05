import { PartialType, OmitType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { AfricanCountriesAndTerritories } from '../enums/country.enum';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['password'] as const),
) {
  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsEnum(AfricanCountriesAndTerritories)
  @IsNotEmpty()
  country: string;
}
