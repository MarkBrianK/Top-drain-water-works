import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/logo.jpg";

export default function Header() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    // { name: "Our Projects", path: "/projects" },
    // { name: "Information Centre", path: "/info" },
    // { name: "Careers", path: "/careers" },
    // { name: "Feedback", path: "/feedback" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <Navbar expand="md" className="shadow-sm bg-white" style={{ maxHeight: "120px" }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="TopDrain Logo"
            height="100"
            className="d-inline-block align-top me-2"
          />
          <span className="fw-bold text-primary">TopDrain Waterworks LTD</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map(({ name, path }) => (
              <Nav.Link
                as={Link}
                to={path}
                key={name}
                className="fw-semibold text-dark nav-link-custom"
              >
                {name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
