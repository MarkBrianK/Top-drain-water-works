import React from "react";
import { Helmet } from "react-helmet";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Plumbing Technicians, Trench Diggers, Materials Runners",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "TopDrain Water Works LTD",
    "logo": "/Assets/Images/logo.png"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nairobi, Kenya",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi",
      "addressCountry": "KE"
    }
  },
  "description": "Join TopDrain WaterWorks LTD — we're hiring plumbers, diggers, and materials runners for short-term water and drainage projects across Kenya.",
  "employmentType": "CONTRACT",
  "datePosted": "2025-07-25"
};

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
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
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
