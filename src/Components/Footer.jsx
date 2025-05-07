import React from "react";

export default function Footer() {
  return (
    <footer
      className="text-white position-relative"
      style={{
        background: "linear-gradient(135deg,rgb(86, 150, 246), #0049b7)",
        clipPath: "ellipse(100% 100% at 50% 100%)",
        paddingTop: "40px",
        paddingBottom: "80px",
        marginTop: "60px"
      }}
    >
      <div className="container text-center">
        <h5>Top Drain Water Works</h5>
        <p className="mb-1">Contact Us | About Us</p>
        <small>© 2025 All rights reserved</small>
      </div>
    </footer>
  );
}
