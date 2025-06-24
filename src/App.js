import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import LoadingSpinner from './Resources/LoadingSpinner';
import ScrollToTop from './Resources/ScrollTop';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/ContactUs';
import Careers from './Components/Careers';
import Feedback from './Components/Feedback';
import InfoCentre from './Components/InformationCentre';
import Projects from './Components/Projects';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
            <LoadingSpinner />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/info" element={<InfoCentre />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        )}
      </main>
      <Footer />
    </Router>
  );
}
