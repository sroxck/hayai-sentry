/*
 * @Author: sroxck
 * @Date: 2023-10-12 10:03:18
 * @LastEditors: sroxck
 * @LastEditTime: 2023-10-17 10:14:02
 * @Description:
 */
import { Module } from '@nestjs/common';
import {
  type,
  host,
  username,
  password,
  port,
  database,
} from '../ormconfig.json';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WxhtmlModule } from './wxhtml/wxhtml.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmrContentModule } from './emr-content/emr-content.module';
@Module({
  imports: [
    WxhtmlModule,
    TypeOrmModule.forRoot({
      type: type as 'mysql',
      host,
      port,
      username,
      password,
      database,
      retryDelay: 500,
      retryAttempts: 10,
      synchronize: true, // 是否同步实体到数据库
      autoLoadEntities: true, // 自动加载实体
    }),
    EmrContentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
