/*
 * @Author: sroxck
 * @Date: 2023-10-16 16:58:54
 * @LastEditors: sroxck
 * @LastEditTime: 2023-10-16 17:19:27
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { emrContentDto } from './emr-content.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmrContentService {
  constructor(
    @InjectRepository(emrContentDto)
    private readonly userInfo: Repository<emrContentDto>,
  ) {}
  async test() {
    const data = new emrContentDto();
    data.date = '22';
    return 'ok';
  }
}
