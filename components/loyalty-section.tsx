"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

function formatCount(n: number) {
  return n.toLocaleString("en-US");
}

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        setVal(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span
      ref={ref}
      style={{ fontVariantNumeric: "lining-nums tabular-nums" }}
    >
      {formatCount(val)}+
    </span>
  );
}

export default function LoyaltySection() {
  return (
    <section
      className="border-t px-6 py-12"
      style={{
        background:
          "linear-gradient(180deg, var(--cream) 0%, var(--gold-pale) 100%)",
        borderTopColor: "var(--hairline)",
      }}
    >
      <div
        className="relative mx-auto max-w-[780px] rounded-[16px] border-2 bg-white p-8 text-center"
        style={{
          borderColor: "var(--gold)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        {/* corner ornaments */}
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="absolute left-3 top-3 h-5 w-5"
          style={{ color: "var(--gold)" }}
        >
          <path d="M0 12 L8 12 M12 0 L12 8 M0 0 L8 8" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="absolute right-3 top-3 h-5 w-5"
          style={{ color: "var(--gold)" }}
        >
          <path d="M24 12 L16 12 M12 0 L12 8 M24 0 L16 8" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="absolute left-3 bottom-3 h-5 w-5"
          style={{ color: "var(--gold)" }}
        >
          <path d="M0 12 L8 12 M12 24 L12 16 M0 24 L8 16" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="absolute right-3 bottom-3 h-5 w-5"
          style={{ color: "var(--gold)" }}
        >
          <path d="M24 12 L16 12 M12 24 L12 16 M24 24 L16 16" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>

        <div
          className="mb-3.5 inline-block rounded-md px-3 py-1.5 text-[10.5px] font-extrabold uppercase tracking-[0.18em]"
          style={{ background: "var(--gold)", color: "var(--navy)" }}
        >
          ★ Bonus Included With Every Gift
        </div>
        <h3
          className="mb-3 font-display font-medium leading-[1.2]"
          style={{
            fontSize: "clamp(24px, 3.5vw, 32px)",
            color: "var(--navy)",
          }}
        >
          You&rsquo;re Also Joining the{" "}
          <em style={{ fontStyle: "italic", color: "#8B7044" }}>
            Ownly ONCE Loyalty Club
          </em>
          .
        </h3>
        <span
          className="my-2 block font-display font-medium leading-none"
          style={{
            fontSize: "42px",
            color: "#8B7044",
            fontVariantNumeric: "lining-nums tabular-nums",
            fontFeatureSettings: '"lnum" 1, "tnum" 1',
          }}
        >
          <CountUp to={1000000} />
        </span>
        <span
          className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "var(--ink-mute)" }}
        >
          ongoing discounts on travel, lifestyle &amp; everyday spending
        </span>
        <p
          className="mx-auto mb-3.5 max-w-[600px] text-[13.5px] leading-[1.7]"
          style={{ color: "var(--ink-mute)" }}
        >
          Redeeming any of the gifts above{" "}
          <strong style={{ color: "var(--navy)" }}>
            automatically enrolls you — at no cost — in the Ownly ONCE Loyalty
            Club
          </strong>
          : our private discount portal with over a million ongoing offers
          across hotels, dining, entertainment, retail, and more. It&rsquo;s
          our way of staying useful long after the trip is over.
        </p>
        <p
          className="mx-auto mb-3.5 max-w-[600px] text-[13.5px] leading-[1.7]"
          style={{ color: "var(--ink-mute)" }}
        >
          Did this link reach you through a friend? Welcome —{" "}
          <strong style={{ color: "var(--navy)" }}>
            you&rsquo;ll be enrolled automatically the moment you redeem
          </strong>
          . Watch your inbox for your welcome email and login.
        </p>
        <div
          className="mt-1.5 text-[11px] tracking-[0.04em]"
          style={{ color: "var(--ink-mute)" }}
        >
          Loyalty portal ·{" "}
          <a
            href="https://ownly1nce.corporateplusclub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
            style={{
              color: "var(--navy)",
              borderBottom: "1px solid var(--gold)",
            }}
          >
            ownly1nce.corporateplusclub.com
          </a>
        </div>
      </div>
    </section>
  );
}
