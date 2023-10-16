/*
 * @Author: sroxck
 * @Date: 2023-10-12 10:20:36
 * @LastEditors: sroxck
 * @LastEditTime: 2023-10-16 16:57:08
 * @Description:
 */
import { Body, Controller, Post } from '@nestjs/common';
import { WxhtmlService } from './wxhtml.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { wxhtmlDto } from './wxhtml.entity';

@Controller('wxhtml')
@ApiTags('监控')
export class WxhtmlController {
  constructor(private readonly wxServer: WxhtmlService) {}
  @Post('saveUserDeviceInfo')
  @ApiOperation({ summary: '保存用户设备信息与行为操作' })
  index(@Body() body: wxhtmlDto) {
    return this.wxServer.setUserInfo(body);
  }

  // @Post('saveUserVisitApi')
}
