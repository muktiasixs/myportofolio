// src/components/About.jsx
import React from 'react';
import profileImage from '../assets/profile.png';
import Tilt from 'react-parallax-tilt';
import FloatingShapes from './FloatingShapes';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    
    <section id="about" ref={ref} className="relative py-24 bg-industrial-dark overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <FloatingShapes />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          <div className={`md:col-span-1 flex justify-center transition-opacity duration-1000 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.20}
              glarePosition="all"
              className="w-64 h-64 md:w-full md:h-auto rounded-lg shadow-2xl group relative overflow-hidden border-4 border-accent-steel transition-transform duration-300 hover:scale-120"
            >
              <img
                src={profileImage}
                alt="Foto Profil Dermagani Muktiasa"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 group-hover:animate-shine"></div>
            </Tilt>
          </div>

          
          <div className={`md:col-span-2 space-y-6 transition-all duration-1000 delay-300 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-4xl font-bold text-light-concrete mb-4">
              About Me
            </h2>
            <div className="text-lg leading-relaxed text-subtle-concrete space-y-4">
              <p>
                Hello! I'm Dermagani Muktiasa, a Computer Science student at Bina Nusantara University (Binus) planning to participate in a 12-month campus internship program to develop my technical skills and professional experience in the information technology field.
              </p>
              <p>
                I have a good understanding of programming and web development, with an interest in <span className="font-semibold text-light-concrete">data, networking, system management, Web & Software Dev, and UI/UX design</span>. These skills are supported by proficiency in various modern languages and frameworks.
              </p>
              <p>
                I am known for being a disciplined, responsible, and highly integral individual. I believe that working with honesty and professionalism will help me make a positive impact and contribute to the company's advancement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;