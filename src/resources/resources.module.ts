import { Module } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { ResourcesController } from './resources.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Resources, ResourcesSchema } from './schemas/resources.schema';
import { UsersModule } from 'src/users/users.module';
import { SchoolModule } from 'src/school/school.module';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Resources.name, schema: ResourcesSchema },
    ]),
    CloudinaryModule,
    UsersModule,
    SchoolModule,
  ],
  controllers: [ResourcesController],
  providers: [ResourcesService],
})
export class ResourcesModule {}
