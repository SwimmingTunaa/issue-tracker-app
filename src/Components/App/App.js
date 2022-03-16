import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Preferences from "../Preferences/Preferences";
import Bugs from "../Bugs/Bugs";
import Login from "../Login/Login";
import "./app.scss"

function App()
{
  const [token, setToken] = useState("");

  if (!token) return <Login setToken={setToken} />

  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bugs" element={<Bugs />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
