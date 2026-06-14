import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Metric = { value: string; label: string };

type Stage = {
  n: string;
  label: string;
  title: string;
  subheading: string;
  description: string;
  bullets: string[];
  metrics: Metric[];
};

const stages: Stage[] = [
  {
    n: "01",
    label: "Target",
    title: "Identify Right Companies",
    subheading: "Outbound success starts before the first email.",
    description:
      "We analyze software companies using firmographic data, hiring signals, funding activity, technology stack, and buyer intent indicators to identify businesses most likely to buy your services.",
    bullets: [
      "ICP Development",
      "Market Segmentation",
      "Tech Stack Filtering",
      "Intent Signal Analysis",
      "Buyer Discovery",
    ],
    metrics: [
      { value: "10K+", label: "Companies Analyzed" },
      { value: "3.4M", label: "Contacts Enriched" },
      { value: "87%", label: "ICP Accuracy" },
    ],
  },
  {
    n: "02",
    label: "Offer",
    title: "Build Specific Offer",
    subheading: "Generic offers kill response rates.",
    description:
      "We engineer highly specific offers aligned with real buyer pain points, making outreach feel relevant instead of promotional.",
    bullets: [
      "Offer Positioning",
      "Pain Mapping",
      "Messaging Strategy",
      "Value Proposition Design",
      "Offer Testing",
    ],
    metrics: [
      { value: "4x", label: "Higher Replies" },
      { value: "62%", label: "Better Opens" },
      { value: "30+", label: "Offer Variants" },
    ],
  },
  {
    n: "03",
    label: "Reach",
    title: "Reach Decision Makers Directly",
    subheading: "Skip gatekeepers.",
    description:
      "We build outbound systems that connect you directly with CEOs, founders, CTOs, and decision-makers.",
    bullets: [
      "Email Infrastructure",
      "Lead Enrichment",
      "Hyper Personalization",
      "Sequence Automation",
      "Inbox Optimization",
    ],
    metrics: [
      { value: "95%", label: "Deliverability" },
      { value: "50K+", label: "Emails Sent" },
      { value: "2.8x", label: "Reply Rate" },
    ],
  },
  {
    n: "04",
    label: "Scale",
    title: "Build Repeatable Pipeline",
    subheading: "Revenue should be predictable.",
    description:
      "We turn outbound into a scalable acquisition machine that continuously fills your pipeline with qualified opportunities.",
    bullets: [
      "Meeting Booking",
      "Sales Handoff",
      "CRM Tracking",
      "Conversion Analysis",
      "Pipeline Optimization",
    ],
    metrics: [
      { value: "$2M+", label: "Pipeline Generated" },
      { value: "300+", label: "Meetings Booked" },
      { value: "41%", label: "SQL Rate" },
    ],
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function ExpandedPanel({
  stage,
  onClose,
}: {
  stage: Stage;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-y-auto"
      style={{
        background:
          "radial-gradient(circle at center, rgba(20,35,80,0.97), rgba(4,10,24,0.99))",
        backdropFilter: "blur(20px)",
        willChange: "opacity",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onMouseLeave={onClose}
    >
      {/* morphing node */}
      <motion.div
        layoutId={`node-${stage.n}`}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 10%, rgba(255,90,31,0.10), transparent 55%)",
          willChange: "transform",
        }}
        transition={{ duration: 1.0, ease: EASE }}
      />

      <motion.div
        className="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col items-center justify-center gap-12 px-6 py-20 md:flex-row md:items-center md:justify-between md:gap-20 md:px-20"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
      >
        {/* left column */}
        <div className="flex-1">
          <span className="font-mono text-sm font-bold tracking-[0.3em] text-primary">
            {stage.n} — {stage.label}
          </span>
          <h3
            className="mt-4 font-bold leading-[1.05] text-white"
            style={{ fontSize: "clamp(42px, 5vw, 90px)" }}
          >
            {stage.title}
          </h3>
          <p
            className="mt-5 font-semibold text-primary"
            style={{ fontSize: "24px" }}
          >
            {stage.subheading}
          </p>
          <p
            className="mt-5 max-w-2xl"
            style={{
              fontSize: "20px",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            {stage.description}
          </p>

          <h4 className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            What We Do
          </h4>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {stage.bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 text-base text-white/85"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-xs text-primary">
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* right column metrics */}
        <div className="flex flex-1 flex-col gap-10 md:items-end">
          {stage.metrics.map((m) => (
            <div key={m.label} className="md:text-right">
              <div
                className="font-extrabold leading-none text-primary"
                style={{ fontSize: "clamp(56px, 7vw, 140px)" }}
              >
                {m.value}
              </div>
              <div
                className="mt-2 uppercase text-white"
                style={{ fontSize: "18px", letterSpacing: "4px", opacity: 0.65 }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProcessSection() {
  const [active, setActive] = useState<number | null>(null);

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
            Four control nodes. Hover any one to expand a stage of DevFlow
            Media's outbound operating system into a full strategic view.
          </p>
        </div>

        {/* tiny square control nodes */}
        <div
          className="flex items-center justify-center"
          style={{ gap: "20px" }}
        >
          {stages.map((stage, i) => (
            <motion.button
              key={stage.n}
              type="button"
              layoutId={`node-${stage.n}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group flex flex-col items-center justify-center"
              style={{
                width: "75.6px",
                height: "75.6px",
                minWidth: "75.6px",
                minHeight: "75.6px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                cursor: "pointer",
                willChange: "transform",
              }}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 1.0, ease: EASE }}
            >
              <span
                className="leading-none"
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#ff5a1f",
                }}
              >
                {stage.n}
              </span>
              <span
                className="mt-1.5 leading-none text-white"
                style={{ fontSize: "13px", fontWeight: 600 }}
              >
                {stage.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <ExpandedPanel
            key={stages[active].n}
            stage={stages[active]}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
