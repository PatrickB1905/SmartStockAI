import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly svc: ProductService) {}

  @Query(() => [Product], { name: 'products' })
  findAll() {
    return this.svc.findAll();
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.svc.findOne(id);
  }

  @Mutation(() => Product)
  createProduct(@Args('createProductInput') input: CreateProductInput) {
    return this.svc.create(input);
  }

  @Mutation(() => Product)
  updateProduct(@Args('updateProductInput') input: UpdateProductInput) {
    return this.svc.update(input.id, input);
  }

  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.svc.remove(id);
  }
}
