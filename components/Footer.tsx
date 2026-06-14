"use client";

import { SITE, NAV } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-pine-deep pt-20 text-paper">
      <div className="edge">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="eyebrow text-gold-light">{SITE.edition} · {SITE.datesShort}</div>
            <h2 className="display mt-4 text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95]">
              Pastry Queen
              <br />
              <span className="italic ink-gold">India</span> 2026
            </h2>
            <p className="mt-5 max-w-sm text-paper/65">
              {SITE.tagline} Theme - “{SITE.theme}.”
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <div className="eyebrow mb-5 text-paper/45">Explore</div>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="link-underline text-paper/80 hover:text-paper">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-5 text-paper/45">Enter</div>
            <ul className="space-y-3">
              <li>
                <a href={SITE.registerPdf} target="_blank" rel="noreferrer" className="link-underline text-paper/80 hover:text-paper">
                  Apply to compete
                </a>
              </li>
              <li>
                <a href={SITE.rulesUrl} target="_blank" rel="noreferrer" className="link-underline text-paper/80 hover:text-paper">
                  Rules & regulations
                </a>
              </li>
              <li>
                <a href={SITE.visitorUrl} target="_blank" rel="noreferrer" className="link-underline text-paper/80 hover:text-paper">
                  Visitor pass
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-paper/10 py-8 text-sm text-paper/50 md:flex-row md:items-center">
          <span>© {SITE.year} Pastry Queen India · Organised by {SITE.organisedBy}</span>
          <span className="flex items-center gap-2">
            {SITE.theme}
            <span className="text-gold-light">✦</span>
            {SITE.city}
          </span>
        </div>
      </div>

      {/* giant ghost wordmark */}
      <div
        aria-hidden
        className="special-font pointer-events-none select-none whitespace-nowrap text-center text-[17vw] leading-[0.82] text-paper/[0.06]"
      >
        Pastry Event
      </div>
    </footer>
  );
}
