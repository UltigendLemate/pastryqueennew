"use client";

import { Reveal, Words } from "./Reveal";
import { ORGANISERS } from "@/lib/site";

export default function Organisers() {
  return (
    <section id="organisers" className="cv bg-ivory py-24 md:py-32">
      <div className="edge">
        <div className="mb-10 flex items-center gap-4">
          <span className="eyebrow text-gold-deep">The Organisers</span>
          <span className="h-px w-16 bg-pine/20" />
        </div>

        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="display max-w-3xl text-[clamp(2rem,5vw,4rem)] text-pine">
            <Words text="Built by the people who " />
            <span className="italic text-gold-deep">
              <Words text="shape the industry." delay={0.25} />
            </span>
          </h2>
          <Reveal delay={0.1} className="max-w-sm">
            <p className="text-pine/70">
              Pastry Queen India is co-organised by{" "}
              <span className="font-semibold text-pine">Bakery Review</span> and{" "}
              <span className="font-semibold text-pine">IHE Expo 2026</span> - two
              partners at the heart of India’s baking and hospitality industry.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {ORGANISERS.map((o, i) => (
            <Reveal key={o.name} delay={i * 0.1}>
              <a
                href={o.link}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-pine/12 bg-paper p-8 transition-all duration-500 ease-editorial hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_30px_60px_-30px_rgba(42,59,59,0.35)] md:p-10"
              >
                <div className="flex h-20 items-center">
                  <img
                    src={o.logo}
                    alt={o.name}
                    className="max-h-16 w-auto max-w-[180px] object-contain"
                  />
                </div>
                <div className="mt-8 flex items-baseline justify-between gap-4">
                  <h3 className="display text-3xl text-pine">{o.name}</h3>
                  <span className="text-pine/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold">
                    ↗
                  </span>
                </div>
                <div className="eyebrow mt-2 text-pine/45">{o.by}</div>
                <p className="mt-5 text-pretty leading-relaxed text-pine/75">{o.text}</p>
                {"stats" in o && o.stats && (
                  <div className="mt-auto grid grid-cols-3 gap-4 border-t border-pine/10 pt-6">
                    {o.stats.map((s) => (
                      <div key={s.l}>
                        <div className="display text-2xl leading-none text-pine">{s.v}</div>
                        <div className="eyebrow mt-2 text-[0.58rem] text-pine/45">{s.l}</div>
                      </div>
                    ))}
                  </div>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
