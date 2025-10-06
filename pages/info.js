import React from "react";
import Head from "next/head";
import Link from 'next/link'

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Information Centre | TopDrain WaterWorks LTD",
  "url": "https://www.topdrainlimited.com/info",
  "image": "/Assets/Images/logo.png",
  "description": "Stay updated with TopDrain WaterWorks' latest plumbing and drainage projects, community stories, and maintenance tips across Kenya.",
  "publisher": {
    "@type": "Organization",
    "name": "TopDrain Water Works LTD",
    "logo": {
      "@type": "ImageObject",
      "url": "/Assets/Images/logo.png"
    }
  }
};

export default function InformationCentre() {
  return (
    <div className="container py-5">
      <Head>
        <title>Plumbing Tips & Drainage Solutions Kenya | TopDrain WaterWorks Information Centre</title>
        <meta
          name="description"
          content="Expert plumbing tips, drainage solutions, and water maintenance advice from TopDrain WaterWorks. Learn how to fix clogged drains, maintain water tanks, and prevent flooding in Kenya."
        />
        <meta
          name="keywords"
          content="plumbing tips Kenya, drain cleaning advice, water tank maintenance, flood prevention Kenya, sewer maintenance tips, plumbing solutions Nairobi, drainage problems Kenya"
        />
        <meta name="author" content="TopDrain WaterWorks LTD" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.topdrainlimited.com/info" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <h1 className="fw-bold text-center mb-4">Plumbing Tips & Drainage Solutions Kenya</h1>
      <p className="text-center mb-5">
        Expert advice on water systems, drainage maintenance, and plumbing solutions from TopDrain WaterWorks LTD. Learn how to prevent common water problems and maintain your drainage systems.
      </p>

      {/* SEO-friendly content sections */}
      <div className="row mb-5">
        <div className="col-lg-8">
          <h2>How to Fix Clogged Drains in Nairobi</h2>
          <p>Clogged drains are common in Nairobi due to hard water and debris. Here are proven methods to unclog drains:</p>
          <ul>
            <li><strong>Use boiling water:</strong> Pour hot water down the drain to dissolve grease and soap buildup</li>
            <li><strong>Baking soda and vinegar:</strong> Natural solution that's safe for all pipe types</li>
            <li><strong>Plunger method:</strong> Create a tight seal and use rapid up-down motions</li>
            <li><strong>Professional drain cleaning:</strong> For severe blockages, call TopDrain at +254 702 263 360</li>
          </ul>

          <h2>Water Tank Maintenance Tips Kenya</h2>
          <p>Regular water tank maintenance prevents contamination and ensures clean water supply:</p>
          <ul>
            <li><strong>Clean tanks every 6 months:</strong> Remove sediment and disinfect with chlorine</li>
            <li><strong>Check for leaks:</strong> Inspect tank walls and connections regularly</li>
            <li><strong>Replace filters:</strong> Change water filters every 3-6 months</li>
            <li><strong>Professional cleaning:</strong> TopDrain provides comprehensive tank cleaning services</li>
          </ul>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Emergency Plumbing Services</h5>
              <p className="card-text">Need urgent plumbing help in Nairobi?</p>
              <Link href="/contact" className="btn btn-primary">Contact TopDrain</Link>
              <p className="mt-2 small">Available 24/7 for emergency repairs</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Recent Project Updates</h2>
      <div className="list-group">
        <div className="list-group-item">
          <h5 className="mb-1">💧 Drainage Installation in Kirinyaga</h5>
          <p className="mb-1">[June 2025] Completed drainage trench and pipe layout for residential development in Kiaritha, Kirinyaga. Professional drainage systems prevent flooding during heavy rains.</p>
          <small>Location: Kiaritha, Kirinyaga | Services: Drainage installation, pipe layout</small>
        </div>
        <div className="list-group-item">
          <h5 className="mb-1">🛠️ Water Tank Maintenance in Lavington</h5>
          <p className="mb-1">[May 2025] Overhead tank cleaning and pipe rerouting at Kinga'ara Road, Lavington – water pressure restored to optimal levels.</p>
          <small>Location: Kinga'ara Road, Lavington | Services: Tank cleaning, pipe rerouting</small>
        </div>
        <div className="list-group-item">
          <h5 className="mb-1">🐖 Automated Water System in Nyeri</h5>
          <p className="mb-1">[May 2025] Installed automated nipple drinkers in pig stay for clean drinking water in Mukurueini, Nyeri. Improved animal health and water efficiency.</p>
          <small>Location: Mukurueini, Nyeri | Services: Automated water systems, livestock water solutions</small>
        </div>
        <button className="list-group-item list-group-item-action text-start">
          🚿 [April 2025] Full bathroom & kitchen renovation with concealed plumbing on Kinga'ara Road, Nairobi.
        </button>
        <button className="list-group-item list-group-item-action text-start">
          ☀️ [March 2025] Serviced solar water heater system and insulation in Lavington — improved energy efficiency.
        </button>
      </div>
    </div>
  );
}
