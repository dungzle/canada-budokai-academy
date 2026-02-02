import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

import { Stars } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

const SHOOTING_STAR_DIRECTION = new THREE.Vector3(-1, -0.3, -0.8).normalize();
const SHOOTING_STAR_ROTATION = new THREE.Quaternion().setFromUnitVectors(
  new THREE.Vector3(0, 1, 0),
  SHOOTING_STAR_DIRECTION,
);

const EnsoRing = () => {
  const { viewport } = useThree();
  const radius = Math.min(Math.max(viewport.width * 0.5, 3), 4);
  return (
    <mesh>
      <ringGeometry args={[radius - 0.03, radius, 128]} />
      <meshBasicMaterial color="#C5A059" transparent opacity={0.8} />
    </mesh>
  );
};

const ShootingStars = () => {
  const groupRef = useRef<THREE.Group>(null);
  const starsData = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => {
        const prng = (seed: number) => {
          const x = Math.sin(seed) * 43758.5453;
          return x - Math.floor(x);
        };
        const base = i + 1;
        const startX = prng(base * 12.9898) * 18 + 6;
        const startY = prng(base * 78.233) * 6 + 2;
        const startZ = prng(base * 39.425) * 12 - 2;
        const speed = 6 + prng(base * 4.91) * 6;
        const length = 0.7 + prng(base * 9.17) * 1.1;
        const thickness = 0.015 + prng(base * 2) * 0.02;

        return {
          position: new THREE.Vector3(startX, startY, startZ),
          speed,
          length,
          thickness,
        };
      }),
    [],
  );
  const stars = useRef(starsData);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const children = groupRef.current.children as THREE.Mesh[];
    const t = state.clock.getElapsedTime();

    stars.current.forEach((star, i) => {
      star.position.addScaledVector(
        SHOOTING_STAR_DIRECTION,
        star.speed * delta,
      );

      if (
        star.position.x < -14 ||
        star.position.y < -6 ||
        star.position.z < -16
      ) {
        const resetSeed = t + i * 13.13;
        const prng = (seed: number) => {
          const x = Math.sin(seed) * 43758.5453;
          return x - Math.floor(x);
        };
        star.position.set(
          prng(resetSeed * 12.9898) * 18 + 6,
          prng(resetSeed * 78.233) * 6 + 2,
          prng(resetSeed * 39.425) * 12 - 2,
        );
      }

      const mesh = children[i];
      if (mesh) {
        mesh.position.copy(star.position);
        mesh.quaternion.copy(SHOOTING_STAR_ROTATION);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {starsData.map((star, i) => (
        <mesh key={i} scale={[1, star.length, 1]}>
          <cylinderGeometry args={[star.thickness, 0, 1, 8, 1, true]} />
          <meshBasicMaterial
            color="#C5A059"
            transparent
            opacity={0.8}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
};

export default function HeroScene() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReduceMotion(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      className="w-full h-full absolute inset-0 bg-[#070b0a]"
      aria-hidden="true"
    >
      {reduceMotion ? (
        <div className="w-full h-full bg-gradient-to-b from-budokai-dark via-budokai-charcoal/40 to-budokai-dark" />
      ) : (
        <Canvas
          camera={{ position: [0, 0, 12], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ powerPreference: "low-power", antialias: true }}
        >
          <fog attach="fog" args={["#070b0a", 6, 22]} />
          <ambientLight intensity={0.2} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#C5A059" />
          <spotLight
            position={[-10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={0.8}
            color="#ffffff"
          />
          <EnsoRing />
          <ShootingStars />
          <Stars
            radius={80}
            depth={30}
            count={1200}
            factor={6}
            fade
            speed={0.2}
          />
        </Canvas>
      )}
    </div>
  );
}
