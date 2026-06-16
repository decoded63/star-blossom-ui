import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RevenueCounter() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const obj = { val: 10000 };

    const tween = gsap.to(obj, {
      val: 214500,
      duration: 1.4,
      delay: 3,
      ease: "power4.out",
      onUpdate: () => {
        if (ref.current) {
          ref.current.innerText =
            "$" + Math.floor(obj.val).toLocaleString();
        }
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="pointer-events-none absolute bottom-8 left-4 z-20 md:bottom-12 md:left-10">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
        Pipeline Generated
      </p>
      <p
        ref={ref}
        className="mt-1 font-mono text-4xl font-bold text-[#60a5fa] md:text-6xl"
        style={{ willChange: "contents" }}
      >
        $10,000
      </p>
    </div>
  );
}
