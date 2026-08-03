export default function SectionHeading({ eyebrow, headline, body, align = "left", dark = false }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} mb-12`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-widest mb-4 ${
            dark ? "text-gold" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-semibold leading-tight tracking-tight ${
          dark ? "text-offwhite" : "text-text"
        }`}
      >
        {headline}
      </h2>
      {body && (
        <p className={`mt-4 text-base sm:text-lg ${dark ? "text-mist" : "text-muted"}`}>
          {body}
        </p>
      )}
    </div>
  );
}
