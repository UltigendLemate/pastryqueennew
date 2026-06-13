"use client";

import { Reveal, Words } from "./Reveal";
import { SITE } from "@/lib/site";

export default function Apply() {
  return (
    <section id="apply" className="relative overflow-hidden bg-pine-deep py-24 text-paper md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 80% 30%, rgba(217,183,121,0.16), transparent 70%)",
        }}
      />
      <div className="edge relative">
        <div className="flex items-center gap-4">
          <span className="eyebrow text-gold-light">Enter the 2026 edition</span>
          <span className="h-px w-12 bg-paper/25" />
        </div>

        <h2 className="display mt-6 text-[clamp(2.4rem,7vw,6rem)] leading-[0.95]">
          <Words text="Applications close" />
          <br />
          <span className="italic text-gold-light">
            <Words text={SITE.registerDeadline} delay={0.25} />
          </span>
        </h2>

        <Reveal delay={0.2}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/75">
            Open to women professional pastry chefs of Indian nationality. Submit
            your complete application by email to{" "}
            <a
              href={`mailto:${SITE.registerEmail}`}
              className="link-underline font-semibold text-gold-light"
            >
              {SITE.registerEmail}
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={SITE.registerPdf}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-full bg-paper px-8 py-4 text-sm font-semibold text-pine"
            >
              <span className="relative z-10">Download application form</span>
              <span className="absolute inset-0 -translate-x-full bg-gold-light transition-transform duration-500 ease-editorial group-hover:translate-x-0" />
            </a>
            <a
              href={SITE.rulesUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-paper/30 px-8 py-4 text-sm font-semibold text-paper transition-colors duration-300 hover:border-gold-light hover:text-gold-light"
            >
              Read the rules
            </a>
            <a
              href={SITE.visitorUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-sm font-semibold text-paper/70"
            >
              Visitor registration ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
