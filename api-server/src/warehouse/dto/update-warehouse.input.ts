import { InputType, PartialType, Field, Int } from '@nestjs/graphql';
import { CreateWarehouseInput } from './create-warehouse.input';

@InputType()
export class UpdateWarehouseInput extends PartialType(CreateWarehouseInput) {
  @Field(() => Int)
  id: number;
}