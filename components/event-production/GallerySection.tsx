"use client";

import ScrollingBento from "@/components/ScrollingBento";
import { SectionHeader } from "./SectionHeader";

export function GallerySection() {
  return (
    <section
      id="portfolio"
      className="py-12 md:py-16 bg-zinc-950 relative z-10 w-full border-t border-white/5 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Featured Work"
          title="Our Gallery"
          description="A closer look at the stages, screen builds, lighting environments, and live event moments shaped by Talentz."
        />

        <div className="relative">
          <ScrollingBento speed={1.5} />
        </div>
      </div>
    </section>
  );
}
