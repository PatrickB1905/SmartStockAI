import React, { useState, useEffect } from 'react';
import {
  useProductsQuery,
  useWarehousesQuery,
  useStockLevelsQuery,
  useCreateStockLevelMutation,
} from '../generated/graphql';

export default function StockLevels() {
  // Load products & warehouses for selects
  const { data: prodData, loading: prodLoading } = useProductsQuery();
  const { data: whData, loading: whLoading } = useWarehousesQuery();
  const { data, loading, error, refetch } = useStockLevelsQuery();
  const [createStockLevel, { loading: creating }] = useCreateStockLevelMutation();

  // Local state for form
  const [productId, setProductId] = useState<number>();
  const [warehouseId, setWarehouseId] = useState<number>();
  const [quantity, setQuantity] = useState<number>(0);

  // Initialize selects when data arrives
  useEffect(() => {
    if (!prodLoading && prodData?.products.length) {
      setProductId(prodData.products[0].id);
    }
    if (!whLoading && whData?.warehouses.length) {
      setWarehouseId(whData.warehouses[0].id);
    }
  }, [prodLoading, whLoading, prodData, whData]);

  const handleCreate = async () => {
    if (!productId || !warehouseId) return;
    await createStockLevel({
      variables: {
        input: { productId, warehouseId, quantity },
      },
    });
    setQuantity(0);
    refetch();
  };

  if (prodLoading || whLoading) return <p>Loading form data…</p>;
  if (error) return <p className="text-red-500">{error.message}</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Stock Levels</h1>

      <div className="mb-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
        <select
          className="border p-2 rounded"
          value={productId}
          onChange={e => setProductId(+e.target.value)}
        >
          {prodData!.products.map(p => (
            <option key={p.id} value={p.id}>
              {p.sku} – {p.name}
            </option>
          ))}
        </select>

        <select
          className="border p-2 rounded"
          value={warehouseId}
          onChange={e => setWarehouseId(+e.target.value)}
        >
          {whData!.warehouses.map(w => (
            <option key={w.id} value={w.id}>
              {w.location} (Cap: {w.capacity})
            </option>
          ))}
        </select>

        <input
          type="number"
          className="border p-2 rounded"
          placeholder="Quantity"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
        />

        <button
          className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
          onClick={handleCreate}
          disabled={creating}
        >
          {creating ? 'Creating…' : 'Create StockLevel'}
        </button>
      </div>

      {loading ? (
        <p>Loading stock levels…</p>
      ) : (
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Product</th>
              <th className="border px-4 py-2">Warehouse</th>
              <th className="border px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {data!.stockLevels.map(s => (
              <tr key={s.id}>
                <td className="border px-4 py-2">{s.id}</td>
                <td className="border px-4 py-2">{s.product.sku}</td>
                <td className="border px-4 py-2">{s.warehouse.location}</td>
                <td className="border px-4 py-2">{s.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
