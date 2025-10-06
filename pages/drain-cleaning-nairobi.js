import React from "react";
import Head from "next/head";
import Link from 'next/link'
import { FaPhone, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import styles from "../styles/servicePages.module.css";

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
      <div className={`hero-section mb-5 ${styles.hero}`} style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className={`fw-bold mb-3 display-5 ${styles.heroTitle}`}>Professional Drain Cleaning Services in Nairobi, Kenya</h1>
            <p className={`lead ${styles.heroLead} mb-4`}>
              Experiencing slow drains or complete blockages? TopDrain WaterWorks provides expert drain cleaning and unclogging services throughout Nairobi and surrounding areas.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="tel:+254702263360" className={`btn btn-light btn-lg ${styles.btnPill}`} aria-label="Call TopDrain">
                <FaPhone className="me-2" />
                Call Now: +254 702 263 360
              </a>
              <Link href="/contact" className={`btn btn-outline-light btn-lg ${styles.btnPill}`}>
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">

          <h2 className="fw-bold mb-4 text-primary">Why Choose TopDrain for Drain Cleaning in Nairobi?</h2>
          <div className="row mb-5">
            {[
              { title: "24/7 Emergency Service", text: "Available round the clock for urgent drain blockages" },
              { title: "Advanced Equipment", text: "High-pressure water jets and professional drain snakes" },
              { title: "Experienced Technicians", text: "15+ years of drain cleaning experience in Kenya" },
              { title: "Competitive Pricing", text: "Fair, transparent pricing with no hidden costs" }
            ].map((f, i) => (
              <div className="col-md-6 mb-4" key={i}>
                <div className={`${styles.featureCard} feature-card`}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="feature-icon">
                      <FaCheckCircle className="text-white fs-5" />
                    </div>
                    <h5 className="mb-0 fw-bold text-primary">{f.title}</h5>
                  </div>
                  <p className="text-muted mb-0">{f.text}</p>
                </div>
              </div>
            ))}
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
          <div className={`card ${styles.featureCard} tips-card`}>
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

        {/* Sidebar */}
        <div className="col-lg-4">
          <div className={`card ${styles.ctaCard} ${styles.stickyTop}`}>
            <div className={`card-header text-white text-center py-3 ${styles.ctaHeaderPrimary}`}>
              <h5 className="mb-0 fw-bold">Need Drain Cleaning Now?</h5>
            </div>
            <div className="card-body p-4">
              <p className="text-center text-muted mb-4">Get immediate help for blocked drains in Nairobi</p>

              <div className="d-grid gap-2 mb-4">
                <a href="tel:+254702263360" className={`btn btn-primary btn-lg ${styles.btnPill} shadow-sm`}>
                  <FaPhone className="me-2" />
                  Call: +254 702 263 360
                </a>
                <Link href="/contact" className={`btn btn-outline-primary btn-lg ${styles.btnPill}`}>
                  Get Free Quote
                </Link>
              </div>

              <div className="service-info">
                <div className="info-item">
                  <FaMapMarkerAlt className="text-primary me-3" />
                  <div>
                    <strong className="text-primary">Location</strong>
                    <div className="small text-muted">Nairobi, Kenya</div>
                  </div>
                </div>

                <div className="info-item">
                  <FaClock className="text-primary me-3" />
                  <div>
                    <strong className="text-primary">Availability</strong>
                    <div className="small text-muted">Available 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`card mt-3 ${styles.featureCard} areas-card`}>
            <div className={`card-header text-white text-center py-3 ${styles.areasHeaderSuccess}`}>
              <h6 className="mb-0 fw-bold">Service Areas</h6>
            </div>
            <div className="card-body p-4">
              <ul className="service-areas list-unstyled mb-0">
                {['Westlands','Lavington','Karen','Runda','Kilimani','Kileleshwa','And surrounding areas'].map((a,i)=>(
                  <li key={i} className={styles.serviceAreaItem}><FaCheckCircle className="text-success me-2" />{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .hero-section {
          border-radius: 1.5rem;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.3);
          animation: fadeInUp 1s ease-out;
          position: relative;
          overflow: hidden;
        }
        .call-btn, .quote-btn {
          border-radius: 50px;
          padding: 0.9rem 2rem;
          font-weight: 600;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .call-btn:hover, .quote-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        .feature-card {
          padding: 1.5rem;
          border-radius: 1rem;
          background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%);
          border: 1px solid #dee2e6;
          transition: all 0.3s ease;
          height: 100%;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        }
        .feature-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #28a745, #20c997);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          transition: transform 0.3s ease;
        }
        .feature-card:hover .feature-icon {
          transform: rotate(15deg) scale(1.1);
        }
        .cta-card {
          background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
          border-radius: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: box-shadow 0.3s ease;
        }
        .cta-card:hover {
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        .cta-card .card-header {
          background: #0d6efd;
          border-radius: 20px 20px 0 0;
        }
        .areas-card {
          border-radius: 20px;
          background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%);
        }
        .areas-card .card-header {
          background: #198754;
          border-radius: 20px 20px 0 0;
        }
        .service-areas li {
          display: flex;
          align-items: center;
          padding: 0.4rem 0;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .service-areas li:hover {
          color: #0d6efd;
        }
        .info-item {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          padding: 0.5rem;
          border-radius: 8px;
          background: rgba(13, 110, 253, 0.1);
          transition: all 0.3s ease;
        }
        .info-item:hover {
          background: rgba(13, 110, 253, 0.2) !important;
          transform: translateX(5px);
        }
        .tips-card {
          border-radius: 1rem;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .hero-section h1 { font-size: 2rem; }
          .hero-section p { font-size: 1.1rem; }
        }
      `}</style>
    </div>
  );
}
