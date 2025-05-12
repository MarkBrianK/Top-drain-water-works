import React from "react";

export default function InformationCentre() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4">Information Centre</h2>
      <p className="text-center mb-5">
        Stay updated with the latest news, resources, and insights from TopDrain WaterWorks LTD.
      </p>

      <div className="list-group">
        <button className="list-group-item list-group-item-action text-start">
          🔹 [May 2025] Launch of New Water Supply Project in Turkana
        </button>
        <button className="list-group-item list-group-item-action text-start">
          🔹 [April 2025] TopDrain wins national award for sustainable engineering
        </button>
        <button className="list-group-item list-group-item-action text-start">
          🔹 [March 2025] New internship opportunities for engineering students
        </button>
      </div>
    </div>
  );
}
