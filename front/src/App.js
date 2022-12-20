import "./App.css";
import Login from "./page/Login";
import Exchange from "./page/Exchange";
import Main from "page/Main";
import Swap from "page/Swap";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import MenuBar from 'component/MenuBar'

function App() {
  const [isLogin,setIsLogin] = useState(false)
  return (
    <div className="App">
      <MenuBar isLogin={isLogin}/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/swap" element={<Swap />} />
      </Routes>
    </div>
  );
}

export default App;
