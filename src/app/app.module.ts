import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import base from './../config/base.config';
import * as redisStore from 'cache-manager-redis-store';
import type { ClientOpts } from 'redis';
import { UserModule } from './../user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [base],
      isGlobal: true,
    }),
    CacheModule.register(<ClientOpts>{
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      username: process.env.REDIS_USERNAME,
      password: process.env.REDIS_PASSWORD,
      no_ready_check: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
