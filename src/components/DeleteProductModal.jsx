import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useSelector } from "react-redux";

function DeleteProductModal({ show, onClick, onClose, product }) {
  console.log("producto seleccionado:", product);

  const handleDelete = async (product) => {
    try {
      await axios({
        method: "DELETE",
        url: `http://localhost:3000/products/${product.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      onClose();
    }
  };
  const token = useSelector((state) => state.token.tokens);

  return (
    <>
      <Modal show={show} onHide={onClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro que deseas eliminar este producto?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => handleDelete(product)}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteProductModal;
