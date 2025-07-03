'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
      {/* Outer glow layer */}
      <div
        className="absolute w-8 h-8 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          background: 'radial-gradient(circle, rgba(0, 255, 240, 0.3) 0%, rgba(0, 255, 240, 0.1) 50%, transparent 100%)',
          filter: 'blur(8px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Middle glow layer */}
      <div
        className="absolute w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          background: 'radial-gradient(circle, rgba(0, 255, 240, 0.5) 0%, rgba(0, 255, 240, 0.2) 70%, transparent 100%)',
          filter: 'blur(4px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Inner core */}
      <div
        className="absolute w-4 h-4 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          background: 'radial-gradient(circle, rgba(0, 255, 240, 0.8) 0%, rgba(0, 255, 240, 0.4) 100%)',
          filter: 'blur(1px)',
          mixBlendMode: 'screen',
          boxShadow: '0 0 20px rgba(0, 255, 240, 0.6), 0 0 40px rgba(0, 255, 240, 0.3), 0 0 60px rgba(0, 255, 240, 0.1)'
        }}
      />

      {/* Bright center dot */}
      <div
        className="absolute w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          backgroundColor: 'rgba(0, 255, 240, 1)',
          mixBlendMode: 'screen',
          boxShadow: '0 0 10px rgba(0, 255, 240, 0.8)'
        }}
      />
    </div>
  );
}