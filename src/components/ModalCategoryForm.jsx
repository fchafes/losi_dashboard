import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./ModalCategoryForm.css";


const ModalCategoryForm = ({ isOpen, onClose, operation, category }) => {
  const [name, setName] = useState("");
  const token = useSelector((state) => state.token.tokens);
  

  useEffect(() => {
    if (isOpen && category) {
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
      if (operation === 2 && category && category.id) {
        formData.id = category.id;
      }

      let response;
      if (operation === 1) {
        response = await axios({
          method: "POST",
          url: `http://localhost:3000/category`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data: formData,
        });
      } else {
        response = await axios({
          method: "PATCH",
          url: `http://localhost:3000/category/${category.id}`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data: formData,
        });
      }
    } finally {
      onClose();
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
