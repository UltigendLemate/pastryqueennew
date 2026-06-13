"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { ...pos };
    let raf = 0;

    const move = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!visible) setVisible(true);
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
      const t = e.target as HTMLElement;
      setHovering(!!t.closest('a, button, [data-cursor="hover"]'));
    };

    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.16;
      ringPos.y += (pos.y - ringPos.y) * 0.16;
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", move);
    const leave = () => setVisible(false);
    document.addEventListener("mouseleave", leave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [visible]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
    >
      <div
        ref={ring}
        className="absolute left-0 top-0 -ml-5 -mt-5 h-10 w-10 rounded-full border border-pine/40 transition-[width,height,margin,background-color,border-color] duration-300 ease-editorial"
        style={
          hovering
            ? {
                width: 64,
                height: 64,
                marginLeft: -32,
                marginTop: -32,
                backgroundColor: "rgba(184,137,74,0.10)",
                borderColor: "rgba(184,137,74,0.6)",
              }
            : undefined
        }
      />
      <div
        ref={dot}
        className="absolute left-0 top-0 -ml-[3px] -mt-[3px] h-[6px] w-[6px] rounded-full bg-gold"
        style={hovering ? { opacity: 0 } : undefined}
      />
    </div>
  );
}
