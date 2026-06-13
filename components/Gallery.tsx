"use client";

import { Reveal } from "./Reveal";
import Photo from "./Photo";
import { GALLERY } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="gallery" className="cv bg-ivory py-24 md:py-32">
      <div className="edge">
        <Reveal className="mb-12 flex items-end justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="eyebrow text-gold-deep">The Gallery</span>
            <span className="h-px w-16 bg-pine/20" />
          </div>
          <p className="hidden max-w-xs text-right text-sm text-pine/60 md:block">
            Scenes from past editions — the showpieces, the plates, the crowning.
          </p>
        </Reveal>

        {/* gap-free masonry — natural aspect per image, no cropped faces */}
        <div className="gap-4 [column-fill:_balance] columns-2 md:columns-3 lg:gap-6">
          {GALLERY.map((g, i) => (
            <Photo
              key={g.src}
              src={g.src}
              caption={g.caption}
              index={i}
              aspectRatio={g.aspect}
              objectPosition={g.pos}
              sizes="(max-width: 768px) 50vw, 33vw"
              className="mb-4 block w-full break-inside-avoid lg:mb-6"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
