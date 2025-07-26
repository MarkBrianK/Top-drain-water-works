import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const router = useRouter();

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
        <Navbar.Brand as={Link} href="/" className="d-flex align-items-center">
          <Image
            src="/Assets/Images/logo.png"
            alt="TopDrain Logo"
            width={70}
            height={70}
            className="me-3"
            style={{ objectFit: "contain" }}
          />
          <div>
            <h5 className="mb-0 fw-bold brand-title">
              TopDrain Waterworks LTD
            </h5>
            <div className="text-muted fst-italic small-tagline">
              Flowing Solutions, Lasting Excellence!
            </div>
          </div>
        </Navbar.Brand>

        {/* Toggle (Mobile) */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={handleShow}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop Nav */}
        <div className="d-none d-md-flex ms-auto">
          <Nav>
            {navItems.map(({ name, path }) => (
              <Nav.Link
                as={Link}
                href={path}
                key={name}
                className={`fw-semibold mx-2 desktop-link ${
                  router.pathname === path ? "active" : ""
                }`}
              >
                {name}
              </Nav.Link>
            ))}
          </Nav>
        </div>

        {/* Offcanvas Menu */}
        <Offcanvas
          show={showOffcanvas}
          onHide={handleClose}
          placement="end"
          className="simple-offcanvas"
          style={{
            backgroundColor: "transparent",
            backdropFilter: "blur(8px)",
          }}
        >
          <Offcanvas.Body className="pt-2">
            <Nav className="flex-column">
              {navItems.map(({ name, path }) => (
                <Nav.Link
                  as={Link}
                  href={path}
                  key={name}
                  onClick={handleClose}
                  className={`simple-link py-2 px-3 rounded ${
                    router.pathname === path ? "active" : ""
                  }`}
                >
                  {name}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>

      <style>{`
        .simple-offcanvas {
          width: 250px;
        }

        .brand-title {
          font-size: 20px;
          color: #000;
        }

        .small-tagline {
          font-size: 13px;
          color: #004b9a !important;
          font-weight: 600;
          margin-left: 20px;
        }

        .desktop-link {
          font-size: 16px;
          color: #004080;
          transition: color 0.2s ease;
        }

        .desktop-link:hover {
          color: #007bff !important;
        }

        .desktop-link.active {
          color: #007bff !important;
        }

        .simple-link {
          font-size: 16px;
          font-weight: 500;
          color:rgb(216, 229, 241);
          margin-bottom: 4px;
          transition: all 0.2s ease;
        }

        .simple-link:hover {
          background-color: rgba(0, 123, 255, 0.1);
          color: #007bff !important;
        }

        .simple-link.active {
          background-color: #007bff;
          color: #fff !important;
        }

        .offcanvas-title {
          font-size: 1.2rem;
          color:rgb(224, 233, 243);
        }

        .navbar-toggler-icon {
          filter: brightness(0.3);
        }
      `}</style>
    </Navbar>
  );
}
