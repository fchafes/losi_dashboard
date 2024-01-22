import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./App.css";
import ShowProducts from "./components/ShowProducts";
function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/products" element={<ShowProducts />} />
      </Routes>
    </>
  );
}

export default App;
