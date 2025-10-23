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
      <animated.div style={animation} ref={ref} className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-light-concrete">Pendidikan</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="group relative overflow-hidden bg-industrial-medium p-8 rounded-lg shadow-lg flex flex-col sm:flex-row items-center gap-8 transition-all duration-300 hover:shadow-2xl  border border-transparent">
            <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 group-hover:animate-shine"></div>
            <div className="flex-shrink-0">
              <img 
                src={binus} 
                alt="Logo Universitas Bina Nusantara" 
                className="h-24 w-24 object-contain bg-white p-2 rounded-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-light-concrete">
                Universitas Bina Nusantara
              </h3>
              <p className="text-lg text-subtle-concrete mt-1">
                S1 Computer Science
              </p>
              <p className="text-md text-subtle-concrete/70 mt-2">
                2023 - 2027
              </p>
            </div>
          </div>

          
          <div className="group relative overflow-hidden bg-industrial-medium p-8 rounded-lg shadow-lg flex flex-col sm:flex-row items-center gap-8 transition-all duration-300 hover:shadow-2xl  border border-transparent">
            <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 group-hover:animate-shine"></div>
            <div className="flex-shrink-0">
              <img 
                src='https://smkperguruancikini.sch.id/wp-content/uploads/2016/11/logo.svg'
                alt="Logo SMK 1 Perguruan Cikini" 
                className="h-24 w-24 object-contain bg-white p-2 rounded-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-light-concrete">
                SMK 1 Perguruan Cikini
              </h3>
              <p className="text-lg text-subtle-concrete mt-1">Rekayasa Perangkat Lunak</p>
              <p className="text-md text-subtle-concrete/70 mt-2">2020 - 2023</p>
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default Education;
