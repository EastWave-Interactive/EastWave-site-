import { useEffect, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";

const links = [
  { label: "What We Build", href: "#what-we-build" },
  { label: "Who This Is For", href: "#who-this-is-for" },
  { label: "Method", href: "#method" },
  { label: "Work", href: "#proof-lab" },
  { label: "Offers", href: "#offers" },
];

function getInitialTheme() {
  return document.documentElement.classList.contains("dark");
}

function ThemeToggle({ isDark, onToggle, className = "" }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-muted hover:text-text transition-colors ${className}`}
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.55 1.55M18.25 18.25l1.55 1.55M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.55-1.55M18.25 5.75l1.55-1.55"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2">
        <a href="#top">
          <Logo variant={isDark ? "light" : "default"} />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark((prev) => !prev)} />
          <Button href="#audit" variant="primary" className="text-sm py-2.5 px-5">
            Request an Audit
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark((prev) => !prev)} />
          <button
            type="button"
            className="text-text p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-bg px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button href="#audit" variant="primary" className="text-sm py-2.5 px-5 w-fit">
            Request an Audit
          </Button>
        </div>
      )}
    </header>
  );
}
