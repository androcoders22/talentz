"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const floatingLabelClassName =
  "absolute left-0 top-3 cursor-text text-sm text-zinc-500 transition-all duration-200 peer-focus:-top-4 peer-focus:text-[11px] peer-focus:text-white peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[11px] peer-not-placeholder-shown:text-zinc-400";

interface FloatingFieldProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}

export function FloatingField({
  id,
  label,
  error,
  className,
  children,
}: FloatingFieldProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
      <label htmlFor={id} className={floatingLabelClassName}>
        {label}
      </label>
      {error ? <p className="mt-2 text-xs text-red-400">{error}</p> : null}
    </div>
  );
}
