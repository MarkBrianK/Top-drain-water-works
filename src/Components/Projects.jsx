import React from "react";

export default function Projects() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-4">Our Projects</h1>
      <p className="text-center mb-4">
        A showcase of our recent and ongoing water and infrastructure projects.
      </p>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Nairobi Borehole Drilling Project</h5>
              <p className="card-text">
                Completed in 2024 – Supplied clean water to 5,000+ residents in Eastlands.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Kisumu Flood Mitigation</h5>
              <p className="card-text">
                Ongoing project to redesign stormwater systems in flood-prone areas.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Marsabit Rural Sanitation</h5>
              <p className="card-text">
                Partnered with local government to build sustainable sanitation facilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
