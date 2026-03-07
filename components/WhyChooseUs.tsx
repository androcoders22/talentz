"use client";

import { RainbowButton } from "./ui/rainbow-button";

const brands = [
  {
    name: "Yamaha",
    logo: "https://in.yamaha.com/assets/common/images/logo/logo-yamaha-purple-01.svg",
  },
  {
    name: "Sennheiser",
    logo: "/Sennheiser-logo-new.png",
  },
  {
    name: "Shure",
    logo: "/shure-logo.webp",
  },
  {
    name: "Roland",
    logo: "https://static.roland.com/global/css/fonts/roland.svg",
    invert: true,
  },
  {
    name: "Kawai",
    logo: "https://www.kawaipianoshouston.com/wp-content/uploads/2025/08/Kawai-Logo-1024x262.png",
  },
  {
    name: "Boss",
    logo: "/boos-logo.png",
  },
  {
    name: "Ibanez",
    logo: "https://www.ibanez.com/images/logo.png",
    invert: true,
  },
  {
    name: "Tama",
    logo: "https://www.tama.com/images/logo.png",
    invert: true,
  },
  {
    name: "Taylor",
    logo: "https://www.taylorguitars.com/themes/custom/tg_theme/images/desktop-logo.svg?v1",
    invert: true,
  },
  {
    name: "D'Addario",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Daddario_logo.png",
  },
  {
    name: "Adamson",
    logo: "https://adamson.ai/logo.svg",
  },
  {
    name: "PreSonus",
    logo: "https://intl.presonus.com/cdn/shop/files/presonus_logo.svg?v=1723628827&width=145",
  },
];

export function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="bg-white border border-muted rounded-[1.5rem] p-8 lg:p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <RainbowButton size="lg" className="cursor-default mb-2">
            Distribution & Dealership
          </RainbowButton>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-3 text-black leading-[1.1]">
            Authorized Brands. <br />
            <span className="font-bold">Trusted Partnerships.</span>
          </h2>
          <p className="text-xs md:text-sm text-black/50 max-w-lg mx-auto leading-relaxed">
            We're official — Authorized dealers and distributors for the world's
            most trusted audio, music, and lighting brands.
          </p>
        </div>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex items-center justify-center p-4 rounded-xl hover:bg-black/3 transition-all duration-300 w-full"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                suppressHydrationWarning
                className={`h-12 md:h-14 lg:h-16 w-auto max-w-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ${brand.invert ? "invert" : ""}`}
                title={brand.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
