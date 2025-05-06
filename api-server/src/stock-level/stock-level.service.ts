import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { StockLevel } from './entities/stock-level.entity';
import { CreateStockLevelInput } from './dto/create-stock-level.input';
import { UpdateStockLevelInput } from './dto/update-stock-level.input';

@Injectable()
export class StockLevelService {
  constructor(
    @InjectRepository(StockLevel)
    private readonly repo: Repository<StockLevel>,
  ) {}

  findAll(): Promise<StockLevel[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<StockLevel> {
    const sl = await this.repo.findOneBy({ id });
    if (!sl) throw new NotFoundException(`StockLevel ${id} not found`);
    return sl;
  }

  create(input: CreateStockLevelInput): Promise<StockLevel> {
    const sl = this.repo.create(input);
    return this.repo.save(sl);
  }

  async update(
    id: number,
    input: UpdateStockLevelInput,
  ): Promise<StockLevel> {
    const { id: _omit, ...rest } = input;
    const sl = await this.repo.preload({ id, ...rest });
    if (!sl) throw new NotFoundException(`StockLevel ${id} not found`);
    return this.repo.save(sl);
  }

  async remove(id: number): Promise<StockLevel> {
    const sl = await this.findOne(id);
    return this.repo.remove(sl);
  }
}
