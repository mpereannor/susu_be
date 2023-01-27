import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  port: number;
  constructor(private readonly configService: ConfigService) {
    const port = this.configService.get<number>('port');
    if (!port) {
      throw new Error('Environment variables are missing');
    }
    this.port = port;
  }

  findAll() {
    return ['bread', 'egg'];
  }
}
