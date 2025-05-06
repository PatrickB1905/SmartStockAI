import React, { useState } from 'react';
import {
  useWarehousesQuery,
  useCreateWarehouseMutation,
} from '../generated/graphql';

export default function Warehouses() {
  const { data, loading, error, refetch } = useWarehousesQuery();
  const [createWarehouse, { loading: creating }] = useCreateWarehouseMutation();

  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState<number>(0);

  const handleCreate = async () => {
    if (!location || capacity <= 0) return;
    await createWarehouse({
      variables: {
        input: { location, capacity },
      },
    });
    setLocation(''); setCapacity(0);
    refetch();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Warehouses</h1>

      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          className="border p-2 rounded"
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <input
          type="number"
          className="border p-2 rounded"
          placeholder="Capacity"
          value={capacity}
          onChange={e => setCapacity(Number(e.target.value))}
        />
        <button
          className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
          onClick={handleCreate}
          disabled={creating}
        >
          {creating ? 'Creating…' : 'Create Warehouse'}
        </button>
      </div>

      {loading ? (
        <p>Loading warehouses…</p>
      ) : error ? (
        <p className="text-red-500">{error.message}</p>
      ) : (
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Capacity</th>
            </tr>
          </thead>
          <tbody>
            {data?.warehouses.map(w => (
              <tr key={w.id}>
                <td className="border px-4 py-2">{w.id}</td>
                <td className="border px-4 py-2">{w.location}</td>
                <td className="border px-4 py-2">{w.capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
