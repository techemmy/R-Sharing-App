import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class IsMongooseIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (value && !isValidObjectId(value)) {
      throw new BadRequestException('Invalid ID in url');
    }
    return value;
  }
}
