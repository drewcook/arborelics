'use client';

import { ReusableDialog } from "./reusable-dialog";
import { motion } from "framer-motion";
import {
  SiSpotify,
  SiApplemusic,
  SiAmazonmusic,
  SiYoutubemusic,
  SiPandora,
  SiTidal
} from "react-icons/si";
import { FaDeezer } from 'react-icons/fa6';

interface MusicDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Platform {
  name: string;
  icon: React.ElementType;
  url: string;
}

const PLATFORMS: Platform[] = [
  { name: "Spotify", icon: SiSpotify, url: "#" },
  { name: "Apple Music", icon: SiApplemusic, url: "#" },
  { name: "Amazon Music", icon: SiAmazonmusic, url: "#" },
  { name: "YouTube Music", icon: SiYoutubemusic, url: "#" },
  { name: "Pandora", icon: SiPandora, url: "#" },
  { name: "Deezer", icon: FaDeezer, url: "#" },
  { name: "Tidal", icon: SiTidal, url: "#" },
];

export function MusicDialog({ isOpen, onClose }: MusicDialogProps) {
  return (
    <ReusableDialog
      isOpen={isOpen}
      onClose={onClose}
      title="MUSIC"
    >
      <div className="space-y-4">
        <p className="text-white/80 mb-4">Check out my latest releases on your favorite platform:</p>
        <div className="space-y-3">
          {PLATFORMS.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-morphism px-4 py-3 rounded-lg flex items-center space-x-3
                         hover:bg-white/10 transition-all duration-300 group block"
            >
              <platform.icon className="w-5 h-5 text-[var(--cosmic-ethereal)] group-hover:text-[var(--cosmic-ethereal)] transition-colors" />
              <span className="text-sm letter-spacing-ultra group-hover:text-[var(--cosmic-ethereal)] transition-colors">
                {platform.name.toUpperCase()}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </ReusableDialog>
  );
}