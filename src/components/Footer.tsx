export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground" id="contact">
      <div className="container-max grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary font-display text-lg font-bold text-primary-foreground">
              D
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              DevFlow Media
            </span>
          </div>
          <p className="max-w-sm text-sm text-ink-foreground/70">
            The revenue partner for IT companies ready to create demand instead of
            waiting for it. We build outbound systems that drive predictable
            enterprise growth.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-ink-foreground/70">
            <li><a href="#process" className="transition-colors hover:text-ink-foreground">Process</a></li>
            <li><a href="#results" className="transition-colors hover:text-ink-foreground">Results</a></li>
            <li><a href="#case-studies" className="transition-colors hover:text-ink-foreground">Case Studies</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            Get Started
          </h4>
          <a
            href="https://cal.com/shreynagar/devflow-media-1-1-session"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-tight text-primary-foreground transition-all hover:scale-105"
          >
            BOOK A CALL
          </a>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-max flex flex-col items-center justify-between gap-2 py-6 text-xs text-ink-foreground/50 md:flex-row">
          <span>© 2024 DevFlow Media. All rights reserved.</span>
          <span>Predictable enterprise growth, engineered.</span>
        </div>
      </div>
    </footer>
  );
}
