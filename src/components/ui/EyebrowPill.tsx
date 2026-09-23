import type { ReactNode } from "react";

export function EyebrowPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-orange/35 px-[18px] py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-orange-hover">
      {children}
    </span>
  );
}
