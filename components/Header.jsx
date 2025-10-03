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
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Drain Cleaning", path: "/drain-cleaning-nairobi" },
        { name: "Emergency Plumbing", path: "/emergency-plumbing-nairobi" },
        { name: "Sewer Repair", path: "/sewer-repair-nairobi" },
        { name: "Water Tank Installation", path: "/water-tank-installation-kenya" },
      ]
    },
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
            {navItems.map((item) => (
              item.dropdown ? (
                <Nav.Item key={item.name} className="mx-2">
                  <Nav.Link className="fw-semibold desktop-link dropdown-toggle" role="button">
                    {item.name}
                  </Nav.Link>
                  <div className="dropdown-menu">
                    {item.dropdown.map((dropdownItem) => (
                      <Link key={dropdownItem.path} href={dropdownItem.path}>
                        <a className="dropdown-item">{dropdownItem.name}</a>
                      </Link>
                    ))}
                  </div>
                </Nav.Item>
              ) : (
                <Nav.Link
                  as={Link}
                  href={item.path}
                  key={item.name}
                  className={`fw-semibold mx-2 desktop-link ${
                    router.pathname === item.path ? "active" : ""
                  }`}
                >
                  {item.name}
                </Nav.Link>
              )
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
              {navItems.map((item) => (
                item.dropdown ? (
                  <div key={item.name}>
                    <div className="simple-link py-2 px-3 rounded fw-bold">
                      {item.name}
                    </div>
                    {item.dropdown.map((dropdownItem) => (
                      <Nav.Link
                        as={Link}
                        href={dropdownItem.path}
                        key={dropdownItem.path}
                        onClick={handleClose}
                        className={`simple-link py-1 px-5 rounded ${
                          router.pathname === dropdownItem.path ? "active" : ""
                        }`}
                      >
                        • {dropdownItem.name}
                      </Nav.Link>
                    ))}
                  </div>
                ) : (
                  <Nav.Link
                    as={Link}
                    href={item.path}
                    key={item.name}
                    onClick={handleClose}
                    className={`simple-link py-2 px-3 rounded ${
                      router.pathname === item.path ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </Nav.Link>
                )
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

        .dropdown-menu {
          display: none;
          position: absolute;
          background-color: white;
          min-width: 200px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1000;
          border-radius: 8px;
          padding: 8px 0;
          margin-top: 5px;
        }

        .dropdown-toggle:hover + .dropdown-menu,
        .dropdown-menu:hover {
          display: block;
        }

        .dropdown-item {
          color: #004080;
          padding: 8px 16px;
          text-decoration: none;
          display: block;
          transition: background-color 0.2s ease;
        }

        .dropdown-item:hover {
          background-color: #f8f9fa;
          color: #007bff;
        }
      `}</style>
    </Navbar>
  );
}
