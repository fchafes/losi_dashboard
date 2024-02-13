// App.jsx
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import ShowOrders from "./components/ShowOrders";
import Login from "./pages/Login";
import SummaryPage from "./pages/SummaryPage";
import Customers from "./components/Customers";
import Products from "./components/Products";
import Categories from "./components/Categories";
import ProtectedRoute from "./pages/ProtectedRoute"
import NotFound404 from "./pages/NotFound404";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<SummaryPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<ShowOrders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/category" element={<Categories />} />
        </Route>
        <Route path="/*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound404 />} />
      </Routes>        
    </>
  );
}

export default App;
