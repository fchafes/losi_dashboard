// ModalProductForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { show_alerta } from "../functions";

const ModalProductForm = ({ isOpen, onClose, operation, product }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (operation === 2) {
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
      } else {
        setName("");
        setDescription("");
        setPrice("");
      }
    }
  }, [isOpen, operation, product]);

  const handleSubmit = async () => {
    try {
      const formData = { name, description, price };

      if (operation === 2) {
        formData.id = product.id;
      }

      let response;
      if (operation === 1) {
        response = await axios.post("http://localhost:3000/products", formData);
      } else {
        response = await axios.put(
          `http://localhost:3000/products/${product.id}`,
          formData
        );
      }

      const { tipo, msj } = response.data;
      show_alerta(msj, tipo);

      if (tipo === "success") {
        onClose();
      }
    } catch (error) {
      show_alerta("Error en la solicitud", "error");
      console.error("Error:", error);
    }
  };

  return (
    <div
      className={`modal ${isOpen ? "show" : ""}`}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <label className="h5">
              {operation === 1 ? "Registrar Producto" : "Editar Producto"}
            </label>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fa-solid fa-gift"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fa-solid fa-comment"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fa-solid fa-dollar-sign"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            <div className="d-grid col-6 mx-auto">
              <button onClick={handleSubmit} className="btn btn-success">
                <i className="fa-solid fa-floppy-disk"></i> Guardar
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProductForm;
