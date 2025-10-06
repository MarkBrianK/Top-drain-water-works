import React from "react";
import Head from "next/head";
import Link from 'next/link'
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaTools, FaShieldAlt } from "react-icons/fa";
import styles from "../styles/servicePages.module.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Sewer Repair Services Nairobi Kenya",
  "description": "Professional sewer repair and maintenance services in Nairobi, Kenya. Expert diagnosis and repair of sewer line blockages, leaks, and system failures.",
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
    "name": "Nairobi, Kenya"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Sewer Repair Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sewer Line Inspection"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sewer Pipe Repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sewer System Maintenance"
        }
      }
    ]
  }
};

export default function SewerRepairNairobi() {
  return (
    <div className="container py-5">
      <Head>
        <title>Sewer Repair Services Nairobi Kenya | Professional Sewer Line Repair & Maintenance</title>
        <meta
          name="description"
          content="Expert sewer repair services in Nairobi, Kenya. TopDrain WaterWorks provides professional sewer line inspection, repair, and maintenance. Call +254 702 263 360 for immediate assistance."
        />
        <meta
          name="keywords"
          content="sewer repair Nairobi, sewer line repair Kenya, sewer maintenance Nairobi, blocked sewer Nairobi, sewer inspection Kenya, sewer pipe repair Nairobi, emergency sewer repair Kenya"
        />
        <meta name="author" content="TopDrain WaterWorks LTD" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.topdrainlimited.com/sewer-repair-nairobi" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

      <div className="row">
        <div className="col-lg-8">
          <h1 className="fw-bold mb-4">Professional Sewer Repair Services in Nairobi, Kenya</h1>

          <p className="lead mb-4">
            Experiencing sewer problems in Nairobi? TopDrain WaterWorks LTD provides expert sewer repair, maintenance, and emergency services across Kenya's capital city and surrounding areas.
          </p>

          <div className={`alert alert-warning mb-4 ${styles.featureCard}`}>
            <FaShieldAlt className="me-2" />
            <strong>Emergency Sewer Repair Available 24/7</strong> - Call +254 702 263 360 for immediate assistance
          </div>

          <h2>Common Sewer Problems We Fix in Nairobi</h2>
          <div className="row mb-4">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li className="mb-2"><FaTools className="text-primary me-2" />Blocked sewer lines</li>
                <li className="mb-2"><FaTools className="text-primary me-2" />Sewer pipe leaks</li>
                <li className="mb-2"><FaTools className="text-primary me-2" />Sewer system backups</li>
                <li className="mb-2"><FaTools className="text-primary me-2" />Tree root intrusion</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li className="mb-2"><FaTools className="text-primary me-2" />Collapsed sewer pipes</li>
                <li className="mb-2"><FaTools className="text-primary me-2" />Sewer odor problems</li>
                <li className="mb-2"><FaTools className="text-primary me-2" />Sewer line replacement</li>
                <li className="mb-2"><FaTools className="text-primary me-2" />Preventive maintenance</li>
              </ul>
            </div>
          </div>

          <h2>Our Sewer Repair Process</h2>
          <div className="row mb-4">
            <div className="col-md-4 mb-3">
              <div className={`card h-100 ${styles.featureCard}`}>
                <div className="card-body text-center">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <strong>1</strong>
                  </div>
                  <h5 className="card-title">Inspection & Diagnosis</h5>
                  <p className="card-text">Thorough sewer line inspection using advanced equipment to identify the exact problem and location.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className={`card h-100 ${styles.featureCard}`}>
                <div className="card-body text-center">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <strong>2</strong>
                  </div>
                  <h5 className="card-title">Repair Plan</h5>
                  <p className="card-text">Detailed repair plan with cost estimate and timeline. We explain all options before starting work.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className={`card h-100 ${styles.featureCard}`}>
                <div className="card-body text-center">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <strong>3</strong>
                  </div>
                  <h5 className="card-title">Professional Repair</h5>
                  <p className="card-text">Expert repair work using quality materials and proven techniques to restore your sewer system.</p>
                </div>
              </div>
            </div>
          </div>

          <h2>Why Choose TopDrain for Sewer Repair in Nairobi?</h2>
          <ul className="list-group mb-4">
            {[{
              icon: <FaShieldAlt className="text-success me-3" />,
              title: 'Licensed & Insured',
              text: 'Fully licensed professionals with comprehensive insurance coverage'
            },{
              icon: <FaClock className="text-success me-3" />,
              title: '24/7 Emergency Service',
              text: 'Available around the clock for urgent sewer problems'
            },{
              icon: <FaTools className="text-success me-3" />,
              title: 'Advanced Equipment',
              text: 'Latest technology for accurate diagnosis and efficient repairs'
            },{
              icon: <FaMapMarkerAlt className="text-success me-3" />,
              title: 'Local Expertise',
              text: "Deep knowledge of Nairobi's sewer systems and common issues"
            }].map((item,i)=>(
              <li key={i} className="list-group-item d-flex align-items-center">
                {item.icon}
                <div>
                  <strong>{item.title}:</strong> {item.text}
                </div>
              </li>
            ))}
          </ul>

          <h2>Emergency Sewer Repair in Nairobi</h2>
          <p>
            Sewer emergencies can cause serious health hazards and property damage. If you experience any of these signs, call TopDrain immediately:
          </p>
          <ul>
            <li>Sewage backing up into your home or business</li>
            <li>Strong sewer odors inside or outside your property</li>
            <li>Multiple drains backing up simultaneously</li>
            <li>Gurgling sounds from drains or toilets</li>
            <li>Wet spots or sinkholes in your yard</li>
          </ul>

          <div className="alert alert-danger">
            <strong>Emergency Contact:</strong> +254 702 263 360<br/>
            <small>Available 24 hours a day, 7 days a week for sewer emergencies</small>
          </div>
        </div>

        <div className="col-lg-4">
          <div className={`card ${styles.ctaCard} ${styles.stickyTop}`}>
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Get Sewer Repair Quote</h5>
            </div>
            <div className="card-body">
              <p><strong>Need sewer repair in Nairobi?</strong></p>
              <p>Contact TopDrain WaterWorks for:</p>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Free inspection and estimate</li>
                <li className="mb-2">✓ Emergency repairs available 24/7</li>
                <li className="mb-2">✓ Licensed and insured professionals</li>
                <li className="mb-2">✓ Quality materials and workmanship</li>
              </ul>
              <div className="d-grid gap-2">
                <a href="tel:+254702263360" className={`btn btn-primary ${styles.btnPill}`}>
                  <FaPhoneAlt className="me-2" />
                  Call Now: +254 702 263 360
                </a>
                <Link href="/contact" className={`btn btn-outline-primary ${styles.btnPill}`}>
                  Request Quote
                </Link>
              </div>
              <hr/>
              <div className="text-center">
                <small className="text-muted">
                  <FaMapMarkerAlt className="me-1" />
                  Serving Nairobi & Surrounding Areas<br/>
                  <FaClock className="me-1" />
                  Available 24/7 for Emergencies
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h2>Areas We Serve for Sewer Repair</h2>
          <div className="row">
            <div className="col-md-3">
              <h5>Nairobi Central</h5>
              <ul className="list-unstyled small">
                <li>CBD</li>
                <li>Westlands</li>
                <li>Kilimani</li>
                <li>Karen</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>East Nairobi</h5>
              <ul className="list-unstyled small">
                <li>Eastleigh</li>
                <li>South B</li>
                <li>South C</li>
                <li>Embakasi</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>North Nairobi</h5>
              <ul className="list-unstyled small">
                <li>Kasarani</li>
                <li>Ruaraka</li>
                <li>Kahawa</li>
                <li>Thika Road</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>West Nairobi</h5>
              <ul className="list-unstyled small">
                <li>Rongai</li>
                <li>Kikuyu</li>
                <li>Kiambu</li>
                <li>Lavington</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
