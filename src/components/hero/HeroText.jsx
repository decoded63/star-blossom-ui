import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function HeroText() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16">
      <div className="max-w-2xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="block text-xs font-black uppercase tracking-[0.35em] text-[#60a5fa]"
        >
          DFM — Devflow Media
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease }}
          className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
        >
          We Engineer Revenue.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease }}
          className="mt-5 max-w-lg text-lg font-medium text-white/70"
        >
          For IT Companies Closing $10k–$100k Deals
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease }}
          className="pointer-events-auto mt-8"
        >
          <a
            href="https://cal.com/shreynagar/devflow-media-1-1-session"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-[#2563eb] px-8 py-4 font-bold uppercase tracking-tight text-white shadow-2xl transition-transform hover:scale-105"
          >
            Enter DFM
          </a>
        </motion.div>
      </div>
    </div>
  );
}
