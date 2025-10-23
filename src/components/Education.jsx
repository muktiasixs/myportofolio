// src/components/Education.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import binus from '../assets/binus.png';


const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(40px)' : 'translateY(0px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <section id="education" className="py-20 bg-industrial-dark">
      <animated.div style={animation} ref={ref} className="container mx-auto px-4 max-w-6xl">
        <div className="bg-industrial-medium p-8 rounded-lg shadow-lg flex flex-col sm:flex-row items-center gap-8 transition-all duration-300 hover:shadow-2xl hover:border-accent-steel/50 border border-transparent">
          <div className="flex-shrink-0">
            <img 
              img={binus} 
              src={binus} 
              alt="Logo Universitas Bina Nusantara" 
              className="h-40 w-40 md:h-28 md:w-28 object-contain bg-white p-2 rounded-md"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-light-concrete">
              Universitas Bina Nusantara
            </h3>
            <p className="text-lg md:text-xl text-subtle-concrete mt-1">
              Computer Science
            </p>
            <p className="text-md text-subtle-concrete/70 mt-2">
              2023 - 2027
            </p>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default Education;
