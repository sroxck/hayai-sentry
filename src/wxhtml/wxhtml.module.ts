/*
 * @Author: sroxck
 * @Date: 2023-10-12 10:20:21
 * @LastEditors: sroxck
 * @LastEditTime: 2023-10-17 14:56:26
 * @Description:
 */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { WxhtmlController } from './wxhtml.controller';
import { WxhtmlService } from './wxhtml.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { wxhtmlDto } from './wxhtml.entity';
import { FilterMiddleware } from 'src/filter/filter.middleware';
@Module({
  imports: [TypeOrmModule.forFeature([wxhtmlDto])],
  controllers: [WxhtmlController],
  providers: [WxhtmlService],
})
export class WxhtmlModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FilterMiddleware).forRoutes('wxhtml');
  }
}
