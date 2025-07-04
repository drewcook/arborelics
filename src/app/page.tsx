'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaSpotify,
  FaSoundcloud,
  FaInstagram,
} from "react-icons/fa";
import { LoadingScreen } from "@/components/loading-screen";
import { CustomCursor } from "@/components/custom-cursor";
import { HeroSection } from "@/components/hero-section";
import { CircuitTree } from "@/components/circuit-tree";
import { ContactDialog } from "@/components/dialogs/contact-dialog";
import { MusicDialog } from "@/components/dialogs/music-dialog";
import { ShowsDialog } from "@/components/dialogs/shows-dialog";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [isShowsOpen, setIsShowsOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time for 3D scene
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden relative">
      <CustomCursor />

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
          `,
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
        <HeroSection
          onContactClick={() => setIsContactOpen(true)}
          onMusicClick={() => setIsMusicOpen(true)}
          onShowsClick={() => setIsShowsOpen(true)}
        />
      </motion.div>

      {/* Bottom Center Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoading ? 0 : 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="fixed bottom-8 left-0 right-0 transform z-20 flex justify-center space-x-6"
      >
        <a
          href="#"
          className="text-[var(--primary)] hover:text-[var(--cosmic-ethereal)]
                         hover:scale-105 transition-all duration-300"
        >
          <FaSpotify className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="text-[var(--primary)] hover:text-[var(--cosmic-ethereal)]
                         hover:scale-105 transition-all duration-300"
        >
          <FaSoundcloud className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="text-[var(--primary)] hover:text-[var(--cosmic-ethereal)]
                         hover:scale-105 transition-all duration-300"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
      </motion.div>

      <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <MusicDialog isOpen={isMusicOpen} onClose={() => setIsMusicOpen(false)} />
      <ShowsDialog isOpen={isShowsOpen} onClose={() => setIsShowsOpen(false)} />
    </div>
  );
}
