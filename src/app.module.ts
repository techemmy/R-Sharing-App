import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { SchoolModule } from './school/school.module';
import { UsersModule } from './users/users.module';
import { ResourcesModule } from './resources/resources.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(config.MONGO_URI),
    AuthModule,
    SchoolModule,
    UsersModule,
    ResourcesModule,
    CloudinaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
