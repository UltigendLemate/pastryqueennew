"use client";

const ITEMS = [
  "The Dance of Birds",
  "Pastry Queen India 2026",
  "5 — 6 August",
  "India Expo Centre · Greater Noida",
  "National Selection",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {ITEMS.map((t, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className="font-display text-[clamp(1.6rem,4.2vw,3.4rem)] italic leading-none text-paper">
            {t}
          </span>
          <span className="text-[clamp(1rem,2vw,1.6rem)] text-gold-light">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section id="marquee" className="overflow-hidden border-y border-paper/10 bg-pine-deep py-7">
      <div className="flex w-max animate-marquee">
        <Row />
        <Row />
      </div>
    </section>
  );
}
