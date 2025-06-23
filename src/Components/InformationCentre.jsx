import React from "react";

export default function InformationCentre() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4">Information Centre</h2>
      <p className="text-center mb-5">
        Get updates on recent projects, service tips, and community impact stories from TopDrain WaterWorks LTD.
      </p>

      <div className="list-group">
        <button className="list-group-item list-group-item-action text-start">
          💧 [June 2025] Completed drainage trench and pipe layout for a residential development in Kiaritha, Kirinyaga.
        </button>
        <button className="list-group-item list-group-item-action text-start">
          🛠️ [May 2025] Overhead tank cleaning and pipe rerouting at Kinga'ara Road, Lavington – water pressure restored.
        </button>
        <button className="list-group-item list-group-item-action text-start">
          🐖 [May 2025] Installed automated nipple drinkers in pig stay for clean drinking water in Ngiriambu, Kirinyaga.
        </button>
        <button className="list-group-item list-group-item-action text-start">
          🚿 [April 2025] Full bathroom & kitchen renovation with concealed plumbing on Kinga'ara Road, Nairobi.
        </button>
        <button className="list-group-item list-group-item-action text-start">
          ☀️ [March 2025] Serviced solar water heater system and insulation in Lavington — improved energy efficiency.
        </button>
      </div>
    </div>
  );
}
