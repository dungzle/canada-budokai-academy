/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, RootState } from "@react-three/fiber";
import {
  Float,
  Sphere,
  Torus,
  Environment,
  Stars,
  Sparkles,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

const ParticleWave = () => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state: RootState) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.y = t * 0.05;
      ref.current.rotation.z = Math.sin(t * 0.1) * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {[...Array(200)].map((_, i) => (
        <Sphere
          key={i}
          args={[0.015, 8, 8]}
          position={[
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15,
          ]}
        >
          <meshBasicMaterial
            color={i % 3 === 0 ? "#C5A059" : "#ffffff"}
            transparent
            opacity={0.3}
          />
        </Sphere>
      ))}
    </group>
  );
};

const ZenCairn = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state: RootState) => {
    if (ref.current) {
      ref.current.position.y =
        position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group ref={ref} position={position}>
      {/* Stacked stones */}
      <mesh position={[0, -0.4, 0]} scale={[1.2, 0.4, 1]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#1a1c1c" roughness={0.8} />
      </mesh>
      <mesh position={[0, 0, 0]} scale={[0.8, 0.35, 0.7]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#2d2d2d" roughness={0.7} />
      </mesh>
      <mesh position={[0.1, 0.35, 0]} scale={[0.5, 0.3, 0.5]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#1a1c1c" roughness={0.6} />
      </mesh>
      <mesh position={[-0.05, 0.6, 0.05]} scale={[0.3, 0.25, 0.3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#2d2d2d" roughness={0.5} />
      </mesh>
    </group>
  );
};

const EnsoRing = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state: RootState) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Torus ref={ref} args={[3.5, 0.01, 16, 100]} rotation={[0, 0, 0]}>
      <meshStandardMaterial
        color="#C5A059"
        emissive="#C5A059"
        emissiveIntensity={1.5}
        transparent
        opacity={0.4}
      />
    </Torus>
  );
};

export default function HeroScene() {
  return (
    <div className="w-full h-full absolute inset-0 bg-[#070b0a]">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <fog attach="fog" args={["#070b0a", 5, 25]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#C5A059" />
        <spotLight
          position={[-10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          color="#ffffff"
        />

        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
          <ParticleWave />
          <EnsoRing />
          <ZenCairn position={[0, -1, 0]} />
        </Float>

        <Sparkles
          count={60}
          scale={[15, 10, 10]}
          size={1.5}
          speed={0.1}
          color="#C5A059"
          opacity={0.3}
        />

        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.4}
          scale={20}
          blur={2}
          far={4.5}
        />

        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={0.2}
        />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
