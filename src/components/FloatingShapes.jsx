// src/components/FloatingShapes.jsx
import React from 'react';

const FloatingShapes = () => {
  const shapes = [
    { size: 'w-16 h-16', position: { bottom: '10%', right: '5%' } },
    { size: 'w-24 h-24', position: { bottom: '20%', right: '30%' } },
    { size: 'w-10 h-10', position: { bottom: '50%', right: '10%' } },
    { size: 'w-20 h-20', position: { bottom: '70%', right: '25%' } },
    { size: 'w-14 h-14', position: { bottom: '85%', right: '5%' } },
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute border-2 border-accent-steel/20 rounded-lg shadow-xl opacity-70 ${shape.size}`}
          style={shape.position}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;