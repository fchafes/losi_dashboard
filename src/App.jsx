// App.jsx
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ShowProducts from "./components/ShowProducts";
import ShowOrders from "./components/ShowOrders";
import Login from "./pages/Login";
import SummaryPage from "./pages/SummaryPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SummaryPage />} />
        <Route path="/admin/products" element={<ShowProducts />} />
        <Route path="/orders" element={<ShowOrders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
