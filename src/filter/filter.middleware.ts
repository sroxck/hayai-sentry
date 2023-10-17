/*
 * @Author: sroxck
 * @Date: 2023-10-17 14:54:45
 * @LastEditors: sroxck
 * @LastEditTime: 2023-10-17 14:59:26
 * @Description:
 */
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class FilterMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('进入中间件');
    next();
  }
}
