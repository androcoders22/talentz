"use client";

import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { LatherBagCollection } from "@/components/LatherBagCollection";
import Gallery from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import Grainient from "@/components/Grainient";

export default function Home() {
  const color1 = "#6CAAD7";
  const color2 = "#FFFFFF";
  const color3 = "#C1D8F0";
  return (
    <>
      {/* Grainient Background - Fixed parallax layer */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-colors duration-1000 ease-in-out">
        <div className="absolute inset-0 bg-linear-to-b from-white/40 to-white z-10" />
        <div className="w-full h-full select-none">
          <Grainient
            color1={color1}
            color2={color2}
            color3={color3}
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

      {/* Hero Section - transparent so Grainient shows through */}
      <section className="relative z-10 -mt-20 pt-20">
        <Hero />
      </section>

      <div className="relative z-10">
        <Gallery />
        <WhyChooseUs />
        <LatherBagCollection />
        <Footer />
      </div>
    </>
  );
}
