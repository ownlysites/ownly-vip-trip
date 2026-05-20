export default function SiteFooter() {
  return (
    <footer
      className="px-6 py-7 text-center"
      style={{
        background: "var(--navy-deep)",
        color: "rgba(255,255,255,0.65)",
      }}
    >
      <div
        className="mb-1.5 font-display"
        style={{ fontSize: "18px", color: "#fff" }}
      >
        With gratitude,{" "}
        <em style={{ fontStyle: "italic", color: "var(--gold-pale)" }}>
          Dave Ivery
        </em>
      </div>
      <div
        className="text-[11px] tracking-[0.04em]"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        Ownly ONCE · Agent, Global Travel · A personal thank-you · © 2026
      </div>
    </footer>
  );
}
