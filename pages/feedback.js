import React from "react";
import Head from "next/head";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Feedback | TopDrain WaterWorks LTD",
  "url": "https://www.topdrainlimited.com/feedback",
  "image": "/Assets/Images/logo.png",
  "description": "We value your feedback at TopDrain WaterWorks LTD. Share your experience and help us improve our water and drainage services across Kenya.",
  "publisher": {
    "@type": "Organization",
    "name": "TopDrain Water Works LTD",
    "logo": {
      "@type": "ImageObject",
      "url": "/Assets/Images/logo.png"
    }
  }
};

export default function Feedback() {
  return (
    <div className="container py-5">
      <Head>
        <title>Feedback | TopDrain WaterWorks LTD</title>
        <meta
          name="description"
          content="We value your feedback at TopDrain WaterWorks LTD. Share your experience and help us improve our water and drainage services across Kenya."
        />
        <meta
          name="keywords"
          content="TopDrain feedback, customer reviews, water services Kenya, drainage service feedback"
        />
        <meta name="author" content="TopDrain WaterWorks LTD" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
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
