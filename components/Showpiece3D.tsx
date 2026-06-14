"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  Lightformer,
  ContactShadows,
  MeshDistortMaterial,
} from "@react-three/drei";
import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import * as THREE from "three";

const isMobile =
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 768px)").matches;

/** Small gold elements that orbit the showpiece - the "dance of birds". */
function Orbiters() {
  const group = useRef<THREE.Group>(null);
  const seeds = useMemo(
    () =>
      Array.from({ length: isMobile ? 4 : 6 }).map((_, i) => ({
        radius: 2.0 + (i % 3) * 0.35,
        speed: 0.25 + (i % 4) * 0.12,
        phase: (i / 6) * Math.PI * 2,
        tilt: (i - 3) * 0.22,
        size: 0.045 + (i % 3) * 0.018,
        y: (i - 2.5) * 0.32,
      })),
    []
  );
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      const s = seeds[i];
      const a = s.phase + t * s.speed;
      child.position.set(
        Math.cos(a) * s.radius,
        s.y + Math.sin(a * 1.3) * 0.4,
        Math.sin(a) * s.radius * Math.cos(s.tilt)
      );
    });
  });
  return (
    <group ref={group}>
      {seeds.map((s, i) => (
        <mesh key={i}>
          <sphereGeometry args={[s.size, 18, 18]} />
          <meshStandardMaterial color="#d9b779" roughness={0.18} metalness={1} envMapIntensity={1.6} />
        </mesh>
      ))}
    </group>
  );
}

function Showpiece() {
  const group = useRef<THREE.Group>(null);
  const detail = isMobile ? 16 : 32;

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.16;
    const px = state.pointer.x;
    const py = state.pointer.y;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, py * 0.22 + 0.04, 0.04);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, px * 0.3, 0.04);
  });

  return (
    <group ref={group}>
      <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.85}>
        <mesh>
          <icosahedronGeometry args={[1.2, detail]} />
          <MeshDistortMaterial color="#f1e8d8" roughness={0.14} metalness={0.08} distort={0.3} speed={1.25} envMapIntensity={1.15} />
        </mesh>
        <mesh rotation={[Math.PI / 2.5, 0.5, 0]}>
          <torusGeometry args={[1.92, 0.042, 24, isMobile ? 110 : 180]} />
          <meshStandardMaterial color="#b8894a" roughness={0.22} metalness={1} envMapIntensity={1.5} />
        </mesh>
        <mesh rotation={[Math.PI / 2.1, -0.4, 0.3]}>
          <torusGeometry args={[1.55, 0.012, 12, isMobile ? 110 : 180]} />
          <meshStandardMaterial color="#8fb6b7" roughness={0.35} metalness={0.9} envMapIntensity={1.2} />
        </mesh>
      </Float>
      <Orbiters />
    </group>
  );
}

export default function Showpiece3D() {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  // Pause the entire render loop when the hero is off-screen - no GPU work
  // while the rest of the (long) page is scrolled.
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="h-full w-full">
      <Canvas
        frameloop={active ? "always" : "never"}
        dpr={isMobile ? [1, 1.5] : [1, 1.75]}
        camera={{ position: [0, 0.2, 6], fov: 38 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        style={{ background: "transparent", touchAction: "pan-y" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.55} />
          <directionalLight position={[4, 6, 5]} intensity={0.9} color="#fff4e2" />
          <pointLight position={[-5, -2, -2]} intensity={0.6} color="#8fb6b7" />

          <Showpiece />

          <ContactShadows
            position={[0, -2.1, 0]}
            opacity={0.22}
            scale={11}
            blur={2.8}
            far={4}
            color="#2a3b3b"
            frames={1}
          />

          <Environment resolution={isMobile ? 128 : 256} frames={1}>
            <Lightformer form="rect" intensity={2.2} position={[0, 3, 2]} scale={[7, 7, 1]} color="#fff7ea" />
            <Lightformer form="rect" intensity={1.3} position={[-4, 1, 2]} scale={[3, 4, 1]} color="#d9b779" />
            <Lightformer form="circle" intensity={1.1} position={[4, -1, 1]} scale={[3, 3, 1]} color="#8fb6b7" />
            <Lightformer form="rect" intensity={0.7} position={[0, -3, -3]} scale={[6, 6, 1]} color="#f6f1e7" />
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  );
}
