import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { offers } from "../data/offers";

function OfferCard({ offer }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 flex flex-col">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
        {offer.category}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-text">{offer.name}</h3>
      <p className="mt-1 text-sm text-mist">Starting From: {offer.startingFrom}</p>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-4 text-sm font-medium text-accent text-left"
        aria-expanded={expanded}
      >
        {expanded ? "Hide details" : "See outcome & deliverables"}
      </button>

      {expanded && (
        <div className="mt-3 space-y-2 border-t border-border pt-3">
          <p className="text-sm text-muted">
            <span className="font-medium">Outcome — </span>
            {offer.outcome}
          </p>
          <ul className="text-sm text-muted list-disc list-inside space-y-1">
            {offer.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto pt-6">
        <Button href="#audit" variant="secondary" className="w-full">
          {offer.cta}
        </Button>
      </div>
    </div>
  );
}

export default function Offers() {
  return (
    <section id="offers" className="bg-bg py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          align="center"
          headline="Start where the bottleneck is."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        <p className="mt-14 text-center font-medium text-text">
          Good systems create options.
        </p>
      </div>
    </section>
  );
}
