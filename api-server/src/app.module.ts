import { Module } from '@nestjs/common';
import { join } from 'path';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductModule } from './product/product.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { StockLevelModule } from './stock-level/stock-level.module';

@Module({
  imports: [
    // GraphQL with Apollo Driver (NestJS v10+ requirement)
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      sortSchema: true,
    }),

    // TypeORM configuration for PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true, // remove or disable in production
    }),

    // Domain modules
    ProductModule,
    WarehouseModule,
    StockLevelModule,
  ],
})
export class AppModule {}
