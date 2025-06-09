import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../../styles/Navbar.css";
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        {/* Left: Brand */}
        <div className="brand-wrapper">
          <span className="status-dot"></span>
          <Navbar.Brand href="#home">Priyanshu.rc</Navbar.Brand>
        </div>

        {/* Right: Hamburger Icon */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Hidden Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <Nav className="nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">My Projects</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#contact" className="contact-button">Contact Me</Nav.Link>
          </Nav>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Nav className="nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">My Projects</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
          </Nav>
          <div className="contact-wrapper">
            <Nav.Link href="#contact" className="contact-button">Contact Me</Nav.Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigation;
