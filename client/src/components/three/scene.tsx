import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ParticleSystem } from "./particle-system";
import { Nebula } from "./nebula";

export function Scene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <ParticleSystem />
          <Nebula />
        </Suspense>
      </Canvas>
    </div>
  );
}
