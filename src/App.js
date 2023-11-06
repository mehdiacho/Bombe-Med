import React from 'react';
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./config/auth-context";
import ULogin from "./pages/ULogin";
import HomePage from "./pages/HomePage"
import Signup from './pages/Signup';
import Prescription from './pages/Prescription';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Home from './pages/Home';
import InventoryTable from './pages/components/inventoryTable';
import SuppliersTable from './pages/components/suppliersTable';
import CategoryTable from './pages/components/categoryTable';


function App() {
    return (
        <div className={"d-flex"}>
            <AuthContextProvider>
                <Routes>
                    <Route path={'/'} element={<ULogin />} />
                    <Route path={'signup'} element={<Signup />} />
                    <Route path={'/homepage'} element={<HomePage />} />
                    <Route path={'/prescription'} element={<Prescription />} />
                    <Route path={'/cart'} element={<Cart />} />
                    <Route path={'/checkout'} element={<Checkout />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/inventory.js" element={<InventoryTable />} />
                    <Route path="/category.js" element={<CategoryTable />} />
                    <Route path="/suppliers.js" element={<SuppliersTable />} />
                </Routes>
            </AuthContextProvider>

        </div>
    );
}

export default App;
