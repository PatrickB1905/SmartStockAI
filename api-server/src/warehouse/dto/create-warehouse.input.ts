import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateWarehouseInput {
  @Field()
  location: string;

  @Field(() => Int)
  capacity: number;
}
