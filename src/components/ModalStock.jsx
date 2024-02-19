import { useState, useEffect } from 'react';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./ModalStock.css"

const ModalStock = ({ show, onClose, onConfirm, sizes, product }) => {
  const [stockValue, setStockValue] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [productStock, setProductStock] = useState([]);

  const fetchProductStock = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/stock/${product.id}`,
      });
      setProductStock(response.data);
    } catch (error) {
      console.error("Error fetching product stock:", error);
    }
  };

  useEffect(() => {
    fetchProductStock();
  }, []);

  console.log("fetch de product stock", productStock);

  const handleStockChange = (event) => {
    setStockValue(event.target.value);
  };
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  console.log("sizes", sizes);
  
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Product stock -<span className='product-name'>{product.name}</span></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='stock-container'>
        {productStock.map((stock) => (
          <div className='stock-box'>
          <p>Size: {sizes.find(size => size.id === stock.sizeId).sizes}</p>
          <p>Stock: {stock.stock}</p>
        </div>  
        ))}
        </div>
      </Modal.Body>
      <Modal.Header>
        <Modal.Title>Edit product stock</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group controlId="stockInput">
      <Form.Label>Select size:</Form.Label>
      <Form.Control as="select" value={selectedSize} onChange={handleSizeChange} required>
            <option value="">Select size</option>
            {sizes.map(size => (
              <option key={size.id} value={size.id}>{size.sizes}</option>
            ))}
          </Form.Control>
          <Form.Label>Add or subtract:</Form.Label>
          <Form.Control 
            type="number" 
            value={stockValue} 
            onChange={handleStockChange} 
            min="0" 
            step="1" 
            required 
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="primary" onClick={() => onConfirm(stockValue, selectedSize)}>Update stock</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalStock;
