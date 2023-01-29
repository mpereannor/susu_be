import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '  NOT AGAIN Stop it!';
  }
}
