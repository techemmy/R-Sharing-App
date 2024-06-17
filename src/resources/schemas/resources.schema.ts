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
  resourceType: string;

  @Prop()
  resourceYear: number;

  @Prop({ required: true })
  courseName: string;

  @Prop()
  courseCode: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: User.name }])
  stars: Array<User>;

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
