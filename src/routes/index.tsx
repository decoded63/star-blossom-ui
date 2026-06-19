import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProcessSection } from "@/components/ProcessSection";
import { VideoSection } from "@/components/VideoSection";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DevFlow Media — Predictable Enterprise Growth for IT Companies" },
      {
        name: "description",
        content:
          "DevFlow Media builds outbound systems that drive predictable enterprise growth for IT companies. Break through your referral ceiling.",
      },
      { property: "og:title", content: "DevFlow Media — Predictable Enterprise Growth" },
      {
        property: "og:description",
        content:
          "The revenue partner for IT companies ready to create demand instead of waiting for it.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const heroImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBKetyDqE98NX8ZwLFQSYQnn4x8lK4AHxMFjVJeNMwm6l6h_fnuFSGQoCAXRGZI7jdkzicxEcQJEZ2QXhjhANR_iaFtkDLv7hz-bWW5-35wCfaZ4QpnTOJp3f66akdgkWpWDgNjP39du6IjJULHPmfab0HXVQtZsnFM0xfoOfRm37BjH3QRFIkOooMhc1qMYD1bABj76MzHQEn31SiJMvpXQt4js4ETikpxHlzZ6p5VAIgLuADKuT744slWbYZ90Aa6kpETm8gMlI8";

const statImgs = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC5Xtleh4BGVcvfTSiofmbO8h_t9-cmeNwwsCGmUOkRwuVE22Eo3mF6Da_UzF5lZEdBf96X3dbABTG34BsFLs7kFCxnnM270cyKLP7BMQom7T65DDOqiY5NprBzdsKV-HN9ojE3qZK9L55I8AsRMgEVuezr-pChLm8KcqK-ZOV_VYqYqMc65xZPF_xw40xPebYQXrOLJZ3hF9FKQowcSqUrKc82RK4iW0oRy6CkBs2Vj9OwcrGyzgjSP0pbb1P3S3pizVfGn3on2m8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCXf4RgKO5O3avXcJ0UbUrRXLxw1VEPlGwfKrDq58Vhem9Jte0E2znI2jCrqlod5xW8PegL3HcxZBfTm4JhoNmdYF08pveZsw8rDKXLC-TUJ_DtAfyK6nlPrcms6i1rXMR5Z4I27FzWr-VI7J2dBAhOWWGEUeHRzmoSny4WHPCzgawfQxrK_3pR3ZdLPZODuAWYyoVBX4URqzllI_jX2ylzuH_-hTMReUH_7XIEa8mAXfFXR-ABbg43xvvMH-zdPD-Q0SmYQelvxzE",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBBgnOyh_XmXNg0VqO3Le3AXvv2q2YPrJywr6JJAo134DPZpoXdPKp5Yteql7b_TuCdCEVyhrjfNUry4S989kJ1U5jDyfMjb1bDzwQhSYRW-vID5pPwd1tgvqsBfol5OL5LuHzURe60DmkhFUzDyN3K8OkKHspNyQDZ0DQ5UuBYQrJRPb3FHOR5koT9UjXU7i887we1ggbXToUeD0C6nJonMcFk4kRk4Rmwq3ImHdDTNEOu9cxUaS5hDaAWcIzzPhwQcN3StqhGFek",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBlWYqND_wKYOf4pYsBZ_m6hmJbJRQCjeAm66BCp8PeyGkvrnRkqjKC-GnE2zDYxWAaO5IM3tyrGyKuRkrAiY_syTODWYtdABxVlzzgG5URXXGnGL0nwpUDLDx71kvD38bEbAF0yxV5YPNB6EZBCP_sv8j_cVcwyF1imcHm76S72eI6XWbg1Ys6_UcZULFXTEsb5DwWi3578Oija9LjaSiN49dRWkN-GWuZYVLRjPxoQa__bgmEF3vi2oR1fmwe2hMS_vUpPv1uHlo",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB8-WavGFqBjPxvpgIHzBlmRtFR_n51c2rJGS6_R-iujLwa8j-AVoyZhsQTQ6vrwBScJja5lCXsroHyBr1q1fw3IUHzavyN8du37HyOHlLQsgbmIglpuZZMoaz-xvc4XUrkNjwDomb-JcQUBk3QQO7oNjPDCjquFaEu6yOnJ9uAvOgI9YLt9yhXg2XOMVRz5bdoGKE_-_ichB8rYpsnF_2BgX2jidh_c0ScTHVMNu6anqxrUo2CxKlrPh3W0tdZoUlSlk9rMO_EaMQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD7SgnXecOI2AnVClBR5ivd58SwGtXnnLmZJlOzJNlf3YIj6HuQf1sbDWoHGYRoR2V0GUWBKyHNueG8k8ZJOIngHXrWtAvuwjWE4OC0xnkkLBJg_aGwVDyxO_hkP45iJ8WafUo7wuIItGat9QEAwRVaPRoloHSB8sGc28V1vrYB2lDHkIuCOyISsPY3ESY94OoaS3G4Y2gCxTu3qsc8BZ2YP1tUUJQAQRUo8zImfNxV4OrHjXQ2HaKgIFSkmmCRIdSOEPhqFDJVMi8",
];

const caseStudies = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUnyhQ4gDHHDgWi486iEzENRosislnQvlnvkdurMaxuXsepb8l6l_xnBgwFKIWGRrV1J6w1Np6AJ0ka9peyneg15Hf1Qa11n6oOM4-tMb2yoh9hZ5mUCuIIQfjpCAG-VRcDUKgSGfAVF8DBiLpghZD-cm5Nw32w8FOFb3aKsM2VOQ3bok7THg52UoZaVIVG-qX_sjkHoSKoRrU3RP-0Fny1Q2JWtFSJ0aa5gMg2nGvNbSEygj4MYsneDmmpRmnO8aHq1sutVSqpm4",
    title: "Case Study 1: Breaking Out of Referral Dependency",
    desc: "How a 12-person software shop built an outbound motion that added $60k MRR in 4 months.",
    stats: [
      { value: "$60k", label: "Added MRR" },
      { value: "4mo", label: "Timeline" },
    ],
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKzN7P7QUOFd1IvIlMsJV1Z82K70_3Q4MplcYXSqnNjtocvDHm9_YRcKzXsn5UMsEwjwvtIawe4Nqbs0JW-V70PVoF2c-DFwgs3A8LYXQzkZLXe8AYgMcEM9OCN1sC1k3gxLfJ4JLhSVdQiEGybowQMaD5C366pr3rKa-0L6mU_YMagvzq6xCRk8rFgcLH1NfjIAREhMIH3dv3O1VVi94fj37iSq9dgNzprS2Yw-9RIagbvMpOKL_wk6L7HvtaWdBsiTlNx5njB0U",
    title: "Case Study 2: Breaking Into Enterprise",
    desc: "Targeting Fortune 500 decision-makers with a custom-engineered technical proof of concept.",
    stats: [
      { value: "$350k", label: "Contract Value" },
      { value: "12", label: "Key Intros" },
    ],
  },
];

function Index() {
  useReveal();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink py-20 text-ink-foreground md:py-32">
          {/* Animated particle constellation */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Orbiting particles */}
            {[...Array(18)].map((_, i) => {
              const size = 2 + (i % 5) * 1.5;
              const delay = i * -2.1;
              const duration = 16 + (i % 7) * 3;
              const tx = 10 + (i % 4) * 22;
              const ty = 12 + (i % 3) * 26;
              const opacity = 0.15 + (i % 6) * 0.08;
              const isGlow = i % 3 === 0;
              return (
                <span
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: size,
                    height: size,
                    left: `${20 + ((i * 137) % 60)}%`,
                    top: `${15 + ((i * 89) % 55)}%`,
                    backgroundColor: isGlow ? "oklch(0.66 0.2 38)" : "oklch(0.97 0.008 250)",
                    opacity,
                    boxShadow: isGlow
                      ? `0 0 ${size * 4}px ${size}px oklch(0.66 0.2 38 / 0.35)`
                      : `0 0 ${size * 2}px ${size / 2}px oklch(0.97 0.008 250 / 0.2)`,
                    animation: `particle-orbit ${duration}s ease-in-out ${delay}s infinite`,
                  }}
                />
              );
            })}
            {/* Slow drifting nebula blobs */}
            <div
              className="absolute -left-32 top-0 h-96 w-96 rounded-full blur-3xl"
              style={{
                background: "oklch(0.66 0.2 38 / 0.15)",
                animation: "nebula-drift 20s ease-in-out infinite alternate",
              }}
            />
            <div
              className="absolute -right-24 bottom-0 h-80 w-80 rounded-full blur-3xl"
              style={{
                background: "oklch(0.66 0.2 38 / 0.08)",
                animation: "nebula-drift 24s ease-in-out 3s infinite alternate-reverse",
              }}
            />
            <div
              className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full blur-3xl"
              style={{
                background: "oklch(0.5 0.15 250 / 0.12)",
                animation: "nebula-drift 18s ease-in-out 1.5s infinite alternate",
              }}
            />
            {/* Subtle grid lines */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(oklch(0.97 0.008 250 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.008 250 / 0.3) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
                animation: "grid-pan 30s linear infinite",
              }}
            />
          </div>
          <div className="container-max relative z-10 grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <span className="block text-xs font-black uppercase tracking-[0.25em] text-primary">
                The Hard Truth
              </span>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Your Referrals Have a Ceiling
                <span className="mt-2 block text-primary">Break Through It</span>
              </h1>
              <p className="max-w-xl text-lg font-medium text-ink-foreground/70">
                DevFlow Media is the revenue partner for IT companies ready to create demand instead
                of waiting for it. We build outbound systems that drive predictable enterprise
                growth.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <a
                  href="https://cal.com/shreynagar/devflow-media-1-1-session"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-primary px-8 py-4 font-display font-bold uppercase tracking-tight text-primary-foreground shadow-2xl transition-all hover:scale-105 hover:shadow-primary/40"
                >
                  BOOK A CALL
                </a>
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    Trusted by 50+ Tech Firms
                  </span>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-2xl">
                <img
                  className="w-full rounded opacity-95"
                  alt="A high-performance technical dashboard showing complex data visualizations and growth charts."
                  src={heroImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Video */}
        <VideoSection />

        {/* Problem */}
        <section className="border-b border-border bg-background py-20">
          <div className="container-max max-w-4xl space-y-6 text-center reveal">
            <h2 className="text-3xl font-bold md:text-4xl">
              Referral Dependency vs The Growth Engine
            </h2>
            <div className="mx-auto h-1 w-20 bg-primary" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              Most IT companies flatten out at 15-20 employees because their only source of new
              business is "who they know." Referrals are great, but they are reactive. To reach the
              next level, you need a proactive system that generates conversations with your ideal
              clients—every single day.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section className="bg-surface-subtle py-20">
          <div className="container-max reveal">
            <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Strategic Advantage
                </span>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                  What the Fastest-Growing IT Companies Do Differently
                </h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                They treat outbound as a technical engineering process, not a "numbers game" of
                spamming inboxes.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: "target",
                  title: "Precision Targeting",
                  desc: "We don't buy generic lists. We identify the exact 100 companies that would benefit most from your specific tech stack.",
                },
                {
                  icon: "engineering",
                  title: "Technical Offers",
                  desc: "IT leaders ignore marketing fluff. We help you package your services into a high-intent technical offer that demands attention.",
                },
                {
                  icon: "auto_graph",
                  title: "Compound Growth",
                  desc: "Your pipeline becomes a predictable asset, not a rollercoaster. We optimize every week based on hard data.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="card-hover rounded-lg border border-border bg-card p-8"
                >
                  <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                    {c.icon}
                  </span>
                  <h3 className="mb-2 text-xl font-bold">{c.title}</h3>
                  <p className="text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <ProcessSection />

        {/* Results */}
        <section
          className="overflow-hidden py-24"
          id="results"
          style={{ backgroundColor: "#F5F7FA" }}
        >
          <div className="container-max reveal mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Hard Evidence
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Distribution in Practice
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Actual campaign performance metrics from active client engagements.
            </p>
          </div>

          {/* Infinite marquee */}
          <div className="marquee">
            <div className="marquee-track gap-6 px-3">
              {[...statImgs, ...statImgs].map((src, i) => (
                <div
                  key={i}
                  className="shrink-0 overflow-hidden border bg-white p-4"
                  style={{
                    width: "clamp(300px, 80vw, 480px)",
                    maxWidth: "480px",
                    borderRadius: "16px",
                    borderColor: "#E5E7EB",
                    boxShadow: "0 8px 24px -12px rgba(15, 23, 42, 0.18)",
                  }}
                >
                  <img
                    alt={`Campaign performance metric ${(i % statImgs.length) + 1}`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain", borderRadius: "10px" }}
                    src={src}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="bg-background py-20" id="case-studies">
          <div className="container-max reveal">
            <h2 className="mb-12 border-b border-border pb-6 text-3xl font-bold md:text-4xl">
              Case Studies
            </h2>
            <div className="grid gap-12 md:grid-cols-2">
              {caseStudies.map((cs) => (
                <div key={cs.title} className="group space-y-4">
                  <div className="overflow-hidden rounded-lg border border-border">
                    <img
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={cs.title}
                      src={cs.img}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{cs.title}</h3>
                    <p className="my-4 text-muted-foreground">{cs.desc}</p>
                    <div className="flex items-center gap-4">
                      <div className="bg-accent px-4 py-2">
                        <span className="font-mono text-xl font-bold text-primary">
                          {cs.stats[0].value}
                        </span>
                        <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {cs.stats[0].label}
                        </span>
                      </div>
                      <div className="bg-secondary px-4 py-2">
                        <span className="font-mono text-xl font-bold text-secondary-foreground">
                          {cs.stats[1].value}
                        </span>
                        <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {cs.stats[1].label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative bg-ink py-24 text-ink-foreground">
          <div className="container-max max-w-4xl space-y-8 text-center reveal">
            <h2 className="text-3xl font-bold md:text-5xl">
              Growth shouldn't depend on luck Build your engine today
            </h2>
            <p className="text-lg font-medium text-ink-foreground/70">
              Join the IT leaders who have stopped waiting for the phone to ring and started making
              it happen.
            </p>
            <div className="flex flex-col justify-center gap-4 pt-2 md:flex-row">
              <a
                href="https://cal.com/shreynagar/devflow-media-1-1-session"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-primary px-8 py-4 font-display font-bold uppercase tracking-tight text-primary-foreground shadow-2xl transition-all hover:scale-105"
              >
                BOOK A CALL
              </a>
              <a
                href="#results"
                className="rounded-lg border border-ink-foreground/30 bg-transparent px-8 py-4 font-display font-bold uppercase tracking-tight transition-all hover:bg-ink-foreground/10"
              >
                View More Stats
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
