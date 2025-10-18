// src/components/Projects.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.png';

const projects = [
  { id: 1, title: 'E-commerce Website Development', description: 'Developed a responsive e-commerce platform...', image: project1Image, link: '#' },
  { id: 2, title: 'Data Analysis Dashboard', description: 'Created an interactive dashboard for visualizing sales data...', image: project2Image, link: '#' },
  { id: 3, title: 'Mobile App UI/UX Design', description: 'Designed a user-friendly interface for a mobile productivity app...', image: project3Image, link: '#' },
];

const ProjectCard = ({ project, delay }) => {
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

  return (
    // KARTU: Menggunakan bg-industrial-medium agar bayangan terlihat
    <animated.div style={cardAnimation} ref={ref} className="bg-industrial-medium rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-light-concrete">{project.title}</h3>
        <p className="text-subtle-concrete mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-light-concrete text-deep-industrial px-5 py-2 rounded-lg text-sm font-semibold hover:bg-accent-steel transition-colors duration-300 transform group-hover:scale-105"
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
    // Pola selang-seling: Skills (deep-dark), Projects (dark-grey)
    <section id="projects" className="py-24 bg-industrial-dark">
      <animated.div style={sectionFadeIn} ref={ref} className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-light-concrete">My Projects</h2>
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