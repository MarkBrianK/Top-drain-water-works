import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/Images/logo.png";

export default function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const location = useLocation();

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Projects", path: "/projects" },
    { name: "Information Centre", path: "/info" },
    { name: "Careers", path: "/careers" },
    { name: "Feedback", path: "/feedback" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <Navbar expand="md" className="shadow-sm bg-light py-3" sticky="top">
      <Container fluid className="px-3">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="TopDrain Logo"
            height="70"
            className="me-3"
            style={{ objectFit: "contain" }}
          />
          <div>
            <h5 className="mb-0 fw-bold text-primary" style={{ fontSize: "20px" }}>
              TopDrain Waterworks LTD
            </h5>
            <div className="text-muted fst-italic" style={{ fontSize: "13px" }}>
              Flowing Solutions, Lasting Excellence!
            </div>
          </div>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={handleShow}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop Navigation */}
        <div className="d-none d-md-flex ms-auto">
          <Nav>
            {navItems.map(({ name, path }) => (
              <Nav.Link
                as={Link}
                to={path}
                key={name}
                className={`fw-semibold mx-2 ${
                  location.pathname === path ? "text-primary" : "text-dark"
                }`}
              >
                {name}
              </Nav.Link>
            ))}
          </Nav>
        </div>

        {/* Offcanvas Sidebar */}
        <Offcanvas
          show={showOffcanvas}
          onHide={handleClose}
          placement="end"
          className="simple-offcanvas"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fw-bold text-primary">Navigation</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="pt-2">
            <Nav className="flex-column">
              {navItems.map(({ name, path }) => (
                <Nav.Link
                  as={Link}
                  to={path}
                  key={name}
                  onClick={handleClose}
                  className={`simple-link py-2 px-3 rounded ${
                    location.pathname === path ? "active" : ""
                  }`}
                >
                  {name}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>

      {/* Clean styling */}
      <style>{`
        .simple-offcanvas {
          width: 250px;
          background-color: #ffffff;
        }

        .simple-link {
          font-size: 16px;
          font-weight: 500;
          color: #333;
          margin-bottom: 4px;
        }

        .simple-link:hover {
          background-color: #f1f1f1;
          color: #007bff !important;
        }

        .simple-link.active {
          background-color: #007bff;
          color: #fff !important;
        }

        .navbar-toggler-icon {
          filter: brightness(0.2);
        }
      `}</style>
    </Navbar>
  );
}
