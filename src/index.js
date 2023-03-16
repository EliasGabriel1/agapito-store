import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Busca from "./pages/Busca";
import Colecao from "./pages/Colecao";
import Checkout from "./pages/Checkout";
import ProductPage from "./pages/Producto/index";
import "./geral.css";
import AppProvider from "./Context/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="Producto"
          element={
            <ProductPage
              id= "0"
              name="Product Name"
              image="https://example.com/product.jpg"
              description="Product Description"
              price="$10.00"
            />} />
        <Route path="Busca" element={<Busca />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="Colecao" element={<Colecao />} />
        {/* <Route
          path="/Producto/:id"
          render={({ match }) => (
            <ProductPage
              id={match.params.id}
              name="Product Name"
              image="https://example.com/product.jpg"
              description="Product Description"
              price="$10.00"
            />
          )}
        /> */}
      </Routes>
    </AppProvider>
  </BrowserRouter>
);
