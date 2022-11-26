import { render } from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Busca from "./pages/Busca";
import Producto from "./pages/Producto";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Busca" element={<Busca />} />
      <Route path="Producto" element={<Producto />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);