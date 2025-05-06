import React, { useState } from 'react';
import {
  useProductsQuery,
  useCreateProductMutation,
} from '../generated/graphql';

export default function Products() {
  const { data, loading, error, refetch } = useProductsQuery();
  const [createProduct, { loading: creating }] = useCreateProductMutation();

  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = async () => {
    if (!sku || !name) return;
    await createProduct({
      variables: {
        input: { sku, name, description },
      },
    });
    setSku(''); setName(''); setDescription('');
    refetch();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Products</h1>

      <div className="mb-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
        <input
          className="border p-2 rounded"
          placeholder="SKU"
          value={sku}
          onChange={e => setSku(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          onClick={handleCreate}
          disabled={creating}
        >
          {creating ? 'Creating…' : 'Create Product'}
        </button>
      </div>

      {loading ? (
        <p>Loading products…</p>
      ) : error ? (
        <p className="text-red-500">{error.message}</p>
      ) : (
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">SKU</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {data?.products.map(p => (
              <tr key={p.id}>
                <td className="border px-4 py-2">{p.id}</td>
                <td className="border px-4 py-2">{p.sku}</td>
                <td className="border px-4 py-2">{p.name}</td>
                <td className="border px-4 py-2">{p.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
