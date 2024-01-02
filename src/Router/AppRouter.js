import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMPONENTS
import Header from "../Components/Header";
import Home from "../Pages/Home";
import Agents from "../Pages/Agents";
import Weapons from "../Pages/Weapons";
import Maps from "../Pages/Maps";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
