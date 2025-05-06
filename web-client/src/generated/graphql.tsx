import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateProductInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sku: Scalars['String']['input'];
};

export type CreateStockLevelInput = {
  productId: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
  warehouseId: Scalars['Int']['input'];
};

export type CreateWarehouseInput = {
  capacity: Scalars['Int']['input'];
  location: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  createStockLevel: StockLevel;
  createWarehouse: Warehouse;
  removeProduct: Product;
  removeStockLevel: StockLevel;
  removeWarehouse: Warehouse;
  updateProduct: Product;
  updateStockLevel: StockLevel;
  updateWarehouse: Warehouse;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateStockLevelArgs = {
  createStockLevelInput: CreateStockLevelInput;
};


export type MutationCreateWarehouseArgs = {
  createWarehouseInput: CreateWarehouseInput;
};


export type MutationRemoveProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveStockLevelArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveWarehouseArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateStockLevelArgs = {
  updateStockLevelInput: UpdateStockLevelInput;
};


export type MutationUpdateWarehouseArgs = {
  updateWarehouseInput: UpdateWarehouseInput;
};

export type Product = {
  __typename?: 'Product';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  sku: Scalars['String']['output'];
  stockLevels?: Maybe<Array<StockLevel>>;
};

export type Query = {
  __typename?: 'Query';
  product: Product;
  products: Array<Product>;
  stockLevel: StockLevel;
  stockLevels: Array<StockLevel>;
  warehouse: Warehouse;
  warehouses: Array<Warehouse>;
};


export type QueryProductArgs = {
  id: Scalars['Int']['input'];
};


export type QueryStockLevelArgs = {
  id: Scalars['Int']['input'];
};


export type QueryWarehouseArgs = {
  id: Scalars['Int']['input'];
};

export type StockLevel = {
  __typename?: 'StockLevel';
  id: Scalars['Int']['output'];
  product: Product;
  productId: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  warehouse: Warehouse;
  warehouseId: Scalars['Int']['output'];
};

export type UpdateProductInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStockLevelInput = {
  id: Scalars['Int']['input'];
  productId?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  warehouseId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateWarehouseInput = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
};

export type Warehouse = {
  __typename?: 'Warehouse';
  capacity: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  location: Scalars['String']['output'];
  stockLevels?: Maybe<Array<StockLevel>>;
};

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: number, sku: string, name: string, description?: string | null }> };

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id: number, sku: string, name: string, description?: string | null } };

export type WarehousesQueryVariables = Exact<{ [key: string]: never; }>;


export type WarehousesQuery = { __typename?: 'Query', warehouses: Array<{ __typename?: 'Warehouse', id: number, location: string, capacity: number }> };

export type CreateWarehouseMutationVariables = Exact<{
  input: CreateWarehouseInput;
}>;


export type CreateWarehouseMutation = { __typename?: 'Mutation', createWarehouse: { __typename?: 'Warehouse', id: number, location: string, capacity: number } };

export type StockLevelsQueryVariables = Exact<{ [key: string]: never; }>;


export type StockLevelsQuery = { __typename?: 'Query', stockLevels: Array<{ __typename?: 'StockLevel', id: number, quantity: number, product: { __typename?: 'Product', id: number, sku: string, name: string }, warehouse: { __typename?: 'Warehouse', id: number, location: string } }> };

export type CreateStockLevelMutationVariables = Exact<{
  input: CreateStockLevelInput;
}>;


export type CreateStockLevelMutation = { __typename?: 'Mutation', createStockLevel: { __typename?: 'StockLevel', id: number, quantity: number, productId: number, warehouseId: number } };


export const ProductsDocument = gql`
    query Products {
  products {
    id
    sku
    name
    description
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export function useProductsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsSuspenseQueryHookResult = ReturnType<typeof useProductsSuspenseQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($input: CreateProductInput!) {
  createProduct(createProductInput: $input) {
    id
    sku
    name
    description
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const WarehousesDocument = gql`
    query Warehouses {
  warehouses {
    id
    location
    capacity
  }
}
    `;

/**
 * __useWarehousesQuery__
 *
 * To run a query within a React component, call `useWarehousesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWarehousesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWarehousesQuery({
 *   variables: {
 *   },
 * });
 */
export function useWarehousesQuery(baseOptions?: Apollo.QueryHookOptions<WarehousesQuery, WarehousesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WarehousesQuery, WarehousesQueryVariables>(WarehousesDocument, options);
      }
export function useWarehousesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WarehousesQuery, WarehousesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WarehousesQuery, WarehousesQueryVariables>(WarehousesDocument, options);
        }
export function useWarehousesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WarehousesQuery, WarehousesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WarehousesQuery, WarehousesQueryVariables>(WarehousesDocument, options);
        }
export type WarehousesQueryHookResult = ReturnType<typeof useWarehousesQuery>;
export type WarehousesLazyQueryHookResult = ReturnType<typeof useWarehousesLazyQuery>;
export type WarehousesSuspenseQueryHookResult = ReturnType<typeof useWarehousesSuspenseQuery>;
export type WarehousesQueryResult = Apollo.QueryResult<WarehousesQuery, WarehousesQueryVariables>;
export const CreateWarehouseDocument = gql`
    mutation CreateWarehouse($input: CreateWarehouseInput!) {
  createWarehouse(createWarehouseInput: $input) {
    id
    location
    capacity
  }
}
    `;
export type CreateWarehouseMutationFn = Apollo.MutationFunction<CreateWarehouseMutation, CreateWarehouseMutationVariables>;

/**
 * __useCreateWarehouseMutation__
 *
 * To run a mutation, you first call `useCreateWarehouseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWarehouseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWarehouseMutation, { data, loading, error }] = useCreateWarehouseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWarehouseMutation(baseOptions?: Apollo.MutationHookOptions<CreateWarehouseMutation, CreateWarehouseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWarehouseMutation, CreateWarehouseMutationVariables>(CreateWarehouseDocument, options);
      }
export type CreateWarehouseMutationHookResult = ReturnType<typeof useCreateWarehouseMutation>;
export type CreateWarehouseMutationResult = Apollo.MutationResult<CreateWarehouseMutation>;
export type CreateWarehouseMutationOptions = Apollo.BaseMutationOptions<CreateWarehouseMutation, CreateWarehouseMutationVariables>;
export const StockLevelsDocument = gql`
    query StockLevels {
  stockLevels {
    id
    quantity
    product {
      id
      sku
      name
    }
    warehouse {
      id
      location
    }
  }
}
    `;

/**
 * __useStockLevelsQuery__
 *
 * To run a query within a React component, call `useStockLevelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockLevelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockLevelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useStockLevelsQuery(baseOptions?: Apollo.QueryHookOptions<StockLevelsQuery, StockLevelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StockLevelsQuery, StockLevelsQueryVariables>(StockLevelsDocument, options);
      }
export function useStockLevelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StockLevelsQuery, StockLevelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StockLevelsQuery, StockLevelsQueryVariables>(StockLevelsDocument, options);
        }
export function useStockLevelsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<StockLevelsQuery, StockLevelsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<StockLevelsQuery, StockLevelsQueryVariables>(StockLevelsDocument, options);
        }
export type StockLevelsQueryHookResult = ReturnType<typeof useStockLevelsQuery>;
export type StockLevelsLazyQueryHookResult = ReturnType<typeof useStockLevelsLazyQuery>;
export type StockLevelsSuspenseQueryHookResult = ReturnType<typeof useStockLevelsSuspenseQuery>;
export type StockLevelsQueryResult = Apollo.QueryResult<StockLevelsQuery, StockLevelsQueryVariables>;
export const CreateStockLevelDocument = gql`
    mutation CreateStockLevel($input: CreateStockLevelInput!) {
  createStockLevel(createStockLevelInput: $input) {
    id
    quantity
    productId
    warehouseId
  }
}
    `;
export type CreateStockLevelMutationFn = Apollo.MutationFunction<CreateStockLevelMutation, CreateStockLevelMutationVariables>;

/**
 * __useCreateStockLevelMutation__
 *
 * To run a mutation, you first call `useCreateStockLevelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStockLevelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStockLevelMutation, { data, loading, error }] = useCreateStockLevelMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateStockLevelMutation(baseOptions?: Apollo.MutationHookOptions<CreateStockLevelMutation, CreateStockLevelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStockLevelMutation, CreateStockLevelMutationVariables>(CreateStockLevelDocument, options);
      }
export type CreateStockLevelMutationHookResult = ReturnType<typeof useCreateStockLevelMutation>;
export type CreateStockLevelMutationResult = Apollo.MutationResult<CreateStockLevelMutation>;
export type CreateStockLevelMutationOptions = Apollo.BaseMutationOptions<CreateStockLevelMutation, CreateStockLevelMutationVariables>;