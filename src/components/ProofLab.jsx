import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { proofItems } from "../data/proofItems";

export default function ProofLab() {
  return (
    <section id="proof-lab" className="bg-abyss py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          align="center"
          dark
          headline="Thinking made visible."
          body="Proof should explain. Not impress."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {proofItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-hairline-dark bg-offwhite/5 p-6 transition-colors hover:border-gold/40"
            >
              <h3 className="text-lg font-semibold text-offwhite">{item.category}</h3>
              <p className="mt-2 text-sm text-mist">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4">
          <p className="text-center font-medium text-offwhite">
            Serious thinking leaves artifacts.
          </p>
          <Button href="#offers" variant="light-outline">
            Explore Work
          </Button>
        </div>
      </div>
    </section>
  );
}
