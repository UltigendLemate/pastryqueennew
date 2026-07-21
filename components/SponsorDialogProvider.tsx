"use client";

import { createContext, useContext, useState, useMemo, useEffect } from "react";
import type Lenis from "lenis";
import type { SPONSORS } from "@/lib/site";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Sponsor = (typeof SPONSORS)[number];

type SponsorDialogContextValue = {
  open: (sponsor: Sponsor) => void;
};

const SponsorDialogContext = createContext<SponsorDialogContextValue | null>(null);

export function useSponsorDialog() {
  const ctx = useContext(SponsorDialogContext);
  if (!ctx) throw new Error("useSponsorDialog must be used within SponsorDialogProvider");
  return ctx;
}

export default function SponsorDialogProvider({ children }: { children: React.ReactNode }) {
  const [sponsor, setSponsor] = useState<Sponsor | null>(null);

  const value = useMemo<SponsorDialogContextValue>(
    () => ({ open: (s: Sponsor) => setSponsor(s) }),
    []
  );

  useEffect(() => {
    const lenis = (window as unknown as { lenis?: Lenis }).lenis;
    if (sponsor) lenis?.stop();
    else lenis?.start();
    return () => {
      lenis?.start();
    };
  }, [sponsor]);

  return (
    <SponsorDialogContext.Provider value={value}>
      {children}

      <Dialog open={!!sponsor} onOpenChange={(o) => !o && setSponsor(null)}>
        <DialogContent>
          {sponsor && (
            <>
              <div className="flex items-center gap-5 border-b border-pine/10 pb-6">
                <div className="flex h-20 w-28 shrink-0 items-center justify-center rounded-xl border border-pine/10 bg-white p-3">
                  <img src={sponsor.logo} alt={sponsor.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <div className="eyebrow text-gold-deep">{sponsor.tag}</div>
                  <h3 className="display mt-1.5 text-2xl text-pine md:text-3xl">{sponsor.name}</h3>
                </div>
              </div>

              <p className="mt-6 max-h-[40vh] overflow-y-auto whitespace-pre-line leading-relaxed text-pine/80">
                {sponsor.text}
              </p>

              {sponsor.link && (
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-pine px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-gold-deep"
                >
                  Visit website
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                </a>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </SponsorDialogContext.Provider>
  );
}
