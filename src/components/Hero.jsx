// src/components/Hero.jsx
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section 
      id="hero" 
      
      className="relative flex items-center justify-center min-h-screen text-center overflow-hidden"
    >
      
      <div 
        className="absolute inset-0 -z-10 
                   bg-gradient-to-r from-bg-deep-industrial via-bg-industrial-dark to-bg-deep-industrial 
                   animate-gradient-bg"
        style={{ backgroundSize: '200% 200%' }}
      ></div>

      
      <div className="container mx-auto px-4 z-10 animate-fade-in-up relative">
        
        
        <div className="inline-block text-left">
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-light-concrete mb-4">
            Dermagani Muktiasa
          </h1>

          <TypeAnimation
            sequence={[
              'Mahasiswa Computer Science', 2000,
              'Aspiring Web Developer', 2000,
              'UI/UX Enthusiast', 2000,
              'Ready for Internship!', 2000,
            ]}
            wrapper="p"
            speed={50}
            className="text-xl md:text-2xl text-subtle-concrete mb-8"
            repeat={Infinity}
          />

          
          <div className="flex flex-col sm:flex-row gap-4">
            
            
            <a
              href="#projects"
              className="inline-block bg-text-light-concrete text-bg-deep-industrial px-8 py-3 rounded-lg text-lg font-semibold 
                         hover:bg-accent-steel transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Lihat Pekerjaan Saya
            </a>
            
            
            <a
              href="/dermagani_muktiasa_cv.pdf" // Ganti ini dengan path ke file CV
              download
              className="inline-block border border-accent-steel text-accent-steel px-8 py-3 rounded-lg text-lg font-semibold 
                         hover:bg-yellow-700 hover:text-bg-deep-industrial transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;