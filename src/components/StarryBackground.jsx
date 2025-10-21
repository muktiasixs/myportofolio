// src/components/StarryBackground.jsx
import React from 'react';

const StarryBackground = () => {
  
  const starCount = 100; 
  const shootingStarCount = 7;

  const stars = [];
  for (let i = 0; i < starCount; i++) {
    stars.push(
      <div
        key={`star-${i}`}
        className="absolute bg-white rounded-full animate-twinkle"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 3 + 2}s`,
        }}
      ></div>
    );
  }

  const shootingStars = [];
  for (let i = 0; i < shootingStarCount; i++) {
    shootingStars.push(
      <div
        key={`shooting-star-${i}`}
        className="absolute top-0 left-0 w-0.5 h-0.5 bg-white rounded-full animate-shooting-star"
        style={{
          top: `${Math.random() * 60}%`, 
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10 + 2}s`,
          animationDuration: `${Math.random() * 2 + 1.5}s`,
        }}
      ></div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">{[...stars, ...shootingStars]}</div>
  );
};

export default StarryBackground;