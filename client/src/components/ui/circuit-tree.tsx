import { motion } from "framer-motion";

export function CircuitTree() {
  const audioWaves = [
    { id: 1, x: 120, y: 180, width: 60, delay: 0 },
    { id: 2, x: 320, y: 160, width: 70, delay: 0.2 },
    { id: 3, x: 80, y: 240, width: 50, delay: 0.4 },
    { id: 4, x: 360, y: 220, width: 65, delay: 0.6 },
    { id: 5, x: 180, y: 140, width: 55, delay: 0.8 },
    { id: 6, x: 280, y: 280, width: 60, delay: 1.0 },
    { id: 7, x: 140, y: 300, width: 45, delay: 1.2 },
  ];

  const circuitPaths = [
    "M200,400 L200,350 L180,330 L160,310 L140,290 L120,270",
    "M200,400 L200,350 L220,330 L240,310 L260,290 L280,270",
    "M180,330 L160,330 L140,320 L120,300 L100,280",
    "M220,330 L240,330 L260,320 L280,300 L300,280",
    "M200,350 L200,320 L180,300 L160,280 L140,260",
    "M200,320 L220,300 L240,280 L260,260 L280,240",
    "M160,310 L160,290 L140,270 L120,250 L100,230",
    "M240,310 L240,290 L260,270 L280,250 L300,230",
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
          { x: 200, y: 400 }, { x: 200, y: 350 }, { x: 180, y: 330 }, { x: 220, y: 330 },
          { x: 160, y: 310 }, { x: 240, y: 310 }, { x: 140, y: 290 }, { x: 260, y: 290 },
          { x: 120, y: 270 }, { x: 280, y: 270 }, { x: 100, y: 230 }, { x: 300, y: 230 },
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
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.rect
                key={i}
                x={wave.x + i * 8}
                y={wave.y - (Math.sin(i * 0.5) * 15 + 15)}
                width="3"
                height={Math.abs(Math.sin(i * 0.8) * 20 + 10)}
                fill={`rgba(${Math.sin(i * 0.3) > 0 ? '255, 105, 180' : '138, 43, 226'}, 0.8)`}
                rx="1"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: Math.abs(Math.sin(i * 0.8) * 20 + 10),
                  opacity: 0.8 
                }}
                transition={{
                  duration: 0.5,
                  delay: 2.5 + wave.delay + i * 0.05,
                  ease: "easeOut"
                }}
              />
            ))}
          </g>
        ))}

        {/* Pulsing energy core */}
        <motion.circle
          cx="200"
          cy="400"
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

        {/* Data flow particles */}
        {circuitPaths.slice(0, 4).map((path, index) => (
          <motion.circle
            key={`particle-${index}`}
            r="2"
            fill="rgba(255, 255, 255, 0.6)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              delay: 3 + index * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <animateMotion
              dur="3s"
              begin={`${3 + index * 0.5}s`}
              repeatCount="indefinite"
            >
              <mpath href={`#path-${index}`} />
            </animateMotion>
          </motion.circle>
        ))}

        {/* Hidden paths for animation */}
        <defs>
          {circuitPaths.slice(0, 4).map((path, index) => (
            <path
              key={index}
              id={`path-${index}`}
              d={path}
              fill="none"
              stroke="none"
            />
          ))}
        </defs>
      </motion.svg>
    </div>
  );
}