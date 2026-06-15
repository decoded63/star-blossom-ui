import { useEffect, useRef, useState } from "react";

const ORBS = [
  { left: "6%", top: "12%", size: 10, ox: "30px", oy: "-26px", dur: 9, delay: 0 },
  { left: "92%", top: "20%", size: 7, ox: "-24px", oy: "20px", dur: 11, delay: 1.5 },
  { left: "12%", top: "82%", size: 8, ox: "26px", oy: "18px", dur: 10, delay: 0.8 },
  { left: "88%", top: "78%", size: 12, ox: "-30px", oy: "-22px", dur: 12, delay: 2.2 },
  { left: "48%", top: "4%", size: 6, ox: "18px", oy: "-20px", dur: 8.5, delay: 1.1 },
  { left: "50%", top: "96%", size: 9, ox: "-20px", oy: "16px", dur: 10.5, delay: 0.4 },
];

export function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ink-foreground">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* radial glow */}
        <div
          className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.6 0.22 270 / 0.18), transparent 65%)" }}
        />
        {/* mesh blobs */}
        <div
          className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full blur-3xl"
          style={{ background: "oklch(0.6 0.22 255 / 0.16)", animation: "mesh-blob 18s ease-in-out infinite" }}
        />
        <div
          className="absolute right-[6%] bottom-[14%] h-80 w-80 rounded-full blur-3xl"
          style={{ background: "oklch(0.55 0.25 300 / 0.14)", animation: "mesh-blob 22s ease-in-out 3s infinite alternate" }}
        />
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.97 0.008 250 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.008 250 / 0.4) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* corner light beams */}
        <div
          className="absolute -left-10 -top-10 h-72 w-72 blur-2xl"
          style={{ background: "conic-gradient(from 200deg at 0% 0%, oklch(0.75 0.16 200 / 0.18), transparent 40%)" }}
        />
        <div
          className="absolute -right-10 -bottom-10 h-72 w-72 blur-2xl"
          style={{ background: "conic-gradient(from 20deg at 100% 100%, oklch(0.55 0.25 300 / 0.18), transparent 40%)" }}
        />
      </div>

      <div className="container-max relative z-10">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            See It In Action
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Inside The Growth Engine
          </h2>
        </div>

        {/* Entrance + premium frame */}
        <div
          ref={ref}
          className="mx-auto max-w-4xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.92)",
            transition: "opacity 1s ease-out, transform 1s ease-out",
          }}
        >
          <div className="video-frame-wrap relative">
            {/* floating orbs */}
            {ORBS.map((o, i) => (
              <span
                key={i}
                className="pointer-events-none absolute rounded-full"
                style={{
                  left: o.left,
                  top: o.top,
                  width: o.size,
                  height: o.size,
                  background: "oklch(0.8 0.14 230)",
                  boxShadow: `0 0 ${o.size * 3}px ${o.size}px oklch(0.7 0.18 250 / 0.45)`,
                  // @ts-expect-error custom props
                  "--ox": o.ox,
                  "--oy": o.oy,
                  animation: `orb-float ${o.dur}s ease-in-out ${o.delay}s infinite`,
                }}
              />
            ))}

            {/* soft neon glow behind frame */}
            <div className="video-frame-glow absolute -inset-4 rounded-[28px]" style={{ opacity: 0.6 }} />

            {/* gradient border */}
            <div className="video-frame-border relative overflow-hidden rounded-[24px] p-[2px] shadow-2xl">
              {/* moving light streak across border */}
              <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[24px]">
                <div
                  className="video-streak absolute -top-1/2 left-0 h-[200%] w-1/4 -rotate-12"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(0.98 0.02 250 / 0.55), transparent)",
                  }}
                />
              </div>

              {/* glass panel */}
              <div
                className="relative rounded-[22px] p-3 md:p-4"
                style={{
                  background: "rgba(10, 14, 28, 0.72)",
                  backdropFilter: "blur(18px) saturate(140%)",
                }}
              >
                {/* video container */}
                <div className="relative overflow-hidden rounded-[18px]" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    title="DevFlow Media — Growth Engine"
                    src="https://player.vimeo.com/video/76979871?title=0&byline=0&portrait=0"
                    className="absolute inset-0 h-full w-full rounded-[18px]"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
