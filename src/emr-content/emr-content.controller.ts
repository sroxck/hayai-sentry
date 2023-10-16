/*
 * @Author: sroxck
 * @Date: 2023-10-16 16:58:33
 * @LastEditors: sroxck
 * @LastEditTime: 2023-10-16 17:14:49
 * @Description:
 */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmrContentService } from './emr-content.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('emr-content')
@ApiTags('数据保存')
export class EmrContentController {
  constructor(public readonly emrContent: EmrContentService) {}
  @ApiOperation({ summary: '数据保存' })
  @Get('/saveEmrData')
  index() {
    return this.emrContent.test();
  }
}
