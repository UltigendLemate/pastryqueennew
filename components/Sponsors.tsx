"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, Words } from "./Reveal";
import { SPONSORS } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Sponsors() {
  const [active, setActive] = useState<number | null>(null);
  const s = active != null ? SPONSORS[active] : null;

  useEffect(() => {
    document.body.style.overflow = s ? "hidden" : "";
  }, [s]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="sponsors" className="cv bg-ivory py-24 md:py-32">
      <div className="edge">
        <div className="mb-10 flex items-center gap-4">
          <span className="eyebrow text-gold-deep">Partners</span>
          <span className="h-px w-16 bg-pine/20" />
        </div>

        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="display max-w-3xl text-[clamp(2rem,5vw,4rem)] text-pine">
            <Words text="Made possible by our " />
            <span className="italic text-gold-deep">
              <Words text="partners & sponsors." delay={0.25} />
            </span>
          </h2>
          <Reveal delay={0.1} className="max-w-xs">
            <p className="text-pine/70">
              The brands and institutions powering India’s premier pastry competition.
              Tap any partner to learn more.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
          {SPONSORS.map((sp, i) => (
            <Reveal key={sp.name} delay={(i % 3) * 0.06}>
              <button
                onClick={() => setActive(i)}
                className="group flex h-full w-full flex-col rounded-xl border border-pine/10 bg-white p-6 text-left transition-all duration-500 ease-editorial hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_50px_-28px_rgba(42,59,59,0.4)] md:p-8"
              >
                <div className="flex h-24 items-center justify-center">
                  <img
                    src={sp.logo}
                    alt={sp.name}
                    loading="lazy"
                    className="max-h-20 max-w-[78%] object-contain opacity-65 grayscale transition-all duration-500 ease-editorial group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-5 flex items-end justify-between gap-3 border-t border-pine/10 pt-4">
                  <div>
                    <div className="text-sm font-semibold text-pine">{sp.name}</div>
                    <div className="mt-1 text-xs text-pine/50">{sp.tag}</div>
                  </div>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-pine/15 text-pine/35 transition-all duration-300 group-hover:border-gold group-hover:text-gold">
                    +
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* sponsor detail popup */}
      <AnimatePresence>
        {s && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-pine-deep/70 p-5 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.45, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-paper p-8 md:p-10"
            >
              <div className="flex items-center gap-5 border-b border-pine/10 pb-6">
                <div className="flex h-20 w-28 shrink-0 items-center justify-center rounded-xl border border-pine/10 bg-white p-3">
                  <img src={s.logo} alt={s.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <div className="eyebrow text-gold-deep">{s.tag}</div>
                  <h3 className="display mt-1.5 text-2xl text-pine md:text-3xl">{s.name}</h3>
                </div>
              </div>

              <p className="mt-6 max-h-[40vh] overflow-y-auto leading-relaxed text-pine/80">{s.text}</p>

              <a
                href={s.link}
                target="_blank"
                rel="noreferrer"
                className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-pine px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-gold-deep"
              >
                Visit website
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
              </a>

              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-pine text-paper transition-colors hover:bg-gold-deep"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
