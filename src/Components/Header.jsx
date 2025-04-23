import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../Assets/Images/logo.jpg";

export default function Header() {
    return (
        <Navbar expand="md" style={{ maxHeight: "120px" }} className="shadow-sm">
            <Container>
                <Navbar.Brand href="#" className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Topdrain Logo"
                        height="120"
                        className="d-inline-block align-top me-2"
                    />
                    <span className="fw-bold">TopDrain Water Works</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Nav Items */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {[
                            "Home",
                            "About Us",
                            "Our Projects",
                            "Information Centre",
                            "Tenders",
                            "Media",
                            "Careers",
                            "Feedback",
                            "Contact Us",
                        ].map((item) => (
                            <Nav.Link href="#" key={item} className="fw-semibold nav-link-custom">
                                {item}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
