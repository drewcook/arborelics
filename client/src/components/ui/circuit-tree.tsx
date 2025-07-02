import { motion } from "framer-motion";

export function CircuitTree() {
  const audioWaves = [
    { id: 1, x: 50, y: 120, width: 60, delay: 0, color: "pink" },
    { id: 2, x: 320, y: 140, width: 65, delay: 0.2, color: "purple" },
    { id: 3, x: 30, y: 200, width: 55, delay: 0.4, color: "pink" },
    { id: 4, x: 340, y: 180, width: 60, delay: 0.6, color: "pink" },
    { id: 5, x: 80, y: 80, width: 50, delay: 0.8, color: "purple" },
    { id: 6, x: 300, y: 80, width: 55, delay: 1.0, color: "purple" },
    { id: 7, x: 25, y: 280, width: 50, delay: 1.2, color: "pink" },
    { id: 8, x: 345, y: 260, width: 55, delay: 0.3, color: "purple" },
    { id: 9, x: 60, y: 320, width: 45, delay: 0.9, color: "pink" },
    { id: 10, x: 320, y: 320, width: 50, delay: 0.5, color: "pink" },
  ];

  const circuitPaths = [
    // Main trunk - more geometric and straight
    "M200,450 L200,420 L195,415 L200,410 L205,415 L200,420 L200,400 L195,395 L200,390 L205,395 L200,400 L200,380 L200,360 L200,340 L200,320",
    
    // Primary left branches - more geometric angles
    "M200,340 L175,340 L150,340 L125,340 L100,340 L75,340 L50,340",
    "M200,320 L175,320 L150,320 L125,320 L100,320 L75,320 L50,320",
    "M175,340 L175,315 L175,290 L175,265 L175,240 L175,215 L175,190",
    "M150,340 L150,315 L150,290 L150,265 L150,240 L150,215",
    "M125,340 L125,315 L125,290 L125,265 L125,240",
    "M100,340 L100,315 L100,290 L100,265",
    "M75,340 L75,315 L75,290",
    
    // Primary right branches - mirrored geometry
    "M200,340 L225,340 L250,340 L275,340 L300,340 L325,340 L350,340",
    "M200,320 L225,320 L250,320 L275,320 L300,320 L325,320 L350,320",
    "M225,340 L225,315 L225,290 L225,265 L225,240 L225,215 L225,190",
    "M250,340 L250,315 L250,290 L250,265 L250,240 L250,215",
    "M275,340 L275,315 L275,290 L275,265 L275,240",
    "M300,340 L300,315 L300,290 L300,265",
    "M325,340 L325,315 L325,290",
    
    // Upper branching from main trunk
    "M200,320 L180,300 L160,280 L140,260 L120,240 L100,220 L80,200",
    "M200,320 L220,300 L240,280 L260,260 L280,240 L300,220 L320,200",
    "M200,300 L175,275 L150,250 L125,225 L100,200 L75,175",
    "M200,300 L225,275 L250,250 L275,225 L300,200 L325,175",
    
    // Connecting horizontal paths for circuit board effect
    "M175,290 L225,290",
    "M150,265 L250,265",
    "M125,240 L275,240",
    "M100,215 L300,215",
    "M175,215 L225,215",
    
    // Additional connecting nodes
    "M175,315 L225,315",
    "M150,315 L250,315",
    "M125,315 L275,315",
    "M100,315 L300,315",
    
    // Lower connection branches
    "M200,360 L160,360 L120,360 L80,360 L40,360",
    "M200,360 L240,360 L280,360 L320,360 L360,360",
    "M160,360 L160,380 L160,400",
    "M240,360 L240,380 L240,400",
    
    // Detailed circuit pathways for more complexity
    "M80,200 L60,180 L40,160 L30,140 L25,120",
    "M320,200 L340,180 L360,160 L370,140 L375,120",
    "M75,175 L55,155 L35,135 L25,115 L20,95",
    "M325,175 L345,155 L365,135 L375,115 L380,95",
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
          { x: 200, y: 450 }, { x: 200, y: 420 }, { x: 200, y: 400 }, { x: 200, y: 380 }, 
          { x: 200, y: 360 }, { x: 200, y: 340 }, { x: 200, y: 320 }, { x: 200, y: 300 },
          
          // Primary horizontal branch intersections
          { x: 175, y: 340 }, { x: 150, y: 340 }, { x: 125, y: 340 }, { x: 100, y: 340 }, { x: 75, y: 340 }, { x: 50, y: 340 },
          { x: 225, y: 340 }, { x: 250, y: 340 }, { x: 275, y: 340 }, { x: 300, y: 340 }, { x: 325, y: 340 }, { x: 350, y: 340 },
          { x: 175, y: 320 }, { x: 150, y: 320 }, { x: 125, y: 320 }, { x: 100, y: 320 }, { x: 75, y: 320 }, { x: 50, y: 320 },
          { x: 225, y: 320 }, { x: 250, y: 320 }, { x: 275, y: 320 }, { x: 300, y: 320 }, { x: 325, y: 320 }, { x: 350, y: 320 },
          
          // Vertical branch intersections
          { x: 175, y: 315 }, { x: 175, y: 290 }, { x: 175, y: 265 }, { x: 175, y: 240 }, { x: 175, y: 215 }, { x: 175, y: 190 },
          { x: 150, y: 315 }, { x: 150, y: 290 }, { x: 150, y: 265 }, { x: 150, y: 240 }, { x: 150, y: 215 },
          { x: 125, y: 315 }, { x: 125, y: 290 }, { x: 125, y: 265 }, { x: 125, y: 240 },
          { x: 100, y: 315 }, { x: 100, y: 290 }, { x: 100, y: 265 }, { x: 100, y: 215 },
          { x: 75, y: 315 }, { x: 75, y: 290 },
          
          // Right side mirror
          { x: 225, y: 315 }, { x: 225, y: 290 }, { x: 225, y: 265 }, { x: 225, y: 240 }, { x: 225, y: 215 }, { x: 225, y: 190 },
          { x: 250, y: 315 }, { x: 250, y: 290 }, { x: 250, y: 265 }, { x: 250, y: 240 }, { x: 250, y: 215 },
          { x: 275, y: 315 }, { x: 275, y: 290 }, { x: 275, y: 265 }, { x: 275, y: 240 },
          { x: 300, y: 315 }, { x: 300, y: 290 }, { x: 300, y: 265 }, { x: 300, y: 215 },
          { x: 325, y: 315 }, { x: 325, y: 290 },
          
          // Upper branch nodes
          { x: 180, y: 300 }, { x: 160, y: 280 }, { x: 140, y: 260 }, { x: 120, y: 240 }, { x: 100, y: 220 }, { x: 80, y: 200 },
          { x: 220, y: 300 }, { x: 240, y: 280 }, { x: 260, y: 260 }, { x: 280, y: 240 }, { x: 300, y: 220 }, { x: 320, y: 200 },
          { x: 175, y: 275 }, { x: 150, y: 250 }, { x: 125, y: 225 }, { x: 100, y: 200 }, { x: 75, y: 175 },
          { x: 225, y: 275 }, { x: 250, y: 250 }, { x: 275, y: 225 }, { x: 300, y: 200 }, { x: 325, y: 175 },
          
          // Lower connection nodes
          { x: 160, y: 360 }, { x: 120, y: 360 }, { x: 80, y: 360 }, { x: 40, y: 360 },
          { x: 240, y: 360 }, { x: 280, y: 360 }, { x: 320, y: 360 }, { x: 360, y: 360 },
          { x: 160, y: 380 }, { x: 160, y: 400 }, { x: 240, y: 380 }, { x: 240, y: 400 },
          
          // Terminal nodes for audio waves
          { x: 25, y: 120 }, { x: 375, y: 120 }, { x: 20, y: 95 }, { x: 380, y: 95 },
          { x: 30, y: 140 }, { x: 370, y: 140 }, { x: 35, y: 135 }, { x: 365, y: 135 },
          { x: 40, y: 160 }, { x: 360, y: 160 }, { x: 60, y: 180 }, { x: 340, y: 180 },
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
            {Array.from({ length: 10 }).map((_, i) => {
              const barHeight = Math.abs(Math.sin(i * 0.5) * (20 + i * 2) + 12);
              const yOffset = wave.y - barHeight / 2;
              const isPink = wave.color === "pink";
              const colorVariations = isPink 
                ? ['255, 20, 147', '255, 105, 180', '255, 69, 165'] // Deep pink, hot pink, medium pink
                : ['138, 43, 226', '147, 112, 219', '186, 85, 211']; // Blue violet, medium slate blue, medium orchid
              
              return (
                <motion.rect
                  key={i}
                  x={wave.x + i * 4}
                  y={yOffset}
                  width="3"
                  height={barHeight}
                  fill={`rgba(${colorVariations[i % 3]}, 0.9)`}
                  rx="1.5"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: [barHeight, barHeight * 1.3, barHeight],
                    opacity: [0.9, 1, 0.9] 
                  }}
                  transition={{
                    duration: 2,
                    delay: 2.5 + wave.delay + i * 0.05,
                    repeat: Infinity,
                    ease: "easeInOut"
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

        {/* Strategic glow effects at key intersections */}
        {[
          { x: 200, y: 340, delay: 3 },
          { x: 200, y: 320, delay: 3.2 },
          { x: 175, y: 315, delay: 3.5 },
          { x: 225, y: 315, delay: 3.7 },
          { x: 150, y: 290, delay: 4 },
          { x: 250, y: 290, delay: 4.2 },
          { x: 125, y: 265, delay: 4.5 },
          { x: 275, y: 265, delay: 4.7 },
          { x: 100, y: 240, delay: 5 },
          { x: 300, y: 240, delay: 5.2 },
          { x: 175, y: 240, delay: 5.5 },
          { x: 225, y: 240, delay: 5.7 },
          { x: 100, y: 215, delay: 6 },
          { x: 300, y: 215, delay: 6.2 },
        ].map((glow, index) => (
          <motion.circle
            key={`glow-${index}`}
            cx={glow.x}
            cy={glow.y}
            r="3"
            fill="rgba(0, 255, 240, 0.4)"
            animate={{
              r: [3, 6, 3],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 3,
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