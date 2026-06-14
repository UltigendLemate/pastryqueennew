"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Photo from "./Photo";
import { CHALLENGE } from "@/lib/site";

const toneDot: Record<string, string> = {
  teal: "bg-teal-light",
  gold: "bg-gold-light",
  pine: "bg-paper",
};

export default function Challenge() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);
  const [height, setHeight] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const calc = () => {
      if (!trackRef.current) return;
      const distance = trackRef.current.scrollWidth - window.innerWidth;
      setMaxX(Math.max(0, distance));
      setHeight(window.innerHeight + Math.max(0, distance));
    };
    calc();
    window.addEventListener("resize", calc);
    const t = setTimeout(calc, 400); // after fonts/images settle
    return () => {
      window.removeEventListener("resize", calc);
      clearTimeout(t);
    };
  }, []);

  return (
    <section
      id="challenge"
      ref={sectionRef}
      className="relative bg-pine-deep text-paper"
      style={{ height: height ? `${height}px` : "100vh" }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* header row */}
        <div className="edge flex items-center justify-between pt-24 md:pt-28">
          <div className="flex items-center gap-4">
            <span className="eyebrow text-gold-light">The Challenge</span>
            <span className="h-px w-12 bg-paper/25" />
          </div>
          <span className="eyebrow text-paper/50">01 - 0{CHALLENGE.length}</span>
        </div>

        {/* horizontal track */}
        <div className="flex flex-1 items-center">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center gap-6 px-[max(1.25rem,calc((100vw-1400px)/2+1.25rem))] md:gap-8"
          >
            {/* intro panel */}
            <div className="flex h-[70vh] w-[80vw] shrink-0 flex-col justify-center pr-6 sm:w-[58vw] md:w-[40vw]">
              <h2 className="display text-[clamp(2.6rem,6vw,5rem)] leading-[0.95]">
                Five disciplines.
                <br />
                <span className="italic ink-gold">One buffet.</span>
                <br />
                Judged live.
              </h2>
              <p className="mt-6 max-w-sm text-paper/70">
                Each competitor executes a complete buffet before the jury - from a
                towering showpiece to the smallest viennoiserie. Scroll to meet the
                five.
              </p>
              <div className="mt-8 flex items-center gap-3 text-gold-light">
                <span className="text-sm font-semibold">Scroll</span>
                <span className="text-xl">→</span>
              </div>
            </div>

            {/* discipline cards */}
            {CHALLENGE.map((c, i) => (
              <article
                key={c.no}
                className="relative h-[70vh] w-[80vw] shrink-0 overflow-hidden rounded-2xl sm:w-[56vw] md:w-[34vw] lg:w-[28vw]"
              >
                <div className="absolute inset-0">
                  <Photo
                    src={c.image}
                    rounded={false}
                    className="h-full w-full"
                    index={i}
                    sizes="(max-width: 768px) 80vw, 32vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/95 via-pine-deep/25 to-pine-deep/10" />
                <div className="pointer-events-none relative z-10 flex h-full flex-col justify-between p-7">
                  <div className="flex items-start justify-between">
                    <span className="display text-6xl text-paper/85">{c.no}</span>
                    <span className={`mt-3 h-2.5 w-2.5 rounded-full ${toneDot[c.tone]}`} />
                  </div>
                  <div>
                    <div className="eyebrow text-gold-light">{c.spec}</div>
                    <h3 className="display mt-2 text-4xl text-paper">{c.title}</h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/80">
                      {c.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            {/* tail spacer */}
            <div className="h-[70vh] w-[10vw] shrink-0" />
          </motion.div>
        </div>

        {/* progress bar */}
        <div className="edge pb-10">
          <div className="h-px w-full bg-paper/15">
            <motion.div style={{ width: progress }} className="h-px bg-gold-light" />
          </div>
        </div>
      </div>
    </section>
  );
}
