// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'; 
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact'; 
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-deep-industrial text-light-concrete min-h-screen font-sans">
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-deep-industrial z-50"> 
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-light-concrete mb-4"></div>
            <p className="text-light-concrete text-lg">Loading Portofolio...</p>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <SocialMedia />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;