import React from "react";
import { Helmet } from "react-helmet";
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
  "description": "TopDrain Water Works LTD provides reliable solutions for flood control, plumbing, sewer systems, and water supply across Kenya."
};

export default function Home() {
  return (
    <main className="container py-5">
      <Helmet>
        <title>TopDrain Water Works LTD | Home</title>
        <meta name="description" content="TopDrain Water Works LTD is a leading water and civil engineering company offering sustainable solutions in Kenya and beyond." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

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
          <h1 className="fw-semibold">
            <span
              style={{
                display: "inline-block",
                color: "#007bff",
                padding: "0 5px"
              }}
            >
              Our Core Services
            </span>{" "}
          </h1>
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
                <div
                  className="card h-100 shadow-sm border-0"
                  style={{
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.style.boxShadow = "0 0.5rem 1rem rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 .125rem .25rem rgba(0,0,0,.075)";
                  }}
                >
                  <AdvancedImage
                    cldImg={cldImage}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{service.title}</h5>
                    <p className="card-text">{service.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
