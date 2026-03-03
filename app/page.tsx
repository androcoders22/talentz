"use client";

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { LatherBagCollection } from "@/components/LatherBagCollection";
import Gallery from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import Grainient from "@/components/Grainient";

const themes = [
  {
    name: "Brand Primary",
    color1: "#0A1B5E",
    color2: "#1E40AF",
    color3: "#C5E3FA",
  },
  {
    name: "Brand Exact",
    color1: "#E21B22",
    color2: "#2D318E",
    color3: "#6CAAD7",
  },
  {
    name: "Deep Corporate Waves",
    color1: "#B3121A",
    color2: "#1C2166",
    color3: "#4F89B5",
  },
  {
    name: "Vibrant Tech Brand",
    color1: "#FF2A31",
    color2: "#3D43C9",
    color3: "#85C7FA",
  },
  {
    name: "Soft Brand Pastels",
    color1: "#FFA6A9",
    color2: "#A3A7ED",
    color3: "#C5E3FA",
  },
  {
    name: "Blue Dominant",
    color1: "#002aff",
    color2: "#00ccff",
    color3: "#ffffff",
  },
  {
    name: "Red Dominant",
    color1: "#E21B22",
    color2: "#8F1115",
    color3: "#FF6B70",
  },
  {
    name: "Cyber Corporate",
    color1: "#FF3B42",
    color2: "#181B4F",
    color3: "#3E89BE",
  },
  {
    name: "Frosted Glass Brand",
    color1: "#6CAAD7",
    color2: "#FFFFFF",
    color3: "#C1D8F0",
  },
  {
    name: "Sunset over Sea",
    color1: "#E21B22",
    color2: "#2D318E",
    color3: "#751559",
  },
  {
    name: "Platinum & Brand",
    color1: "#BEC6D4",
    color2: "#2D318E",
    color3: "#E21B22",
  },
  {
    name: "Sunset Mirage",
    color1: "#FF3366",
    color2: "#FF9933",
    color3: "#FFCC00",
  },
  {
    name: "Aurora Borealis",
    color1: "#00E676",
    color2: "#2979FF",
    color3: "#D500F9",
  },
  {
    name: "Holographic Pearl",
    color1: "#E0C3FC",
    color2: "#8EC5FC",
    color3: "#E0F3FF",
  },
  {
    name: "Cyber Neon",
    color1: "#00F2FE",
    color2: "#4FACFE",
    color3: "#F093FB",
  },
  {
    name: "Luxe Midnight Gold",
    color1: "#141E30",
    color2: "#243B55",
    color3: "#D4AF37",
  },
  {
    name: "Crimson Ember",
    color1: "#ED213A",
    color2: "#93291E",
    color3: "#FF4E50",
  },
  {
    name: "Ocean Depths",
    color1: "#00B4DB",
    color2: "#0083B0",
    color3: "#11998E",
  },
  {
    name: "Peach & Lavender Dream",
    color1: "#FFB88C",
    color2: "#DE6161",
    color3: "#8360C3",
  },
  {
    name: "Berry Smoothie",
    color1: "#FF0844",
    color2: "#FFB199",
    color3: "#8A2387",
  },
  {
    name: "Mint Bronze",
    color1: "#56AB2F",
    color2: "#A8E063",
    color3: "#D38312",
  },
];

export default function Home() {
  const [activeTheme, setActiveTheme] = useState(themes[5]);

  const handleCustomColorChange = (
    key: "color1" | "color2" | "color3",
    value: string,
  ) => {
    setActiveTheme((prev) => ({
      name: "Custom",
      color1: key === "color1" ? value : prev.color1,
      color2: key === "color2" ? value : prev.color2,
      color3: key === "color3" ? value : prev.color3,
    }));
  };

  return (
    <>
      <div className="fixed bottom-8 right-4 z-9999 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-neutral-200 max-h-[80vh] overflow-y-auto w-64 max-w-[calc(100vw-2rem)] flex flex-col">
        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 border-b pb-2">
          Custom Colors
        </h3>
        <div className="flex justify-between items-center mb-4 px-1 gap-2">
          <div className="flex flex-col items-center gap-1">
            <input
              type="color"
              value={activeTheme.color1}
              onChange={(e) =>
                handleCustomColorChange("color1", e.target.value)
              }
              className="w-8 h-8 rounded cursor-pointer p-0 border-0"
            />
            <span className="text-[10px] text-neutral-500">Color 1</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <input
              type="color"
              value={activeTheme.color2}
              onChange={(e) =>
                handleCustomColorChange("color2", e.target.value)
              }
              className="w-8 h-8 rounded cursor-pointer p-0 border-0"
            />
            <span className="text-[10px] text-neutral-500">Color 2</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <input
              type="color"
              value={activeTheme.color3}
              onChange={(e) =>
                handleCustomColorChange("color3", e.target.value)
              }
              className="w-8 h-8 rounded cursor-pointer p-0 border-0"
            />
            <span className="text-[10px] text-neutral-500">Color 3</span>
          </div>
        </div>

        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 border-b pb-2">
          Select Theme
        </h3>
        <div className="flex flex-col gap-2 overflow-y-auto">
          {themes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => setActiveTheme(theme)}
              className={`text-left text-sm px-3 py-2 rounded-lg transition-all flex items-center justify-between shrink-0 ${
                activeTheme.name === theme.name
                  ? "bg-black text-white font-medium"
                  : "hover:bg-neutral-100 text-neutral-700"
              }`}
            >
              <span className="truncate">{theme.name}</span>
              <div className="flex -space-x-1 shrink-0 ml-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: theme.color1 }}
                ></div>
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: theme.color2 }}
                ></div>
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: theme.color3 }}
                ></div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section with Grainient Background */}
      <section className="relative overflow-hidden -mt-20 pt-20">
        {/* Grainient Background */}
        <div className="absolute inset-0 z-0 pointer-events-none transition-colors duration-1000 ease-in-out">
          <div className="absolute inset-0 bg-linear-to-b from-white/40 to-white z-10" />
          <div className="w-full h-full select-none" key={activeTheme.name}>
            <Grainient
              color1={activeTheme.color1}
              color2={activeTheme.color2}
              color3={activeTheme.color3}
              timeSpeed={2.05}
              colorBalance={0}
              warpStrength={1}
              warpFrequency={5}
              warpSpeed={4}
              warpAmplitude={80}
              blendAngle={15}
              blendSoftness={0}
              rotationAmount={500}
              noiseScale={2.5}
              grainAmount={0.1}
              grainScale={2}
              grainAnimated={false}
              contrast={1.2}
              gamma={1}
              saturation={1.5}
              centerX={0}
              centerY={0}
              zoom={0.9}
            />
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10">
          <Hero />
        </div>
      </section>

      <Gallery />
      <WhyChooseUs />
      <LatherBagCollection />
      <Footer />
    </>
  );
}
