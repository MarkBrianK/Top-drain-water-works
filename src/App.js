import React, { useEffect, useState } from 'react';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LoadingSpinner from './Resources/LoadingSpinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? <LoadingSpinner /> : (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
