import { motion } from "framer-motion";

export function CircuitTree() {
  const audioWaves = [
    { id: 1, x: 50, y: 120, width: 60, delay: 0, color: "pink", variant: "rounded" },
    { id: 2, x: 320, y: 140, width: 65, delay: 0.2, color: "purple", variant: "sharp" },
    { id: 3, x: 30, y: 200, width: 55, delay: 0.4, color: "pink", variant: "wide" },
    { id: 4, x: 340, y: 180, width: 60, delay: 0.6, color: "pink", variant: "tall" },
    { id: 5, x: 80, y: 80, width: 50, delay: 0.8, color: "purple", variant: "rounded" },
    { id: 6, x: 300, y: 80, width: 55, delay: 1.0, color: "purple", variant: "wide" },
    { id: 7, x: 25, y: 280, width: 50, delay: 1.2, color: "pink", variant: "sharp" },
    { id: 8, x: 345, y: 260, width: 55, delay: 0.3, color: "purple", variant: "tall" },
    { id: 9, x: 60, y: 320, width: 45, delay: 0.9, color: "pink", variant: "wide" },
    { id: 10, x: 320, y: 320, width: 50, delay: 0.5, color: "pink", variant: "rounded" },
  ];

  const circuitPaths = [
    // Main trunk - flowing organic curves
    "M200,450 Q195,430 200,410 Q205,390 200,370 Q195,350 200,330 Q205,310 200,290",
    
    // Organic left branches with curves
    "M200,330 Q185,325 170,320 Q150,315 130,310 Q110,305 90,300 Q70,295 50,290",
    "M200,310 Q180,305 160,300 Q135,295 110,290 Q85,285 60,280",
    "M200,290 Q175,285 150,280 Q120,275 90,270 Q65,265 40,260",
    "M170,320 Q165,300 160,280 Q155,260 150,240 Q145,220 140,200 Q135,180 130,160",
    "M130,310 Q125,290 120,270 Q115,250 110,230 Q105,210 100,190 Q95,170 90,150",
    "M90,300 Q85,280 80,260 Q75,240 70,220 Q65,200 60,180 Q55,160 50,140",
    
    // Organic right branches - mirrored flow
    "M200,330 Q215,325 230,320 Q250,315 270,310 Q290,305 310,300 Q330,295 350,290",
    "M200,310 Q220,305 240,300 Q265,295 290,290 Q315,285 340,280",
    "M200,290 Q225,285 250,280 Q280,275 310,270 Q335,265 360,260",
    "M230,320 Q235,300 240,280 Q245,260 250,240 Q255,220 260,200 Q265,180 270,160",
    "M270,310 Q275,290 280,270 Q285,250 290,230 Q295,210 300,190 Q305,170 310,150",
    "M310,300 Q315,280 320,260 Q325,240 330,220 Q335,200 340,180 Q345,160 350,140",
    
    // Flowing interconnections
    "M170,320 Q200,315 230,320",
    "M160,300 Q200,295 240,300", 
    "M150,280 Q200,275 250,280",
    "M140,260 Q200,255 260,260",
    "M130,240 Q200,235 270,240",
    "M120,220 Q200,215 280,220",
    "M110,200 Q200,195 290,200",
    "M100,180 Q200,175 300,180",
    
    // Curved upper branches
    "M200,290 Q180,270 160,250 Q140,230 120,210 Q100,190 80,170 Q60,150 40,130",
    "M200,290 Q220,270 240,250 Q260,230 280,210 Q300,190 320,170 Q340,150 360,130",
    "M160,250 Q140,230 120,210 Q100,190 80,170 Q60,150 40,130 Q25,115 15,100",
    "M240,250 Q260,230 280,210 Q300,190 320,170 Q340,150 360,130 Q375,115 385,100",
    
    // Flowing downward branches
    "M200,370 Q180,375 160,380 Q140,385 120,390 Q100,395 80,400 Q60,405 40,410",
    "M200,370 Q220,375 240,380 Q260,385 280,390 Q300,395 320,400 Q340,405 360,410",
    "M160,380 Q155,395 150,410 Q145,425 140,440",
    "M240,380 Q245,395 250,410 Q255,425 260,440",
    
    // Organic tendrils reaching toward audio waves
    "M40,130 Q35,125 30,120 Q25,115 20,110",
    "M360,130 Q365,125 370,120 Q375,115 380,110",
    "M15,100 Q12,95 8,90",
    "M385,100 Q388,95 392,90",
    "M40,260 Q35,255 30,250 Q25,245 20,240",
    "M360,260 Q365,255 370,250 Q375,245 380,240",
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
            stroke="rgba(0, 255, 240, 0.4)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.4, 0.4, 0]
            }}
            transition={{
              duration: 10,
              delay: index * 0.05,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Electrical cascade animations - trunk to branches */}
        {[
          // Main trunk pulse
          { pathIndex: 0, delay: 0, duration: 1.5 },
          
          // Left side cascading pulses
          { pathIndex: 1, delay: 0.8, duration: 2 },
          { pathIndex: 2, delay: 1.6, duration: 2.2 },
          { pathIndex: 3, delay: 2.4, duration: 2.5 },
          { pathIndex: 4, delay: 1.2, duration: 2.8 },
          { pathIndex: 5, delay: 2.0, duration: 3 },
          { pathIndex: 6, delay: 2.8, duration: 3.2 },
          
          // Right side cascading pulses (symmetrical)
          { pathIndex: 7, delay: 0.8, duration: 2 },
          { pathIndex: 8, delay: 1.6, duration: 2.2 },
          { pathIndex: 9, delay: 2.4, duration: 2.5 },
          { pathIndex: 10, delay: 1.2, duration: 2.8 },
          { pathIndex: 11, delay: 2.0, duration: 3 },
          { pathIndex: 12, delay: 2.8, duration: 3.2 },
          
          // Upper branching pulses
          { pathIndex: 17, delay: 3.2, duration: 2 },
          { pathIndex: 18, delay: 3.2, duration: 2 },
          { pathIndex: 19, delay: 3.8, duration: 2.5 },
          { pathIndex: 20, delay: 3.8, duration: 2.5 },
          
          // Terminal branch pulses
          { pathIndex: 21, delay: 4.5, duration: 1.5 },
          { pathIndex: 22, delay: 4.5, duration: 1.5 },
          { pathIndex: 23, delay: 4.8, duration: 1.5 },
          { pathIndex: 24, delay: 4.8, duration: 1.5 },
        ].map((pulse, index) => (
          <motion.path
            key={`pulse-${index}`}
            d={circuitPaths[pulse.pathIndex]}
            stroke="rgba(0, 255, 240, 0.9)"
            strokeWidth="2.5"
            fill="none"
            filter="blur(0.5px)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 0.4, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: pulse.duration,
              delay: pulse.delay,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Minimal key circuit nodes */}
        {[
          // Core connection points only
          { x: 200, y: 450 }, { x: 200, y: 370 }, { x: 200, y: 290 },
          { x: 170, y: 320 }, { x: 230, y: 320 },
          { x: 130, y: 310 }, { x: 270, y: 310 },
          { x: 90, y: 300 }, { x: 310, y: 300 },
          { x: 160, y: 250 }, { x: 240, y: 250 },
          { x: 40, y: 130 }, { x: 360, y: 130 },
          { x: 160, y: 380 }, { x: 240, y: 380 },
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

        {/* Audio wave foliage with variants */}
        {audioWaves.map((wave) => (
          <g key={wave.id}>
            {Array.from({ length: 10 }).map((_, i) => {
              // Different variants create different shapes
              let barHeight, barWidth, borderRadius, xSpacing;
              
              switch (wave.variant) {
                case "rounded":
                  barHeight = Math.abs(Math.sin(i * 0.4) * (18 + i * 1.5) + 10);
                  barWidth = 3.5;
                  borderRadius = 2;
                  xSpacing = 4.5;
                  break;
                case "sharp":
                  barHeight = Math.abs(Math.sin(i * 0.8) * (25 + i * 3) + 8);
                  barWidth = 2.5;
                  borderRadius = 0;
                  xSpacing = 3.5;
                  break;
                case "wide":
                  barHeight = Math.abs(Math.sin(i * 0.3) * (15 + i * 1) + 14);
                  barWidth = 4;
                  borderRadius = 1;
                  xSpacing = 5;
                  break;
                case "tall":
                  barHeight = Math.abs(Math.sin(i * 0.6) * (30 + i * 2.5) + 12);
                  barWidth = 2.5;
                  borderRadius = 1.5;
                  xSpacing = 3.8;
                  break;
                default:
                  barHeight = Math.abs(Math.sin(i * 0.5) * (20 + i * 2) + 12);
                  barWidth = 3;
                  borderRadius = 1.5;
                  xSpacing = 4;
              }
              
              const yOffset = wave.y - barHeight / 2;
              const isPink = wave.color === "pink";
              const colorVariations = isPink 
                ? ['255, 20, 147', '255, 105, 180', '255, 69, 165'] 
                : ['138, 43, 226', '147, 112, 219', '186, 85, 211'];
              
              return (
                <motion.rect
                  key={i}
                  x={wave.x + i * xSpacing}
                  y={yOffset}
                  width={barWidth}
                  height={barHeight}
                  fill={`rgba(${colorVariations[i % 3]}, 0.9)`}
                  rx={borderRadius}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: [barHeight, barHeight * 1.4, barHeight],
                    opacity: [0.9, 1, 0.9] 
                  }}
                  transition={{
                    duration: 3,
                    delay: 2.5 + wave.delay + i * 0.05,
                    repeat: Infinity,
                    repeatDelay: 7,
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
            r: [8, 15, 8],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 6,
            ease: "easeInOut"
          }}
        />

        {/* Strategic glow effects at key intersections */}
        {[
          { x: 200, y: 370, delay: 1 },
          { x: 170, y: 320, delay: 2 },
          { x: 230, y: 320, delay: 2.5 },
          { x: 130, y: 310, delay: 3 },
          { x: 270, y: 310, delay: 3.5 },
          { x: 90, y: 300, delay: 4 },
          { x: 310, y: 300, delay: 4.5 },
          { x: 160, y: 250, delay: 5 },
          { x: 240, y: 250, delay: 5.5 },
          { x: 40, y: 130, delay: 6 },
          { x: 360, y: 130, delay: 6.5 },
        ].map((glow, index) => (
          <motion.circle
            key={`glow-${index}`}
            cx={glow.x}
            cy={glow.y}
            r="3"
            fill="rgba(0, 255, 240, 0.5)"
            animate={{
              r: [3, 8, 3],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              delay: glow.delay,
              repeat: Infinity,
              repeatDelay: 8,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
}