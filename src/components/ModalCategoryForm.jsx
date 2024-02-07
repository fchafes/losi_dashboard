import React, { useState, useEffect } from "react";
import axios from "axios";
import { show_alerta } from "../functions";

const ModalCategoryForm = ({ isOpen, onClose, operation, category }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (operation === 2) {
        setName(category.name);
      } else {
        setName("");
      }
    }
  }, [isOpen, operation, category]);

  const handleSubmit = async () => {
    try {
      const formData = { name };

      if (operation === 2) {
        formData.id = category.id;
      }

      let response;
      if (operation === 1) {
        response = await axios.post("http://localhost:3000/category", formData);
      } else {
        response = await axios.put(
          `http://localhost:3000/categories/${category.id}`,
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
              {operation === 1 ? "Registrar Categoría" : "Editar Categoría"}
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

export default ModalCategoryForm;
