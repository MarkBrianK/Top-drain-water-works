import React from "react";
import Head from "next/head";
import servicesData from "../src/Data/services.json";
import carouselImages from "../src/Data/carouselImages.json";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { auto as qualityAuto } from "@cloudinary/url-gen/qualifiers/quality";

const cld = new Cloudinary({ cloud: { cloudName: "deqzkva98" } });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TopDrain Water Works LTD",
  "image": "/Assets/Images/logo.png",
  "url": "https://www.topdrainlimited.com/",
  "telephone": "+254 702 263 360",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nairobi, Kenya",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi",
    "postalCode": "",
    "addressCountry": "KE"
  },
  "description": "TopDrain WaterWorks LTD is Kenya's trusted water and drainage engineering company. We deliver sustainable plumbing, drainage, and sewer solutions for homes, businesses, and communities.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254 702 263 360",
    "contactType": "customer service",
    "email": "info@topdrainlimited.com"
  }
};

export default function Home() {
  return (
    <main className="container py-5">
      <Head>
        <title>Drainage Services Nairobi | Plumbing & Sewer Works Kenya | TopDrain WaterWorks</title>
        <meta
          name="description"
          content="Expert drainage services in Nairobi, Kenya. TopDrain WaterWorks provides plumbing, sewer repair, water heater installation, and flood control solutions. Call +254 702 263 360 for emergency plumbing services."
        />
        <meta
          name="keywords"
          content="drainage services Nairobi, plumber Nairobi Kenya, sewer repair Nairobi, water heater installation Kenya, emergency plumbing Nairobi, drain cleaning Nairobi, flood control Kenya, water tank installation Nairobi"
        />
        <meta name="author" content="TopDrain WaterWorks LTD" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.topdrainlimited.com/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

      <section className="mb-5">
        <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner rounded-4 overflow-hidden">
            {carouselImages.map((image, index) => {
              const cldImage = cld.image(image.publicId).format(auto()).quality(qualityAuto());

              return (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                  style={{ height: "500px" }}
                >
                  <div className="position-relative h-100">
                    <AdvancedImage
                      cldImg={cldImage}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        background: "linear-gradient(to bottom,rgb(182, 195, 231),rgb(140, 170, 214))"
                      }} />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                      <h5>{image.title}</h5>
                      <p>{image.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#imageCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#imageCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <div className="text-center mb-5">
          <div className="hero-section p-5 rounded-4 mb-4" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <h1 className="fw-bold mb-4 display-5">
              Professional Drainage & Plumbing Services in Nairobi, Kenya
            </h1>
            <p className="lead mb-4 fs-5">
              Expert water solutions for homes, businesses, and communities across Kenya.
              Emergency plumbing services available 24/7.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="tel:+254702263360" className="btn btn-light btn-lg px-4 py-3 rounded-pill shadow-sm">
                <i className="bi bi-telephone me-2"></i>
                Call Now: +254 702 263 360
              </a>
              <a href="/contact" className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill">
                <i className="bi bi-envelope me-2"></i>
                Get Quote
              </a>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {servicesData.map((service, index) => {
            const cldImage = cld
              .image(service.publicId)
              .format(auto())
              .quality(qualityAuto())
              .resize(scale().width(600));

            return (
              <div className="col" key={index}>
                <a href={service.link} className="text-decoration-none">
                  <div
                    className="card h-100 border-0 service-card"
                    style={{
                      transition: "all 0.4s ease",
                      cursor: "pointer",
                      borderRadius: "20px",
                      overflow: "hidden",
                      background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
                    }}
                  >
                    <div className="position-relative">
                      <AdvancedImage
                        cldImg={cldImage}
                        className="card-img-top"
                        style={{ height: "220px", objectFit: "cover" }}
                      />
                      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                           style={{
                             background: "linear-gradient(45deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9))",
                             opacity: 0,
                             transition: "opacity 0.3s ease"
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.opacity = "1";
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.opacity = "0";
                           }}
                      >
                        <span className="text-white fw-bold fs-5">
                          <i className="bi bi-arrow-right-circle me-2"></i>
                          Learn More
                        </span>
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <h5 className="card-title fw-bold mb-3 text-primary">{service.title}</h5>
                      <p className="card-text text-muted">{service.desc}</p>
                      <div className="mt-3">
                        <small className="text-primary fw-semibold">
                          Click to learn more <i className="bi bi-arrow-right ms-1"></i>
                        </small>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="mt-5">
        <div className="emergency-section p-5 rounded-4" style={{
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
          color: 'white',
          boxShadow: '0 15px 35px rgba(255, 107, 107, 0.3)'
        }}>
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="d-flex align-items-center mb-3">
                <div className="emergency-icon me-3" style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="bi bi-telephone fs-2"></i>
                </div>
                <div>
                  <h2 className="h3 mb-1 fw-bold">Emergency Plumbing Services</h2>
                  <p className="mb-0 opacity-90">Available 24/7 in Nairobi & Surrounding Areas</p>
                </div>
              </div>
              <p className="mb-0 fs-5">
                Blocked drains, burst pipes, or water leaks? Our expert plumbers are ready to help you immediately.
              </p>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <a href="tel:+254702263360"
                 className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow-lg"
                 style={{
                   background: 'white',
                   color: '#ee5a24',
                   fontWeight: 'bold',
                   fontSize: '1.1rem',
                   transition: 'all 0.3s ease'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'scale(1.05)';
                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'scale(1)';
                   e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                 }}
              >
                <i className="bi bi-telephone me-2"></i>
                Call Now: +254 702 263 360
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="mt-5">
        <div className="text-center mb-5">
          <h2 className="h3 mb-3 fw-bold">We Serve All Areas in Nairobi and Kenya</h2>
          <p className="text-muted fs-5">Professional plumbing and drainage services across the country</p>
        </div>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="service-area-card p-4 h-100 rounded-3" style={{
              background: 'linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%)',
              border: '1px solid #dee2e6',
              transition: 'all 0.3s ease'
            }}>
              <div className="text-center mb-3">
                <i className="bi bi-building text-primary fs-1"></i>
              </div>
              <h6 className="fw-bold text-primary mb-3">Nairobi Central</h6>
              <ul className="list-unstyled small text-muted mb-0">
                <li className="mb-1">CBD • Westlands • Kilimani</li>
                <li className="mb-1">Karen • Runda • Lavington</li>
                <li className="mb-1">Muthaiga • Kileleshwa</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service-area-card p-4 h-100 rounded-3" style={{
              background: 'linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%)',
              border: '1px solid #dee2e6',
              transition: 'all 0.3s ease'
            }}>
              <div className="text-center mb-3">
                <i className="bi bi-geo-alt text-success fs-1"></i>
              </div>
              <h6 className="fw-bold text-success mb-3">East Nairobi</h6>
              <ul className="list-unstyled small text-muted mb-0">
                <li className="mb-1">Eastleigh • South B • South C</li>
                <li className="mb-1">Embakasi • Umoja • Donholm</li>
                <li className="mb-1">Pipeline • Kayole</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service-area-card p-4 h-100 rounded-3" style={{
              background: 'linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%)',
              border: '1px solid #dee2e6',
              transition: 'all 0.3s ease'
            }}>
              <div className="text-center mb-3">
                <i className="bi bi-compass text-warning fs-1"></i>
              </div>
              <h6 className="fw-bold text-warning mb-3">North Nairobi</h6>
              <ul className="list-unstyled small text-muted mb-0">
                <li className="mb-1">Kasarani • Ruaraka • Kahawa</li>
                <li className="mb-1">Thika Road • Kiambu • Thika</li>
                <li className="mb-1">Ruiru • Juja</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service-area-card p-4 h-100 rounded-3" style={{
              background: 'linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%)',
              border: '1px solid #dee2e6',
              transition: 'all 0.3s ease'
            }}>
              <div className="text-center mb-3">
                <i className="bi bi-globe text-info fs-1"></i>
              </div>
              <h6 className="fw-bold text-info mb-3">Other Counties</h6>
              <ul className="list-unstyled small text-muted mb-0">
                <li className="mb-1">Mombasa • Kisumu • Nakuru</li>
                <li className="mb-1">Eldoret • Nyeri • Kirinyaga</li>
                <li className="mb-1">Machakos • Kajiado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .service-area-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        }

        .hero-section {
          animation: fadeInUp 1s ease-out;
        }

        .emergency-section {
          animation: fadeInUp 1s ease-out 0.2s both;
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

        .service-card:hover .card-img-top {
          transform: scale(1.1);
          transition: transform 0.4s ease;
        }
      `}</style>
    </main>
  );
}
