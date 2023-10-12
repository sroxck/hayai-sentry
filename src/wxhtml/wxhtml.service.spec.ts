import { Test, TestingModule } from '@nestjs/testing';
import { WxhtmlService } from './wxhtml.service';

describe('WxhtmlService', () => {
  let service: WxhtmlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WxhtmlService],
    }).compile();

    service = module.get<WxhtmlService>(WxhtmlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
