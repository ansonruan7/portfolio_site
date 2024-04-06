import React, { useState, useEffect } from 'react';
import '../index.css';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-glow" style={{ left: position.x, top: position.y }} />
  );
};

export default CursorGlow;