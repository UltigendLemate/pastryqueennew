"use client";

import { Reveal, Words } from "./Reveal";
import { SPONSORS } from "@/lib/site";

export default function Sponsors() {
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
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 lg:gap-6">
          {SPONSORS.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 0.06}>
              <a
                href={s.link}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-xl border border-pine/10 bg-white p-6 transition-all duration-500 ease-editorial hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_50px_-28px_rgba(42,59,59,0.4)] md:p-8"
              >
                <div className="flex h-24 items-center justify-center">
                  <img
                    src={s.logo}
                    alt={s.name}
                    loading="lazy"
                    className="max-h-20 max-w-[78%] object-contain opacity-65 grayscale transition-all duration-500 ease-editorial group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-5 flex items-end justify-between gap-3 border-t border-pine/10 pt-4">
                  <div>
                    <div className="text-sm font-semibold text-pine">{s.name}</div>
                    <div className="mt-1 text-xs text-pine/50">{s.tag}</div>
                  </div>
                  <span className="text-pine/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-gold">
                    ↗
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
