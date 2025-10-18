// src/components/SocialMedia.jsx
import React from 'react';
import igProfilePic from '../assets/ig.jpg';
import liProfilePic from '../assets/li.jpeg';
import ttProfilePic from '../assets/tt.jpeg';

const primarySocials = [
  { name: 'Instagram', username: '@mutiasasu', profilePic: igProfilePic, description: 'My daily life & inspirations.', link: 'https://www.instagram.com/mutiasasuu' },
  { name: 'LinkedIn', username: 'Dermagani Muktiasa', profilePic: liProfilePic, description: 'Connect with me professionally!', link: 'https://www.linkedin.com/in/dermagani-muktiasa-326447271' },
  { name: 'TikTok', username: '@nyaruru_', profilePic: ttProfilePic, description: 'a small content creator', link: 'https://www.tiktok.com/nyaruru_' },
];

const secondarySocials = [
  { name: 'Discord', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968756.png', link: '#' },
  { name: 'Stack Overflow', icon: 'https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-tile.svg', link: '#' },
  { name: 'Spotify', icon: 'https://cdn-icons-png.flaticon.com/128/174/174872.png', link: '#' },
  { name: 'YouTube', icon: 'https://cdn-icons-png.flaticon.com/128/174/174883.png', link: '#' },
  { name: 'Facebook', icon: 'https://cdn-icons-png.flaticon.com/128/174/174848.png', link: '#' },
  { name: 'X (Twitter)', icon: 'https://cdn-icons-png.flaticon.com/128/5969/5969020.png', link: '#' },
  { name: 'github', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/1.74.0/files/dark/github.png', link: '#' }, // 'invert: true' dihapus
];

const SocialMedia = () => {
  return (
    // Pola selang-seling: Projects (dark-grey), SocialMedia (deep-dark)
    <section id="social-media" className="py-24 bg-deep-industrial">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-light-concrete">Connect With Me</h2>

        {/* Primary Socials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {primarySocials.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-industrial-medium rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <img src={platform.profilePic} alt={`${platform.name} Profile`} className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-accent-steel group-hover:border-light-concrete transition-colors duration-300" />
              <p className="text-light-concrete font-semibold text-lg">{platform.name}</p>
              <p className="text-subtle-concrete text-sm mb-2">{platform.username}</p>
              <p className="text-center text-sm text-subtle-concrete italic">{platform.description}</p>
            </a>
          ))}
        </div>

        {/* Secondary Socials */}
        <div className="flex justify-center items-center flex-wrap gap-8">
          {secondarySocials.map((platform, index) => (
            <a key={index} href={platform.link} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
              <img 
                src={platform.icon} 
                alt={platform.name} 
                className="w-10 h-10 object-contain" // filter invert dihapus
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;