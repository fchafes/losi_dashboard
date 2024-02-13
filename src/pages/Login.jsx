import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "/losiFlor.png";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { createData } from "../redux/tokenReducer.js";

function Login({ navigate }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/tokens",
        data: formData,
      });

      if (response.status === 200) {
        const data = response.data;
        dispatch(createData(data));
        navigate("/home");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <div className="row">
            <div className="col-7">
              <img src={logo} className="logo" alt="X" />
            </div>
            <div className="col-5">
              <h3>Login</h3>
              <p>Ready to start using Dashboard?</p>
              <Form className="mb-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E mail"
                    className="input"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="input"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="login-button"
                >
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
