"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, Words } from "./Reveal";
import { PARTICIPANTS } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Participants() {
  const [active, setActive] = useState<number | null>(null);
  const chef = active != null ? PARTICIPANTS[active] : null;

  useEffect(() => {
    document.body.style.overflow = chef ? "hidden" : "";
  }, [chef]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="participants" className="cv bg-ivory py-24 md:py-32">
      <div className="edge">
        <div className="mb-10 flex items-center gap-4">
          <span className="eyebrow text-gold-deep">The Chefs</span>
          <span className="h-px w-16 bg-pine/20" />
        </div>

        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="display max-w-3xl text-[clamp(2rem,5vw,4rem)] text-pine">
            <Words text="The competitors who " />
            <span className="italic text-gold-deep">
              <Words text="take the floor." delay={0.25} />
            </span>
          </h2>
          <Reveal delay={0.1} className="max-w-xs">
            <p className="text-pine/70">
              Each chef represents their institution. Tap any chef to read their full story.
            </p>
          </Reveal>
        </div>

        {/* editorial split: photo + a panel that highlights the institute logo */}
        <div className="grid gap-5 md:grid-cols-2">
          {PARTICIPANTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.08}>
              <button
                onClick={() => setActive(i)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-pine/10 bg-white text-left transition-all duration-500 ease-editorial hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_28px_60px_-32px_rgba(42,59,59,0.45)] sm:flex-row"
              >
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-gradient-to-b from-bisque to-sand sm:aspect-auto sm:w-[42%]">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 28vw"
                    className="object-cover object-top transition-transform duration-[1.1s] ease-editorial group-hover:scale-[1.04]"
                    style={{ filter: "saturate(0.92) contrast(1.03)" }}
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center gap-3.5 p-6 md:p-7">
                  {/* enlarged, highlighted institute logo */}
                  <div className="flex h-14 items-center md:h-16">
                    <img
                      src={p.logo}
                      alt={p.team}
                      loading="lazy"
                      className="max-h-full max-w-[64%] object-contain"
                    />
                  </div>
                  <div>
                    <div className="eyebrow text-gold-deep">{p.team}</div>
                    <div className="display mt-1 text-2xl leading-tight text-pine md:text-[1.7rem]">{p.name}</div>
                  </div>
                  <p className="line-clamp-2 text-sm leading-relaxed text-pine/55 md:line-clamp-3">{p.bio}</p>
                  <span className="mt-0.5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-deep">
                    Read story
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* full-bio dialog */}
      <AnimatePresence>
        {chef && (
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
              className="relative grid max-h-[85vh] w-full max-w-3xl grid-cols-1 overflow-hidden rounded-2xl bg-paper sm:grid-cols-5"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-b from-bisque to-sand sm:col-span-2 sm:aspect-auto">
                <Image
                  src={chef.img}
                  alt={chef.name}
                  fill
                  sizes="(max-width: 640px) 90vw, 40vw"
                  className="object-cover object-top"
                  style={{ filter: "saturate(0.92) contrast(1.03)" }}
                />
              </div>
              <div className="overflow-y-auto p-7 sm:col-span-3 md:p-9">
                <div className="flex items-center gap-4">
                  {chef.logo && (
                    <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-lg border border-pine/10 bg-white p-2.5">
                      <img
                        src={chef.logo}
                        alt={chef.team}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  )}
                  <div className="eyebrow text-gold-deep">{chef.team}</div>
                </div>
                <h3 className="display mt-5 text-3xl text-pine md:text-4xl">{chef.name}</h3>
                <span className="mt-4 block h-px w-12 bg-gold" />
                <p className="mt-5 leading-relaxed text-pine/80">{chef.bio}</p>
              </div>
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
