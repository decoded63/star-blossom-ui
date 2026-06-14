import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Metric = { value: string; label: string };

type Stage = {
  n: string;
  eyebrow: string;
  title: string;
  teaser: string;
  subheading: string;
  description: string;
  bullets: string[];
  metrics: Metric[];
};

const stages: Stage[] = [
  {
    n: "01",
    eyebrow: "Selection",
    title: "Identify Right Companies",
    teaser: "Pinpoint the software companies most likely to buy.",
    subheading: "Outbound success starts long before the first email is sent.",
    description:
      "We analyze thousands of software companies using firmographic data, hiring signals, funding activity, technology stack, and buyer intent signals to identify businesses most likely to purchase your services.",
    bullets: [
      "ICP Development",
      "Market Segmentation",
      "Technology Stack Filtering",
      "Intent Signal Analysis",
      "Decision-Maker Discovery",
    ],
    metrics: [
      { value: "10K+", label: "Companies Analyzed" },
      { value: "3.4M", label: "Contacts Enriched" },
      { value: "87%", label: "ICP Accuracy" },
    ],
  },
  {
    n: "02",
    eyebrow: "Strategy",
    title: "Build Specific Offer",
    teaser: "Craft irresistible offers your ideal clients actually respond to.",
    subheading: "Generic offers kill response rates.",
    description:
      "We engineer highly specific service positioning around what prospects already need, making outreach feel relevant instead of promotional.",
    bullets: [
      "Offer Positioning",
      "Pain Point Mapping",
      "Messaging Strategy",
      "Value Proposition Design",
      "Offer Testing",
    ],
    metrics: [
      { value: "4x", label: "Higher Replies" },
      { value: "62%", label: "Better Open Rate" },
      { value: "30+", label: "Offer Variants Tested" },
    ],
  },
  {
    n: "03",
    eyebrow: "Engagement",
    title: "Reach Decision-Makers Directly",
    teaser: "Get in front of founders, CTOs, and buyers instantly.",
    subheading: "Skip gatekeepers. Reach buyers.",
    description:
      "We build targeted outbound systems that connect your message directly to CEOs, CTOs, founders, and decision-makers.",
    bullets: [
      "Email Infrastructure",
      "Lead Enrichment",
      "Hyper-Personalization",
      "Sequence Automation",
      "Inbox Optimization",
    ],
    metrics: [
      { value: "95%", label: "Inbox Delivery" },
      { value: "50K+", label: "Emails Sent" },
      { value: "2.8x", label: "Reply Rate" },
    ],
  },
  {
    n: "04",
    eyebrow: "Retention",
    title: "Build Repeatable Pipeline",
    teaser: "Turn outbound into a predictable revenue engine.",
    subheading: "Revenue should be predictable.",
    description:
      "We transform outbound into a scalable acquisition machine that continuously fills your pipeline with qualified opportunities.",
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

const SPRING = { type: "spring" as const, stiffness: 170, damping: 26, mass: 0.9 };

function ExpandedContent({ stage }: { stage: Stage }) {
  return (
    <motion.div
      className="flex h-full flex-col justify-center gap-6 p-8 md:p-12"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
      }}
    >
      <motion.span
        variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
        className="font-mono text-sm font-bold tracking-[0.3em] text-primary"
      >
        {stage.n} — {stage.eyebrow}
      </motion.span>

      <div>
        <motion.h3
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
          className="text-3xl font-bold text-white md:text-4xl"
        >
          {stage.title}
        </motion.h3>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
          className="mt-3 text-lg font-semibold text-primary"
        >
          {stage.subheading}
        </motion.p>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
          className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base"
        >
          {stage.description}
        </motion.p>
      </div>

      <div className="mt-2 grid gap-8 md:grid-cols-2">
        <div>
          <motion.h4
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/40"
          >
            What We Do
          </motion.h4>
          <ul className="space-y-2.5">
            {stage.bullets.map((b) => (
              <motion.li
                key={b}
                variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0 } }}
                className="flex items-center gap-3 text-sm text-white/85 md:text-base"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-xs text-primary">
                  ✓
                </span>
                {b}
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <motion.h4
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/40"
          >
            Metrics
          </motion.h4>
          <div className="space-y-5">
            {stage.metrics.map((m) => (
              <motion.div
                key={m.label}
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              >
                <div className="font-mono text-3xl font-bold text-primary md:text-4xl">
                  {m.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/50">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CollapsedContent({ stage }: { stage: Stage }) {
  return (
    <div className="flex h-full flex-col justify-between p-6">
      <span className="font-mono text-sm font-bold tracking-[0.3em] text-primary">
        {stage.n}
      </span>
      <div className="flex flex-col items-center gap-6">
        <p className="max-w-[110px] text-center text-xs leading-relaxed text-foreground/55">
          {stage.teaser}
        </p>
        <div className="[writing-mode:vertical-rl] rotate-180">
          <span className="block text-lg font-bold text-foreground">
            {stage.title}
          </span>
        </div>
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
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">How the Process Works</h2>
          <p className="mt-4 text-muted-foreground">
            Each card is a stage of DevFlow Media's outbound operating system. Hover any
            stage to explore how we engineer predictable pipeline.
          </p>
        </div>

        {/* Desktop: expanding horizontal panels */}
        <div
          className="hidden gap-3 md:flex"
          style={{ height: "560px" }}
        >
          {stages.map((stage, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={stage.n}
                onMouseEnter={() => setActive(i)}
                className="relative cursor-pointer overflow-hidden rounded-3xl border"
                style={{ willChange: "flex-grow, transform", flexBasis: 0, minWidth: 0 }}
                animate={{
                  flexGrow: isActive ? 76 : 8,
                  scale: isActive ? 1 : 0.985,
                }}
                transition={SPRING}
                initial={false}
              >

                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  animate={{
                    backgroundColor: isActive ? "#081A36" : "var(--color-card)",
                    boxShadow: isActive
                      ? "0 30px 80px -30px rgba(255,90,31,0.5), inset 0 0 0 1px rgba(255,90,31,0.35)"
                      : "inset 0 0 0 1px var(--color-border)",
                  }}
                  transition={{ duration: 0.4 }}
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    background:
                      "radial-gradient(circle at 30% 15%, rgba(255,90,31,0.2), transparent 60%)",
                  }}
                />
                <div className="relative h-full" style={{ flexBasis: 0 }}>
                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.div
                        key="expanded"
                        className="h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ExpandedContent stage={stage} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="collapsed"
                        className="h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CollapsedContent stage={stage} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: stacked accordion */}
        <div className="space-y-3 md:hidden">
          {stages.map((stage, i) => {
            const isActive = active === i;
            return (
              <div
                key={stage.n}
                className="overflow-hidden rounded-3xl border"
                style={{
                  backgroundColor: isActive ? "#081A36" : "var(--color-card)",
                  borderColor: isActive ? "var(--color-primary)" : "var(--color-border)",
                  boxShadow: isActive
                    ? "0 20px 50px -25px rgba(255,90,31,0.45)"
                    : "none",
                  transition: "all 0.4s ease",
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
                      transition: "transform 0.4s ease",
                      transform: isActive ? "rotate(45deg)" : "rotate(0)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isActive ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.4s ease",
                  }}
                >
                  <div className="overflow-hidden">
                    <ExpandedContent stage={stage} />
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
