"use client";

import { Reveal, Words, Parallax } from "./Reveal";
import Photo from "./Photo";
import { SITE, WINNER } from "@/lib/site";

export default function Winner() {
  return (
    <section id="winner" className="relative overflow-hidden bg-pine py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 80% 20%, rgba(217,183,121,0.22), transparent 70%), radial-gradient(45% 45% at 10% 90%, rgba(217,183,121,0.12), transparent 70%)",
        }}
      />

      <div className="edge relative">
        <Reveal className="mb-10 flex items-center gap-4">
          <span className="eyebrow text-gold-light">Crowned</span>
          <span className="h-px w-16 bg-paper/20" />
        </Reveal>

        <h2 className="display max-w-4xl text-[clamp(2.1rem,5.6vw,4.6rem)] text-paper">
          <Words text="Meet the winner of the" />{" "}
          <span className="italic text-gold-light">
            <Words text={`${SITE.edition}.`} delay={0.3} />
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Parallax distance={50}>
              <Photo
                src={WINNER.img}
                alt={WINNER.name}
                caption={`${SITE.edition} · ${SITE.year}`}
                className="aspect-[4/5]"
                sizes="(max-width: 768px) 92vw, 40vw"
              />
            </Parallax>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-8">
            <Reveal>
              <span className="eyebrow text-gold-light">{SITE.edition} · {SITE.year} winner</span>
              <h3 className="display mt-3 text-4xl text-paper md:text-5xl">{WINNER.name}</h3>
              <p className="mt-2 text-lg text-paper/70">{WINNER.team}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-paper/85">
                Chef {WINNER.name} was crowned {WINNER.title} at IHE Expo 2026,
                taking the title in the competition&rsquo;s fifth edition with a
                buffet judged live across showpiece, chocolate, plated and
                breakfast disciplines.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <blockquote className="mt-10 border-l-2 border-gold pl-6">
                <p className="font-display text-2xl italic leading-snug text-paper md:text-3xl">
                  &ldquo;The national stage for India&rsquo;s finest women pastry
                  chefs.&rdquo;
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
