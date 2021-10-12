import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styles from "./styles.module.css";


const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Smart-Note</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#explore">Explore</Nav.Link>
              <Nav.Link href="#aboutus">About Us</Nav.Link>
              <NavDropdown title="Resources" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#community">Community</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#helpcenter">
                  Help Center
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#login">
                <Button className={styles.btn} >Login</Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#signup">
                <Button className={styles.btn}>SignUp</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
