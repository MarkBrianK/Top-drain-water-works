import React from "react";

export default function Careers() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-4">Join Our Team</h1>
      <p className="text-center mb-5">
        At TopDrain WaterWorks LTD, we are always looking for passionate and talented individuals to join our mission.
      </p>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Water Engineer</strong> – Nairobi (Full-time)
        </li>
        <li className="list-group-item">
          <strong>Project Manager</strong> – Kisumu (Contract)
        </li>
        <li className="list-group-item">
          <strong>Intern: Civil Engineering</strong> – Mombasa (3-month internship)
        </li>
      </ul>
      <p className="mt-4">
        To apply, send your CV and cover letter to <a href="mailto:careers@topdrainlimited.com">careers@topdrainlimited.com</a>
      </p>
    </div>
  );
}
