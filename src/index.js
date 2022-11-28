import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Busca from "./pages/Busca";
import Producto from "./pages/Producto";
import "./geral.css"

const root = ReactDOM.createRoot(document.getElementById("root") );

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Busca" element={<Busca />} />
      <Route path="Producto" element={<Producto />} />
    </Routes>
  </BrowserRouter>
);