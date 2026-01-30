import { useMemo, useRef } from "react";
import * as THREE from "three";

import {
  ContactShadows,
  Environment,
  Float,
  Sparkles,
  Sphere,
  Stars,
  Torus,
} from "@react-three/drei";
import { Canvas, RootState, useFrame } from "@react-three/fiber";

const SHOOTING_STAR_DIRECTION = new THREE.Vector3(-1, -0.3, -0.8).normalize();
const SHOOTING_STAR_ROTATION = new THREE.Quaternion().setFromUnitVectors(
  new THREE.Vector3(0, 1, 0),
  SHOOTING_STAR_DIRECTION,
);

const ParticleWave = () => {
  const ref = useRef<THREE.Group>(null);
  const getParticlePosition = (index: number): [number, number, number] => {
    const prng = (seed: number) => {
      const x = Math.sin(seed) * 43758.5453;
      return x - Math.floor(x);
    };
    const base = index + 1;
    return [
      (prng(base * 12.9898) - 0.5) * 15,
      (prng(base * 78.233) - 0.5) * 15,
      (prng(base * 39.425) - 0.5) * 15,
    ];
  };

  useFrame((state: RootState) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.y = t * 0.05;
      ref.current.rotation.z = Math.sin(t * 0.1) * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {Array.from({ length: 200 }).map((_, i) => (
        <Sphere key={i} args={[0.015, 8, 8]} position={getParticlePosition(i)}>
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

const ShootingStars = () => {
  const groupRef = useRef<THREE.Group>(null);
  const starsData = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => {
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

        <ShootingStars />

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
