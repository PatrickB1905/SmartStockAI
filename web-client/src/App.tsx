import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

import Products from './pages/Products';
import Warehouses from './pages/Warehouses';
import StockLevels from './pages/StockLevels';

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-gray-800 p-4 text-white flex gap-4">
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/warehouses" className="hover:underline">Warehouses</Link>
        <Link to="/stock-levels" className="hover:underline">Stock Levels</Link>
      </nav>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/warehouses" element={<Warehouses />} />
          <Route path="/stock-levels" element={<StockLevels />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
