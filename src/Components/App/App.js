import useToken from "./useToken";
import Nav from "../Nav/Nav";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Issues from "../../pages/Issues/Issues";
import Login from "../Login/Login";
import "./app.scss"

function App()
{

  const {token, setToken} = useToken();
  const [username, setUsername] = useState("");
  if (!token) return <Login setToken={setToken} username={username} setUsername={setUsername} />

  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Nav username={username} />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/issues" element={<Issues />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
