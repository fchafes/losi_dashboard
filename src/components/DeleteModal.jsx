import React from "react";

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <div className={`modal ${isOpen ? "is-active" : ""}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="box">
          <p>¿Estás seguro que deseas eliminar este producto?</p>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onClose}
      ></button>
      <footer className="modal-card-foot">
        <button className="button is-danger" onClick={onDelete}>
          Sí
        </button>
        <button className="button" onClick={onClose}>
          Cancelar
        </button>
      </footer>
    </div>
  );
};

export default DeleteModal;
