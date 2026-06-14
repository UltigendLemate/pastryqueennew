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
              Each chef represents their institution. Tap any chef to read their
              story.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {PARTICIPANTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 4) * 0.06}>
              <button
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-xl bg-gradient-to-b from-bisque to-sand text-left"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 45vw, 24vw"
                    className="object-cover object-top transition-transform duration-[1.1s] ease-editorial group-hover:scale-[1.05]"
                    style={{ filter: "saturate(0.9) contrast(1.03)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/55 via-40% to-transparent to-75%" />

                  {/* institute logo chip */}
                  {p.logo && (
                    <div className="absolute left-3 top-3 flex h-12 w-12 items-center justify-center rounded-lg bg-white/95 p-1.5 shadow-md ring-1 ring-pine/5">
                      <img
                        src={p.logo}
                        alt={p.team}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  )}

                  {/* open affordance */}
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-paper/40 text-paper opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    +
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="eyebrow text-[0.6rem] text-gold-light [text-shadow:0_1px_8px_rgba(11,17,16,0.65)]">{p.team}</div>
                    <div className="display mt-1 text-xl leading-tight text-paper [text-shadow:0_1px_10px_rgba(11,17,16,0.7)]">{p.name}</div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* bio popup */}
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
                <div className="flex items-center gap-3">
                  {chef.logo && (
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-pine/10 bg-white p-2">
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
