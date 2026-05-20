"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section className="paper-grain relative overflow-hidden px-6 pt-16 pb-10 text-center">
      {/* compass-rose watermark */}
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: 0.06, color: "var(--navy)" }}
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.6">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="68" />
          <circle cx="100" cy="100" r="46" />
          <path d="M100 6 L108 100 L100 194 L92 100 Z" fill="currentColor" />
          <path d="M6 100 L100 92 L194 100 L100 108 Z" fill="currentColor" />
          <path d="M34 34 L106 94 L166 166 L94 106 Z" fill="currentColor" opacity="0.6" />
          <path d="M166 34 L106 106 L34 166 L94 94 Z" fill="currentColor" opacity="0.6" />
        </g>
      </svg>
      {/* gold hairline at top */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[3px] w-[200px] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--gold), transparent)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="relative z-10 mx-auto max-w-[780px]"
      >
        <div
          className="mb-6 inline-block rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{
            background: "var(--gold-pale)",
            color: "#8B7044",
            borderColor: "var(--hairline)",
          }}
        >
          ★ Compliments of Dave Ivery ★
        </div>
        <h1
          className="mb-4 font-display font-medium leading-[1.05]"
          style={{
            fontSize: "clamp(48px, 8vw, 86px)",
            letterSpacing: "-0.02em",
            color: "var(--navy)",
          }}
        >
          Thank{" "}
          <em
            className="font-medium"
            style={{ fontStyle: "italic", color: "var(--gold)" }}
          >
            You
          </em>
          .
        </h1>
        <p
          className="mx-auto mb-3 max-w-[600px] font-display italic leading-[1.55]"
          style={{
            fontSize: "clamp(18px, 2.4vw, 22px)",
            color: "var(--ink-mute)",
          }}
        >
          We promised we&rsquo;d take care of you — and we always keep our
          promises. Here&rsquo;s our way of saying it: pick the getaway below
          that lights you up. It&rsquo;s on us.
        </p>
        <p
          className="mt-4 text-[13px] tracking-[0.04em]"
          style={{ color: "var(--ink-mute)" }}
        >
          With gratitude,{" "}
          <strong style={{ color: "var(--navy)" }}>Dave Ivery</strong> · Ownly
          ONCE · Agent, Global Travel
        </p>
      </motion.div>
    </section>
  );
}
