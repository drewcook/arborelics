import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSpotify, FaSoundcloud, FaInstagram, FaEnvelope } from "react-icons/fa";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { HeroSection } from "@/components/ui/hero-section";
import { CircuitTree } from "@/components/ui/circuit-tree";
import { ContactForm } from "@/components/ui/contact-form";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

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
        
        {/* Contact Button */}
        <motion.button
          onClick={() => setIsContactOpen(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="glass-morphism px-6 py-3 rounded-lg flex items-center space-x-3 
                     hover:bg-white/10 transition-all duration-300 group"
        >
          <FaEnvelope className="w-4 h-4 group-hover:text-[var(--cosmic-ethereal)] transition-colors" />
          <span className="text-xs letter-spacing-ultra group-hover:text-[var(--cosmic-ethereal)] transition-colors">
            CONTACT
          </span>
        </motion.button>
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
          <FaSpotify className="w-5 h-5 group-hover:text-[var(--cosmic-ethereal)] transition-colors" />
        </a>
        <a href="#" className="block w-12 h-12 glass-morphism rounded-lg flex items-center justify-center 
                         hover:bg-white/10 transition-all duration-300 group">
          <FaSoundcloud className="w-5 h-5 group-hover:text-[var(--cosmic-ethereal)] transition-colors" />
        </a>
        <a href="#" className="block w-12 h-12 glass-morphism rounded-lg flex items-center justify-center 
                         hover:bg-white/10 transition-all duration-300 group">
          <FaInstagram className="w-5 h-5 group-hover:text-[var(--cosmic-ethereal)] transition-colors" />
        </a>
      </motion.div>
      
      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}
