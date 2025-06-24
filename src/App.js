import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from 'react-router-dom';

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

// Wrapper to handle both initial and route transition loading
function AppRoutes() {
  const location = useLocation();
  const navigationType = useNavigationType();

  const [routeLoading, setRouteLoading] = useState(true);

  useEffect(() => {
    setRouteLoading(true);

    const timer = setTimeout(() => {
      setRouteLoading(false);
    }, 600); // short delay to simulate loading

    return () => clearTimeout(timer);
  }, [location, navigationType]);

  return routeLoading ? (
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
  );
}

export default function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1000); // initial load spinner (visible 1s)
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        {initialLoading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
            <LoadingSpinner />
          </div>
        ) : (
          <AppRoutes />
        )}
      </main>
      <Footer />
    </Router>
  );
}
