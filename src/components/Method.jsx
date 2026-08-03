import SectionHeading from "./SectionHeading";
import { methodSteps } from "../data/methodSteps";

export default function Method() {
  return (
    <section id="method" className="bg-bg py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          align="center"
          headline="Good design starts long before design."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {methodSteps.map((step, index) => (
            <div key={step.id} className="relative text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 text-sm font-semibold text-accent">
                {index + 1}
              </div>
              <p className="font-medium text-text">{step.name}</p>
              <p className="text-sm text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center font-medium text-text">
          Execution without clarity creates noise.
        </p>
      </div>
    </section>
  );
}
