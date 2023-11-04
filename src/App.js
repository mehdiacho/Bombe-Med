import React from 'react';
import {Route, Routes } from "react-router-dom";
import { AuthContextProvider} from "./config/auth-context";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage"
import Signup from './pages/Signup';
import Prescription from './pages/Prescription';


function App() {
    return (
        <div className={"d-flex"}>
            <AuthContextProvider>
                <Routes>
                    <Route path={'/'} element={<Login />} />
                    <Route path={'signup'} element={<Signup/>}/>
                    <Route path={'/homepage'} element={<HomePage />} />
                    <Route path={'/prescription'} element={<Prescription/>}/>
                </Routes>
            </AuthContextProvider>

        </div>
    );
}

export default App;
