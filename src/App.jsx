// App.jsx
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ShowOrders from "./components/ShowOrders";
import Login from "./pages/Login";
import SummaryPage from "./pages/SummaryPage";
import Customers from "./components/Customers";
import Products from "./components/Products";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SummaryPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<ShowOrders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/category" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
