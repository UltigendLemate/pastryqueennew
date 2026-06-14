"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Reveal, Words } from "./Reveal";
import { CONTACT } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full border-b border-pine/20 bg-transparent py-3 text-pine placeholder:text-pine/40 outline-none transition-colors duration-300 focus:border-gold";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current || status === "sending") return;
    setStatus("sending");
    emailjs
      .sendForm(
        CONTACT.emailjs.service,
        CONTACT.emailjs.template,
        form.current,
        { publicKey: CONTACT.emailjs.publicKey }
      )
      .then(() => {
        setStatus("sent");
        form.current?.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="cv bg-paper py-24 md:py-32">
      <div className="edge grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
        {/* Left - invitation + coordinates */}
        <div>
          <div className="mb-6 flex items-center gap-4">
            <span className="eyebrow text-gold-deep">Contact</span>
            <span className="h-px w-12 bg-pine/20" />
          </div>
          <h2 className="display text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.98] text-pine">
            <Words text="Let’s talk" />
            <br />
            <span className="italic text-gold-deep">
              <Words text="pastry." delay={0.2} />
            </span>
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md leading-relaxed text-pine/70">
              Questions about eligibility, the brief or sponsorship? Reach the team
              directly - we reply within 2 hours.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 space-y-8">
              <div>
                <div className="eyebrow mb-2 text-pine/45">Location</div>
                <p className="leading-relaxed text-pine/85">
                  {CONTACT.org}
                  <br />
                  {CONTACT.address}
                </p>
              </div>
              <div className="flex flex-wrap gap-x-16 gap-y-8">
                <div>
                  <div className="eyebrow mb-2 text-pine/45">Phone</div>
                  {CONTACT.phones.map((p) => (
                    <p key={p} className="text-pine/85">
                      {p}
                    </p>
                  ))}
                </div>
                <div>
                  <div className="eyebrow mb-2 text-pine/45">Email</div>
                  {CONTACT.emails.map((m) => (
                    <a
                      key={m}
                      href={`mailto:${m}`}
                      className="link-underline block text-pine/85"
                    >
                      {m}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right - form */}
        <Reveal delay={0.15}>
          <form ref={form} onSubmit={send} className="md:pt-4">
            <div className="space-y-7">
              <input className={fieldClass} type="text" name="from_name" placeholder="Your name" required />
              <input className={fieldClass} type="email" name="user_email" placeholder="Email address" required />
              <input className={fieldClass} type="text" name="user_phone" placeholder="Phone (optional)" />
              <textarea className={`${fieldClass} resize-none`} name="message" rows={4} placeholder="Your message" required />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="group relative mt-9 inline-flex items-center gap-3 overflow-hidden rounded-full bg-pine px-8 py-4 text-sm font-semibold text-paper disabled:opacity-70"
            >
              <span className="relative z-10">
                {status === "sending"
                  ? "Sending…"
                  : status === "sent"
                  ? "Message sent ✓"
                  : "Send message"}
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gold-deep transition-transform duration-500 ease-editorial group-hover:translate-x-0" />
            </button>

            {status === "error" && (
              <p className="mt-4 text-sm text-gold-deep">
                Something went wrong - please email us directly at {CONTACT.emails[0]}.
              </p>
            )}
            {status === "sent" && (
              <p className="mt-4 text-sm text-teal-deep">
                Thank you - we’ll be in touch within 2 hours.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
