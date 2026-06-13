"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE } from "@/lib/site";

const Showpiece3D = dynamic(() => import("./Showpiece3D"), {
  ssr: false,
  loading: () => null,
});

const EASE = [0.16, 1, 0.3, 1] as const;

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block will-change-transform"
        initial={{ y: "118%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.05, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const canvasY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden">
      {/* warm radial atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 68% 42%, rgba(217,183,121,0.22), transparent 70%), radial-gradient(50% 50% at 20% 80%, rgba(104,154,155,0.14), transparent 70%)",
        }}
      />

      {/* 3D showpiece */}
      <motion.div
        style={{ y: canvasY }}
        className="pointer-events-none absolute inset-0 opacity-70 md:left-auto md:right-[-8%] md:w-[66%] md:pointer-events-auto md:opacity-100"
      >
        <Showpiece3D />
      </motion.div>

      {/* mobile legibility scrim (lower half only) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-ivory via-ivory/85 to-transparent md:hidden" />

      {/* vertical side label */}
      <div className="pointer-events-none absolute left-[max(1.25rem,calc((100vw-1400px)/2+1.25rem))] top-1/2 hidden -translate-y-1/2 xl:block">
        <span
          className="eyebrow text-pine/40"
          style={{ writingMode: "vertical-rl" }}
        >
          National selection · {SITE.worldCup} · {SITE.worldCupVenue}
        </span>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="edge pointer-events-none relative z-10 flex min-h-[100svh] flex-col justify-center pt-24"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          <span className="special-font ink-gold text-2xl leading-none md:text-[1.9rem]">
            Pastry Event
          </span>
          <span className="h-4 w-px bg-pine/30" />
          <span className="eyebrow text-pine/60">
            {SITE.edition} · {SITE.host}
          </span>
        </motion.div>

        <h1
          className="display text-pine"
          style={{ fontSize: "clamp(2.4rem, min(10vw, 15vh), 8rem)" }}
        >
          <Line delay={0.18}>Pastry</Line>
          <Line delay={0.3}>
            <span className="italic ink-gold">Queen</span>
          </Line>
          <Line delay={0.42}>
            India <span className="align-super text-[0.32em] not-italic text-teal-deep">’26</span>
          </Line>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: EASE }}
          className="mt-5 max-w-xl"
        >
          <p className="flex items-center gap-3 font-display text-lg italic text-pine/80 md:text-2xl">
            <span className="inline-block h-px w-8 bg-gold" />
            {SITE.year} Theme — “{SITE.theme}”
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: EASE }}
          className="pointer-events-auto mt-7 flex flex-wrap items-center gap-x-10 gap-y-5"
        >
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <div>
              <div className="eyebrow text-pine/45">Dates</div>
              <div className="mt-1 font-display text-lg text-pine">{SITE.dates}</div>
            </div>
            <span className="hidden h-9 w-px bg-pine/15 sm:block" />
            <div>
              <div className="eyebrow text-pine/45">Venue</div>
              <div className="mt-1 font-display text-lg text-pine">
                {SITE.venue}, {SITE.city.split(",")[0]}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: EASE }}
          className="pointer-events-auto mt-7 flex flex-wrap items-center gap-5"
        >
          <a
            href={SITE.registerPdf}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-full bg-pine px-8 py-4 text-sm font-semibold text-paper"
          >
            <span className="relative z-10">Apply to compete</span>
            <span className="absolute inset-0 -translate-x-full bg-gold-deep transition-transform duration-500 ease-editorial group-hover:translate-x-0" />
          </a>
          <a
            href="#recap"
            className="group flex items-center gap-3 text-sm font-semibold text-pine"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-pine/25 transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/10">
              ▶
            </span>
            Watch the 2024 film
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="eyebrow text-pine/40">Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-pine/15">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-gold"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
