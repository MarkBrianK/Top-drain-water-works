import React from "react";
import { Helmet } from "react-helmet";

export default function Careers() {
  return (
    <div className="container py-5">
      <Helmet>
        <title>Careers | TopDrain WaterWorks LTD</title>
        <meta
          name="description"
          content="Join TopDrain WaterWorks LTD — we're hiring plumbers, diggers, and materials runners for short-term water and drainage projects across Kenya."
        />
        <meta name="keywords" content="TopDrain careers, plumbing jobs Kenya, water projects, casual labor, civil works" />
        <meta name="author" content="TopDrain WaterWorks LTD" />
        <meta property="og:title" content="Careers | TopDrain WaterWorks LTD" />
        <meta
          property="og:description"
          content="Looking for short-term plumbing or drainage work in Kenya? Join TopDrain WaterWorks and be part of impactful infrastructure projects."
        />
        <meta property="og:url" content="https://topdrainwaterworks.com/careers" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at TopDrain WaterWorks" />
        <meta name="twitter:description" content="We're hiring across Kenya for civil and plumbing works." />
        <link rel="canonical" href="https://topdrainwaterworks.com/careers" />
      </Helmet>
      <h1 className="fw-bold text-center mb-4">Work With Us</h1>
      <p className="text-center mb-4">
        TopDrain WaterWorks LTD regularly engages skilled and semi-skilled casual workers for short-term plumbing and civil works projects across Kenya.
      </p>

      <div className="bg-light p-4 rounded mb-4">
        <h5 className="fw-bold">Current Needs (Updated Weekly):</h5>
        <ul className="mb-0">
          <li>🔧 Plumbing Technicians</li>
          <li>🧱 Trench diggers & general laborers</li>
          <li>🚛 Delivery & materials runners</li>
        </ul>
      </div>

      <p className="text-center mb-3">
        If you’re available for casual work, send a short application via WhatsApp or email. Please include your name, location, skills, and availability.
      </p>

      <p className="text-center">
        📩 <a href="mailto:casuals@topdrainlimited.com">careers@topdrainlimited.com</a><br />
        📱 WhatsApp: <a href="https://wa.me/254702263360" target="_blank" rel="noopener noreferrer">+254 702 263 360</a>
      </p>
    </div>
  );
}
