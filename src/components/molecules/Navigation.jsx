import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../styles/Navbar.css";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {isMenuOpen && <div className="menu-overlay open" onClick={closeMenu}></div>}

      <Navbar className="custom-navbar fixed-top">
        <Container className="navbar-container">
          {/* Brand (Left) */}
          <div className="brand-wrapper">
            <Navbar.Brand href="#home">Priyanshu.rc</Navbar.Brand>
          </div>

          {/* Center Nav */}
          <Nav className="center-nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">My Projects</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
          </Nav>

          {/* Contact (Right) */}
          <div className="contact-wrapper">
            <Nav.Link href="#contact" className="contact-button">
              Contact Me
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
