import { Test, TestingModule } from '@nestjs/testing';
import { WxhtmlController } from './wxhtml.controller';

describe('WxhtmlController', () => {
  let controller: WxhtmlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WxhtmlController],
    }).compile();

    controller = module.get<WxhtmlController>(WxhtmlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
