import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateResourceDto } from './create-resource.dto';

export class UpdateResourceDto extends PartialType(
  OmitType(CreateResourceDto, ['creator']),
) {}
