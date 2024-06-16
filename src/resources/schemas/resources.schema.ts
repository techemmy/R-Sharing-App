import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { School } from 'src/school/schemas/school.schema';
import { User } from 'src/users/schemas/user.schema';
import { ResourceType } from '../enums/resources.enums';

export interface Image {
  pageNo: number;
  url: string;
}

@Schema()
export class Resources {
  @Prop({ required: true, enum: ResourceType })
  resource_type: string;

  @Prop()
  resource_year: number;

  @Prop({ required: true })
  course_name: string;

  @Prop()
  course_code: string;

  @Prop({ default: 0 })
  stars: number;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: School.name,
  })
  school: School;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
  })
  creator: User;

  @Prop()
  images: Array<Image>;
}

export type ResourcesDocument = HydratedDocument<Resources>;
export const ResourcesSchema = SchemaFactory.createForClass(Resources);
