import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useState, useRef } from "react";
import * as random from "maath/random/dist/maath-random.cjs";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

function Stars(props: any) {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00F0FF"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function EasterEgg() {
  return (
    <div className="h-[calc(100vh-80px)] w-full relative overflow-hidden bg-black flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>
      
      <div className="relative z-10 text-center space-y-6 p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-white/10 max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h1 className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-pulse">
            404? No.
          </h1>
          <h2 className="text-2xl font-mono text-primary mt-2">
            You found the Void.
          </h2>
        </motion.div>
        
        <p className="text-gray-400 font-mono text-sm leading-relaxed">
          This is a secret space. A digital playground where the rules of the main site don't apply. 
          Currently simulating a quantum starfield.
        </p>

        <Link href="/">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white transition-all">
            Return to Reality
          </Button>
        </Link>
      </div>
    </div>
  );
}
