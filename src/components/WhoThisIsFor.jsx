import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { clientTypes } from "../data/clientTypes";

function ClientCard({ client }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      onClick={() => setRevealed((prev) => !prev)}
    >
      <h3 className="text-lg font-semibold text-text">{client.name}</h3>
      <p className="mt-2 text-sm text-muted">{client.message}</p>

      <div
        className={`mt-4 flex flex-wrap gap-2 transition-opacity duration-200 ${
          revealed ? "opacity-100" : "opacity-0"
        }`}
      >
        {client.reveal.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium uppercase tracking-wide text-accent bg-accent/10 rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function WhoThisIsFor() {
  return (
    <section id="who-this-is-for" className="bg-bg py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          align="center"
          headline="Built for ambitious builders."
          body="Different businesses. Different bottlenecks. Different systems."
        />

        <div className="grid sm:grid-cols-3 gap-6">
          {clientTypes.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>

        <p className="mt-14 text-center font-medium text-text">Systems change outcomes.</p>
      </div>
    </section>
  );
}
