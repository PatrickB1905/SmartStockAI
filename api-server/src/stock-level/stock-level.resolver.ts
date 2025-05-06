import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StockLevelService } from './stock-level.service';
import { StockLevel } from './entities/stock-level.entity';
import { CreateStockLevelInput } from './dto/create-stock-level.input';
import { UpdateStockLevelInput } from './dto/update-stock-level.input';

@Resolver(() => StockLevel)
export class StockLevelResolver {
  constructor(private readonly svc: StockLevelService) {}

  @Query(() => [StockLevel], { name: 'stockLevels' })
  findAll() {
    return this.svc.findAll();
  }

  @Query(() => StockLevel, { name: 'stockLevel' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.svc.findOne(id);
  }

  @Mutation(() => StockLevel)
  createStockLevel(
    @Args('createStockLevelInput') input: CreateStockLevelInput,
  ) {
    return this.svc.create(input);
  }

  @Mutation(() => StockLevel)
  updateStockLevel(
    @Args('updateStockLevelInput') input: UpdateStockLevelInput,
  ) {
    return this.svc.update(input.id, input);
  }

  @Mutation(() => StockLevel)
  removeStockLevel(@Args('id', { type: () => Int }) id: number) {
    return this.svc.remove(id);
  }
}
