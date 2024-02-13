import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Navbar.css";
import * as IoIcons from "react-icons/io";
import ModalConfirmLogout from './ModalConfirmLogout';
import { deleteData } from '../redux/tokenReducer';

const Navbar = () => {
  const isLoginPage = location.pathname === "/login";
  const is404Page = location.pathname === "/404"; 
  if (isLoginPage || is404Page) {
    return null;
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  }
  const [showModal, setShowModal] = useState(false);
  const handleLogout = () => {
    dispatch(deleteData());
    navigate("/login");
    setShowModal(false);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <div className="navbar-logo-box">
            <h2>LOSI DASHBOARD</h2>
          </div>
          <div className="navbar-account-box">
            <p>Signed In as: Admin Flor</p>
          </div>
          <div className="navbar-actions-box">
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </div>
        </div>
        <nav className="nav-menu">
          <ul className="nav-menu-items">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <div className='nav-text-link' onClick={() => handleClick(item.path)}>
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                </li>
              );
            })}
            <li className="nav-text" onClick={() => setShowModal(true)}>
              <div className='nav-text-link'>
                <IoIcons.IoMdPeople />
                <span>Logout</span>
              </div>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
      <ModalConfirmLogout 
        show={showModal} 
        onClose={() => setShowModal(false)} 
        onConfirm={handleLogout}
      />
    </>
  );
};

export default Navbar;
