/*
 * @Author: sroxck
 * @Date: 2023-10-16 16:58:33
 * @LastEditors: sroxck
 * @LastEditTime: 2023-10-17 09:57:20
 * @Description:
 */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmrContentService } from './emr-content.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { emrContentDto } from './emr-content.entity';

@Controller('emr-content')
@ApiTags('数据保存')
export class EmrContentController {
  constructor(public readonly emrContent: EmrContentService) {}
  @Post('/saveEmrData')
  @ApiOperation({ summary: '数据保存' })
  index(@Body() body: emrContentDto) {
    return this.emrContent.test(body);
  }
}
