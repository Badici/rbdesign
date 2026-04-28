"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import * as THREE from "three";

const OrbModel = ({ progress = 0 }: { progress?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 + progress * 1.7;
    meshRef.current.rotation.x = progress * 0.75;
  });

  return (
    <group>
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.5}>
        <mesh ref={meshRef} castShadow={false}>
          <torusKnotGeometry args={[1.05, 0.35, 280, 32]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            roughness={0.12}
            metalness={0.85}
            clearcoat={1}
            clearcoatRoughness={0.18}
            distort={0.22}
            speed={1.5}
          />
        </mesh>
      </Float>
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.9, 0.02, 20, 180]} />
        <meshStandardMaterial color="#b388ff" emissive="#5f2ac7" emissiveIntensity={0.7} />
      </mesh>
    </group>
  );
};

const Scene = ({ progress }: { progress: number }) => {
  return (
    <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 4.6], fov: 42 }} gl={{ antialias: true }}>
      <ambientLight intensity={0.8} />
      <directionalLight intensity={1.2} position={[3, 2, 5]} />
      <OrbModel progress={progress} />
      <Environment preset="city" />
    </Canvas>
  );
};

export const HeroVisual = () => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  const y = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.6]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  if (reduceMotion) {
    return (
      <div className="relative h-[460px] w-full overflow-hidden rounded-3xl border border-stroke/60 bg-[radial-gradient(circle_at_50%_35%,rgba(139,92,246,0.45),rgba(9,7,15,0.9)_65%)]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(168,85,247,0.2),transparent_55%)]" />
      </div>
    );
  }

  return (
    <motion.div style={{ y, opacity }} className="h-[460px] w-full overflow-hidden rounded-3xl border border-stroke/60">
      <Scene progress={progress} />
    </motion.div>
  );
};
