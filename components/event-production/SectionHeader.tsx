"use client";

import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between ${className}`}
    >
      <div className="max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.42em] text-zinc-500">
          <span className="h-7 w-px bg-white/60" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[3.75rem] lg:leading-[0.98]">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="md:shrink-0">{action}</div> : null}
    </div>
  );
}
