/*
 * @Author: sroxck
 * @Date: 2023-10-12 10:03:18
 * @LastEditors: sroxck
 * @LastEditTime: 2023-10-16 17:04:19
 * @Description:
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WxhtmlModule } from './wxhtml/wxhtml.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmrContentModule } from './emr-content/emr-content.module';

@Module({
  imports: [
    WxhtmlModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'jing12345',
      database: 'wxhtml',
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
