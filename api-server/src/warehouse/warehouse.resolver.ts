import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WarehouseService } from './warehouse.service';
import { Warehouse } from './entities/warehouse.entity';
import { CreateWarehouseInput } from './dto/create-warehouse.input';
import { UpdateWarehouseInput } from './dto/update-warehouse.input';

@Resolver(() => Warehouse)
export class WarehouseResolver {
  constructor(private readonly svc: WarehouseService) {}

  @Query(() => [Warehouse], { name: 'warehouses' })
  findAll() {
    return this.svc.findAll();
  }

  @Query(() => Warehouse, { name: 'warehouse' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.svc.findOne(id);
  }

  @Mutation(() => Warehouse)
  createWarehouse(
    @Args('createWarehouseInput') input: CreateWarehouseInput,
  ) {
    return this.svc.create(input);
  }

  @Mutation(() => Warehouse)
  updateWarehouse(
    @Args('updateWarehouseInput') input: UpdateWarehouseInput,
  ) {
    return this.svc.update(input.id, input);
  }

  @Mutation(() => Warehouse)
  removeWarehouse(@Args('id', { type: () => Int }) id: number) {
    return this.svc.remove(id);
  }
}
