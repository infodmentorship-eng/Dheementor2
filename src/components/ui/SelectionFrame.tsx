import type { ReactNode } from "react";

export function SelectionFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`selection-frame rounded-card p-3.5 ${className}`}>
      <span className="corner-tr" aria-hidden="true" />
      <span className="corner-tl" aria-hidden="true" />
      {children}
    </div>
  );
}
