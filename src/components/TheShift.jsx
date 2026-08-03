import { useState } from "react";
import SectionHeading from "./SectionHeading";

const painPoints = [
  "their positioning is unclear.",
  "their websites do not build trust.",
  "their digital execution is fragmented.",
  "their opportunities disappear.",
];

export default function TheShift() {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <section className="bg-bg py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          align="center"
          headline={
            <>
              Most businesses do not need more activity.
              <br />
              They need better systems.
            </>
          }
        />

        <div className="max-w-xl mx-auto text-center">
          <p className="text-muted">Many companies are already working hard. But:</p>
          <ul className="mt-4 space-y-2 text-muted">
            {painPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="mt-6 font-medium text-text">EastWave turns movement into momentum.</p>
        </div>

        <div className="mt-14 max-w-xl mx-auto">
          <button
            type="button"
            onClick={() => setShowAfter((prev) => !prev)}
            className="w-full rounded-2xl border border-border bg-surface p-8 text-left transition-colors hover:border-accent/40"
            aria-pressed={showAfter}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              {showAfter ? "After" : "Before"} — tap to compare
            </p>
            <p className="text-lg text-text">
              {showAfter
                ? "Clear positioning. A trusted digital presence. Systems that compound."
                : "Unclear positioning. A digital presence that does not build trust. Scattered execution."}
            </p>
          </button>
        </div>

        <p className="mt-12 text-center font-medium text-text">
          Growth compounds when systems improve.
        </p>
      </div>
    </section>
  );
}
