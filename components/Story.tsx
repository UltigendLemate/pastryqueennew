"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal, Words, Parallax } from "./Reveal";
import Photo from "./Photo";
import { STATS } from "@/lib/site";

function useCountUp(target: number, active: boolean, duration = 1.7) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return val;
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const v = useCountUp(value, inView);
  return (
    <div ref={ref}>
      <div className="display text-5xl text-pine md:text-6xl">
        {v}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="eyebrow mt-3 text-pine/50">{label}</div>
    </div>
  );
}

export default function Story() {
  return (
    <section id="story" className="relative bg-ivory py-24 md:py-36">
      <div className="edge">
        <Reveal className="mb-10 flex items-center gap-4">
          <span className="eyebrow text-gold-deep">The Event</span>
          <span className="h-px w-16 bg-pine/20" />
        </Reveal>

        <h2 className="display max-w-5xl text-[clamp(2.1rem,5.6vw,4.6rem)] text-pine">
          <Words text="Where India’s finest women pastry chefs turn" />{" "}
          <span className="italic text-gold-deep">
            <Words text="nature into edible art." delay={0.3} />
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Parallax distance={50}>
              <Photo
                src="/pics/DSC_4643.jpg"
                caption="Chocolate, plated in smoke"
                className="aspect-[4/5]"
                sizes="(max-width: 768px) 92vw, 40vw"
              />
            </Parallax>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-8">
            <Reveal>
              <p className="text-lg leading-relaxed text-pine/85">
                Now in its fifth edition, Pastry Queen India is a professional
                proving ground for the country’s finest - high-stakes
                craft staged alongside a showcase of the next generation of women
                pastry chefs. Organised by{" "}
                <span className="font-semibold text-pine">Bakery Review</span> at
                IHE Expo, it upholds the sector’s values of passion, creativity and
                collaboration.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-pine/85">
                This year’s theme,{" "}
                <span className="italic text-pine">“The Dance of Birds,”</span> asks
                competitors to translate the elegance and rhythm of nature into
                technical mastery.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <blockquote className="mt-10 border-l-2 border-gold pl-6">
                <p className="font-display text-2xl italic leading-snug text-pine md:text-3xl">
                  “Passion, creativity, collaboration - and a national stage to
                  prove it.”
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-pine/10 pt-12 md:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
