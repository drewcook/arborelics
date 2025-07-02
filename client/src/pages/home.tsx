import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSpotify, FaSoundcloud, FaInstagram, FaEnvelope } from "react-icons/fa";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { HeroSection } from "@/components/ui/hero-section";
import { CircuitTree } from "@/components/ui/circuit-tree";
import { ContactForm } from "@/components/ui/contact-form";
import { useMousePosition } from "@/hooks/use-mouse-position";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { x, y } = useMousePosition();

  useEffect(() => {
    // Simulate loading time for 3D scene
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Calculate mouse offset for background movement (opposite direction)
  const mouseOffsetX = typeof window !== 'undefined' ? (x - window.innerWidth / 2) * -0.02 : 0;
  const mouseOffsetY = typeof window !== 'undefined' ? (y - window.innerHeight / 2) * -0.02 : 0;

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden relative">
      <CustomCursor />
      
      {isLoading && <LoadingScreen />}
      
      {/* Background with circuit tree */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isLoading ? 0 : 1,
          x: mouseOffsetX,
          y: mouseOffsetY
        }}
        transition={{ 
          opacity: { duration: 1, delay: 0.5 },
          x: { duration: 0.6, ease: "easeOut" },
          y: { duration: 0.6, ease: "easeOut" }
        }}
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
        <HeroSection onContactClick={() => setIsContactOpen(true)} />
      </motion.div>
      

      
      {/* Bottom Center Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoading ? 0 : 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4"
      >
        <a href="#" className="w-12 h-12 glass-morphism rounded-lg flex items-center justify-center 
                         hover:bg-white/10 transition-all duration-300 group">
          <FaSpotify className="w-5 h-5 group-hover:text-[var(--cosmic-ethereal)] transition-colors" />
        </a>
        <a href="#" className="w-12 h-12 glass-morphism rounded-lg flex items-center justify-center 
                         hover:bg-white/10 transition-all duration-300 group">
          <FaSoundcloud className="w-5 h-5 group-hover:text-[var(--cosmic-ethereal)] transition-colors" />
        </a>
        <a href="#" className="w-12 h-12 glass-morphism rounded-lg flex items-center justify-center 
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
