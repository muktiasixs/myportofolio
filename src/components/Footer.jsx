// src/components/Footer.jsx
import React from 'react';
import { FaInstagram, FaLinkedin, FaTiktok, FaGithub, FaYoutube, FaDiscord } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaLinkedin />, href: '#' },
  { icon: <FaInstagram />, href: '#' },
  { icon: <FaTiktok />, href: '#' },
  { icon: <FaGithub />, href: '#' },
  { icon: <FaYoutube />, href: '#' },
  { icon: <FaDiscord />, href: '#' },
];

const Footer = () => {
  return (
    
    <footer className="bg-industrial-medium border-t border-accent-steel/30 py-8"> 
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-light-concrete mb-1"> 
            Dermagani Muktiasa
          </h3>
          <p className="text-sm text-subtle-concrete"> 
            © {new Date().getFullYear()} Dermagani Muktiasa. All Rights Reserved.
          </p>
        </div>

        {/* Bagian Kanan: Ikon Sosial Media */}
        <div className="flex space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle-concrete hover:text-light-concrete transition-colors duration-300" 
              aria-label={social.icon.type.name}
            >
              {React.cloneElement(social.icon, { size: 24 })}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;