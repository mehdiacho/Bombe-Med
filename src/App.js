import React from 'react';
import {Route, Routes } from "react-router-dom";
import { AuthContextProvider} from "./config/auth-context";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage"
import Signup from './pages/Signup';


function App() {
    return (
        <div className={"d-flex"}>
            <AuthContextProvider>
                <Routes>
                    <Route path={'/'} element={<Login />} />
                    <Route path={'signup'} element={<Signup/>}/>
                    <Route path={'/homepage'} element={<HomePage />} />
                </Routes>
            </AuthContextProvider>

        </div>
    );
}

export default App;
