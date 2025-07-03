import { motion } from "framer-motion";
import { AnimatedText } from "./animated-text";

interface HeroSectionProps {
  onContactClick?: () => void;
  onMusicClick?: () => void;
  onShowsClick?: () => void;
}

export function HeroSection({
  onContactClick,
  onMusicClick,
  onShowsClick,
}: HeroSectionProps) {
  const phrases = [
    "COSMIC CREATOR",
    "SONIC ARCHITECT",
    "AURAL HEALER",
    "VIBES REVERBERATOR",
    "DIGITAL SHAMAN",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };



  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center px-4"
    >
      {/* Artist Name */}
      <motion.h1
        variants={itemVariants}
        className="font-futuristic font-black text-3xl md:text-5xl lg:text-6xl text-white letter-spacing-ultra text-outline-glow animate-pulse-slow"
      >
        ARBORELICS
      </motion.h1>

      {/* Subtitle */}
      <motion.div variants={itemVariants} className="mt-8 space-y-2">
        <AnimatedText
          phrases={phrases}
          cycleInterval={6000}
          scrambleEffect={true}
          scrambleDuration={4000}
          scrambleMode="stagger"
          scrambleChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|"
          className="text-[var(--cosmic-ethereal)] text-lg md:text-xl letter-spacing-medium font-light"
        />
        <p className="text-white/60 text-sm tracking-wide">
          Where ancient wisdom meets future sound
        </p>
      </motion.div>

      {/* Navigation Links */}
      <motion.div
        variants={itemVariants}
        className="mt-12 flex justify-center space-x-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onMusicClick}
          className="glass-morphism px-6 py-3 rounded-lg text-sm tracking-wide
                     hover:bg-white/10 transition-all duration-300 group"
        >
          <span className="group-hover:text-[var(--cosmic-ethereal)] transition-colors">
            MUSIC
          </span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onShowsClick}
          className="glass-morphism px-6 py-3 rounded-lg text-sm tracking-wide
                     hover:bg-white/10 transition-all duration-300 group"
        >
          <span className="group-hover:text-[var(--cosmic-ethereal)] transition-colors">
            SHOWS
          </span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContactClick}
          className="glass-morphism px-6 py-3 rounded-lg text-sm tracking-wide
                     hover:bg-white/10 transition-all duration-300 group"
        >
          <span className="group-hover:text-[var(--cosmic-ethereal)] transition-colors">
            CONTACT
          </span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
