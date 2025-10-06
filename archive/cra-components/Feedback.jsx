import React from "react";
import { Helmet } from "react-helmet";

export default function Feedback() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Feedback | TopDrain WaterWorks LTD",
    "url": "https://www.topdrainlimited.com/feedback",
    "image": "https://www.topdrainlimited.com/Assets/Images/logo.png",
    "description": "We value your feedback at TopDrain WaterWorks LTD. Share your experience and help us improve our water and drainage services across Kenya.",
    "publisher": {
      "@type": "Organization",
      "name": "TopDrain Water Works LTD",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.topdrainlimited.com/Assets/Images/logo.png"
      }
    }
  };

  return (
    <div className="container py-5">
      <Helmet>
        <title>Feedback | TopDrain WaterWorks LTD</title>
        <meta
          name="description"
          content="We value your feedback at TopDrain WaterWorks LTD. Share your experience and help us improve our water and drainage services across Kenya."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

        {/* Open Graph */}
        <meta property="og:title" content="Feedback | TopDrain WaterWorks LTD" />
        <meta
          property="og:description"
          content="Let us know how we’re doing. Submit your feedback and help shape the future of TopDrain WaterWorks services."
        />
        <meta property="og:url" content="https://topdrainwaterworks.com/feedback" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Customer Feedback | TopDrain WaterWorks" />
        <meta name="twitter:description" content="Your input helps us grow. Submit your experience with TopDrain." />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://topdrainwaterworks.com/feedback" />
      </Helmet>
      <h1 className="fw-bold text-center mb-4">We Value Your Feedback</h1>
      <p className="text-center mb-4">
        Your thoughts help us improve our services. Please share your experience with TopDrain WaterWorks LTD.
      </p>

      <form
        action="https://formspree.io/f/movwknwp"
        method="POST"
        className="mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Feedback</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            placeholder="Write your feedback here..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}
