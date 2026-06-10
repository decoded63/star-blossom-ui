import { Link } from "@tanstack/react-router";

const navLinks = [
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Case Studies", href: "#case-studies" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-max flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary font-display text-lg font-bold text-primary-foreground">
            D
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            DevFlow<span className="text-primary"> Media</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-tight text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-primary/40"
        >
          Get a Free Audit
        </a>
      </div>
    </header>
  );
}
