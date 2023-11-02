import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {AuthContextProvider, AuthProvider} from "./config/auth-context";
import Sandbox from "./pages/sandbox";
import Login from "./pages/Login";


function App() {
  return (
      <div className={"d-flex"}>
          <AuthContextProvider>

              <Routes>
                  <Route path={'/'} element={<Login />} />
                  <Route path={'sand'} element={<Sandbox />} />
              </Routes>
          </AuthContextProvider>

      </div>
  );
}

export default App;
