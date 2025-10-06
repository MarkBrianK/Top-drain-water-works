import React from "react";
import Head from "next/head";
import Link from 'next/link'
import styles from "../styles/servicePages.module.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Emergency Plumbing Services Nairobi",
  "provider": {
    "@type": "LocalBusiness",
    "name": "TopDrain WaterWorks LTD",
    "telephone": "+254 702 263 360",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    }
  },
  "description": "24/7 emergency plumbing services in Nairobi. Fast response for burst pipes, blocked drains, water heater repairs, and urgent plumbing issues.",
  "areaServed": {
    "@type": "City",
    "name": "Nairobi, Kenya"
  }
};

export default function EmergencyPlumbingNairobi() {
  return (
    <div className="container py-5">
      <Head>
        <title>Emergency Plumbing Services Nairobi | 24/7 Plumber Kenya | TopDrain WaterWorks</title>
        <meta
          name="description"
          content="Need emergency plumbing services in Nairobi? TopDrain WaterWorks provides 24/7 emergency plumber services for burst pipes, blocked drains, water heater repairs. Call +254 702 263 360."
        />
        <meta
          name="keywords"
          content="emergency plumber Nairobi, 24/7 plumbing services Kenya, burst pipe repair Nairobi, blocked drain emergency, water heater repair Nairobi, urgent plumbing Kenya, emergency drain cleaning Nairobi"
        />
        <meta name="author" content="TopDrain WaterWorks LTD" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.topdrainlimited.com/emergency-plumbing-nairobi" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

      {/* Hero Section */}
      <div className="hero-section mb-5 p-5 rounded-4" style={{
        background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
        color: 'white',
        boxShadow: '0 15px 35px rgba(255, 107, 107, 0.3)',
      }}>
        <div className="text-center">
          <h1 className={`fw-bold mb-3 display-5 ${styles.heroTitle}`}>Emergency Plumbing Services in Nairobi Kenya</h1>
          <p className="lead fs-4 mb-4">
            Available 24/7 for urgent plumbing emergencies across Nairobi. Fast response, professional service, competitive pricing.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="tel:+254702263360" className={`btn btn-light btn-lg px-5 py-3 ${styles.btnPill} shadow-lg`} aria-label="Emergency call">
              <i className="bi bi-telephone me-2"></i>
              Emergency Call: +254 702 263 360
            </a>
              <Link href="/contact" className={`btn btn-outline-light btn-lg px-4 py-3 ${styles.btnPill}`}>
                Get Quote
              </Link>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-8">
          <h2>Common Emergency Plumbing Issues We Fix</h2>

          <div className="row mb-5">
            <div className="col-md-6 mb-4">
              <div className={`${styles.featureCard} emergency-service-card p-4 h-100 rounded-3 shadow-sm border-0`} style={{
                background: 'linear-gradient(145deg, #fff5f5 0%, #fef2f2 100%)',
                border: '2px solid #fecaca'
              }}>
                <div className="text-center mb-3">
                  <div className="emergency-icon mx-auto mb-3" style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span className="fs-1">🚰</span>
                  </div>
                  <h5 className="fw-bold text-danger">Burst Pipe Repair</h5>
                </div>
                <p className="text-muted text-center mb-3">Emergency pipe repairs for burst or leaking pipes. We respond quickly to minimize water damage to your property.</p>
                <ul className="list-unstyled small">
                  <li className="mb-1"><i className="bi bi-check-circle text-success me-2"></i>Hot and cold water pipes</li>
                  <li className="mb-1"><i className="bi bi-check-circle text-success me-2"></i>Main water line repairs</li>
                  <li className="mb-1"><i className="bi bi-check-circle text-success me-2"></i>Pipe replacement services</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className={`${styles.featureCard} emergency-service-card p-4 h-100 rounded-3 shadow-sm border-0`} style={{
                background: 'linear-gradient(145deg, #f0f9ff 0%, #e0f2fe 100%)',
                border: '2px solid #bae6fd'
              }}>
                <div className="text-center mb-3">
                  <div className="emergency-icon mx-auto mb-3" style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span className="fs-1">🚿</span>
                  </div>
                  <h5 className="fw-bold text-primary">Blocked Drain Emergency</h5>
                </div>
                <p className="text-muted text-center mb-3">Severe drain blockages that cause flooding or complete stoppage. Professional drain cleaning and unblocking services.</p>
                <ul className="list-unstyled small">
                  <li className="mb-1"><i className="bi bi-check-circle text-success me-2"></i>Kitchen sink blockages</li>
                  <li className="mb-1"><i className="bi bi-check-circle text-success me-2"></i>Bathroom drain issues</li>
                  <li className="mb-1"><i className="bi bi-check-circle text-success me-2"></i>Sewer line blockages</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className={`${styles.featureCard} emergency-service-card p-4 h-100 rounded-3 shadow-sm border-0`} style={{
                background: 'linear-gradient(145deg, #fff7ed 0%, #fed7aa 100%)',
                border: '2px solid #fed7aa'
              }}>
                <div className="text-center mb-3">
                  <div className="emergency-icon mx-auto mb-3" style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #f97316, #ea580c)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span className="fs-1">🔥</span>
                  </div>
                  <h5 className="fw-bold text-warning">Water Heater Emergency</h5>
                </div>
                <p className="text-muted text-center mb-3">No hot water? Leaking water heater? We provide emergency water heater repair and replacement services.</p>
                <ul className="list-unstyled small">
                  <li className="mb-1"><i className="bi bi-check-circle text-success me-2"></i>Electric water heater repair</li>
                  <li className="mb-1"><i className="bi bi-check-circle text-success me-2"></i>Solar water heater issues</li>
                  <li className="mb-1"><i className="bi bi-check-circle text-success me-2"></i>Water heater installation</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className={`${styles.featureCard} emergency-service-card p-4 h-100 rounded-3 shadow-sm border-0`} style={{
                background: 'linear-gradient(145deg, #f0fdf4 0%, #dcfce7 100%)',
                border: '2px solid #bbf7d0'
              }}>
                <div className="text-center mb-3">
                  <div className="emergency-icon mx-auto mb-3" style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span className="fs-1">💧</span>
                  </div>
                  <h5 className="fw-bold text-success">Water Tank Emergency</h5>
                </div>
                <p className="text-muted text-center mb-3">Overflowing water tanks, leaks, or complete water system failures. Emergency tank repair and maintenance.</p>
                <ul className="list-unstyled small">
                  <li className="mb-1"><i className="bi bi-check-circle text-success me-2"></i>Overhead tank repairs</li>
                  <li className="mb-1"><i className="bi bi-check-circle text-success me-2"></i>Underground tank issues</li>
                  <li className="mb-1"><i className="bi bi-check-circle text-success me-2"></i>Water pump emergencies</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Why Choose TopDrain for Emergency Plumbing?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="text-center mb-3">
                <i className="bi bi-clock-fill text-primary" style={{fontSize: '2rem'}}></i>
                <h5>24/7 Availability</h5>
                <p>Round-the-clock emergency service. We respond to calls at any time of day or night.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center mb-3">
                <i className="bi bi-lightning-fill text-warning" style={{fontSize: '2rem'}}></i>
                <h5>Fast Response</h5>
                <p>Quick dispatch and arrival. Most emergency calls are responded to within 30 minutes in Nairobi.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center mb-3">
                <i className="bi bi-tools text-success" style={{fontSize: '2rem'}}></i>
                <h5>Professional Service</h5>
                <p>Licensed plumbers with modern tools and equipment. Quality workmanship guaranteed.</p>
              </div>
            </div>
          </div>

          <h2>Emergency Plumbing Tips for Nairobi Residents</h2>
          <div className="alert alert-info">
            <h5>Before Calling for Emergency Service:</h5>
            <ul className="mb-0">
              <li><strong>Burst Pipe:</strong> Turn off main water supply immediately to prevent flooding</li>
              <li><strong>Blocked Drain:</strong> Stop using the affected drain and nearby drains</li>
              <li><strong>Water Heater Issues:</strong> Turn off power supply to electric water heaters</li>
              <li><strong>Overflowing Tank:</strong> Check if overflow pipe is blocked and clear if safe to do so</li>
            </ul>
          </div>

          <h2>Service Areas in Nairobi</h2>
          <p>We provide emergency plumbing services across all areas of Nairobi including:</p>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>Westlands</li>
                <li>Lavington</li>
                <li>Karen</li>
                <li>Runda</li>
                <li>Kileleshwa</li>
                <li>Kilimani</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>Eastleigh</li>
                <li>South B/C</li>
                <li>Ruaraka</li>
                <li>Embakasi</li>
                <li>Kahawa</li>
                <li>And surrounding areas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card bg-primary text-white">
            <div className="card-body text-center">
              <h4 className="card-title">Emergency Hotline</h4>
              <h2 className="card-text">+254 702 263 360</h2>
              <p>Available 24/7 for urgent plumbing emergencies</p>
              <a href="tel:+254702263360" className="btn btn-light btn-lg">Call Now</a>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Regular Maintenance</h5>
              <p className="card-text">Prevent emergencies with regular plumbing maintenance:</p>
              <ul className="small">
                <li>Pipe inspection</li>
                <li>Drain cleaning</li>
                <li>Water heater servicing</li>
                <li>Leak detection</li>
              </ul>
              <Link href="/contact" className="btn btn-outline-primary">Schedule Maintenance</Link>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Emergency Response Process</h5>
              <ol className="small">
                <li>Call our emergency hotline</li>
                <li>Describe the problem</li>
                <li>Receive estimated arrival time</li>
                <li>Emergency repair on-site</li>
                <li>Follow-up if needed</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light p-4 rounded">
        <h3 className="text-center mb-3">Don't Wait - Call TopDrain WaterWorks for Emergency Plumbing</h3>
        <p className="text-center mb-3">
          Plumbing emergencies can cause significant damage if not addressed quickly. Our experienced team is ready to help you 24/7 with professional emergency plumbing services in Nairobi.
        </p>
        <div className="text-center">
          <a href="tel:+254702263360" className="btn btn-danger btn-lg me-3">Emergency Call: +254 702 263 360</a>
      <Link href="/contact" className="btn btn-outline-primary btn-lg">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
