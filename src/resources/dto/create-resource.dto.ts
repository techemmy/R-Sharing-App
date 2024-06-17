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
  resourceType: string;

  @IsInt()
  resourceYear: number;

  @IsString()
  @IsNotEmpty()
  courseName: string;

  @IsString()
  courseCode: string;

  @IsMongoId()
  @IsNotEmpty()
  school: string;

  @IsMongoId()
  @IsNotEmpty()
  creator: string;

  images: Array<Image>;
}
