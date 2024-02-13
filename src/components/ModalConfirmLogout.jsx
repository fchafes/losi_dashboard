import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";

const ModalConfirmLogout = ({ show, onClose, onConfirm, navigate }) => {

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmación de Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ¿Estás seguro de que deseas hacer logout?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancelar</Button>
        <Button variant="primary" onClick={onConfirm}>Logout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalConfirmLogout;
