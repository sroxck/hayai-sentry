/*
 * @Author: sroxck
 * @Date: 2023-10-16 17:07:30
 * @LastEditors: sroxck
 * @LastEditTime: 2023-10-17 09:52:07
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
export class emrContentDto {
  @CreateDateColumn({ type: 'timestamp' })
  createTime: Date;
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @ApiProperty({ description: 'json数据' })
  @Column({ type: 'json' })
  data: string;
}
