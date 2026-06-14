"use client";

/**
 * "Living sugar photo" — the real poster sculpture (public/stock/bird.png) mapped
 * onto a WebGL plane that tilts in 3D toward the cursor (real parallax against a
 * flock + gold motes behind it), with a glisten sweeping across the sugar and a
 * slow breathing float. Photoreal look, smooth ambient motion. Render loop pauses
 * off-screen. No literal wing-flap — it reads as the poured-sugar showpiece.
 */

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

const PALETTE = ["#bf4a7a", "#d9b779", "#c46f99", "#9a6e34", "#e0a9c2"];
const IMG_RATIO = 0.69; // tight-cropped bird.webp aspect (w/h)

/* ----------------------------- glisten shader ----------------------------- */
const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const FRAG = /* glsl */ `
  uniform sampler2D map;
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    vec4 tex = texture2D(map, vUv);
    if (tex.a < 0.04) discard;
    // soft diagonal highlight sweeping across the bright sugar every ~12s
    float d = vUv.x * 0.7 + (1.0 - vUv.y) * 0.3;
    float sweep = fract(uTime * 0.085);
    float band = smoothstep(0.07, 0.0, abs(d - sweep));
    float lum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
    float sheen = band * smoothstep(0.5, 0.96, lum) * 0.55;
    gl_FragColor = vec4(tex.rgb + sheen, tex.a);
  }
`;

function BirdPlane({ mobile }: { mobile: boolean }) {
  const tex = useLoader(THREE.TextureLoader, "/stock/bird.webp");
  const mesh = useRef<THREE.Mesh>(null);
  const r = !!useReducedMotion();

  const mat = useMemo(() => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    return new THREE.ShaderMaterial({
      uniforms: { map: { value: tex }, uTime: { value: 0 } },
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
    });
  }, [tex]);

  const H = mobile ? 3.9 : 6.0;
  const baseY = mobile ? -1.0 : 0.15;
  const bx = mobile ? 0 : 2.55; // sits on the right, bleeds gently off-edge

  useFrame((state) => {
    mat.uniforms.uTime.value = state.clock.elapsedTime;
    if (!mesh.current || r) return;
    const t = state.clock.elapsedTime;
    mesh.current.position.y = baseY + Math.sin(t * 0.6) * 0.07;
    const s = 1 + Math.sin(t * 0.8) * 0.013;
    mesh.current.scale.set(s, s, 1);
  });

  return (
    <mesh ref={mesh} material={mat} position={[bx, baseY, 0]}>
      <planeGeometry args={[H * IMG_RATIO, H]} />
    </mesh>
  );
}

type Seed = {
  cx: number; cy: number; cz: number; rx: number; rz: number;
  sp: number; ph: number; bob: number; s: number; flap: number; color: string; op: number;
};

function makeSeeds(n: number): Seed[] {
  let seed = 91;
  const rnd = () => ((seed = (seed * 16807) % 2147483647), (seed - 1) / 2147483646);
  return Array.from({ length: n }, () => ({
    cx: (rnd() - 0.5) * 10.5,
    cy: (rnd() - 0.42) * 4.6,
    cz: (rnd() - 0.5) * 3.5 - 0.8,
    rx: 0.5 + rnd() * 1.7,
    rz: 0.5 + rnd() * 1.7,
    sp: (0.25 + rnd() * 0.5) * (rnd() > 0.5 ? 1 : -1),
    ph: rnd() * Math.PI * 2,
    bob: 0.15 + rnd() * 0.5,
    s: 0.15 + rnd() * 0.24,
    flap: 5 + rnd() * 5,
    color: PALETTE[Math.floor(rnd() * PALETTE.length)],
    op: 0.5 + rnd() * 0.42,
  }));
}

function useWingGeometry() {
  return useMemo(() => {
    const g = new THREE.BufferGeometry();
    // slim, back-swept wing (extends +X, sweeps -Y) → two of them read as a
    // gull-chevron, not a flat bowtie
    const v = new Float32Array([
      0, 0, 0, 0.55, -0.05, 0, 1.15, -0.34, 0,
      0, 0, 0, 1.15, -0.34, 0, 0.45, -0.2, 0,
    ]);
    g.setAttribute("position", new THREE.BufferAttribute(v, 3));
    g.computeVertexNormals();
    return g;
  }, []);
}

function Bird({ seed, geo }: { seed: Seed; geo: THREE.BufferGeometry }) {
  const g = useRef<THREE.Group>(null);
  const lw = useRef<THREE.Mesh>(null);
  const rw = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const e = state.clock.elapsedTime;
    const t = e * seed.sp + seed.ph;
    if (g.current) {
      g.current.position.set(
        seed.cx + Math.cos(t) * seed.rx,
        seed.cy + Math.sin(t * 1.6 + seed.ph) * seed.bob,
        seed.cz + Math.sin(t) * seed.rz
      );
      g.current.rotation.y = -t + Math.PI / 2;
      g.current.rotation.z = Math.sin(t) * 0.18;
    }
    // up/down flap about the forward axis, around a raised dihedral
    const flap = 0.34 + Math.sin(e * seed.flap + seed.ph) * 0.5;
    if (lw.current) lw.current.rotation.z = flap;
    if (rw.current) rw.current.rotation.z = -flap;
  });
  return (
    <group ref={g} scale={seed.s}>
      <mesh ref={lw} geometry={geo}>
        <meshBasicMaterial color={seed.color} side={THREE.DoubleSide} transparent opacity={seed.op} />
      </mesh>
      <mesh ref={rw} geometry={geo} scale={[-1, 1, 1]}>
        <meshBasicMaterial color={seed.color} side={THREE.DoubleSide} transparent opacity={seed.op} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshBasicMaterial color={seed.color} transparent opacity={seed.op} />
      </mesh>
    </group>
  );
}

function Motes() {
  const ref = useRef<THREE.Points>(null);
  const { geo, mat } = useMemo(() => {
    const N = 150;
    const pos = new Float32Array(N * 3);
    let s = 5;
    const rnd = () => ((s = (s * 16807) % 2147483647), (s - 1) / 2147483646);
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (rnd() - 0.5) * 12;
      pos[i * 3 + 1] = (rnd() - 0.5) * 8;
      pos[i * 3 + 2] = (rnd() - 0.5) * 5 - 1;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: "#d9b779", size: 0.05, transparent: true, opacity: 0.55 });
    return { geo, mat };
  }, []);
  useFrame((state, delta) => {
    if (!ref.current) return;
    const p = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < p.count; i++) {
      let y = p.getY(i) + delta * 0.16;
      if (y > 4) y = -4;
      p.setY(i, y);
    }
    p.needsUpdate = true;
    ref.current.rotation.y += delta * 0.02;
  });
  return <points ref={ref} geometry={geo} material={mat} />;
}

function Scene({ mobile }: { mobile: boolean }) {
  const group = useRef<THREE.Group>(null);
  const geo = useWingGeometry();
  const seeds = useMemo(() => makeSeeds(16), []);
  const r = !!useReducedMotion();
  const ptr = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (r || window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      ptr.current.x = e.clientX / window.innerWidth - 0.5;
      ptr.current.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [r]);

  // depth-tilt: the whole scene leans toward the cursor; z-separated layers
  // (bird plane vs flock vs motes) shift by different amounts → real parallax.
  useFrame(() => {
    if (!group.current) return;
    const ry = ptr.current.x * 0.26;
    const rx = -ptr.current.y * 0.16;
    group.current.rotation.y += (ry - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (rx - group.current.rotation.x) * 0.05;
  });

  return (
    <group ref={group}>
      <BirdPlane mobile={mobile} />
      {seeds.map((s, i) => (
        <Bird key={i} seed={s} geo={geo} />
      ))}
      <Motes />
    </group>
  );
}

export default function FlockHero3D() {
  const wrap = useRef<HTMLDivElement>(null);
  const r = !!useReducedMotion();
  const [active, setActive] = useState(true);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { threshold: 0.01 });
    io.observe(el);
    const mq = window.matchMedia("(max-width: 767px)");
    const onMq = () => setMobile(mq.matches);
    onMq();
    mq.addEventListener("change", onMq);
    return () => {
      io.disconnect();
      mq.removeEventListener("change", onMq);
    };
  }, []);

  return (
    <div ref={wrap} className="relative h-full w-full">
      <Canvas
        frameloop={active ? "always" : "never"}
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 6.2], fov: 50 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene mobile={mobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}
