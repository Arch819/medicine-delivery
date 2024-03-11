import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import DrugStoresPage from "pages/DrugStoresPage";
import ShoppingCartPage from "pages/ShoppingCartPage";
import HistoryPage from "pages/HistoryPage";
import CouponsPage from "pages/CouponsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DrugStoresPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/coupons" element={<CouponsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
