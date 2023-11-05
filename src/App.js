import React from 'react';
import {Route, Routes } from "react-router-dom";
import { AuthContextProvider} from "./config/auth-context";
import Login from "./pages/Login";
import Home from "./pages/Home"
<<<<<<< HEAD
import '../src/components/Sidebar';
import InventoryTable from './pages/inventory.js';
import SuppliersTable from './pages/suppliers.js';
import CategoryTable from './pages/category';

=======
import Sandbox from "./pages/sandbox";
import TrueSidebar from "./pages/components/TrueSidebar";
>>>>>>> 9ff3a83257bc926654ea440a28748995b2c35dd6

function App() {
    return (
        <div className={"d-flex"}>
            <TrueSidebar/>
            <AuthContextProvider>
                <Routes>
                    <Route path={'/'} element={<Login />} />
                    <Route path={'/home'} element={<Home />} />
<<<<<<< HEAD
                    <Route path={'/src/components/inventory.js'} element={<InventoryTable />} />
                    <Route path={'/src/components/category.js'} element={<CategoryTable/>} />
                    <Route path={'/src/components/suppliers.js'} element={<SuppliersTable />} />
=======
                    <Route path={'/sand'} element={<Sandbox />} />
>>>>>>> 9ff3a83257bc926654ea440a28748995b2c35dd6
                </Routes>
            </AuthContextProvider>

        </div>
    );
}

export default App;
