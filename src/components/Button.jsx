export default function Button({ children, variant = "primary", href = "#audit", className = "" }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200";

  const variants = {
    primary: "bg-accent text-accent-contrast hover:bg-accent-hover",
    secondary: "bg-transparent border border-text/20 text-text hover:border-text/50",
    light: "bg-offwhite text-abyss hover:bg-offwhite/90",
    "light-outline": "bg-transparent border border-offwhite/30 text-offwhite hover:border-offwhite/60",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
