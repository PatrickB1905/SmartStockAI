import { InputType, PartialType, Field, Int } from '@nestjs/graphql';
import { CreateStockLevelInput } from './create-stock-level.input';

@InputType()
export class UpdateStockLevelInput extends PartialType(CreateStockLevelInput) {
  @Field(() => Int)
  id: number;
}
