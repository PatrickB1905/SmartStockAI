import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StockLevel } from './entities/stock-level.entity';
import { StockLevelService } from './stock-level.service';
import { StockLevelResolver } from './stock-level.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([StockLevel])],
  providers: [StockLevelService, StockLevelResolver],
})
export class StockLevelModule {}
