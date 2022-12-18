import React from "react";
import ReactDOM from "react-dom/client";
import { render } from "react-dom";

import GetAllProduct from "./GetAllProduct.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout.js";
import ProductDetail from "./ProductDetail.js";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import Product from "./Product.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/krima" element={<Product />} />
          <Route path="/GetAllProduct" element={<GetAllProduct />} />
          <Route path="/GetAllProduct/:id" element={<ProductDetail />} />
          <Route path="/EditProduct/:id" element={<EditProduct />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/EditeProduct" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
