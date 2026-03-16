"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";

import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 data-checked:border-white data-checked:bg-white size-5 rounded-lg border border-white/30 bg-transparent text-black outline-none transition-colors focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        keepMounted
        className="flex size-full items-center justify-center opacity-0 transition-opacity data-checked:opacity-100"
      >
        <svg
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 5L4.5 8.5L11 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
