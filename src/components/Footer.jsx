// src/components/Footer.jsx
import React from 'react';
import { FaInstagram, FaLinkedin, FaTiktok, FaGithub, FaYoutube, FaDiscord } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/dermagani-muktiasa-326447271' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/mutiasasuu' },
  { icon: <FaTiktok />, href: 'https://www.tiktok.com/@nyaruru_' },
  { icon: <FaGithub />, href: 'https://github.com/muktiasixs' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/@m4n1s' },
  { icon: <FaDiscord />, href: 'https://discordid.netlify.app/?id=343930986100424704' },
];

const Footer = () => {
  return (

    <footer className="bg-bg-footer-gray border-t border-accent-steel/30 py-8"> 
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        

        <div className="text-center md:text-left">

          <h3 className="text-xl font-semibold text-text-white mb-1"> 
            Dermagani Muktiasa
          </h3>

          <p className="text-sm text-text-white/70"> 
            © {new Date().getFullYear()} Dermagani Muktiasa. All Rights Reserved.
          </p>
        </div>


        <div className="flex flex-col items-center md:items-end gap-4">
          

          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"

                className="text-text-white/70 hover:text-text-white transition-colors duration-300" 
                aria-label={social.icon.type.name}
              >
                {React.cloneElement(social.icon, { size: 24 })}
              </a>
            ))}
          </div>
          

          <div className="flex items-center gap-3 text-sm text-text-white/70">
            <span>Universitas Bina Nusantara</span>
            <span>•</span>
            <span>Jakarta, Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;