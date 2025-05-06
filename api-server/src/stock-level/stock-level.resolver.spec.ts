import { Test, TestingModule } from '@nestjs/testing';
import { StockLevelResolver } from './stock-level.resolver';

describe('StockLevelResolver', () => {
  let resolver: StockLevelResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockLevelResolver],
    }).compile();

    resolver = module.get<StockLevelResolver>(StockLevelResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
