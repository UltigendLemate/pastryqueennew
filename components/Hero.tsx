"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE } from "@/lib/site";

// Photoreal living-bird hero (WebGL) — client-only.
const FlockHero3D = dynamic(() => import("./FlockHero3D"), { ssr: false });

const EASE = [0.16, 1, 0.3, 1] as const;

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden" style={{ paddingBottom: "0.22em", marginBottom: "-0.22em" }}>
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
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
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
            "radial-gradient(58% 52% at 72% 40%, rgba(217,183,121,0.24), transparent 70%), radial-gradient(50% 50% at 12% 88%, rgba(104,154,155,0.13), transparent 70%)",
        }}
      />

      {/* living sugar-bird + dancing flock (full-bleed) */}
      <motion.div
        style={{ y: canvasY }}
        className="pointer-events-none absolute inset-0 opacity-70 md:pointer-events-auto md:opacity-100"
      >
        <FlockHero3D />
      </motion.div>

      {/* mobile legibility scrim */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[64%] bg-gradient-to-t from-ivory via-ivory/85 to-transparent md:hidden" />

      {/* desktop legibility scrim (left, behind the masthead) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden md:block"
        style={{
          background:
            "linear-gradient(100deg, var(--ivory) 0%, rgba(246,241,231,0.94) 28%, rgba(246,241,231,0.4) 50%, transparent 66%)",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="edge pointer-events-none relative z-10 flex min-h-[100svh] flex-col pb-12 pt-28 md:pb-14 md:pt-32"
      >
        {/* ── Title / diamond sponsor lockup — hidden for now; returns once sponsors are confirmed ── */}
        {false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="pointer-events-auto flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <span className="eyebrow text-pine/40">Presented&nbsp;by</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/pp/elle.png" alt="Title sponsor" className="h-7 w-auto object-contain mix-blend-multiply" />
            <span className="hidden h-5 w-px bg-pine/20 sm:block" />
            <span className="eyebrow text-pine/40">In&nbsp;association&nbsp;with</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sponsors/cranberry.png" alt="Diamond sponsor" className="h-7 w-auto object-contain mix-blend-multiply" />
          </motion.div>
        )}

        {/* ── masthead — vertically centred ── */}
        <div className="my-auto max-w-[44rem]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2"
          >
            <span className="special-font ink-gold text-xl leading-none md:text-2xl">Pastry Event</span>
            <span className="h-4 w-px bg-pine/30" />
            <span className="eyebrow text-pine/55">{SITE.edition} · {SITE.host}</span>
          </motion.div>

          <h1 className="display text-pine" style={{ fontSize: "clamp(2.6rem, min(8vw, 12.5vh), 6.6rem)" }}>
            <Line delay={0.28}>Pastry</Line>
            <Line delay={0.4}><span className="italic ink-gold">Queen</span></Line>
            <Line delay={0.52}>
              India <span className="align-super text-[0.32em] not-italic text-teal-deep">’26</span>
            </Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.78, ease: EASE }}
            className="mt-6 flex items-center gap-3 font-display text-lg italic text-pine/75 md:text-2xl"
          >
            <span className="inline-block h-px w-10 bg-gold" />
            The {SITE.year} theme — “{SITE.theme}”
          </motion.p>
        </div>

        {/* ── meta bar — horizontal, bottom ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease: EASE }}
          className="pointer-events-auto flex flex-wrap items-end justify-between gap-x-10 gap-y-6 border-t border-pine/15 pt-6"
        >
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <div>
              <div className="eyebrow text-pine/45">Dates</div>
              <div className="mt-1.5 font-display text-lg text-pine">{SITE.dates}</div>
            </div>
            <div>
              <div className="eyebrow text-pine/45">Venue</div>
              <div className="mt-1.5 font-display text-lg text-pine">
                {SITE.venue}, {SITE.city.split(",")[0]}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={SITE.registerPdf}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-full bg-pine px-8 py-4 text-sm font-semibold text-paper"
            >
              <span className="relative z-10">Apply to compete</span>
              <span className="absolute inset-0 -translate-x-full bg-gold-deep transition-transform duration-500 ease-editorial group-hover:translate-x-0" />
            </a>
            <a href="#recap" className="group flex items-center gap-3 text-sm font-semibold text-pine">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-pine/25 transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/10">
                ▶
              </span>
              <span className="hidden sm:inline">Watch the 2024 film</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
