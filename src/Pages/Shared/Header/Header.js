import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import logo from "../../../images/logo-black.png";
import auth from "../../../firebase.init";

const Header = () => {

  const [user] = useAuthState(auth);
  const navigate = useNavigate();


  const handleSignOut = () => {
    signOut(auth);
    navigate('/home');
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="success" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img src={logo} height='30px' alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home#services">Services</Nav.Link>
              <Nav.Link href="/home#experts">Experts</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              {
                user ?
                <button onClick={handleSignOut} className="btn btn-link text-decoration-none text-white">Sign Out</button>
                :
                <Nav.Link as={Link} to="/login">
                LogIn
              </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
