import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { BadRequestException } from '@nestjs/common';

// TODO: move error handling to the controllers
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const { username, email } = createUserDto;
    const usernameExists = await this.getUserByUsername(username);
    const emailExists = await this.getUserByEmail(email);
    if (usernameExists) {
      throw new BadRequestException('Username has been taken.');
    }
    if (emailExists) {
      throw new BadRequestException('Email has already been used.');
    }
    return this.userModel.create(createUserDto);
  }

  getUsers() {
    return this.userModel.find({}).select('-password');
  }

  getUserById(id: string) {
    return this.userModel.findById(id);
  }

  getUserByUsername(username: string) {
    return this.userModel.findOne({ username });
  }

  getUserByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const { username, email } = updateUserDto;
    const usernameExists = await this.getUserByUsername(username);
    const emailExists = await this.getUserByEmail(email);
    if (usernameExists) {
      throw new BadRequestException('Username has been taken.');
    }
    if (emailExists) {
      throw new BadRequestException('Email has already been used.');
    }
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .select('-password');
  }

  removeUser(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
