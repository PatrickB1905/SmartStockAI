import { Test, TestingModule } from '@nestjs/testing';
import { StockLevelService } from './stock-level.service';

describe('StockLevelService', () => {
  let service: StockLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockLevelService],
    }).compile();

    service = module.get<StockLevelService>(StockLevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
