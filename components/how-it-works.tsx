const STEPS = [
  {
    n: "I",
    title: "Activate",
    body: "Click your trip above, fill in a quick form, and your certificate is yours.",
  },
  {
    n: "II",
    title: "Plan",
    body: "Choose dates and accommodations with a real, live travel agent.",
  },
  {
    n: "III",
    title: "Confirm",
    body: "Receive your booking confirmation directly from the travel team.",
  },
  {
    n: "IV",
    title: "Enjoy",
    body: "Pack your bags. We hope you make memories that last a lifetime.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-12" style={{ background: "var(--navy)", color: "#fff" }}>
      <div className="mx-auto max-w-[980px]">
        <h3
          className="mb-8 text-center font-display font-medium"
          style={{ fontSize: "28px", color: "#fff" }}
        >
          How It{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold-pale)" }}>
            Works
          </em>
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
          {STEPS.map((s) => (
            <div key={s.n} className="p-4 text-center">
              <div
                className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border font-display italic"
                style={{
                  borderColor: "var(--gold)",
                  color: "var(--gold-pale)",
                  fontSize: "20px",
                  fontWeight: 500,
                }}
              >
                {s.n}
              </div>
              <h4
                className="mb-1.5 font-display font-medium"
                style={{ fontSize: "18px", color: "var(--gold-pale)" }}
              >
                {s.title}
              </h4>
              <p
                className="text-[12.5px] leading-[1.6]"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
