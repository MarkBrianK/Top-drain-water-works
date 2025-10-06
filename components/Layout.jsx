import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 page-main">
        <div className="site-container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
