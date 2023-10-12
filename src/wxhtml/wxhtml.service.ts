/*
 * @Author: sroxck
 * @Date: 2023-10-12 10:21:14
 * @LastEditors: sroxck
 * @LastEditTime: 2023-10-12 15:55:54
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { wxhtmlDto } from './wxhtml.entity';
@Injectable()
export class WxhtmlService {
  constructor(
    @InjectRepository(wxhtmlDto)
    private readonly userInfo: Repository<wxhtmlDto>,
  ) {}
  async setUserInfo(body: wxhtmlDto) {
    const data = new wxhtmlDto();
    data.userOpenId = body.userOpenId;
    data.userDevice = body.userDevice;
    data.userPlatForm = body.userPlatForm;
    data.userBrowser = body.userBrowser;
    data.userSystemVersion = body.userSystemVersion;
    data.userVisitUri = body.userVisitUri;
    const newData = await this.userInfo.save(data);
    return newData.id;
  }
}
