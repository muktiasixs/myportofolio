// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = "block py-2 px-3 text-light-concrete hover:text-subtle-concrete md:hover:bg-transparent md:p-0 transition-colors duration-300 " +
                    "relative " + 
                    "after:content-[''] " + 
                    "after:absolute " +
                    "after:bottom-0 " + 
                    "after:left-0 " +
                    "after:w-full " + 
                    "after:h-0.5 " + 
                    "after:bg-accent-steel " + 
                    "after:scale-x-0 " + 
                    "after:origin-middle " + 
                    "after:transition-transform after:duration-300 after:ease-out " + 
                    "hover:after:scale-x-100"; 

  return (
    <nav 
    className="
      fixed top-0 left-0 right-0 z-50 
      
      bg-deep-industrial         
      md:bg-deep-industrial/80   
      md:backdrop-blur-lg        
      shadow-lg
    "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-semibold whitespace-nowrap text-light-concrete">
              Dermagani M.
            </span>
          </a>
          
          
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

      
      {isOpen && (
      <div 
        onClick={() => setIsOpen(false)} 
        className="fixed inset-0 bg-black/70 z-40 md:hidden"
      ></div>
    )}

    
    <div 
      className={`
        md:hidden fixed top-0 right-0 h-screen w-72 
        bg-zinc-200 shadow-lg z-50
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <ul className="flex flex-col items-start p-8 space-y-4 mt-16">
        
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-subtle-concrete p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <li><a href="#hero" onClick={() => setIsOpen(false)} className={linkClass}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)} className={linkClass}>About</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)} className={linkClass}>Skills</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)} className={linkClass}>Projects</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)} className={linkClass}>Contact</a></li>
      </ul>
    </div>
    
  </nav>
  );
};

export default Navbar;