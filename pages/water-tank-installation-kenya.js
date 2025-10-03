import React from "react";
import Head from "next/head";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaTools, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Water Tank Installation Kenya",
  "description": "Professional water tank installation services in Kenya. TopDrain WaterWorks provides overhead tank installation, underground tank installation, and water storage solutions.",
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
    "@type": "Country",
    "name": "Kenya"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Water Tank Installation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Overhead Tank Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Underground Tank Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Water Tank Maintenance"
        }
      }
    ]
  }
};

export default function WaterTankInstallationKenya() {
  return (
    <div className="container py-5">
      <Head>
        <title>Water Tank Installation Kenya | Overhead & Underground Tank Installation Services</title>
        <meta
          name="description"
          content="Professional water tank installation services in Kenya. TopDrain WaterWorks provides overhead tanks, underground tanks, and water storage solutions. Call +254 702 263 360 for expert installation."
        />
        <meta
          name="keywords"
          content="water tank installation Kenya, overhead tank installation Nairobi, underground tank installation Kenya, water storage solutions Kenya, water tank maintenance Kenya, tank installation contractors Nairobi"
        />
        <meta name="author" content="TopDrain WaterWorks LTD" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.topdrainlimited.com/water-tank-installation-kenya" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

      <div className="row">
        <div className="col-lg-8">
          <h1 className="fw-bold mb-4">Professional Water Tank Installation Services in Kenya</h1>

          <p className="lead mb-4">
            Need reliable water storage solutions? TopDrain WaterWorks LTD provides expert water tank installation services across Kenya, including Nairobi, Mombasa, Kisumu, and surrounding areas.
          </p>

          <div className="alert alert-info mb-4">
            <FaShieldAlt className="me-2" />
            <strong>Expert Installation with Warranty</strong> - All installations come with comprehensive warranty and maintenance support
          </div>

          <h2>Types of Water Tanks We Install</h2>
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="card h-100 mb-3">
                <div className="card-body">
                  <h5 className="card-title">Overhead Tanks</h5>
                  <p className="card-text">Elevated water storage tanks for gravity-fed water systems. Perfect for residential and commercial buildings.</p>
                  <ul className="list-unstyled small">
                    <li><FaCheckCircle className="text-success me-2" />500L - 10,000L capacity</li>
                    <li><FaCheckCircle className="text-success me-2" />Polyethylene and steel options</li>
                    <li><FaCheckCircle className="text-success me-2" />UV resistant materials</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 mb-3">
                <div className="card-body">
                  <h5 className="card-title">Underground Tanks</h5>
                  <p className="card-text">Below-ground water storage tanks for space-saving and aesthetic purposes. Ideal for large capacity storage.</p>
                  <ul className="list-unstyled small">
                    <li><FaCheckCircle className="text-success me-2" />1,000L - 50,000L capacity</li>
                    <li><FaCheckCircle className="text-success me-2" />Concrete and plastic options</li>
                    <li><FaCheckCircle className="text-success me-2" />Anti-bacterial lining</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Our Water Tank Installation Process</h2>
          <div className="row mb-4">
            <div className="col-md-3 mb-3">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <strong>1</strong>
                  </div>
                  <h6 className="card-title">Site Assessment</h6>
                  <p className="card-text small">Evaluate location, capacity needs, and installation requirements.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <strong>2</strong>
                  </div>
                  <h6 className="card-title">Tank Selection</h6>
                  <p className="card-text small">Recommend best tank type and size for your needs and budget.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <strong>3</strong>
                  </div>
                  <h6 className="card-title">Professional Installation</h6>
                  <p className="card-text small">Expert installation with proper plumbing connections and support structures.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <strong>4</strong>
                  </div>
                  <h6 className="card-title">Testing & Handover</h6>
                  <p className="card-text small">Complete system testing and provide maintenance guidelines.</p>
                </div>
              </div>
            </div>
          </div>

          <h2>Water Tank Installation Cost in Kenya</h2>
          <div className="table-responsive mb-4">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Tank Type</th>
                  <th>Capacity</th>
                  <th>Material</th>
                  <th>Installation Cost (KES)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Overhead Tank</td>
                  <td>500L</td>
                  <td>Polyethylene</td>
                  <td>25,000 - 35,000</td>
                </tr>
                <tr>
                  <td>Overhead Tank</td>
                  <td>1,000L</td>
                  <td>Polyethylene</td>
                  <td>35,000 - 50,000</td>
                </tr>
                <tr>
                  <td>Overhead Tank</td>
                  <td>2,000L</td>
                  <td>Steel</td>
                  <td>60,000 - 80,000</td>
                </tr>
                <tr>
                  <td>Underground Tank</td>
                  <td>2,000L</td>
                  <td>Concrete</td>
                  <td>80,000 - 120,000</td>
                </tr>
                <tr>
                  <td>Underground Tank</td>
                  <td>5,000L</td>
                  <td>Concrete</td>
                  <td>150,000 - 200,000</td>
                </tr>
              </tbody>
            </table>
            <small className="text-muted">*Prices include installation, plumbing connections, and basic accessories. Final cost depends on location and specific requirements.</small>
          </div>

          <h2>Why Choose TopDrain for Water Tank Installation?</h2>
          <div className="row mb-4">
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item d-flex align-items-center">
                  <FaShieldAlt className="text-success me-3" />
                  <div>
                    <strong>Licensed Professionals:</strong> Certified installers with extensive experience
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <FaTools className="text-success me-3" />
                  <div>
                    <strong>Quality Materials:</strong> Premium tanks with manufacturer warranties
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item d-flex align-items-center">
                  <FaClock className="text-success me-3" />
                  <div>
                    <strong>Timely Installation:</strong> Efficient service with minimal disruption
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <FaMapMarkerAlt className="text-success me-3" />
                  <div>
                    <strong>Nationwide Service:</strong> Installation services across Kenya
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <h2>Water Tank Maintenance Services</h2>
          <p>
            Proper maintenance ensures your water tank provides clean, safe water for years. Our maintenance services include:
          </p>
          <ul>
            <li><strong>Regular Cleaning:</strong> Remove sediment and disinfect tank interior</li>
            <li><strong>Inspection Services:</strong> Check for leaks, cracks, and structural issues</li>
            <li><strong>Filter Replacement:</strong> Replace inlet filters and screens</li>
            <li><strong>Plumbing Repairs:</strong> Fix leaks and connection issues</li>
            <li><strong>Water Quality Testing:</strong> Ensure water meets safety standards</li>
          </ul>
        </div>

        <div className="col-lg-4">
          <div className="card sticky-top" style={{top: '20px'}}>
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Get Water Tank Quote</h5>
            </div>
            <div className="card-body">
              <p><strong>Need water tank installation?</strong></p>
              <p>Contact TopDrain WaterWorks for:</p>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Free site assessment</li>
                <li className="mb-2">✓ Detailed cost estimate</li>
                <li className="mb-2">✓ Professional installation</li>
                <li className="mb-2">✓ Warranty and maintenance</li>
              </ul>
              <div className="d-grid gap-2">
                <a href="tel:+254702263360" className="btn btn-primary">
                  <FaPhoneAlt className="me-2" />
                  Call: +254 702 263 360
                </a>
                <a href="/contact" className="btn btn-outline-primary">
                  Request Quote
                </a>
              </div>
              <hr/>
              <div className="text-center">
                <small className="text-muted">
                  <FaMapMarkerAlt className="me-1" />
                  Serving All Kenya<br/>
                  <FaClock className="me-1" />
                  Installation in 2-5 Days
                </small>
              </div>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-header bg-success text-white">
              <h6 className="mb-0">Popular Tank Sizes</h6>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-0">
                <li className="mb-1"><strong>500L:</strong> Small homes</li>
                <li className="mb-1"><strong>1,000L:</strong> Medium families</li>
                <li className="mb-1"><strong>2,000L:</strong> Large families</li>
                <li className="mb-1"><strong>5,000L:</strong> Commercial</li>
                <li className="mb-1"><strong>10,000L:</strong> Industrial</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h2>Water Tank Installation Areas in Kenya</h2>
          <div className="row">
            <div className="col-md-3">
              <h5>Nairobi Region</h5>
              <ul className="list-unstyled small">
                <li>Nairobi CBD</li>
                <li>Westlands</li>
                <li>Karen</li>
                <li>Runda</li>
                <li>Kiambu</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Coast Region</h5>
              <ul className="list-unstyled small">
                <li>Mombasa</li>
                <li>Kilifi</li>
                <li>Malindi</li>
                <li>Diani</li>
                <li>Watamu</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Central Kenya</h5>
              <ul className="list-unstyled small">
                <li>Nyeri</li>
                <li>Kirinyaga</li>
                <li>Murang'a</li>
                <li>Thika</li>
                <li>Machakos</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Other Regions</h5>
              <ul className="list-unstyled small">
                <li>Kisumu</li>
                <li>Nakuru</li>
                <li>Eldoret</li>
                <li>Meru</li>
                <li>Kakamega</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
