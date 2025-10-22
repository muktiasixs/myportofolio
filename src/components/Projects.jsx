// src/components/Projects.jsx 
import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, useTransition, animated } from '@react-spring/web';
//project 1
import project1Image1 from '../assets/1project1.jpg';
//project 2
import project2Image1 from '../assets/2project1.png';
import project2Image2 from '../assets/2project2.png';
import project2Image3 from '../assets/2project3.png';
//project 3
import project3Image1 from '../assets/3project1.png';
import project3Image2 from '../assets/3project2.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  { id: 1, title: 'Game Development & Modding', 
    description: 'Developed game dan modded untuk kesengan dan hobby saya.', 
    images: [project1Image1], 
    link: 'https://drive.google.com/drive/folders/1jyRFZd1TTF4m_MQMNuKuTCEog6yARbd3?usp=sharing' },

  { id: 2, title: 'Website Development', 
    description: 'Web yang saya buat untuk tugas kuliah dan portofolio saya ini.', 
    images: [project2Image1, project2Image2, project2Image3], 
    link: 'https://drive.google.com/drive/folders/1jyRFZd1TTF4m_MQMNuKuTCEog6yARbd3?usp=sharing' },

  { id: 3, title: 'UI/UX Design', 
    description: 'Design figma dari tugas kuliah dan lomba ui/ux.', 
    images: [project3Image1, project3Image2], 
    link: 'https://drive.google.com/drive/folders/1jyRFZd1TTF4m_MQMNuKuTCEog6yARbd3?usp=sharing' },
];

const ProjectCard = ({ project, delay }) => {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: { mass: 1, tension: 120, friction: 14 },
    delay: delay,
  });

  const nextImage = useCallback(() => {
    setIndex(state => (state + 1) % project.images.length);
  }, [project.images.length]);

  const prevImage = () => {
    setIndex(state => (state - 1 + project.images.length) % project.images.length);
  };

  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(nextImage, 5000); 
      return () => clearInterval(timer);
    }
  }, [index, isHovering, nextImage]);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, position: 'absolute' },
    config: { duration: 500 },
  });

  return (
    <animated.div 
      style={cardAnimation} 
      ref={ref} 
      className="bg-industrial-medium rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        {transitions((style, i) => (
          <animated.div
            style={{ ...style, width: '100%', height: '100%' }}
            className="absolute top-0 left-0"
          >
            <img
              src={project.images[i]}
              alt={`${project.title} - slide ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              draggable="false"
            />
          </animated.div>
        ))}
        {project.images.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-black/60"><FaChevronLeft /></button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-black/60"><FaChevronRight /></button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {project.images.map((_, i) => (
                <div key={i} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${index === i ? 'bg-white' : 'bg-white/50'}`}></div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-light-concrete">{project.title}</h3>
        <p className="text-subtle-concrete mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-light-concrete text-deep-industrial px-5 py-2 rounded-lg text-sm font-semibold hover:bg-amber-300 transition-colors duration-300 transform group-hover:scale-105"
        >
          Lihat Proyek
          <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </animated.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionFadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(30px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (

    <section id="projects" className="py-24 bg-industrial-dark">
      <animated.div style={sectionFadeIn} ref={ref} className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-light-concrete">Proyek Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 150} />
          ))}
        </div>
      </animated.div>
    </section>
  );
};

export default Projects;