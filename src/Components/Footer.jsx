import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="text-white position-relative"
      style={{
        background: "linear-gradient(135deg, #4e91f9, #0049b7)",
        clipPath: "ellipse(100% 100% at 50% 100%)",
        paddingTop: "60px",
        paddingBottom: "100px",
        marginTop: "60px"
      }}
    >
      <div className="container text-center text-md-start">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold">Top Drain Water Works LTD</h5>
            <p>
              <FaMapMarkerAlt className="me-2" />
              Nairobi, Kenya
            </p>
            <p>
              <FaPhoneAlt className="me-2" />
              +254 719 435 030
            </p>
            <p>
              <FaEnvelope className="me-2" />
              info@topdrain.co.ke
            </p>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#services" className="text-white text-decoration-none">Our Services</a></li>
              <li><a href="#projects" className="text-white text-decoration-none">Projects</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
              <li><a href="#about" className="text-white text-decoration-none">About Us</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold">Connect with Us</h6>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="https://facebook.com" className="text-white fs-5"><FaFacebookF /></a>
              <a href="https://twitter.com/_topdrain" className="text-white fs-5"><FaTwitter /></a>
              <a href="https://instagram.com" className="text-white fs-5"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-light" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} TopDrain Water Works LTD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
