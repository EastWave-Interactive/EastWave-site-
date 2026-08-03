import { useState } from "react";
import SectionHeading from "./SectionHeading";

const reviewPoints = ["clarity", "trust", "systems", "opportunity"];

export default function AuditCTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="audit" className="bg-bg py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionHeading
          align="center"
          headline="See what your business might be missing."
          body="Tell us what you are building. EastWave will review:"
        />

        <ul className="flex flex-wrap justify-center gap-3 -mt-8 mb-10">
          {reviewPoints.map((point) => (
            <li
              key={point}
              className="text-xs font-medium uppercase tracking-wide text-accent bg-accent/10 rounded-full px-3 py-1.5"
            >
              {point}
            </li>
          ))}
        </ul>

        {submitted ? (
          <p className="text-text font-medium">
            Thank you. EastWave will be in touch shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4 text-left">
            <div>
              <label htmlFor="name" className="text-sm text-muted">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text outline-none focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text outline-none focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-muted">
                What are you building?
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text outline-none focus:border-accent"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-contrast hover:bg-accent-hover transition-colors"
            >
              Request an Audit
            </button>
          </form>
        )}

        <p className="mt-8 text-sm text-mist">No generic recommendations. No obligation.</p>
      </div>
    </section>
  );
}
