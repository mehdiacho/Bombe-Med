import React from 'react';
import {Route, Routes } from "react-router-dom";
import { AuthContextProvider} from "./config/auth-context";
import Login from "./pages/Login";
import Home from "./pages/Home"
import '../src/components/Sidebar';
import InventoryTable from './pages/inventory.js';
import SuppliersTable from './pages/suppliers.js';
import CategoryTable from './pages/category';


function App() {
    return (
        <div className={"d-flex"}>
            <AuthContextProvider>
                <Routes>
                    <Route path={'/'} element={<Login />} />
                    <Route path={'/home'} element={<Home />} />
                    <Route path={'/src/components/inventory.js'} element={<InventoryTable />} />
                    <Route path={'/src/components/category.js'} element={<CategoryTable/>} />
                    <Route path={'/src/components/suppliers.js'} element={<SuppliersTable />} />
                </Routes>
            </AuthContextProvider>

        </div>
    );
}

export default App;
