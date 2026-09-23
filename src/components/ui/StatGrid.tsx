import { useCountUp } from "../../hooks/useCountUp";
import { SelectionFrame } from "./SelectionFrame";

function StatCell({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, display } = useCountUp(value);
  return (
    <div className="flex flex-col items-center justify-center border-border p-8 text-center sm:p-10 [&:nth-child(-n+2)]:border-b [&:nth-child(odd)]:border-r">
      <p className="font-sans text-[2.75rem] font-bold leading-none text-text sm:text-[3.25rem]">
        <span ref={ref}>{display}</span>
        <span className="ml-0.5 text-[0.45em] font-semibold text-orange">{suffix}</span>
      </p>
      <p className="mt-3 text-sm text-text-muted">{label}</p>
    </div>
  );
}

export function StatGrid({
  stats,
  className = "",
}: {
  stats: { value: number; suffix: string; label: string }[];
  className?: string;
}) {
  return (
    <SelectionFrame className={className}>
      <div className="grid grid-cols-2 rounded-2xl bg-surface">
        {stats.map((stat) => (
          <StatCell key={stat.label} {...stat} />
        ))}
      </div>
    </SelectionFrame>
  );
}
