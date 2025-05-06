import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateStockLevelInput {
  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  warehouseId: number;

  @Field(() => Int)
  quantity: number;
}
