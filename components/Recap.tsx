"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Reveal, Words } from "./Reveal";
import { SITE } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Recap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="recap" className="cv relative overflow-hidden bg-paper py-24 md:py-36">
      {/* oversized ghost year */}
      <motion.span
        style={{ y: bgY }}
        className="display pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none text-[28vw] leading-none text-pine/[0.04]"
      >
        2024
      </motion.span>

      <div className="edge relative">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="display max-w-2xl text-[clamp(2.1rem,5.4vw,4.4rem)] text-pine">
            <Words text="Relive the last" />{" "}
            <span className="italic text-gold-deep">
              <Words text="edition." delay={0.25} />
            </span>
          </h2>
          <Reveal delay={0.1} className="max-w-xs">
            <p className="text-pine/70">
              A two-day celebration of craft, nerves and artistry — captured in the
              official Pastry Queen India 2024 film.
            </p>
          </Reveal>
        </div>

        <div ref={ref}>
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={inView ? { clipPath: "inset(0 0 0% 0)" } : {}}
            transition={{ duration: 1.2, ease: EASE }}
            className="relative overflow-hidden rounded-2xl border border-pine/15 bg-pine-deep shadow-[0_40px_80px_-30px_rgba(27,40,39,0.5)]"
          >
            <div className="flex items-center gap-2 border-b border-paper/10 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-paper/30" />
              <span className="ml-3 text-xs tracking-wide text-paper/60">
                Pastry Queen India 2024 — Official Recap
              </span>
            </div>
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={SITE.recapEmbed}
                title="Pastry Queen India 2024 Recap"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
