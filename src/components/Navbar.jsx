// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = "block py-2 px-3 text-light-concrete hover:text-subtle-concrete md:hover:bg-transparent md:p-0 transition-colors duration-300";

  return (
    <nav 
    className="
      fixed top-0 left-0 right-0 z-50 
      bg-deep-industrial/70
      backdrop-blur-lg
      shadow-lg
      /* Garis putih (border-b) dihapus dari sini */
    "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-semibold whitespace-nowrap text-light-concrete">
              Dermagani M.
            </span>
          </a>
          
          {/* Tombol Menu Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-subtle-concrete rounded-lg md:hidden hover:bg-industrial-medium focus:outline-none focus:ring-2 focus:ring-accent-steel"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>

          {/* Menu Desktop */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-accent-steel rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li><a href="#hero" className={linkClass}>Home</a></li>
              <li><a href="#about" className={linkClass}>About</a></li>
              <li><a href="#skills" className={linkClass}>Skills</a></li>
              <li><a href="#projects" className={linkClass}>Projects</a></li>
              <li><a href="#contact" className={linkClass}>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 w-full bg-deep-industrial/95 backdrop-blur-lg shadow-lg">
          <ul className="flex flex-col items-center p-4 space-y-2">
            <li><a href="#hero" onClick={() => setIsOpen(false)} className={linkClass}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className={linkClass}>About</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)} className={linkClass}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className={linkClass}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className={linkClass}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;