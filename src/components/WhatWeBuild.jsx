import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { capabilities } from "../data/capabilities";

function CapabilityCard({ capability }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 cursor-pointer"
      onClick={() => setExpanded((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setExpanded((prev) => !prev);
      }}
      aria-expanded={expanded}
    >
      <h3 className="text-lg font-semibold text-text">{capability.name}</h3>
      <p className="mt-2 text-sm text-muted">{capability.problem}</p>

      {expanded && (
        <div className="mt-4 space-y-3 border-t border-border pt-4">
          <p className="text-sm text-muted">
            <span className="font-medium text-accent">Outcome — </span>
            {capability.outcome}
          </p>
          <ul className="text-sm text-muted list-disc list-inside space-y-1">
            {capability.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm font-medium text-text">{capability.nextStep} →</p>
        </div>
      )}

      {!expanded && <p className="mt-4 text-xs text-mist">Tap to expand</p>}
    </div>
  );
}

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="bg-bg py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          align="center"
          headline={
            <>
              Build trust. Create demand.
              <br />
              Compound advantage.
            </>
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.id} capability={capability} />
          ))}
        </div>

        <p className="mt-14 text-center font-medium text-text">
          Technology changes. Trust compounds.
        </p>
      </div>
    </section>
  );
}
