import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { HeroSection } from "@/components/ui/hero-section";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for 3D scene
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden relative">
      <CustomCursor />
      
      {isLoading && <LoadingScreen />}
      
      {/* Temporary CSS-based background until 3D is fixed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-black via-blue-900/20 to-purple-900/30"
        style={{
          background: `
            radial-gradient(circle at 30% 50%, rgba(0, 255, 240, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(107, 13, 173, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, rgba(0, 0, 0, 1) 0%, rgba(13, 13, 13, 1) 100%)
          `
        }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <HeroSection />
      </motion.div>
      
      {/* Bottom Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoading ? 0 : 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="glass-morphism px-4 py-2 rounded-full">
          <div className="flex items-center space-x-4 text-xs letter-spacing-ultra">
            <span className="text-white/60">SCROLL TO EXPLORE</span>
            <div className="w-4 h-6 border border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-[var(--cosmic-ethereal)] rounded-full mt-1 animate-bounce"></div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Side Social Links */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isLoading ? 0 : 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 space-y-4"
      >
        <a href="#" className="block w-10 h-10 glass-morphism rounded-full flex items-center justify-center 
                         hover:bg-white/10 transition-all duration-300 group">
          <span className="text-xs group-hover:text-[var(--cosmic-ethereal)] transition-colors">SP</span>
        </a>
        <a href="#" className="block w-10 h-10 glass-morphism rounded-full flex items-center justify-center 
                         hover:bg-white/10 transition-all duration-300 group">
          <span className="text-xs group-hover:text-[var(--cosmic-ethereal)] transition-colors">SC</span>
        </a>
        <a href="#" className="block w-10 h-10 glass-morphism rounded-full flex items-center justify-center 
                         hover:bg-white/10 transition-all duration-300 group">
          <span className="text-xs group-hover:text-[var(--cosmic-ethereal)] transition-colors">IG</span>
        </a>
      </motion.div>
    </div>
  );
}
