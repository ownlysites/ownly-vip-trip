import { TRIPS } from "@/lib/trips";
import TripCard from "./trip-card";

export default function TripsSection() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 pt-12 pb-10">
      <div className="mb-10 text-center">
        <div
          className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ color: "#8B7044" }}
        >
          ★ Your VIP Trip Selection
        </div>
        <h2
          className="font-display font-medium leading-[1.15]"
          style={{
            fontSize: "clamp(30px, 4.5vw, 40px)",
            color: "var(--navy)",
          }}
        >
          Six Ways To{" "}
          <em style={{ fontStyle: "italic", color: "#8B7044" }}>Get Away</em>.
        </h2>
        <div
          className="mx-auto mt-4 inline-flex max-w-[680px] items-center gap-2.5 rounded-full border bg-white px-5 py-2.5 text-left text-[12.5px] leading-[1.5]"
          style={{
            borderColor: "var(--gold)",
            color: "var(--ink)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <span
            className="flex h-5.5 w-5.5 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-extrabold"
            style={{
              background: "var(--gold)",
              color: "var(--navy)",
              width: "22px",
              height: "22px",
            }}
          >
            ✓
          </span>
          <span>
            <strong style={{ color: "var(--navy)", fontWeight: 700 }}>
              Every option below is 100% pressure-free.
            </strong>{" "}
            No sales presentations. No timeshare pitch. No strings. Just your
            gift, fulfilled.
          </span>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5.5" style={{ gap: "22px" }}>
        {TRIPS.map((trip, i) => (
          <TripCard key={trip.slug} trip={trip} index={i} />
        ))}
      </div>
    </section>
  );
}
