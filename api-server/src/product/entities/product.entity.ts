import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { StockLevel } from '../../stock-level/entities/stock-level.entity';

@Entity()
@ObjectType()
export class Product {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  sku: string;

  @Field()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(() => [StockLevel], { nullable: true })
  @OneToMany(() => StockLevel, sl => sl.product)
  stockLevels?: StockLevel[];
}
