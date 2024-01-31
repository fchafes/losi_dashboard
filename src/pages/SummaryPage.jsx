import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaShoppingCart, FaMoneyBillAlt, FaBox } from "react-icons/fa";

const SummaryPage = () => {
  const [productCount, setProductCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    // Fetch product count
    axios
      .get("http://localhost:3000/admin/products")
      .then((response) => {
        setProductCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching product count:", error);
      });

    // Fetch order count and total revenue
    axios
      .get("http://localhost:3000/orders")
      .then((response) => {
        const orders = response.data;
        setOrderCount(orders.length);
        const revenue = orders.reduce(
          (acc, order) => acc + order.total_price,
          0
        );
        setTotalRevenue(revenue);
      })
      .catch((error) => {
        console.error("Error fetching order count and total revenue:", error);
      });
  }, []);

  return (
    <main className="container-fluid" style={{ marginLeft: "200px" }}>
      <h1 className="text-center">Summary</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="summary-item">
            <FaBox size={32} />
            <h2>Products</h2>
            <p>Total Products: {productCount}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="summary-item">
            <FaShoppingCart size={32} />
            <h2>Orders</h2>
            <p>Total Orders: {orderCount}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="summary-item">
            <FaMoneyBillAlt size={32} />
            <h2>Revenue</h2>
            <p>Total Revenue: ${totalRevenue.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SummaryPage;
