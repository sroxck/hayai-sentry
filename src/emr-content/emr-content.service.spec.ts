import { Test, TestingModule } from '@nestjs/testing';
import { EmrContentService } from './emr-content.service';

describe('EmrContentService', () => {
  let service: EmrContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmrContentService],
    }).compile();

    service = module.get<EmrContentService>(EmrContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
