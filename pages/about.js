import React from "react";
import founder1 from "/Assets/Images/Victor.jpg";
import founder2 from "/Assets/Images/Jason.jpg";
import pipes from "/Assets/Images/pipes.jpg";
import { Helmet } from "react-helmet";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TopDrain Water Works LTD",
  "url": "https://www.topdrainlimited.com/",
  "logo": "/Assets/Images/logo.png",
  "description": "Learn about TopDrain WaterWorks LTD — a premier water systems engineering company in Kenya specializing in drainage, plumbing, sewer, and sustainable infrastructure solutions.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nairobi, Kenya",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi",
    "addressCountry": "KE"
  },
  "sameAs": [
    "https://www.topdrainlimited.com/"
  ]
};

export default function About() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About Us | TopDrain WaterWorks LTD</title>
        <meta
          name="description"
          content="Learn about TopDrain WaterWorks LTD — a premier water systems engineering company in Kenya specializing in drainage, plumbing, sewer, and sustainable infrastructure solutions."
        />
        <meta
          name="keywords"
          content="TopDrain, About, Kenya water experts, drainage, sewer systems, plumbing, infrastructure"
        />
        <meta name="author" content="TopDrain WaterWorks LTD" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        {/* Open Graph and Twitter meta tags can be added here if needed */}
      </Helmet>
      <section
        className="text-white text-center py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${pipes})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          minHeight: '250px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <div className="container">
          <h1 className="fw-semibold display-5 mb-2">
            <span style={{ color: "rgba(208, 212, 216, 0.9)" }}>TopDrain WaterWorks LTD</span>
          </h1>
          <p className="lead fw-light" style={{ fontStyle: "italic", opacity: 0.9 }}>
            Flowing Solutions, Lasting Excellence!
          </p>
        </div>
      </section>
      {/* ...rest of the About page content... */}
    </div>
  );
}
