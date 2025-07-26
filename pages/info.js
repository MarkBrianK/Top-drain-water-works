import React from "react";
import { Helmet } from "react-helmet";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Information Centre | TopDrain WaterWorks LTD",
  "url": "https://www.topdrainlimited.com/info",
  "image": "/Assets/Images/logo.png",
  "description": "Stay updated with TopDrain WaterWorks' latest plumbing and drainage projects, community stories, and maintenance tips across Kenya.",
  "publisher": {
    "@type": "Organization",
    "name": "TopDrain Water Works LTD",
    "logo": {
      "@type": "ImageObject",
      "url": "/Assets/Images/logo.png"
    }
  }
};

export default function InformationCentre() {
  return (
    <div className="container py-5">
      <Helmet>
        <title>Information Centre | TopDrain WaterWorks LTD</title>
        <meta
          name="description"
          content="Stay updated with TopDrain WaterWorks' latest plumbing and drainage projects, community stories, and maintenance tips across Kenya."
        />
        <meta
          name="keywords"
          content="TopDrain updates, plumbing news Kenya, drainage projects, water infrastructure, Lavington, Nyeri, Kirinyaga"
        />
        <meta name="author" content="TopDrain WaterWorks LTD" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
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
          🐖 [May 2025] Installed automated nipple drinkers in pig stay for clean drinking water in Mukurueini, Nyeri.
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
