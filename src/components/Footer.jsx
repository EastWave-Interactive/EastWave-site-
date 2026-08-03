import Logo from "./Logo";
import Button from "./Button";

const footerLinks = [
  { label: "What We Build", href: "#what-we-build" },
  { label: "Who This Is For", href: "#who-this-is-for" },
  { label: "Method", href: "#method" },
  { label: "Work", href: "#proof-lab" },
  { label: "Offers", href: "#offers" },
  { label: "Request an Audit", href: "#audit" },
];

export default function Footer() {
  return (
    <footer className="bg-abyss">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-offwhite">
          Business is changing.
          <br />
          The businesses that adapt will compound.
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-mist">
          EastWave helps businesses take rough ambition and turn it into working digital systems.
        </p>
        <div className="mt-10">
          <Button href="#audit" variant="light">
            Start Building
          </Button>
        </div>
      </div>

      <div className="border-t border-hairline-dark">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <Logo variant="light" />
            <p className="mt-3 text-sm text-mist max-w-xs">
              Build trust. Create demand. Compound advantage.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-mist hover:text-offwhite transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-8">
          <p className="text-xs text-mist/50">
            EastWave Interactive Co. Limited — Built from Nairobi, Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
}
