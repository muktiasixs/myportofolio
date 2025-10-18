// src/components/About.jsx
import React from 'react';
import profileImage from '../assets/profile.jpeg';

const About = () => {
  return (
    // Pola selang-seling: Hero (dark), About (darker-grey)
    <section id="about" className="py-24 bg-industrial-dark">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Kolom Gambar */}
          <div className="md:col-span-1 flex justify-center animate-fade-in">
            <img
              src={profileImage}
              alt="Foto Profil Dermagani Muktiasa"
              className="w-64 h-64 md:w-full md:h-auto object-cover rounded-lg shadow-2xl border-4 border-accent-steel"
            />
          </div>

          {/* Kolom Teks */}
          <div className="md:col-span-2 space-y-6 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-light-concrete mb-4">
              Tentang Saya
            </h2>
            <div className="text-lg leading-relaxed text-subtle-concrete space-y-4">
              <p>
                Halo! Saya Dermagani Muktiasa, mahasiswa Computer Science di Universitas Bina Nusantara (Binus) yang sedang berencana mengikuti program magang kampus selama 12 bulan untuk mengembangkan kemampuan teknis dan pengalaman profesional di bidang teknologi informasi.
              </p>
              <p>
                Saya memiliki pemahaman yang baik tentang pemrograman dan pengembangan web, serta tertarik pada <span className="font-semibold text-light-concrete">data, jaringan, manajemen sistem, desain, dan analisis</span>. Keterampilan ini didukung oleh penguasaan berbagai bahasa dan framework modern.
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