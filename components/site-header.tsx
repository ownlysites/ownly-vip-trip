export default function SiteHeader() {
  return (
    <header
      className="border-b-[3px] py-4 text-white"
      style={{ background: "var(--navy)", borderBottomColor: "var(--gold)" }}
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-3 px-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full font-display text-lg font-semibold"
            style={{ background: "var(--gold)", color: "var(--navy)" }}
          >
            O
          </div>
          <div className="font-display text-lg tracking-wide">
            Ownly{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--gold-pale)" }}
            >
              ONCE
            </span>
          </div>
        </div>
        <div
          className="text-[11px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: "var(--gold-pale)" }}
        >
          A Personal Thank You
        </div>
      </div>
    </header>
  );
}
