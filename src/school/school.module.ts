import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { School, schoolSchema } from './schemas/school.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: School.name, schema: schoolSchema }]),
  ],
  controllers: [SchoolController],
  providers: [SchoolService],
  exports: [SchoolService],
})
export class SchoolModule {}
