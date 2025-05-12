import React from "react";
import founder1 from "../Assets/Images/Victor.jpg";
import founder2 from "../Assets/Images/Jason.jpg";

export default function About() {
  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold">About TopDrain WaterWorks LTD</h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="container py-5">
        <h2 className="fw-bold mb-4">Who We Are</h2>
        <p>
          TopDrain Water Works LTD is a leading water and civil engineering company
          based in Nairobi, Kenya. We are committed to delivering innovative, sustainable,
          and high-quality solutions in water infrastructure, construction, and consultancy services.
          Our goal is to improve lives through better access to clean water and modern infrastructure.
        </p>
      </section>

      {/* Vision, Mission, Values */}
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

      {/* Founders Section */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-4">Meet Our Founders</h2>
        <div className="row text-center">
          <div className="col-md-6 mb-4">
            <img
              src={founder1}
              alt="Muriithi Mwangi"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "contain",
                objectPosition: "center",
                backgroundColor: "#fff",
                padding: "5px",
                border: "2px solid #ddd"
              }}
            />

            <h5 className="fw-bold">Muriithi Mwangi</h5>
            <p className="text-muted">Director of Technical Operations & Strategic Development</p>
            <p>
              Muriithi has over 8 years of hands-on experience in water works and infrastructure development.
              As Director of Technical Operations & Strategic Development, he leads project planning,
              oversees execution, and ensures the adoption of cutting-edge water solutions across all initiatives.
            </p>
          </div>

          <div className="col-md-6 mb-4">
            <img
              src={founder2}
              alt="Maina Ndegwa"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "contain",
                objectPosition: "center",
                backgroundColor: "#fff",
                padding: "5px",
                border: "2px solid #ddd"
              }}
            />

            <h5 className="fw-bold">Maina Ndegwa</h5>
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
