// src/components/Skills.jsx
import React from 'react';

const skillsData = {
  programming: [
    { name: 'PHP', iconUrl: 'https://cdn-icons-png.flaticon.com/128/5968/5968332.png' },
    { name: 'Java', iconUrl: 'https://cdn-icons-png.flaticon.com/128/226/226777.png' },
    { name: 'Python', iconUrl: 'https://cdn-icons-png.flaticon.com/128/5968/5968350.png' },
    { name: 'JavaScript', iconUrl: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png' },
    { name: 'TypeScript', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
    { name: 'HTML5', iconUrl: 'https://cdn-icons-png.flaticon.com/128/1051/1051277.png' },
    { name: 'CSS3', iconUrl: 'https://cdn-icons-png.flaticon.com/128/732/732190.png' },
    { name: 'C Lang', iconUrl: 'https://cdn-icons-png.flaticon.com/128/6132/6132222.png' },
    { name: 'React', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Node.js', iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png' },
    { name: 'Tailwind CSS', iconUrl: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg' },
    { name: 'Bootstrap', iconUrl: 'https://cdn-icons-png.flaticon.com/128/5968/5968672.png' },
    { name: 'MySQL', iconUrl: 'https://cdn-icons-png.flaticon.com/128/5968/5968313.png' },
    { name: 'Lua', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg' },
    { name: 'Git', iconUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
    { name: 'Next.js', iconUrl: 'https://images.seeklogo.com/logo-png/44/2/next-js-icon-logo-png_seeklogo-449825.png' },
    { name: 'Laravel', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
    { name: 'React Bits', iconUrl: 'https://raw.githubusercontent.com/DavidHDev/react-bits/b5cbc318ce4979762fb59c939094109f74ffbe46/src/assets/logos/react-bits-logo-small-black.svg' },
  ],
  designTools: [
    { name: 'Figma', iconUrl: 'https://cdn-icons-png.flaticon.com/128/5968/5968705.png' },
    { name: 'Webflow', iconUrl: 'https://dhygzobemt712.cloudfront.net/Logo/Social_Square_Blue.png' },
    { name: 'Framer', iconUrl: 'https://images.icon-icons.com/2699/PNG/512/framer_logo_icon_169149.png' },
    { name: 'Canva', iconUrl: 'https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000' },
    { name: 'Excel', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Microsoft_Office_Excel_%282019%E2%80%932025%29.svg' },
    { name: 'Photoshop', iconUrl: 'https://cdn-icons-png.flaticon.com/128/5968/5968520.png' },
    { name: 'Illustrator', iconUrl: 'https://cdn-icons-png.flaticon.com/128/5968/5968472.png' },
    { name: 'Premiere Pro', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg' },
    { name: 'After Effects', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg' },
    { name: 'Antigravity', iconUrl: 'https://pbs.twimg.com/profile_images/1990585614279049216/-Zz6T2nk_400x400.png' },
    { name: 'Visual Studio', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Visual_Studio_Icon_2022.svg' },
    { name: 'DaVinci Resolve', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/DaVinci_Resolve_Studio.png/960px-DaVinci_Resolve_Studio.png' },

  ],
};


const SkillScroll = ({ skills, direction }) => {
  const animationClass = direction === 'left' ? 'animate-loop-scroll-left' : 'animate-loop-scroll-right';

  return (
    <div className="relative w-full overflow-hidden py-4 group">
      <div className={`flex ${animationClass} group-hover:paused`}>
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="flex-shrink-0 mx-6 flex flex-col items-center justify-center p-3 transition-transform duration-300 hover:!scale-110">
            <img
              src={skill.iconUrl}
              alt={skill.name}
              className="h-16 w-16 object-contain mb-2"
              draggable="false"
            />
            <span className="text-sm font-medium text-subtle-concrete whitespace-nowrap">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (

    <section id="skills" className="py-24 bg-deep-industrial">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-light-concrete">skills & tools</h2>
        <SkillScroll skills={skillsData.programming} direction="left" />
        <SkillScroll skills={skillsData.designTools} direction="right" />
      </div>
    </section>
  );
};

export default Skills;