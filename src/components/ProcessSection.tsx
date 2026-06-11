import { useEffect, useРef, useRef, useState } from "react";

type Metric = { value: number; suffix?: string; prefix?: string; label: string; static?: string };

type Stage = {
  n: string;
  eyebrow: string;
  title: string;
  lead: string;
  body: string;
  bullets: string[];
  metrics: Metric[];
};

const stages: Stage[] = [
  {
    n: "01",
    eyebrow: "Selection",
    title: "Identify Right Companies",
    lead: "Outbound success starts long before the first email is sent.",
    body: "We analyze thousands of software companies using firmographic data, technology stacks, hiring signals, funding activity and buyer intent indicators to identify organizations most likely to purchase your services.",
    bullets: [
      "ICP Development",
      "Market Segmentation",
      "Technology Stack Filtering",
      "Intent Signal Analysis",
      "Decision-Maker Discovery",
    ],
    metrics: [
      { value: 10000, suffix: "+", label: "Companies Analyzed" },
      { value: 3.4, suffix: "M", label: "Contacts Enriched" },
      { value: 87, suffix: "%", label: "Data Accuracy" },
    ],
  },
  {
    n: "02",
    eyebrow: "Strategy",
    title: "Build Specific Offer",
    lead: "Most outbound campaigns fail because they sound identical.",
    body: "We engineer highly specific offers that resonate with your target buyers and clearly communicate why they should choose your company over every alternative in the market.",
    bullets: [
      "Offer Engineering",
      "Positioning Strategy",
      "Value Proposition Design",
      "Competitive Differentiation",
      "Messaging Frameworks",
    ],
    metrics: [
      { value: 50, suffix: "+", label: "Tested Campaign Frameworks" },
      { value: 4, suffix: "x", label: "Higher Reply Rates" },
      { value: 100, suffix: "%", label: "Customized Messaging" },
    ],
  },
  {
    n: "03",
    eyebrow: "Engagement",
    title: "Reach Decision-Makers Directly",
    lead: "Your prospects do not buy because you exist.",
    body: "We proactively engage founders, executives and department leaders through personalized multi-channel outbound campaigns that generate meaningful conversations.",
    bullets: [
      "Cold Email Campaigns",
      "LinkedIn Outreach",
      "Personalized Follow-Ups",
      "Meeting Scheduling",
      "Multi-Touch Sequences",
    ],
    metrics: [
      { value: 500000, suffix: "+", label: "Emails Sent" },
      { value: 0, static: "Thousands", label: "Meetings Booked" },
      { value: 0, static: "Global", label: "Campaign Coverage" },
    ],
  },
  {
    n: "04",
    eyebrow: "Retention",
    title: "Build Repeatable Pipeline",
    lead: "Revenue growth should never depend on referrals or luck.",
    body: "We continuously optimize campaigns, improve conversion rates and build predictable systems that create a consistent flow of opportunities month after month.",
    bullets: [
      "Pipeline Optimization",
      "Campaign Analysis",
      "Conversion Tracking",
      "Revenue Forecasting",
      "Continuous Improvements",
    ],
    metrics: [
      { value: 0, static: "Predictable", label: "Deal Flow" },
      { value: 0, static: "Scalable", label: "Growth Systems" },
      { value: 0, static: "Long-Term", label: "Revenue Engine" },
    ],
  },
];

const EASE = "cubic-bezier(.16,1,.3,1)";

function formatMetric(value: number) {
  if (value >= 1000000) return (value / 1000000).toFixed(0) + "M";
  if (value >= 1000) return (value / 1000).toFixed(0) + "k";
  if (!Number.isInteger(value)) return value.toFixed(1);
  return String(value);
}

function CountUp({ metric, active }: { metric: Metric; active: boolean }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (metric.static) return;
    if (!active) {
      setDisplay(0);
      return;
    }
    const start = performance.now();
    const duration = 900;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(metric.value * eased);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, metric.value, metric.static]);

  const text = metric.static
    ? metric.static
    : `${metric.prefix ?? ""}${formatMetric(display)}${metric.suffix ?? ""}`;

  return (
    <div>
      <div className="font-mono text-2xl font-bold text-primary">{text}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-ink-foreground/50">
        {metric.label}
      </div>
    </div>
  );
}

function ExpandedContent({ stage, active }: { stage: Stage; active: boolean }) {
  return (
    <div className="flex h-full flex-col justify-end gap-5 p-8 md:p-10">
      <span className="font-mono text-sm font-bold tracking-[0.3em] text-primary">
        {stage.n}
      </span>
      <div>
        <h3 className="text-2xl font-bold text-ink-foreground md:text-3xl">
          {stage.title}
        </h3>
        <p
          className="mt-3 text-base font-medium text-primary"
          style={{
            transition: `all 0.5s ${EASE} 0.08s`,
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(12px)",
          }}
        >
          {stage.lead}
        </p>
        <p
          className="mt-3 max-w-xl text-sm leading-relaxed text-ink-foreground/70"
          style={{
            transition: `all 0.5s ${EASE} 0.16s`,
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(12px)",
          }}
        >
          {stage.body}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-ink-foreground/40">
            What We Do
          </h4>
          <ul className="space-y-2">
            {stage.bullets.map((b, i) => (
              <li
                key={b}
                className="flex items-center gap-2 text-sm text-ink-foreground/80"
                style={{
                  transition: `all 0.45s ${EASE} ${0.22 + i * 0.07}s`,
                  opacity: active ? 1 : 0,
                  transform: active ? "translateX(0)" : "translateX(-12px)",
                }}
              >
                <span className="text-primary">✓</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-ink-foreground/40">
            Metrics
          </h4>
          <div className="space-y-4">
            {stage.metrics.map((m, i) => (
              <div
                key={m.label}
                style={{
                  transition: `all 0.45s ${EASE} ${0.3 + i * 0.08}s`,
                  opacity: active ? 1 : 0,
                  transform: active ? "translateY(0)" : "translateY(12px)",
                }}
              >
                <CountUp metric={m} active={active} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CollapsedContent({ stage }: { stage: Stage }) {
  return (
    <div className="flex h-full flex-col justify-between p-6">
      <span className="font-mono text-sm font-bold tracking-[0.3em] text-primary">
        {stage.n}
      </span>
      <div className="md:[writing-mode:vertical-rl] md:rotate-180">
        <span className="block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-ink-foreground/40">
          {stage.eyebrow}
        </span>
        <span className="mt-2 block text-lg font-bold text-ink-foreground">
          {stage.title}
        </span>
      </div>
    </div>
  );
}

export function ProcessSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-background py-20 md:py-28" id="process">
      <div className="container-max">
        <div className="mb-14 max-w-2xl reveal">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            The Operating System
          </span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            How the Process Works
          </h2>
          <p className="mt-4 text-muted-foreground">
            Each card is a stage of DevFlow Media's outbound operating system.
            Hover any stage to explore how we engineer predictable pipeline.
          </p>
        </div>

        {/* Desktop: expanding horizontal panels */}
        <div
          className="hidden gap-3 md:flex"
          style={{ height: "30rem" }}
          onMouseLeave={() => setActive(0)}
        >
          {stages.map((stage, i) => {
            const isActive = active === i;
            return (
              <div
                key={stage.n}
                onMouseEnter={() => setActive(i)}
                className="relative overflow-hidden rounded-2xl border"
                style={{
                  flexGrow: isActive ? 65 : 11.66,
                  flexBasis: 0,
                  transition: `all 0.4s ${EASE}`,
                  backgroundColor: isActive ? "#081A36" : "var(--color-card)",
                  borderColor: isActive
                    ? "var(--color-primary)"
                    : "var(--color-border)",
                  transform: isActive ? "translateY(-4px)" : "scale(0.985)",
                  boxShadow: isActive
                    ? "0 30px 80px -30px rgba(255,90,31,0.45), 0 0 0 1px rgba(255,90,31,0.25)"
                    : "0 8px 24px -16px rgba(15,23,42,0.2)",
                }}
              >
                {/* glow */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: `opacity 0.4s ${EASE}`,
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(255,90,31,0.18), transparent 60%)",
                  }}
                />
                <div className="relative h-full">
                  <div
                    style={{
                      transition: `opacity 0.3s ${EASE}`,
                      opacity: isActive ? 0 : 1,
                      position: isActive ? "absolute" : "relative",
                      inset: 0,
                      pointerEvents: isActive ? "none" : "auto",
                    }}
                  >
                    <CollapsedContent stage={stage} />
                  </div>
                  {isActive && <ExpandedContent stage={stage} active={isActive} />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: expandable accordion */}
        <div className="space-y-3 md:hidden">
          {stages.map((stage, i) => {
            const isActive = active === i;
            return (
              <div
                key={stage.n}
                className="overflow-hidden rounded-2xl border"
                style={{
                  transition: `all 0.4s ${EASE}`,
                  backgroundColor: isActive ? "#081A36" : "var(--color-card)",
                  borderColor: isActive
                    ? "var(--color-primary)"
                    : "var(--color-border)",
                  boxShadow: isActive
                    ? "0 20px 50px -25px rgba(255,90,31,0.45)"
                    : "none",
                }}
              >
                <button
                  type="button"
                  onClick={() => setActive(isActive ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold tracking-[0.2em] text-primary">
                      {stage.n}
                    </span>
                    <span>
                      <span className="block text-[0.6rem] font-bold uppercase tracking-[0.3em] text-primary/70">
                        {stage.eyebrow}
                      </span>
                      <span
                        className="block text-base font-bold"
                        style={{ color: isActive ? "#fff" : "var(--color-foreground)" }}
                      >
                        {stage.title}
                      </span>
                    </span>
                  </span>
                  <span
                    className="text-primary"
                    style={{
                      transition: `transform 0.4s ${EASE}`,
                      transform: isActive ? "rotate(45deg)" : "rotate(0)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    transition: `grid-template-rows 0.4s ${EASE}`,
                    display: "grid",
                    gridTemplateRows: isActive ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <ExpandedContent stage={stage} active={isActive} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
