import React from 'react';
import {Route, Routes } from "react-router-dom";
import { AuthContextProvider} from "./config/auth-context";
import Login from "./pages/Login";
import Home from "./pages/Home"
import Sandbox from "./pages/sandbox";
import TrueSidebar from "./pages/components/TrueSidebar";

function App() {
    return (
        <div className={"d-flex"}>
            <TrueSidebar/>
            <AuthContextProvider>
                <Routes>
                    <Route path={'/'} element={<Login />} />
                    <Route path={'/home'} element={<Home />} />
                    <Route path={'/sand'} element={<Sandbox />} />
                </Routes>
            </AuthContextProvider>

        </div>
    );
}

export default App;
