"use client";

import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import Photo from "./Photo";
import { GALLERY } from "@/lib/site";

type Item = (typeof GALLERY)[number] & { i: number };

export default function Gallery() {
  // Responsive column count (2 on mobile, 3 on desktop).
  const [cols, setCols] = useState(3);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setCols(mq.matches ? 2 : 3);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Greedy balance: drop each image into the currently-shortest column.
  // Deterministic (viewport-independent) → even columns, no orphan.
  const buckets: Item[][] = Array.from({ length: cols }, () => []);
  const heights = new Array(cols).fill(0);
  GALLERY.forEach((g, i) => {
    const [w, h] = g.aspect.split("/").map((n) => Number(n.trim()));
    const hf = h / w; // displayed height per unit column width
    let m = 0;
    for (let c = 1; c < cols; c++) if (heights[c] < heights[m]) m = c;
    buckets[m].push({ ...g, i });
    heights[m] += hf;
  });

  return (
    <section id="gallery" className="cv bg-ivory py-24 md:py-32">
      <div className="edge">
        <Reveal className="mb-12 flex items-end justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="eyebrow text-gold-deep">The Gallery</span>
            <span className="h-px w-16 bg-pine/20" />
          </div>
          <p className="hidden max-w-xs text-right text-sm text-pine/60 md:block">
            Scenes from past editions - the showpieces, the plates, the crowning.
          </p>
        </Reveal>

        <div className="flex items-start gap-4 lg:gap-6">
          {buckets.map((col, ci) => (
            <div key={ci} className="flex flex-1 flex-col gap-4 lg:gap-6">
              {col.map((g) => (
                <Photo
                  key={g.src}
                  src={g.src}
                  caption={g.caption}
                  index={g.i}
                  aspectRatio={g.aspect}
                  objectPosition={g.pos}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="w-full"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
