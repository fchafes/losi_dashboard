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
import ModalCategoryForm from "./ModalCategoryForm";
import DeleteModal from "./DeleteModal";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la apertura del modal
  const [operation, setOperation] = useState(1); // Estado para indicar la operación (1: agregar, 2: editar)
  const [selectedCategory, setSelectedCategory] = useState(null); // Estado para almacenar la categoría seleccionado para edición
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Estado para controlar la apertura del modal de eliminación

  const fecthCategories = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/category",
      });
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categorys:", error);
    }
  };

  useEffect(() => {
    fecthCategories();
  }, []);

  const handleAddCategory = () => {
    setOperation(1); // Establece la operación como agregar
    setIsModalOpen(true);
  };

  const handleEditProduct = (category) => {
    setOperation(2); // Establece la operación como editar
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  const handleOpenDeleteModal = (category) => {
    setSelectedCategory(category);
    console.log(category);
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10 header">
        <div>
          <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Categories <Badge>{categories.length}</Badge>
          </h3>
          <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
            Overview of all registered categories within your organization.
          </p>
        </div>
        <button
          onClick={handleAddCategory}
          type="button"
          className="button mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit"
        >
          Add Category
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
              Actions
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category, index) => (
            <TableRow key={category.id}>
              <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {category.id}
              </TableCell>
              <TableCell>{category.name}</TableCell>

              <TableCell>
                <button
                  onClick={() => handleEditProduct(category)}
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
                <DeleteModal
                  onClick={handleOpenDeleteModal}
                  category={category}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isModalOpen && (
        <ModalCategoryForm
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          operation={operation}
          category={selectedCategory}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)} // Cierra el modal de confirmación de eliminación
          category={selectedCategory}
        />
      )}
    </>
  );
};
export default Categories;
