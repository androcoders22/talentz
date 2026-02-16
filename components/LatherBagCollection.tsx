"use client";

import { MagicCard } from "@/components/ui/magic-card";
import { RainbowButton } from "./ui/rainbow-button";
import {
  IconGuitarPick,
  IconKeyboard,
  IconDisc,
  IconMicrophone,
  IconMusic,
  IconHeadphones,
} from "@tabler/icons-react";

const categories = [
  {
    title: "Guitars",
    desc: "Classical, Acoustic, Electric & Bass",
    icon: IconGuitarPick,
  },
  {
    title: "Keyboards & Pianos",
    desc: "Digital pianos, synthesizers & MIDI",
    icon: IconKeyboard,
  },
  {
    title: "Drums & Percussion",
    desc: "Acoustic kits, electronic & cajons",
    icon: IconDisc,
  },
  {
    title: "Pro Audio",
    desc: "Microphones, mixers & studio recording",
    icon: IconMicrophone,
  },
  {
    title: "Strings & Accessories",
    desc: "Strings, picks, cases & more",
    icon: IconMusic,
  },
  {
    title: "Ukuleles & More",
    desc: "Ukuleles, violins, recorders & viola",
    icon: IconHeadphones,
  },
];

export function LatherBagCollection() {
  return (
    <section className="container mx-auto px-4 py-4 mb-4">
      <div className="w-full rounded-[2rem] border-none p-0 shadow-none overflow-hidden">
        <MagicCard gradientColor="#D9D9D955" className="p-0">
          {/* Background Image Layer - positioned behind content but not fighting MagicCard */}
          <div className="relative overflow-hidden">
            {/* Top Row: Text + Images */}
            <div className="relative flex flex-col md:flex-row gap-4 px-4 pt-5 pb-4 md:px-8 md:pt-8 md:pb-8">
              {/* Text Content */}
              <div className="flex flex-col justify-start md:w-1/3 shrink-0">
                <RainbowButton variant="dark" className="w-fit">
                  Music Store
                </RainbowButton>
                <h2 className="text-2xl md:text-5xl font-light tracking-tight mb-2 md:mb-3 text-black leading-[1.1]">
                  Music & <br />
                  <span className="font-bold">Pro Audio Store.</span>
                </h2>
                <p className="text-xs md:text-sm text-black/60 leading-relaxed max-w-sm">
                  Retail & eCommerce for musicians, venues and professionals.
                </p>

                {/* Category Cards */}
                <div className="mt-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {categories.map((cat) => (
                      <div
                        key={cat.title}
                        className="group bg-white/80 backdrop-blur-sm border border-black/5 rounded-xl p-2 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer"
                      >
                        <cat.icon
                          size={16}
                          className="text-black/30 mb-1 group-hover:text-primary transition-colors"
                        />
                        <h3 className="text-[10px] font-bold text-black mb-0.5 group-hover:text-primary transition-colors truncate">
                          {cat.title}
                        </h3>
                        <p className="text-[9px] text-black/40 leading-snug line-clamp-1 hidden sm:block">
                          {cat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Images - side by side on both mobile and desktop */}
              <div className="grid grid-cols-2 gap-3 md:w-2/3 md:gap-4">
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl min-h-[120px] md:min-h-0 md:h-full w-full">
                  <img
                    src="/lather-strore.jpeg"
                    alt="Music Store Interior"
                    className="w-full h-full object-cover rounded-xl md:rounded-2xl md:absolute md:inset-0"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl min-h-[120px] md:min-h-0 md:h-full w-full">
                  <img
                    src="/lather-strore2.jpeg"
                    alt="Music Equipment Display"
                    className="w-full h-full object-cover rounded-xl md:rounded-2xl md:absolute md:inset-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </MagicCard>
      </div>
    </section>
  );
}
