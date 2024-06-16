import {
  IsEnum,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { ResourceType } from '../enums/resources.enums';
import { Image } from '../schemas/resources.schema';

export class CreateResourceDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(ResourceType)
  resource_type: string;

  @IsInt()
  resource_year: number;

  @IsString()
  @IsNotEmpty()
  course_name: string;

  @IsString()
  course_code: string;

  @IsMongoId()
  @IsNotEmpty()
  school: string;

  @IsMongoId()
  @IsNotEmpty()
  creator: string;

  images: Array<Image>;
}
