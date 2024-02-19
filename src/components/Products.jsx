// 'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Badge,
} from "@tremor/react";
import axios from "axios";
import "./Products.css";
import React, { useState, useEffect } from "react";
import ModalProductForm from "./ModalProductForm";
import ModalStock from "./ModalStock";
import DeleteProductModal from "./DeleteProductModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [stock, setStock] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la apertura del modal
  const [operation, setOperation] = useState(1); // Estado para indicar la operación (1: agregar, 2: editar)
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para almacenar el producto seleccionado para edición
  const [showDeleteModal, setShowDeleteModal] = useState(false); // Estado para controlar la apertura del modal de eliminación
  const [showStockModal, setShowStockModal] = useState(false); // Estado para controlar la apertura del modal de stock

  const fetchStock = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/stock",
      });
      setStock(response.data);
    } catch (error) {
      console.error("Error fetching stock:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/products",
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchSizes = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/size",
      });
      setSizes(response.data);
    } catch (error) {
      console.error("Error fetching sizes:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchSizes();
    fetchStock();
  }, []);

  console.log("fetch de stock", stock);

  const handleAddProduct = () => {
    setOperation(1); // Establece la operación como agregar
    setIsModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setOperation(2); // Establece la operación como editar
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleEditStock = (product) => {
    setSelectedProduct(product);
    setShowStockModal(true);
  };

  const handleCloseModal = async () => {
    await fetchProducts();
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCloseDeleteModal = async () => {
    await fetchProducts();
    setShowDeleteModal(false);
    setSelectedProduct(null);
  };

  const handleOpenDeleteModal = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const handleUpdateStock = async (stockValue, selectedSize) => {
    try {
      const updateData = { stockValue: stockValue };
      await axios.patch(`http://localhost:3000/stock/${selectedProduct.id}/${selectedSize}`, updateData);
      await fetchSizes(); // Volver a cargar los productos después de la actualización
      setShowStockModal(false); // Cerrar el modal de stock
    } catch (error) {
      console.error("Error updating stock:", error);
    }
  };

  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10 header">
        <div>
          <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Products <Badge>{products.length}</Badge>
          </h3>
          <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
            Overview of all registered products within your organization.
          </p>
        </div>
        <button
          onClick={handleAddProduct}
          type="button"
          className="button mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit"
        >
          Add product
        </button>
      </div>

      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Id
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Name
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Image
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Description
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Price
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Actions
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {product.id}
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell className="product-image">
                <img
                  src={
                    product.photo.startsWith("https")
                      ? product.photo
                      : `http://localhost:3000/${product.photo}`
                  }
                />
              </TableCell>
              <TableCell className="description-cell">
                {product.description}
              </TableCell>
              <TableCell>{product.price}</TableCell>

              <TableCell>
                <button
                  onClick={() => handleEditStock(product)}
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleEditProduct(product)}
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
                <DeleteProductModal
                  onClick={handleOpenDeleteModal}
                  onClose={handleCloseDeleteModal}
                  product={product}
                  show={showDeleteModal}
                />

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isModalOpen && (
        <ModalProductForm
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          operation={operation}
          product={selectedProduct}
        />
      )}
      {showStockModal && (
        <ModalStock
          show={showStockModal}
          onClose={() => setShowStockModal(false)}
          onConfirm={handleUpdateStock}
          sizes={sizes}
          product={selectedProduct}
        />
      )}
    </>
  );
};
export default Products;
