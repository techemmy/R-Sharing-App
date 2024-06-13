import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class School {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, unique: true })
  acronym: string;
}

export type SchoolDocument = HydratedDocument<School>;
export const schoolSchema = SchemaFactory.createForClass(School);
