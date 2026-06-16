import { motion } from "framer-motion";

const notifications = [
  "New Meeting Booked — CTO at 3 PM",
  "Interested in AI development — Budget $45k",
  "Payment received: $12,500",
  "Payment received: $48,000",
  "Proposal Accepted — $96,000",
];

export default function Notifications() {
  return (
    <div className="pointer-events-none absolute right-4 top-24 z-20 flex w-[min(86vw,340px)] flex-col gap-3 md:right-10 md:top-28">
      {notifications.map((item, i) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1.4 + i * 0.45,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur-md"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#3b82f6] shadow-[0_0_10px_2px_rgba(59,130,246,0.7)]" />
            <p className="text-sm font-medium text-white/90">{item}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
