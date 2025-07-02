import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Nebula() {
  const meshRef = useRef<THREE.Mesh>(null);

  const shaderMaterial = useMemo(() => {
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float time;
      uniform vec2 mouse;
      varying vec2 vUv;
      
      void main() {
        vec2 center = vec2(0.5, 0.5);
        float dist = distance(vUv, center);
        
        float noise = sin(dist * 8.0 - time * 2.0) * 0.5 + 0.5;
        float alpha = (1.0 - dist) * noise * 0.4;
        
        vec3 color1 = vec3(0.0, 1.0, 0.94); // Cyan
        vec3 color2 = vec3(0.42, 0.05, 0.68); // Purple
        vec3 finalColor = mix(color1, color2, dist);
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mouse: { value: new THREE.Vector2(0, 0) }
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
  }, []);

  useFrame((state) => {
    if (meshRef.current && shaderMaterial) {
      shaderMaterial.uniforms.time.value = state.clock.elapsedTime;
      meshRef.current.rotation.z += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} material={shaderMaterial}>
      <sphereGeometry args={[2.5, 32, 32]} />
    </mesh>
  );
}
