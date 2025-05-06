import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Warehouse } from './entities/warehouse.entity';
import { CreateWarehouseInput } from './dto/create-warehouse.input';
import { UpdateWarehouseInput } from './dto/update-warehouse.input';

@Injectable()
export class WarehouseService {
  constructor(
    @InjectRepository(Warehouse)
    private readonly repo: Repository<Warehouse>,
  ) {}

  findAll(): Promise<Warehouse[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Warehouse> {
    const wh = await this.repo.findOneBy({ id });
    if (!wh) throw new NotFoundException(`Warehouse ${id} not found`);
    return wh;
  }

  create(input: CreateWarehouseInput): Promise<Warehouse> {
    const wh = this.repo.create(input);
    return this.repo.save(wh);
  }

  async update(
    id: number,
    input: UpdateWarehouseInput,
  ): Promise<Warehouse> {
    const { id: _omit, ...rest } = input;
    const wh = await this.repo.preload({ id, ...rest });
    if (!wh) throw new NotFoundException(`Warehouse ${id} not found`);
    return this.repo.save(wh);
  }

  async remove(id: number): Promise<Warehouse> {
    const wh = await this.findOne(id);
    return this.repo.remove(wh);
  }
}
