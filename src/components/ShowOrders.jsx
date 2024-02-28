import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
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
    <>
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
        <div>
          <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Orders
          </h3>
          <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
            Overview of all orders.
          </p>
        </div>
      </div>
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Id
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Date
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              State
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Payment Method
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Customer Id
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow
              key={order.id}
              className="even:bg-tremor-background-muted even:dark:bg-dark-tremor-background-muted"
            >
              <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {order.id}
              </TableCell>
              <TableCell>{order.createdAt}</TableCell>
              <TableCell>{order.state}</TableCell>
              <TableCell>{order.payment_method}</TableCell>
              <TableCell>{order.customerId}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ShowOrders;
