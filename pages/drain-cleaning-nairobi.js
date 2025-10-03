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

      {/* Hero Section */}
      <div className="hero-section mb-5 p-5 rounded-4" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        boxShadow: '0 15px 35px rgba(102, 126, 234, 0.3)'
      }}>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="fw-bold mb-3 display-5">Professional Drain Cleaning Services in Nairobi, Kenya</h1>
            <p className="lead fs-4 mb-4">
              Experiencing slow drains or complete blockages? TopDrain WaterWorks provides expert drain cleaning and unclogging services throughout Nairobi and surrounding areas.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="tel:+254702263360" className="btn btn-light btn-lg px-4 py-3 rounded-pill shadow-sm">
                <FaPhone className="me-2" />
                Call Now: +254 702 263 360
              </a>
              <a href="/contact" className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">

          <h2 className="fw-bold mb-4 text-primary">Why Choose TopDrain for Drain Cleaning in Nairobi?</h2>
          <div className="row mb-5">
            <div className="col-md-6 mb-4">
              <div className="feature-card p-4 h-100 rounded-3 shadow-sm border-0" style={{
                background: 'linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%)',
                border: '1px solid #dee2e6'
              }}>
                <div className="d-flex align-items-center mb-3">
                  <div className="feature-icon me-3" style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #28a745, #20c997)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FaCheckCircle className="text-white fs-5" />
                  </div>
                  <h5 className="mb-0 fw-bold text-primary">24/7 Emergency Service</h5>
                </div>
                <p className="text-muted mb-0">Available round the clock for urgent drain blockages</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="feature-card p-4 h-100 rounded-3 shadow-sm border-0" style={{
                background: 'linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%)',
                border: '1px solid #dee2e6'
              }}>
                <div className="d-flex align-items-center mb-3">
                  <div className="feature-icon me-3" style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #28a745, #20c997)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FaCheckCircle className="text-white fs-5" />
                  </div>
                  <h5 className="mb-0 fw-bold text-primary">Advanced Equipment</h5>
                </div>
                <p className="text-muted mb-0">High-pressure water jets and professional drain snakes</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="feature-card p-4 h-100 rounded-3 shadow-sm border-0" style={{
                background: 'linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%)',
                border: '1px solid #dee2e6'
              }}>
                <div className="d-flex align-items-center mb-3">
                  <div className="feature-icon me-3" style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #28a745, #20c997)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FaCheckCircle className="text-white fs-5" />
                  </div>
                  <h5 className="mb-0 fw-bold text-primary">Experienced Technicians</h5>
                </div>
                <p className="text-muted mb-0">15+ years of drain cleaning experience in Kenya</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="feature-card p-4 h-100 rounded-3 shadow-sm border-0" style={{
                background: 'linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%)',
                border: '1px solid #dee2e6'
              }}>
                <div className="d-flex align-items-center mb-3">
                  <div className="feature-icon me-3" style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #28a745, #20c997)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FaCheckCircle className="text-white fs-5" />
                  </div>
                  <h5 className="mb-0 fw-bold text-primary">Competitive Pricing</h5>
                </div>
                <p className="text-muted mb-0">Fair, transparent pricing with no hidden costs</p>
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
          <div className="card sticky-top border-0 shadow-lg" style={{
            background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
            borderRadius: '20px'
          }}>
            <div className="card-header bg-primary text-white text-center py-3" style={{
              borderRadius: '20px 20px 0 0'
            }}>
              <h5 className="mb-0 fw-bold">Need Drain Cleaning Now?</h5>
            </div>
            <div className="card-body p-4">
              <p className="text-center text-muted mb-4">Get immediate help for blocked drains in Nairobi</p>

              <div className="d-grid gap-2 mb-4">
                <a href="tel:+254702263360" className="btn btn-primary btn-lg rounded-pill shadow-sm">
                  <FaPhone className="me-2" />
                  Call: +254 702 263 360
                </a>
                <a href="/contact" className="btn btn-outline-primary btn-lg rounded-pill">
                  Get Free Quote
                </a>
              </div>

              <div className="service-info">
                <div className="d-flex align-items-center mb-3 p-2 rounded" style={{background: 'rgba(13, 110, 253, 0.1)'}}>
                  <FaMapMarkerAlt className="text-primary me-3" />
                  <div>
                    <strong className="text-primary">Location</strong>
                    <div className="small text-muted">Nairobi, Kenya</div>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3 p-2 rounded" style={{background: 'rgba(13, 110, 253, 0.1)'}}>
                  <FaClock className="text-primary me-3" />
                  <div>
                    <strong className="text-primary">Availability</strong>
                    <div className="small text-muted">Available 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-3 border-0 shadow-sm" style={{
            background: 'linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%)',
            borderRadius: '20px'
          }}>
            <div className="card-header bg-success text-white text-center py-3" style={{
              borderRadius: '20px 20px 0 0'
            }}>
              <h6 className="mb-0 fw-bold">Service Areas</h6>
            </div>
            <div className="card-body p-4">
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Westlands</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Lavington</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Karen</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Runda</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Kilimani</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Kileleshwa</li>
                <li className="mb-0"><i className="bi bi-check-circle text-success me-2"></i>And surrounding areas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          animation: fadeInUp 1s ease-out;
        }

        .feature-card {
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-info .d-flex {
          transition: all 0.3s ease;
        }

        .service-info .d-flex:hover {
          background: rgba(13, 110, 253, 0.2) !important;
          transform: translateX(5px);
        }
      `}</style>
    </div>
  );
}
