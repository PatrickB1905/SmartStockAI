import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  sku: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}
