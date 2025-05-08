import React from "react";

export default function About() {
  return (
    <div className="about-page">
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold">About TopDrain WaterWorks LTD</h1>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="fw-bold mb-4">Who We Are</h2>
        <p>
          TopDrain Water Works LTD is a leading water and civil engineering company
          based in Nairobi, Kenya. We are committed to delivering innovative, sustainable,
          and high-quality solutions in water infrastructure, construction, and consultancy services.
          Our goal is to improve lives through better access to clean water and modern infrastructure.
        </p>
      </section>

      <section className="bg-light py-5">
        <div className="container">
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
        </div>
      </section>
    </div>
  );
}
