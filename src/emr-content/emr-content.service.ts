/*
 * @Author: sroxck
 * @Date: 2023-10-16 16:58:54
 * @LastEditors: sroxck
 * @LastEditTime: 2023-10-17 09:55:45
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
    private readonly emrContent: Repository<emrContentDto>,
  ) {}
  async test(body: emrContentDto) {
    const data = new emrContentDto();
    data.data = body.data;
    this.emrContent.save(data);
    return 'ok';
  }
}
