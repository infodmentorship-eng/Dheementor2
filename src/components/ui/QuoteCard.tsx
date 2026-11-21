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
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface p-8 transition-[border-color,box-shadow,background-color] duration-500 hover:border-orange/60 hover:bg-orange-soft hover:shadow-[0_24px_60px_-24px_rgba(255,92,22,0.55)]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange/0 blur-3xl transition-colors duration-500 group-hover:bg-orange/25"
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-orange transition-transform duration-500 ease-out group-hover:scale-x-100"
      />
      <span className="inline-block origin-bottom-left font-sans text-[2rem] leading-none text-orange transition-transform duration-500 ease-out group-hover:-rotate-12 group-hover:scale-150">
        &rdquo;
      </span>
      <p className="mt-4 flex-1 text-[1.05rem] leading-[1.55] text-text">{quote}</p>

      <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-orange/35 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-orange-hover transition-all duration-500 group-hover:border-orange group-hover:bg-orange group-hover:text-white">
        <span className="h-[5px] w-[5px] rounded-full bg-orange transition-colors duration-500 group-hover:animate-pulse group-hover:bg-white" />
        {tag}
      </span>

      <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
        <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-surface-2 text-sm font-semibold text-text transition-all duration-500 group-hover:scale-110 group-hover:bg-orange group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange/40">
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
