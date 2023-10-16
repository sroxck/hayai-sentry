/*
 * @Author: sroxck
 * @Date: 2023-10-16 16:58:00
 * @LastEditors: sroxck
 * @LastEditTime: 2023-10-16 17:10:43
 * @Description:
 */
import { Module } from '@nestjs/common';
import { EmrContentController } from './emr-content.controller';
import { EmrContentService } from './emr-content.service';
import { emrContentDto } from './emr-content.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([emrContentDto])],
  controllers: [EmrContentController],
  providers: [EmrContentService],
})
export class EmrContentModule {}
