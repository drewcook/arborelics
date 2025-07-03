import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTextProps {
  text?: string;
  phrases?: string[];
  cycleInterval?: number;
  className?: string;
  staggerDelay?: number;
  entryDirection?: "up" | "down" | "left" | "right";
  // exitDirection?: "up" | "down" | "left" | "right";
  scrambleEffect?: boolean;
  scrambleDuration?: number;
  scrambleChars?: string;
  scrambleMode?: "stagger" | "simultaneous";
}

export function AnimatedText({
  text,
  phrases = [],
  cycleInterval = 8000,
  className = "",
  staggerDelay = 0.05,
  entryDirection = "up",
  // exitDirection = "up",
  scrambleEffect = false,
  scrambleDuration = 1000,
  scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
  scrambleMode = "stagger",
}: AnimatedTextProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [scrambledChars, setScrambledChars] = useState<string[]>([]);
  const [isScrambling, setIsScrambling] = useState(false);
  const shouldCycle = phrases.length > 1;

  useEffect(() => {
    if (!shouldCycle) return;

    const interval = setInterval(() => {
      if (scrambleEffect) {
        setIsScrambling(true);
      }
      setCurrentPhraseIndex((prev: number) => (prev + 1) % phrases.length);
    }, cycleInterval);

    return () => clearInterval(interval);
  }, [phrases.length, cycleInterval, shouldCycle, scrambleEffect]);

    // Handle scrambling effect
  useEffect(() => {
    if (!scrambleEffect || !isScrambling) return;

    const currentText = shouldCycle ? phrases[currentPhraseIndex] : text || "";
    const targetChars = currentText.split('');
    let scrambleFrames = 0;
    const maxFrames = scrambleDuration / 50; // 50ms intervals

    // Initialize with spaces preserved from the start
    const initialScrambledChars = targetChars.map(char =>
      char === ' ' ? '\u00A0' : scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
    );
    setScrambledChars(initialScrambledChars);

    const scrambleInterval = setInterval(() => {
      if (scrambleFrames >= maxFrames) {
        setScrambledChars(targetChars.map(char => char === ' ' ? '\u00A0' : char));
        setIsScrambling(false);
        clearInterval(scrambleInterval);
        return;
      }

      const newScrambledChars = targetChars.map((targetChar, index) => {
        // Always preserve spaces - never scramble them
        if (targetChar === ' ') return '\u00A0';

        // Determine if this character should be settled based on scramble mode and progress
        let shouldSettle = false;
        if (scrambleMode === "stagger") {
          const charRevealTime = (index * staggerDelay * 2000) + (scrambleDuration * 0.3);
          shouldSettle = (scrambleFrames * 50) >= charRevealTime;
        } else {
          shouldSettle = scrambleFrames >= maxFrames * 0.7;
        }

        if (shouldSettle) {
          return targetChar;
        } else {
          return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        }
      });

      setScrambledChars(newScrambledChars);
      scrambleFrames++;
    }, 50);

    return () => clearInterval(scrambleInterval);
  }, [isScrambling, currentPhraseIndex, scrambleEffect, scrambleDuration, scrambleChars, scrambleMode, staggerDelay, shouldCycle, phrases, text]);

  const getDirectionValues = (direction: string) => {
    switch (direction) {
      case "up": return { from: 20, to: -20 };
      case "down": return { from: -20, to: 20 };
      case "left": return { from: 20, to: -20, axis: "x" };
      case "right": return { from: -20, to: 20, axis: "x" };
      default: return { from: 20, to: -20 };
    }
  };

  const entryValues = getDirectionValues(entryDirection);
  // const exitValues = getDirectionValues(exitDirection);

  const phraseVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: scrambleEffect ? 0 : staggerDelay,
        delayChildren: scrambleEffect ? 0 : 0.1,
      },
    },
    exit: {
      transition: {
        staggerChildren: scrambleEffect ? 0 : staggerDelay * 0.6,
        staggerDirection: 1,
      },
    },
  };

  const characterVariants = {
    hidden: {
      opacity: scrambleEffect ? 1 : 0,
      [entryValues.axis || "y"]: scrambleEffect ? 0 : entryValues.from,
      transition: {
        duration: 0.3,
      }
    },
    visible: {
      opacity: 1,
      [entryValues.axis || "y"]: 0,
      transition: {
        duration: scrambleEffect ? 0 : 0.4,
        ease: "easeOut",
      }
    },
    // exit: {
    //   opacity: 0,
    //   [exitValues.axis || "y"]: exitValues.to,
    //   transition: {
    //     duration: 0.3,
    //     ease: "easeIn",
    //   }
    // }
  };

  // Determine current text to display
  const currentText = shouldCycle ? phrases[currentPhraseIndex] : text || "";

  // Use scrambled characters if scrambling, otherwise use normal characters
  const displayChars = scrambleEffect && scrambledChars.length > 0
    ? scrambledChars
    : currentText.split('').map(char => char === ' ' ? '\u00A0' : char);

  if (shouldCycle) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentPhraseIndex}-${isScrambling}`}
          variants={phraseVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={className}
          style={{ display: "inline-block" }}
        >
          {displayChars.map((char: string, index: number) => (
            <motion.span
              key={`${currentPhraseIndex}-${index}-${isScrambling}`}
              variants={characterVariants}
              style={{
                display: "inline-block",
                minWidth: char === '\u00A0' ? '0.5em' : 'auto'
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <motion.div
      variants={phraseVariants}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ display: "inline-block" }}
    >
      {displayChars.map((char: string, index: number) => (
        <motion.span
          key={index}
          variants={characterVariants}
          style={{
            display: "inline-block",
            minWidth: char === '\u00A0' ? '0.5em' : 'auto'
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}