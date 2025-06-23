import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Get in Touch</h2>

      <div className="row g-4">
        {/* Contact Info */}
        <div className="col-md-6">
          <h5>Contact Information</h5>
          <p><FaMapMarkerAlt className="me-2" /> Nairobi, Kenya</p>
          <p><FaPhoneAlt className="me-2" /> +254 702 263 360</p>
          <p><FaPhoneAlt className="me-2" /> +254 758 519 850</p>
          <p><FaEnvelope className="me-2" /> info@topdrainlimited.com</p>
          <div className="mt-4">
            <iframe
              title="TopDrain WaterWoks Location"
              src="https://www.google.com/maps?q=-1.2991070901121253,36.799981844423876&hl=en&z=16&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>




        </div>

        <div className="col-md-6">
          <h5>Send Us a Message</h5>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
