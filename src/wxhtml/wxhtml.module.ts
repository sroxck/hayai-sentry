import { Module } from '@nestjs/common';
import { WxhtmlController } from './wxhtml.controller';
import { WxhtmlService } from './wxhtml.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { wxhtmlDto } from './wxhtml.entity';
@Module({
  imports: [TypeOrmModule.forFeature([wxhtmlDto])],
  controllers: [WxhtmlController],
  providers: [WxhtmlService],
})
export class WxhtmlModule {}
