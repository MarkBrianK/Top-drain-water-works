import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

export default function ContactUs() {
  return (
    <div className="container py-5">
      <Helmet>
        <title>Contact Us | TopDrain WaterWorks LTD</title>
        <meta
          name="description"
          content="Need expert water or drainage solutions in Kenya? Contact TopDrain WaterWorks LTD today via phone, email, or visit us in Nairobi."
        />
        <meta
          name="keywords"
          content="contact TopDrain, water engineering Kenya, drainage company, plumbing, Nairobi, TopDrain WaterWorks contact"
        />
        <meta name="author" content="TopDrain WaterWorks LTD" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | TopDrain WaterWorks LTD" />
        <meta
          property="og:description"
          content="Reach out to TopDrain WaterWorks for expert plumbing, drainage, and water infrastructure services across Kenya."
        />
        <meta property="og:url" content="https://topdrainwaterworks.com/contact" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact TopDrain WaterWorks" />
        <meta
          name="twitter:description"
          content="Call, email, or visit our Nairobi office to get started with expert water solutions."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://topdrainwaterworks.com/contact" />
      </Helmet>
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
