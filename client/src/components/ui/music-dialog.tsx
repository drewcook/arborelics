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
import { FaMusic } from "react-icons/fa";

interface MusicDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const musicServices = [
  { name: "Spotify", icon: SiSpotify, url: "#" },
  { name: "Apple Music", icon: SiApplemusic, url: "#" },
  { name: "Amazon Music", icon: SiAmazonmusic, url: "#" },
  { name: "YouTube Music", icon: SiYoutubemusic, url: "#" },
  { name: "Pandora", icon: SiPandora, url: "#" },
  { name: "Deezer", icon: FaMusic, url: "#" },
  { name: "Tidal", icon: SiTidal, url: "#" },
];

export function MusicDialog({ isOpen, onClose }: MusicDialogProps) {
  return (
    <ReusableDialog isOpen={isOpen} onClose={onClose} title="MUSIC">
      <div className="space-y-3">
        {musicServices.map((service, index) => (
          <motion.a
            key={service.name}
            href={service.url}
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
            <service.icon className="w-5 h-5 text-[var(--cosmic-ethereal)] group-hover:text-[var(--cosmic-ethereal)] transition-colors" />
            <span className="text-sm letter-spacing-ultra group-hover:text-[var(--cosmic-ethereal)] transition-colors">
              {service.name.toUpperCase()}
            </span>
          </motion.a>
        ))}
      </div>
    </ReusableDialog>
  );
}