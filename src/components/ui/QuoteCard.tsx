import { motion } from "framer-motion";

export function QuoteCard({
  quote,
  tag,
  name,
  role,
}: {
  quote: string;
  tag: string;
  name: string;
  role: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col rounded-card border border-border bg-surface p-8 hover:border-orange/40"
    >
      <span className="font-sans text-[2rem] leading-none text-orange">&rdquo;</span>
      <p className="mt-4 flex-1 text-[1.05rem] leading-[1.55] text-text">{quote}</p>

      <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-orange/35 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-orange-hover">
        <span className="h-[5px] w-[5px] rounded-full bg-orange" />
        {tag}
      </span>

      <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
        <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-surface-2 text-sm font-semibold text-text">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
        <div>
          <p className="text-sm font-semibold text-text">{name}</p>
          <p className="text-xs text-text-muted">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
