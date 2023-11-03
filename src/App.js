import React from 'react';
import {Route, Routes } from "react-router-dom";
import { AuthContextProvider} from "./config/auth-context";
import Login from "./pages/Login";
import Home from "./pages/Home"

function App() {
    return (
        <div className={"d-flex"}>
            <AuthContextProvider>
                <Routes>
                    <Route path={'/'} element={<Login />} />
                    <Route path={'/home'} element={<Home />} />
                </Routes>
            </AuthContextProvider>

        </div>
    );
}

export default App;
