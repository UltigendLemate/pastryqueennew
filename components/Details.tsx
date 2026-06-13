"use client";

import { Reveal, Words } from "./Reveal";
import { DETAILS } from "@/lib/site";

export default function Details() {
  return (
    <section id="details" className="cv bg-paper py-24 md:py-36">
      <div className="edge grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <div className="mb-6 flex items-center gap-4">
              <span className="eyebrow text-gold-deep">Details</span>
              <span className="h-px w-12 bg-pine/20" />
            </div>
            <h2 className="display text-[clamp(2rem,4.4vw,3.4rem)] leading-tight text-pine">
              <Words text="Everything you need to enter." />
            </h2>
          </div>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <dl>
            {DETAILS.map((d, i) => (
              <Reveal key={d.k} delay={i * 0.05}>
                <div className="border-t border-pine/15 py-7 first:border-t-0 md:grid md:grid-cols-3 md:gap-8">
                  <dt className="eyebrow mb-2 text-pine/50 md:mb-0">{d.k}</dt>
                  <dd className="text-pretty text-lg leading-relaxed text-pine/85 md:col-span-2">
                    {d.v}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
