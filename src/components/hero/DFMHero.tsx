import SceneCanvas from "./SceneCanvas";
import Notifications from "./Notifications";
import RevenueCounter from "./RevenueCounter";
import HeroText from "./HeroText";

export default function DFMHero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#050816] text-white">
      {/* 3D scene layer */}
      <div className="absolute inset-0">
        <SceneCanvas />
      </div>

      {/* Gradient vignette for legibility */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 20%, rgba(5,8,22,0) 30%, rgba(5,8,22,0.55) 75%, rgba(5,8,22,0.9) 100%)",
        }}
      />

      {/* Foreground UI */}
      <HeroText />
      <Notifications />
      <RevenueCounter />
    </section>
  );
}
