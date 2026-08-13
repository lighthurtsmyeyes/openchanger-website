import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
}

export default function Marquee({ children, className = "" }: MarqueeProps) {
  return (
    <div className={`overflow-hidden select-none ${className}`}>
      <div className="marquee-track">
        <div className="flex items-center shrink-0">{children}</div>
        <div className="flex items-center shrink-0" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
