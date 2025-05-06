import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { StockLevel } from '../../stock-level/entities/stock-level.entity';

@Entity()
@ObjectType()
export class Warehouse {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  location: string;

  @Field(() => Int)
  @Column()
  capacity: number;

  @Field(() => [StockLevel], { nullable: true })
  @OneToMany(() => StockLevel, sl => sl.warehouse)
  stockLevels?: StockLevel[];
}
