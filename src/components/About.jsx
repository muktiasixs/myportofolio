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
              Tentang Saya
            </h2>
            <div className="text-lg leading-relaxed text-subtle-concrete space-y-4">
              <p>
                Halo! Saya Dermagani Muktiasa, mahasiswa Computer Science di Universitas Bina Nusantara (Binus) yang sedang berencana mengikuti program magang kampus selama 12 bulan untuk mengembangkan kemampuan teknis dan pengalaman profesional di bidang teknologi informasi.
              </p>
              <p>
                Saya memiliki pemahaman yang baik tentang pemrograman dan pengembangan web, serta tertarik pada <span className="font-semibold text-light-concrete">data, jaringan, manajemen sistem, Web & Sofware Dev, dan desain UI/UX</span>. Keterampilan ini didukung oleh penguasaan berbagai bahasa dan framework modern.
              </p>
              <p>
                Saya dikenal sebagai pribadi yang disiplin, bertanggung jawab, dan menjunjung tinggi integritas. Saya percaya bahwa bekerja dengan jujur dan profesional dapat membantu saya memberikan dampak positif serta ikut memajukan perusahaan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;