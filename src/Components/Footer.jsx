import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTools,
  FaProjectDiagram,
  FaEnvelopeOpenText,
  FaInfoCircle
} from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <h5 className="fw-bold">TopDrain Waterworks LTD</h5>
            <p><FaMapMarkerAlt className="me-2" /> Nairobi, Kenya</p>
            <p><FaPhoneAlt className="me-2" /> +254 702 263 360</p>
            <p><FaPhoneAlt className="me-2" /> +254 758 519 850</p>
            <p><FaEnvelope className="me-2" /> info@topdrainlimited.com</p>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled" style={{ color:"white", textDecoration:"none"}}>
              <li>
                <Link to ="/careers">
                  <FaTools className="me-2" /> Careers
                </Link>
              </li>
              <li>
                <Link to ="/projects">
                  <FaProjectDiagram className="me-2" /> Projects
                </Link>
              </li>
              <li>
                <Link to ="/contact">
                  <FaEnvelopeOpenText className="me-2" /> Contact
                </Link>
              </li>
              <li>
                <Link to ="/about">
                  <FaInfoCircle className="me-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to ="/info">
                  <FaInfoCircle className="me-2" /> Information Centre
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold">Connect with Us</h6>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="https://twitter.com/_topdrain" className="text-white fs-5" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/topdrain_waterworks_ltd" className="text-white fs-5" target="_blank" rel="noopener noreferrer" title="Instagram">
                <FaInstagram />
              </a>
              <a href="https://tiktok.com/@topdrain_waterwork" className="text-white fs-5" target="_blank" rel="noopener noreferrer" title="TikTok">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-light" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} TopDrain WaterWorks LTD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
