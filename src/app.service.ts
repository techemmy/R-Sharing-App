import { Injectable } from '@nestjs/common';
import { config } from 'process';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World';
  }
}
