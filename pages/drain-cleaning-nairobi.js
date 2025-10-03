import React from "react";
import Head from "next/head";
import { FaPhone, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Drain Cleaning Services Nairobi Kenya",
  "description": "Professional drain cleaning and unclogging services in Nairobi, Kenya. Expert solutions for blocked drains, sewer cleaning, and drainage maintenance.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "TopDrain WaterWorks LTD",
    "telephone": "+254 702 263 360",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nairobi, Kenya",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi",
      "addressCountry": "KE"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Nairobi"
  },
  "serviceType": "Drain Cleaning"
};

export default function DrainCleaningNairobi() {
  return (
    <div className="container py-5">
      <Head>
        <title>Drain Cleaning Services Nairobi | Unclog Drains Kenya | TopDrain WaterWorks</title>
        <meta
          name="description"
          content="Expert drain cleaning services in Nairobi, Kenya. Professional unclogging, sewer cleaning, and drainage maintenance. Emergency drain cleaning available 24/7. Call +254 702 263 360."
        />
        <meta
          name="keywords"
          content="drain cleaning Nairobi, unclog drains Kenya, sewer cleaning Nairobi, blocked drain repair, drain maintenance Kenya, emergency drain cleaning Nairobi, plumber drain cleaning"
        />
        <meta name="author" content="TopDrain WaterWorks LTD" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.topdrainlimited.com/drain-cleaning-nairobi" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

      <div className="row">
        <div className="col-lg-8">
          <h1>Professional Drain Cleaning Services in Nairobi, Kenya</h1>
          <p className="lead">
            Experiencing slow drains or complete blockages? TopDrain WaterWorks provides expert drain cleaning and unclogging services throughout Nairobi and surrounding areas.
          </p>

          <h2>Why Choose TopDrain for Drain Cleaning in Nairobi?</h2>
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="d-flex align-items-start mb-3">
                <FaCheckCircle className="text-success me-3 mt-1" />
                <div>
                  <h5>24/7 Emergency Service</h5>
                  <p className="small">Available round the clock for urgent drain blockages</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <FaCheckCircle className="text-success me-3 mt-1" />
                <div>
                  <h5>Advanced Equipment</h5>
                  <p className="small">High-pressure water jets and professional drain snakes</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-start mb-3">
                <FaCheckCircle className="text-success me-3 mt-1" />
                <div>
                  <h5>Experienced Technicians</h5>
                  <p className="small">15+ years of drain cleaning experience in Kenya</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <FaCheckCircle className="text-success me-3 mt-1" />
                <div>
                  <h5>Competitive Pricing</h5>
                  <p className="small">Fair, transparent pricing with no hidden costs</p>
                </div>
              </div>
            </div>
          </div>

          <h2>Common Drain Problems We Solve in Nairobi</h2>
          <ul>
            <li><strong>Kitchen Drain Blockages:</strong> Grease, food particles, and soap buildup</li>
            <li><strong>Bathroom Drain Clogs:</strong> Hair, soap scum, and toilet paper accumulation</li>
            <li><strong>Sewer Line Blockages:</strong> Tree roots, debris, and structural damage</li>
            <li><strong>Floor Drain Issues:</strong> Laundry and shower drain problems</li>
            <li><strong>Storm Drain Maintenance:</strong> Outdoor drainage system cleaning</li>
          </ul>

          <h2>Our Drain Cleaning Process</h2>
          <ol>
            <li><strong>Inspection:</strong> We assess the blockage using camera inspection when needed</li>
            <li><strong>Diagnosis:</strong> Identify the cause and extent of the blockage</li>
            <li><strong>Treatment:</strong> Use appropriate method - high-pressure water, drain snake, or chemical treatment</li>
            <li><strong>Prevention:</strong> Provide tips to prevent future blockages</li>
            <li><strong>Follow-up:</strong> Ensure the drain is flowing properly</li>
          </ol>

          <h2>Signs You Need Professional Drain Cleaning</h2>
          <div className="alert alert-warning">
            <ul className="mb-0">
              <li>Water backing up from drains</li>
              <li>Slow drainage in sinks, tubs, or showers</li>
              <li>Gurgling sounds from drains</li>
              <li>Unpleasant odors from drains</li>
              <li>Multiple drains backing up simultaneously</li>
            </ul>
          </div>

          <h2>Drain Cleaning Tips for Nairobi Residents</h2>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Prevention is Better Than Cure</h5>
              <ul>
                <li>Use drain strainers to catch hair and debris</li>
                <li>Never pour grease down kitchen drains</li>
                <li>Regularly flush drains with hot water</li>
                <li>Avoid flushing non-biodegradable items</li>
                <li>Schedule annual professional drain cleaning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card sticky-top">
            <div className="card-body">
              <h5 className="card-title">Need Drain Cleaning Now?</h5>
              <p className="card-text">Get immediate help for blocked drains in Nairobi</p>

              <div className="d-flex align-items-center mb-3">
                <FaPhone className="text-primary me-2" />
                <a href="tel:+254702263360" className="btn btn-primary">+254 702 263 360</a>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt className="text-primary me-2" />
                <small>Nairobi, Kenya</small>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaClock className="text-primary me-2" />
                <small>Available 24/7</small>
              </div>

              <a href="/contact" className="btn btn-outline-primary w-100">Get Free Quote</a>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-body">
              <h6>Service Areas</h6>
              <ul className="list-unstyled small">
                <li>• Westlands</li>
                <li>• Lavington</li>
                <li>• Karen</li>
                <li>• Runda</li>
                <li>• Kilimani</li>
                <li>• Kileleshwa</li>
                <li>• And surrounding areas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
