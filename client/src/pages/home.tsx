import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { HeroSection } from "@/components/ui/hero-section";
import { CircuitTree } from "@/components/ui/circuit-tree";

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
      
      {/* Background with circuit tree */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 30% 50%, rgba(0, 255, 240, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(107, 13, 173, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, rgba(0, 0, 0, 1) 0%, rgba(13, 13, 13, 1) 100%)
          `
        }}
      >
        <CircuitTree />
      </motion.div>
      
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
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-4"
      >
        <div className="glass-morphism px-4 py-2 rounded-full">
          <div className="flex items-center space-x-4 text-xs letter-spacing-ultra">
            <span className="text-white/60">SCROLL TO EXPLORE</span>
            <div className="w-4 h-6 border border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-[var(--cosmic-ethereal)] rounded-full mt-1 animate-bounce"></div>
            </div>
          </div>
        </div>
        
        {/* Email Contact */}
        <motion.a
          href="mailto:arborelics@proton.me"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="glass-morphism px-6 py-3 rounded-lg flex items-center space-x-3 
                     hover:bg-white/10 transition-all duration-300 group"
        >
          <svg className="w-4 h-4 group-hover:text-[var(--cosmic-ethereal)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/>
          </svg>
          <span className="text-xs letter-spacing-ultra group-hover:text-[var(--cosmic-ethereal)] transition-colors">
            ARBORELICS@PROTON.ME
          </span>
        </motion.a>
      </motion.div>
      
      {/* Side Social Links */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isLoading ? 0 : 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 space-y-4"
      >
        <a href="#" className="block w-12 h-12 glass-morphism rounded-lg flex items-center justify-center 
                         hover:bg-white/10 transition-all duration-300 group">
          <svg className="w-5 h-5 group-hover:text-[var(--cosmic-ethereal)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.5 2c-5.621 0-10.211 4.443-10.475 10H0v2h3.025c.264 5.557 4.854 10 10.475 10s10.211-4.443 10.475-10H27v-2h-3.025C23.711 6.443 19.121 2 13.5 2zm0 18c-4.136 0-7.5-3.364-7.5-7.5S9.364 5 13.5 5s7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5z"/>
            <circle cx="13.5" cy="12.5" r="2"/>
          </svg>
        </a>
        <a href="#" className="block w-12 h-12 glass-morphism rounded-lg flex items-center justify-center 
                         hover:bg-white/10 transition-all duration-300 group">
          <svg className="w-5 h-5 group-hover:text-[var(--cosmic-ethereal)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.568 8.16c-.180 1.896-.962 6.502-1.358 8.627-.168.9-.499 1.201-.820 1.23-.696.065-1.225-.46-1.901-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </a>
        <a href="#" className="block w-12 h-12 glass-morphism rounded-lg flex items-center justify-center 
                         hover:bg-white/10 transition-all duration-300 group">
          <svg className="w-5 h-5 group-hover:text-[var(--cosmic-ethereal)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </motion.div>
    </div>
  );
}
