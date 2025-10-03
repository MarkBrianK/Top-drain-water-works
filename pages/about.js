import React from "react";
import Image from "next/image";
import Head from "next/head";

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
      <Head>
        <title>About TopDrain WaterWorks | Leading Drainage & Plumbing Company in Nairobi Kenya</title>
        <meta
          name="description"
          content="Meet TopDrain WaterWorks LTD, Kenya's premier drainage and plumbing experts. 15+ years of experience in sewer systems, water tank installation, and flood control solutions across Nairobi and Kenya."
        />
        <meta
          name="keywords"
          content="about TopDrain, drainage experts Kenya, plumbing company Nairobi, sewer systems Kenya, water infrastructure Nairobi, drainage contractors Kenya, plumbing services Nairobi"
        />
        <meta name="author" content="TopDrain WaterWorks LTD" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.topdrainlimited.com/about" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        {/* Open Graph */}
        <meta property="og:title" content="About Us | TopDrain WaterWorks LTD" />
        <meta
          property="og:description"
          content="Meet the team behind Kenya's top water and drainage engineering company. Learn more about our mission, values, and founders."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://topdrainwaterworks.com/about" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | TopDrain WaterWorks LTD" />
        <meta
          name="twitter:description"
          content="We design and deliver top-notch water systems across Kenya. Get to know the people behind TopDrain WaterWorks."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
        <meta name="twitter:site" content="@_topdrain" />
        <meta name="twitter:creator" content="@_topdrain" />
        <link rel="canonical" href="https://topdrainwaterworks.com/about" />
      </Head>
      <section
        className="text-white text-center py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/Assets/Images/pipes.jpg)`,
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

      {/* Company Overview */}
      <section className="container py-5">
        <h2 className="fw-bold mb-4">Who We Are</h2>
        <p>
          TopDrain Waterworks Limited is a premier water systems engineering company
          dedicated to delivering high-quality, sustainable, and innovative solutions across Kenya.
          We specialize in flood control, plumbing works, sewer management, drainage works,
          firefighting systems, water supply systems, and drainage maintenance and repairs.
        </p>
        <p>
          With a dynamic team of experienced engineers, technicians, and project managers — many with over 8 years of hands-on experience — we pride ourselves on combining technical expertise with local knowledge to meet the unique water infrastructure needs of residential, commercial, and public-sector clients.
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Our goal is simple: </span>to create resilient water and drainage systems that protect communities, conserve resources, and enable growth.
        </p>
        <p>
          Whether it's managing stormwater in flood-prone areas, installing efficient plumbing systems, or providing 24/7 maintenance support, TopDrain Waterworks is your trusted partner in building water-smart environments.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Why Choose Us</h2>
          <ul className="list-unstyled text-center">
            <li className="mb-3">✅ Proven track record in complex water and drainage projects</li>
            <li className="mb-3">✅ A dedicated team of certified professionals</li>
            <li className="mb-3">✅ Commitment to quality workmanship and environmental sustainability</li>
            <li className="mb-3">✅ Reliable support from design to maintenance</li>
          </ul>
          <p className="text-center fw-semibold mt-4">Let’s build better water systems — together.</p>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">Our Vision</h4>
            <p>
              To be the most trusted water and infrastructure solutions provider in Africa,
              delivering excellence and sustainability in every project.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">Our Mission</h4>
            <p>
              To offer reliable and innovative engineering services that meet the water
              and infrastructure needs of communities and institutions across the region.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">Our Core Values</h4>
            <ul className="list-unstyled text-start d-inline-block mx-auto">
              <li className="mb-2">✅ <span className="ms-2">Integrity</span></li>
              <li className="mb-2">✅ <span className="ms-2">Professionalism</span></li>
              <li className="mb-2">✅ <span className="ms-2">Innovation</span></li>
              <li className="mb-2">✅ <span className="ms-2">Teamwork</span></li>
              <li className="mb-2">✅ <span className="ms-2">Sustainability</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-4">Meet Our Founders</h2>
        <div className="row text-center">
          <div className="col-md-6 mb-4">
            <Image
              src="/Assets/Images/Victor.jpg"
              alt="Muriithi Mwangi"
              width={200}
              height={200}
              style={{
                borderRadius: "50%",
                objectFit: "contain",
                objectPosition: "center",
                backgroundColor: "#fff",
                padding: "5px",
                border: "2px solid #ddd"
              }}
            />
            <h5 className="fw-bold mt-3">Muriithi Mwangi</h5>
            <p className="text-muted">Director of Technical Operations & Strategic Development</p>
            <p>
              Muriithi has over 8 years of hands-on experience in water works and infrastructure development.
              As Director of Technical Operations & Strategic Development, he leads project planning,
              oversees execution, and ensures the adoption of cutting-edge water solutions across all initiatives.
            </p>
          </div>

          <div className="col-md-6 mb-4">
            <Image
              src="/Assets/Images/Jason.jpg"
              alt="Maina Ndegwa"
              width={200}
              height={200}
              style={{
                borderRadius: "50%",
                objectFit: "contain",
                objectPosition: "center",
                backgroundColor: "#fff",
                padding: "5px",
                border: "2px solid #ddd"
              }}
            />
            <h5 className="fw-bold mt-3">Maina Ndegwa</h5>
            <p className="text-muted">Business Development Director - Water Infrastructure</p>
            <p>
              Maina Ndegwa is a seasoned expert in water infrastructure with a strong focus on business development and stakeholder engagement.
              As Business Development Director – Water Infrastructure, he drives strategic partnerships, identifies growth opportunities,
              and champions client-centered solutions that align with TopDrain's mission of delivering sustainable water systems across the region.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
