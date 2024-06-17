import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { School } from 'src/school/schemas/school.schema';

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: School.name,
    default: null
  })
  school: School;

  @Prop({ required: true })
  password: string;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10);
});
