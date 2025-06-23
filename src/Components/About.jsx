import React from "react";
import founder1 from "../Assets/Images/Victor.jpg";
import founder2 from "../Assets/Images/Jason.jpg";
import pipes from "../Assets/Images/pipes.jpg"

export default function About() {
  return (
    <div className="about-page">
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
             <span  style={{ color: "rgba(208, 212, 216, 0.9)" }}>TopDrain WaterWorks LTD</span>
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
            <img
              src={founder1}
              alt="Muriithi Mwangi"
              style={{
                width: "200px",
                height: "200px",
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
            <img
              src={founder2}
              alt="Maina Ndegwa"
              style={{
                width: "200px",
                height: "200px",
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
