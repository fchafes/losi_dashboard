import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ShowOrders.css";

const ShowOrders = () => {
  const url = "http://localhost:3000/orders";
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const response = await axios.get(url);
      setOrders(response.data);
    } catch (error) {
      console.error("Error al obtener órdenes:", error);
      // Maneja el error según tus necesidades
    }
  };

  return (
      <div className="orders-container">
        <div className="row">
          <div className="col-12 table-container">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>State</th>
                    <th>Payment Method</th>
                    <th>Customer ID</th>
                    {/* Agrega más encabezados según tus necesidades */}
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.createdAt}</td>
                      <td>{order.state}</td>
                      <td>{order.payment_method}</td>
                      <td>{order.customerId}</td>

                      {/* Agrega más celdas según tus necesidades */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ShowOrders;
