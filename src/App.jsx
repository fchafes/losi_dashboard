import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./App.css";
import ShowProducts from "./components/ShowProducts";
import ShowOrders from "./components/ShowOrders";
function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/products" element={<ShowProducts />} />
        <Route path="/orders" element={<ShowOrders />} />
      </Routes>
    </>
  );
}

export default App;
