"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Trip } from "@/lib/trips";

const ease = [0.22, 1, 0.36, 1] as const;

export default function TripCard({ trip, index }: { trip: Trip; index: number }) {
  const onClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let the browser open the affiliate URL in a new tab as normal — the
    // <a target="_blank"> is the source of truth. We just fire a background
    // ping so DBC sees the click. Never block navigation on this fetch.
    try {
      void fetch("/api/trip-click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tripSlug: trip.slug,
          affiliateUrl: trip.affiliateUrl,
        }),
        keepalive: true,
      });
    } catch {
      // swallow
    }
    // do NOT preventDefault — let the anchor handle the redirect naturally
    void e;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease }}
      whileHover={{ scale: 1.02 }}
      className="group relative flex flex-col overflow-hidden rounded-[12px] border bg-white"
      style={{
        borderColor: trip.featured ? "var(--gold)" : "var(--hairline)",
        borderWidth: trip.featured ? "2px" : "1px",
        background: trip.featured
          ? "linear-gradient(180deg, #fff 0%, var(--gold-pale) 100%)"
          : "#fff",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      {trip.featured && (
        <div
          className="absolute right-5 top-3 z-10 rounded-md px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em]"
          style={{ background: "var(--gold)", color: "var(--navy)" }}
        >
          ★ Most Popular
        </div>
      )}

      {/* photo */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease }}
          className="absolute inset-0"
        >
          <Image
            src={trip.photo}
            alt={trip.title}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            priority={trip.featured}
          />
        </motion.div>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,31,57,0) 60%, rgba(15,31,57,0.18) 100%)",
          }}
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div
          className="mb-2.5 flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em]"
          style={{ color: "#8B7044" }}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--gold)" }}
          />
          {trip.tag}
        </div>
        <h3
          className="mb-2 font-display text-[24px] font-medium leading-[1.2]"
          style={{ color: "var(--navy)", letterSpacing: "-0.01em" }}
        >
          {trip.title}
        </h3>
        <p
          className="mb-3.5 min-h-[40px] text-[13px] leading-[1.6]"
          style={{ color: "var(--ink-mute)" }}
        >
          {trip.sub}
        </p>
        <div
          className="mb-3.5 inline-block self-start rounded-md px-2.5 py-1.5 text-[11px] font-bold tracking-[0.06em]"
          style={{ background: "#EEF4FB", color: "var(--navy)" }}
        >
          {trip.valueLabel}{" "}
          <strong
            className="font-extrabold"
            style={{
              color: "#8B7044",
              borderBottom: "1.5px solid var(--gold)",
              paddingBottom: "1px",
            }}
          >
            {trip.valueStrong}
          </strong>
        </div>
        <ul
          className="mb-5 list-none border-t pt-3.5"
          style={{ borderTopColor: "var(--hairline)", borderTopStyle: "dashed" }}
        >
          {trip.perks.map((perk) => (
            <li
              key={perk}
              className="relative py-1 pl-5 text-[12px] leading-[1.6]"
              style={{ color: "var(--ink-mute)" }}
            >
              <span
                aria-hidden
                className="absolute left-0 top-1 text-[11px] font-bold"
                style={{ color: "#8B7044" }}
              >
                ✓
              </span>
              {perk}
            </li>
          ))}
        </ul>
        <a
          href={trip.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className="mt-auto block rounded-[8px] px-4 py-3.5 text-center text-[13px] font-semibold tracking-[0.02em] transition-colors"
          style={{
            background: trip.featured ? "var(--gold)" : "var(--navy)",
            color: trip.featured ? "var(--navy)" : "#fff",
            fontWeight: trip.featured ? 700 : 600,
          }}
          data-trip-slug={trip.slug}
        >
          {trip.cta}
        </a>
      </div>
    </motion.div>
  );
}
