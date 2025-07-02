import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
      className="fixed w-5 h-5 pointer-events-none z-[9999] mix-blend-screen"
      style={{
        background: 'radial-gradient(circle, rgba(0, 255, 240, 0.8) 0%, transparent 70%)',
        borderRadius: '50%',
      }}
    />
  );
}
