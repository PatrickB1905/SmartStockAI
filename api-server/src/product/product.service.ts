import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly repo: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.repo.find();
  }

  findOne(id: number): Promise<Product> {
    return this.repo.findOneByOrFail({ id });
  }

  create(input: CreateProductInput): Promise<Product> {
    const product = this.repo.create(input);
    return this.repo.save(product);
  }

  async update(id: number, input: UpdateProductInput): Promise<Product> {
    const { id: _omit, ...rest } = input;
    const product = await this.repo.preload({ id, ...rest });
    if (!product) throw new NotFoundException(`Product ${id} not found`);
    return this.repo.save(product);
  }

  async remove(id: number): Promise<Product> {
    const product = await this.findOne(id);
    return this.repo.remove(product);
  }
}
