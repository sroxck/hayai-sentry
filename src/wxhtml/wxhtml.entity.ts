/*
 * @Author: sroxck
 * @Date: 2023-10-12 11:23:20
 * @LastEditors: sroxck
 * @LastEditTime: 2023-10-12 15:58:37
 * @Description:
 */
import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
@Entity()
export class wxhtmlDto {
  @CreateDateColumn({ type: 'timestamp' })
  createTime: Date;
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @ApiProperty({ description: 'openId' })
  @Column({ type: 'varchar', length: 255 })
  userOpenId: string;
  @ApiProperty({ description: '用户手机型号' })
  @Column({ type: 'varchar', length: 12 })
  userDevice: string;
  @ApiProperty({ description: '用户设备平台' })
  @Column({ type: 'varchar', length: 12 })
  userPlatForm: string;
  @ApiProperty({ description: '浏览器' })
  @Column({ type: 'varchar', length: 12 })
  userBrowser: string;
  @ApiProperty({ description: '系统版本' })
  @Column()
  userSystemVersion: string;
  @ApiProperty({ description: '访问地址' })
  @Column()
  userVisitUri: string;
}
