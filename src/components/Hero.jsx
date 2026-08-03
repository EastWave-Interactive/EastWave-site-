import Button from "./Button";

export default function Hero() {
  return (
    <section id="top" className="bg-bg pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-semibold leading-[1.1] tracking-tight text-text">
          From rough ambition to working digital systems.
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted">
          EastWave helps businesses look credible, explain themselves clearly, and build smarter
          digital systems through strategic brand, custom web, and modern growth infrastructure.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#audit" variant="primary">
            Request an Audit
          </Button>
          <Button href="#what-we-build" variant="secondary">
            Explore Services
          </Button>
        </div>

        <p className="mt-10 text-sm text-muted/70">
          Built from Nairobi. Designed for East Africa and beyond.
        </p>

        <p className="mt-2 text-sm font-medium text-accent">
          Not another agency. A modern operating system for growth.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-16">
        <svg
          viewBox="0 0 800 200"
          className="w-full h-auto"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 140C80 100 160 180 240 140C320 100 400 180 480 140C560 100 640 180 720 140C760 120 780 130 800 140"
            stroke="var(--color-accent)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M0 100C80 60 160 140 240 100C320 60 400 140 480 100C560 60 640 140 720 100C760 80 780 90 800 100"
            stroke="var(--color-text)"
            strokeWidth="2"
            fill="none"
            opacity="0.15"
          />
        </svg>
      </div>
    </section>
  );
}
