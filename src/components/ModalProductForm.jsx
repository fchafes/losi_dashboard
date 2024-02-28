// ModalProductForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ModalProductForm = ({ isOpen, onClose, operation, product }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const token = useSelector((state) => state.token.tokens);
  const [featured, setFeatured] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    // Fetch categories when the modal is opened
    async function fetchCategories() {
      try {
        const response = await axios.get("http://localhost:3000/category");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    if (isOpen) {
      if (operation === 2) {
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setFeatured(product.featured);
      } else {
        setName("");
        setDescription("");
        setPrice("");
        setFeatured(false);
      }
      fetchCategories();
    }
  }, [isOpen, operation, product]);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("photo", photo);
      formData.append("featured", featured);
      formData.append("categoryId", categoryId);

      if (operation === 2) {
        formData.id = product.id;
      }

      let response;
      if (operation === 1) {
        response = await axios({
          method: "POST",
          url: `http://localhost:3000/products`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });
      } else {
        response = await axios({
          method: "PATCH",
          url: `http://localhost:3000/products/${product.id}`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
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
            <div className="input-group mb-3">
              <label htmlFor="image" className="input-group-text">
                <i className="fa-solid fa-image"></i>
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </div>
            <div className="input-group mb-3">
              <div id="price" className="input-group-text">
                <input
                  type="checkbox"
                  id="featured"
                  checked={featured}
                  onChange={(e) => setFeatured(!!e.target.checked)}
                />
                <label htmlFor="featured" className="form-check-label">
                   Destacado
                </label>
              </div>
            </div>
            <div className="input-group mb-3">
              <label htmlFor="category" className="input-group-text">
                Categoría
              </label>
              <select
                className="form-select"
                id="category"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <option value="">Seleccione una categoría</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
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
