import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    'Loading 3D Environment...',
    'Initializing Particle System...',
    'Calibrating Nebula...',
    'Syncing Audio Dimensions...',
    'Ready for Experience...'
  ];

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    const textTimer = setInterval(() => {
      setCurrentText(prev => {
        if (prev >= loadingTexts.length - 1) {
          clearInterval(textTimer);
          return loadingTexts.length - 1;
        }
        return prev + 1;
      });
    }, 600);

    return () => {
      clearInterval(progressTimer);
      clearInterval(textTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="font-futuristic font-black text-2xl md:text-4xl text-[var(--cosmic-ethereal)] animate-pulse-slow letter-spacing-massive"
          >
            A R B O R E L I C S
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/60 mt-4 text-sm letter-spacing-ultra"
          >
            INITIALIZING SONIC REALM
          </motion.p>
        </div>
        
        {/* Loading Progress */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mx-auto relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-full bg-[var(--cosmic-ethereal)] rounded-full"
          />
          <div className="loading-bar absolute top-0 left-0 w-20 h-full"></div>
        </div>
        
        <motion.div
          key={currentText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-xs text-white/40"
        >
          {loadingTexts[currentText]}
        </motion.div>
      </div>
    </motion.div>
  );
}
