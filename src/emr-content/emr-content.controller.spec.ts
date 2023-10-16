import { Test, TestingModule } from '@nestjs/testing';
import { EmrContentController } from './emr-content.controller';

describe('EmrContentController', () => {
  let controller: EmrContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmrContentController],
    }).compile();

    controller = module.get<EmrContentController>(EmrContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
