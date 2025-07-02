import { motion } from "framer-motion";

export function CircuitTree() {
  const audioWaves = [
    { id: 1, x: 95, y: 180, width: 55, delay: 0 },
    { id: 2, x: 310, y: 160, width: 60, delay: 0.2 },
    { id: 3, x: 65, y: 240, width: 50, delay: 0.4 },
    { id: 4, x: 340, y: 220, width: 55, delay: 0.6 },
    { id: 5, x: 155, y: 140, width: 50, delay: 0.8 },
    { id: 6, x: 285, y: 280, width: 55, delay: 1.0 },
    { id: 7, x: 115, y: 300, width: 45, delay: 1.2 },
    { id: 8, x: 325, y: 140, width: 50, delay: 0.3 },
    { id: 9, x: 85, y: 120, width: 45, delay: 0.9 },
  ];

  const circuitPaths = [
    // Main trunk with more detail
    "M200,450 L200,420 L195,415 L200,410 L205,405 L200,400 L200,380 L195,375 L200,370 L200,350",
    "M200,350 L180,330 L160,310 L140,290 L120,270 L100,250",
    "M200,350 L220,330 L240,310 L260,290 L280,270 L300,250",
    // Additional trunk branches
    "M200,380 L185,365 L170,350 L155,335 L140,320 L125,305",
    "M200,380 L215,365 L230,350 L245,335 L260,320 L275,305",
    // Secondary branches
    "M180,330 L160,330 L140,320 L120,300 L100,280 L80,260",
    "M220,330 L240,330 L260,320 L280,300 L300,280 L320,260",
    "M170,350 L150,340 L130,330 L110,320 L90,310",
    "M230,350 L250,340 L270,330 L290,320 L310,310",
    // More detailed branching
    "M160,310 L145,295 L130,280 L115,265 L100,250 L85,235",
    "M240,310 L255,295 L270,280 L285,265 L300,250 L315,235",
    "M140,290 L125,275 L110,260 L95,245 L80,230",
    "M260,290 L275,275 L290,260 L305,245 L320,230",
    // Upper branches
    "M120,270 L105,255 L90,240 L75,225 L60,210",
    "M280,270 L295,255 L310,240 L325,225 L340,210",
    // Fine branch details
    "M100,250 L85,235 L70,220 L55,205",
    "M300,250 L315,235 L330,220 L345,205",
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.svg
        width="400"
        height="500"
        viewBox="0 0 400 500"
        className="opacity-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        {/* Circuit board paths */}
        {circuitPaths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke="rgba(0, 255, 240, 0.6)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: 1.5 + index * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Circuit nodes */}
        {[
          // Main trunk nodes
          { x: 200, y: 450 }, { x: 200, y: 420 }, { x: 200, y: 400 }, { x: 200, y: 380 }, { x: 200, y: 350 },
          // Primary branch nodes
          { x: 180, y: 330 }, { x: 220, y: 330 }, { x: 160, y: 310 }, { x: 240, y: 310 },
          { x: 140, y: 290 }, { x: 260, y: 290 }, { x: 120, y: 270 }, { x: 280, y: 270 },
          // Secondary branch nodes
          { x: 170, y: 350 }, { x: 230, y: 350 }, { x: 155, y: 335 }, { x: 245, y: 335 },
          { x: 100, y: 250 }, { x: 300, y: 250 }, { x: 85, y: 235 }, { x: 315, y: 235 },
          // End nodes
          { x: 60, y: 210 }, { x: 340, y: 210 }, { x: 55, y: 205 }, { x: 345, y: 205 },
        ].map((node, index) => (
          <motion.circle
            key={index}
            cx={node.x}
            cy={node.y}
            r="3"
            fill="rgba(0, 255, 240, 0.8)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 2 + index * 0.05,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Audio wave foliage */}
        {audioWaves.map((wave) => (
          <g key={wave.id}>
            {Array.from({ length: 12 }).map((_, i) => {
              const barHeight = Math.abs(Math.sin(i * 0.6) * 25 + 15);
              const yOffset = wave.y - barHeight / 2;
              return (
                <motion.rect
                  key={i}
                  x={wave.x + i * 5}
                  y={yOffset}
                  width="3"
                  height={barHeight}
                  fill={`rgba(${i % 3 === 0 ? '255, 105, 180' : i % 3 === 1 ? '138, 43, 226' : '186, 85, 211'}, 0.9)`}
                  rx="1.5"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: barHeight,
                    opacity: 0.9 
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 2.5 + wave.delay + i * 0.03,
                    ease: "easeOut"
                  }}
                />
              );
            })}
          </g>
        ))}

        {/* Pulsing energy core */}
        <motion.circle
          cx="200"
          cy="450"
          r="8"
          fill="rgba(0, 255, 240, 0.4)"
          animate={{
            r: [8, 12, 8],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Simplified glow effects */}
        {[
          { x: 200, y: 380, delay: 3 },
          { x: 160, y: 310, delay: 3.5 },
          { x: 240, y: 310, delay: 4 },
          { x: 120, y: 270, delay: 4.5 },
          { x: 280, y: 270, delay: 5 }
        ].map((glow, index) => (
          <motion.circle
            key={`glow-${index}`}
            cx={glow.x}
            cy={glow.y}
            r="4"
            fill="rgba(0, 255, 240, 0.3)"
            animate={{
              r: [4, 8, 4],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 2,
              delay: glow.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
}