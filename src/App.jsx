// App.jsx
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ShowProducts from "./components/ShowProducts";
import ShowOrders from "./components/ShowOrders";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/admin/products" element={<ShowProducts />} />
        <Route path="/orders" element={<ShowOrders />} />
      </Routes>
    </>
  );
}

export default App;
