import React from "react";

export default function Feedback() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-4">We Value Your Feedback</h1>
      <p className="text-center mb-4">
        Your thoughts help us improve our services. Please share your experience with TopDrain WaterWorks LTD.
      </p>
      <form className="mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Feedback</label>
          <textarea className="form-control" id="message" rows="4"></textarea>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
}
