// src/components/Hero.jsx
import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload } from 'react-icons/fa';
import StarryBackground from './StarryBackground';

const StatCard = ({ value, label, suffix = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? value : 0 },
    delay: 200,
    config: config.gentle,
  });

  return (
    <div ref={ref} className="bg-industrial-dark p-3 rounded-xl shadow-xl border border-accent-steel/20">
      <animated.p className="text-2xl md:text-3xl font-extrabold text-light-concrete mb-1">
        {number.to(n => `${Math.floor(n)}${suffix}`)}
      </animated.p>
      <p className="text-xs md:text-sm text-subtle-concrete">{label}</p>
    </div>
  );
};

const Hero = () => {
  return (
    
    <section 
      id="hero" 
      className="relative flex items-center justify-center min-h-screen text-center overflow-hidden" // Ensure overflow-hidden is kept for StarryBackground
    >
      
      <div 
        className="absolute inset-0 -z-10 overflow-hidden" // Removed previous gradient and animation classes
        style={{
          backgroundColor: '#4F4F52', // Fallback solid color
          background: 'linear-gradient(to bottom, #4F4F52, #7D7D82, #ACACAF, #ffffff)', // Dark gray to white gradient
        }}
      >
        <StarryBackground />
      </div>

      
      
      <div className="container mx-auto px-4 animate-fade-in-up">
        
        <div className="inline-block text-left">
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-light-concrete mb-4">
            Dermagani Muktiasa
          </h1>

          <TypeAnimation
            sequence={[
              'Mahasiswa Computer Science', 2000,
              'Aspiring Web Developer', 2000,
              'Software Developer', 2000,
              'Data Scientist & Analyst', 2000,
              'Management & Networking', 2000,
              'UI/UX Designer', 2000,
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
              href="https://drive.google.com/drive/folders/1jyRFZd1TTF4m_MQMNuKuTCEog6yARbd3?usp=sharing" // Ganti ini dengan link ke CV Anda
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-accent-steel text-accent-steel px-8 py-3 rounded-lg text-lg font-semibold 
                         hover:bg-sky-800 hover:text-bg-deep-industrial transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
                <FaDownload className="mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg px-4">
          
          <div className="grid grid-cols-3 gap-3">
              <StatCard value={12} label="Bulan Magang" />
              <StatCard value={5} label="Keahlian" suffix="+" />
              <StatCard value={100} label="Komitmen" suffix="%" />
          </div>
      </div>

    </section>
  );
};

export default Hero;