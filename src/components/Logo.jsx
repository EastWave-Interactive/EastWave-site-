export default function Logo({ variant = "default", className = "" }) {
  const isLight = variant === "light";

  return (
    <img
      src={isLight ? "/logo-dark.svg" : "/logo-light.svg"}
      alt="EastWave"
      className={`h-16 w-auto ${className}`}
    />
  );
}
