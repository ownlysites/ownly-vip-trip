export default function HowToRibbon() {
  return (
    <div
      className="border-t border-b px-6 py-5 text-center"
      style={{
        background: "var(--white)",
        borderTopColor: "var(--hairline)",
        borderBottomColor: "var(--hairline)",
      }}
    >
      <p
        className="mx-auto max-w-[780px] text-[13px] leading-[1.7]"
        style={{ color: "var(--ink-mute)" }}
      >
        <strong style={{ color: "var(--navy)" }}>How to claim:</strong>{" "}
        choose the trip that excites you, click{" "}
        <em style={{ fontStyle: "italic" }}>&ldquo;Choose This Trip&rdquo;</em>,
        and you&rsquo;ll be taken to a quick activation page. Each certificate
        is good for <strong style={{ color: "var(--navy)" }}>24 months</strong>{" "}
        — you don&rsquo;t have to travel right away.
      </p>
    </div>
  );
}
