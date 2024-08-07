import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { School } from 'src/school/schemas/school.schema';
import { AfricanCountriesAndTerritories } from '../enums/country.enum';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop()
  fullname: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: School.name,
    default: null,
  })
  school: School;

  @Prop({ required: true })
  password: string;

  @Prop({
    enum: AfricanCountriesAndTerritories,
  })
  country: string;

  @Prop()
  department: string;

  @Prop()
  profilePictureURL: string;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10);
});
