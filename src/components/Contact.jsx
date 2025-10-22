// src/components/Contact.jsx
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(''); 
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(30px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    setFormStatus('success'); 
    e.target.reset();
  };

  return (
    
    <section id="contact" className="py-24 bg-industrial-dark">
      <animated.div style={fadeIn} ref={ref} className="max-w-4xl mx-auto container px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-light-concrete">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          
          <div className="bg-industrial-medium p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-light-concrete">Contact Information</h3>
            <div className="space-y-4 text-light-concrete">
              <div className="flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/WhatsApp_logo-color-vertical.svg" alt="WhatsApp" className="w-8 h-8 mr-4 filter grayscale hover:grayscale-0 transition-all duration-300" draggable="false" />
                <p className="text-lg">+62 812 86109699</p>
              </div>
              <div className="flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" alt="LINE" className="w-8 h-8 mr-4 filter grayscale hover:grayscale-0 transition-all duration-300" draggable="false" />
                <p className="text-lg">@muktiasixs</p>
              </div>
              <div className="flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" className="w-8 h-8 mr-4 filter grayscale hover:grayscale-0 transition-all duration-300" draggable="false" />
                <p className="text-lg">Dermagani05@gmail.com</p>
              </div>
              <div className="flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Microsoft_Outlook_logo_%282024%E2%80%932025%29.svg" alt="Outlook" className="w-8 h-8 mr-4 filter grayscale hover:grayscale-0 transition-all duration-300" draggable="false" />
                <div>
                  <p className="text-lg">Dermagani.muktiasa@binus.ac.id</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <img src="https://media1.tenor.com/m/MMo4B6tp-GMAAAAC/job-application.gif" alt="Contact Placeholder" className="w-full h-auto rounded-lg shadow-inner" draggable="false" />
            </div>
          </div>

          
          <div className="bg-industrial-medium p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-light-concrete">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-subtle-concrete mb-2">Name</label>
                <input
                  type="text" id="name" name="name"
                  className="w-full p-3 border border-accent-steel rounded-md focus:ring-2 focus:ring-accent-steel focus:border-transparent transition-all duration-300 bg-deep-industrial text-light-concrete"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-subtle-concrete mb-2">Email</label>
                <input
                  type="email" id="email" name="email"
                  className="w-full p-3 border border-accent-steel rounded-md focus:ring-2 focus:ring-accent-steel focus:border-transparent transition-all duration-300 bg-deep-industrial text-light-concrete"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-subtle-concrete mb-2">Message</label>
                <textarea
                  id="message" name="message" rows="5"
                  className="w-full p-3 border border-accent-steel rounded-md focus:ring-2 focus:ring-accent-steel focus:border-transparent transition-all duration-300 bg-deep-industrial text-light-concrete"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-light-concrete text-deep-industrial px-6 py-3 rounded-lg text-lg font-semibold hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 shadow-lg relative"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-deep-industrial" viewBox="0 0 24 24"> {/* ... (path) ... */ }</svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
              {formStatus === 'success' && ( <p className="text-center text-yellow-500 mt-4 text-sm font-semibold">Gunakan Email Untuk Menghubungi Saya! <br />Anda Adalah Perusahaan Yang Baik.</p> )}
              {formStatus === 'error' && ( <p className="text-center text-red-500 mt-4 text-sm font-semibold">Gagal mengirim pesan.</p> )}
            </form>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default Contact;