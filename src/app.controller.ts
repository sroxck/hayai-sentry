/*
 * @Author: sroxck
 * @Date: 2023-10-12 10:03:18
 * @LastEditors: sroxck
 * @LastEditTime: 2023-10-12 10:41:43
 * @Description:
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('默认')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHello(): string {
    return this.appService.getHello();
  }
}
