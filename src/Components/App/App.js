import useToken from "./useToken";
import Nav from "../Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Issues from "../../pages/Issues/Issues";
import Login from "../Login/Login";
import "./app.scss"

function App()
{

  const {token, setToken} = useToken();

 // if (!token) return <Login setToken={setToken} />

  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bugs" element={<Issues />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
