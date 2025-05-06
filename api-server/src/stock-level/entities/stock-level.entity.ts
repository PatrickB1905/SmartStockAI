import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity, PrimaryGeneratedColumn, Column,
  ManyToOne, JoinColumn
} from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { Warehouse } from '../../warehouse/entities/warehouse.entity';

@Entity()
@ObjectType()
export class StockLevel {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  quantity: number;

  @Field(() => Product)
  @ManyToOne(() => Product, p => p.stockLevels, { eager: true })
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Field(() => Int)
  @Column()
  productId: number;

  @Field(() => Warehouse)
  @ManyToOne(() => Warehouse, w => w.stockLevels, { eager: true })
  @JoinColumn({ name: 'warehouseId' })
  warehouse: Warehouse;

  @Field(() => Int)
  @Column()
  warehouseId: number;
}
