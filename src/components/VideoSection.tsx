import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink py-12 text-ink-foreground">
      <div className="container-max relative z-10">
        <div className="mb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            See It In Action
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-4xl">
            Inside The Growth Engine
          </h2>
        </div>

        <div
          ref={ref}
          className="mx-auto max-w-xs md:max-w-sm"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.96)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <div className="rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-2.5 shadow-2xl backdrop-blur-sm">
            <div
              className="relative overflow-hidden rounded-[14px]"
              style={{ paddingTop: "177.78%" }}
            >
              <iframe
                title="DevFlow Media — Growth Engine"
                src="https://player.vimeo.com/video/1201225764?title=0&byline=0&portrait=0"
                className="absolute inset-0 h-full w-full rounded-[14px]"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
