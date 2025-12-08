import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.2} ref={meshRef}>
        <MeshDistortMaterial
          color="#B026FF"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.9}
          wireframe
        />
      </Sphere>
    </Float>
  );
}

function InnerCore() {
    return (
        <Float speed={4} rotationIntensity={2} floatIntensity={1}>
             <Sphere args={[0.5, 32, 32]}>
                <meshStandardMaterial 
                    color="#00F0FF" 
                    emissive="#00F0FF"
                    emissiveIntensity={2}
                    roughness={0.1}
                    metalness={0.8}
                />
             </Sphere>
        </Float>
    )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00F0FF" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#FF0055" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <AnimatedSphere />
        <InnerCore />
      </Canvas>
    </div>
  );
}
