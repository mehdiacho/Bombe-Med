import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './config/auth-context';
import Login from './pages/Login';
import Home from './pages/Home';
import InventoryTable from './pages/components/inventoryTable';
import CategoryTable from './pages/components/categoryTable';
import Sidebar from './pages/components/Sidebar';
import Batch from './pages/components/batch';

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inventory.js" element={<InventoryTable />} />
          <Route path="/category.js" element={<CategoryTable />} />
          <Route path="/addBatch.js" element={<Batch />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
