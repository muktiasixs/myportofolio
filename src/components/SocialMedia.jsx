// src/components/SocialMedia.jsx
import React from 'react';
import igProfilePic from '../assets/ig.jpg';
import liProfilePic from '../assets/li.jpeg';
import ttProfilePic from '../assets/tt.jpeg';

const primarySocials = [
  { name: 'Instagram', username: '@mutiasasu', profilePic: igProfilePic, description: 'My daily life & inspirations.', link: 'https://www.instagram.com/mutiasasuu' },
  { name: 'LinkedIn', username: 'Dermagani Muktiasa', profilePic: liProfilePic, description: 'Connect with me professionally!', link: 'https://www.linkedin.com/in/dermagani-muktiasa-326447271' },
  { name: 'TikTok', username: '@nyaruru_', profilePic: ttProfilePic, description: 'a small content creator', link: 'https://www.tiktok.com/@nyaruru_' },
];

const secondarySocials = [
  { name: 'Discord', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968756.png', link: 'https://discordid.netlify.app/?id=343930986100424704' },
  { name: 'Stack Overflow', icon: 'https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-tile.svg', link: 'https://stackoverflow.com/users/9218193/dermagani-muktiasa' },
  { name: 'Spotify', icon: 'https://cdn-icons-png.flaticon.com/128/174/174872.png', link: 'https://open.spotify.com/user/mt4tgpdb82nmr4k1c1uwysluf?si=ab24838a6d0b4066' },
  { name: 'YouTube', icon: 'https://cdn-icons-png.flaticon.com/128/174/174883.png', link: 'https://www.youtube.com/@m4n1s' },
  { name: 'Facebook', icon: 'https://cdn-icons-png.flaticon.com/128/174/174848.png', link: 'https://www.facebook.com/dermagani.muktiasa.58/' },
  { name: 'X (Twitter)', icon: 'https://cdn-icons-png.flaticon.com/128/5969/5969020.png', link: 'https://x.com/mutiasasu' },
  { name: 'github', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/1.74.0/files/light/github.png', link: 'https://github.com/muktiasixs' }, 
];

const SocialMedia = () => {
  return (
    
    <section id="social-media" className="py-24 bg-deep-industrial">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-light-concrete">Hubungi Saya</h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {primarySocials.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-industrial-medium rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <img
                src={platform.profilePic}
                alt={`${platform.name} Profile`}
                className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-accent-steel group-hover:border-light-concrete transition-colors duration-300"
                draggable="false"
              />
              <p className="text-light-concrete font-semibold text-lg">{platform.name}</p>
              <p className="text-subtle-concrete text-sm mb-2">{platform.username}</p>
              <p className="text-center text-sm text-subtle-concrete italic">{platform.description}</p>
            </a>
          ))}
        </div>

        
        <div className="flex justify-center items-center flex-wrap gap-8">
          {secondarySocials.map((platform, index) => (
            <a key={index} href={platform.link} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
              <img 
                src={platform.icon} 
                alt={platform.name} 
                className="w-10 h-10 object-contain"
                draggable="false"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;