"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, Words } from "./Reveal";
import { JURY } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Jury() {
  const [active, setActive] = useState<number | null>(null);
  const member = active != null ? JURY[active] : null;

  useEffect(() => {
    document.body.style.overflow = member ? "hidden" : "";
  }, [member]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <section id="jury" className="cv bg-paper py-24 md:py-32">
        <div className="edge">
          <div className="mb-10 flex items-center gap-4">
            <span className="eyebrow text-gold-deep">The Jury</span>
            <span className="h-px w-16 bg-pine/20" />
          </div>

          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="display max-w-3xl text-[clamp(2rem,5vw,4rem)] text-pine">
              <Words text="The experts who " />
              <span className="italic text-gold-deep">
                <Words text="judge the floor." delay={0.25} />
              </span>
            </h2>
            <Reveal delay={0.1} className="max-w-xs">
              <p className="text-pine/70">
                A panel of master chefs, educators and food authorities. Tap any
                juror to read their full profile.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:gap-6">
            {JURY.map((j, i) => (
              <Reveal key={j.name} delay={(i % 3) * 0.06}>
                <button
                  onClick={() => setActive(i)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-pine/10 bg-white text-left transition-all duration-500 ease-editorial hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_28px_60px_-32px_rgba(42,59,59,0.45)]"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-bisque to-sand">
                    <Image
                      src={j.img}
                      alt={j.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 30vw"
                      className="object-cover object-center transition-transform duration-[1.1s] ease-editorial group-hover:scale-[1.04]"
                      style={{ filter: "saturate(0.92) contrast(1.03)" }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5 md:p-6">
                    <div className="eyebrow text-gold-deep">{j.role}</div>
                    <div className="display text-xl leading-tight text-pine md:text-2xl">
                      {j.name}
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-semibold uppercase tracking-wider text-gold-deep">
                      Read profile
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* full-bio dialog — sibling of the .cv section so its fixed overlay
          anchors to the viewport (content-visibility makes .cv a containing block) */}
      <AnimatePresence>
        {member && (
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
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 90vw, 40vw"
                  className="object-cover object-center"
                  style={{ filter: "saturate(0.92) contrast(1.03)" }}
                />
              </div>
              <div className="overflow-y-auto p-7 sm:col-span-3 md:p-9">
                <div className="eyebrow text-gold-deep">{member.role}</div>
                <h3 className="display mt-2 text-3xl text-pine md:text-4xl">
                  {member.name}
                </h3>
                <span className="mt-4 block h-px w-12 bg-gold" />
                <p className="mt-5 leading-relaxed text-pine/80">{member.bio}</p>
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
    </>
  );
}
