import {
  IsEnum,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { ResourceType } from '../enums/resources.enums';
import { Image } from '../schemas/resources.schema';
import { Transform } from 'class-transformer';

export class CreateResourceDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(ResourceType)
  resourceType: string;

  @IsInt()
  @Transform(({ value }) => parseInt(value))
  resourceYear: number;

  @IsString()
  @IsNotEmpty()
  courseName: string;

  @IsString()
  courseCode: string;

  @IsMongoId({ message: 'Enter a valid school' })
  @IsNotEmpty()
  school: string;

  @IsMongoId({ message: 'Enter a valid creator' })
  @IsNotEmpty()
  creator: string;

  images: Array<Image>;
}
