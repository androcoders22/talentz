"use client";

import { RainbowButton } from "./ui/rainbow-button";

const brands = [
  {
    name: "Yamaha",
    logo: "https://placehold.co/200x80/ffffff/333333?text=Yamaha",
  },
  {
    name: "Sennheiser",
    logo: "https://placehold.co/200x80/ffffff/333333?text=Sennheiser",
  },
  {
    name: "Shure",
    logo: "https://placehold.co/200x80/ffffff/333333?text=Shure",
  },
  {
    name: "Roland",
    logo: "https://placehold.co/200x80/ffffff/333333?text=Roland",
  },
  { name: "Boss", logo: "https://placehold.co/200x80/ffffff/333333?text=Boss" },
  {
    name: "Kawai",
    logo: "https://placehold.co/200x80/ffffff/333333?text=Kawai",
  },
  {
    name: "Ibanez",
    logo: "https://placehold.co/200x80/ffffff/333333?text=Ibanez",
  },
  { name: "Tama", logo: "https://placehold.co/200x80/ffffff/333333?text=Tama" },
  {
    name: "Taylor",
    logo: "https://placehold.co/200x80/ffffff/333333?text=Taylor",
  },
  {
    name: "D'Addario",
    logo: "https://placehold.co/200x80/ffffff/333333?text=D'Addario",
  },
  {
    name: "PreSonus",
    logo: "https://placehold.co/200x80/ffffff/333333?text=PreSonus",
  },
  {
    name: "Adamson",
    logo: "https://placehold.co/200x80/ffffff/333333?text=Adamson",
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
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex items-center justify-center p-4 rounded-xl hover:bg-black/3 transition-all duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 md:h-10 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                title={brand.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
