"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE, NAV } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-500 ease-editorial ${
          scrolled
            ? "bg-ivory/95 border-b border-pine/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="edge flex items-center justify-between gap-6">
          <a
            href="#top"
            aria-label="Pastry Queen India - home"
            className="flex items-center leading-none"
          >
            <img
              src="/pqilogo.png"
              alt="Pastry Queen India"
              className={`w-auto transition-all duration-500 ease-editorial ${
                scrolled ? "h-10 md:h-12" : "h-12 md:h-16"
              }`}
            />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="link-underline text-[0.92rem] font-medium text-pine/80 hover:text-pine"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={SITE.registerPdf}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-pine px-5 py-2.5 text-[0.85rem] font-semibold text-paper transition-colors duration-300 hover:bg-gold-deep sm:inline-block"
            >
              Apply to compete
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="relative z-[1001] flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span
                className={`h-[1.5px] w-6 bg-pine transition-all duration-300 ${
                  open ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-6 bg-pine transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-6 bg-pine transition-all duration-300 ${
                  open ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[999] flex flex-col justify-center bg-ivory px-8 lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {NAV.map((n, i) => (
                <motion.li
                  key={n.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="display block py-1 text-5xl text-pine"
                  >
                    {n.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href={SITE.registerPdf}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 inline-block w-fit rounded-full bg-pine px-7 py-3 font-semibold text-paper"
            >
              Apply to compete
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
