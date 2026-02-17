import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
// import { Features } from "@/components/Features";
import { LatherBagCollection } from "@/components/LatherBagCollection";
// import { ProductGrid } from "@/components/ProductGrid";
import Gallery from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import Grainient from "@/components/Grainient";

export default function Home() {
  return (
    <>
      {/* Hero Section with Grainient Background */}
      <section className="relative overflow-hidden -mt-20 pt-20">
        {/* Grainient Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-b from-white/40 to-white z-10" />
          <div className="w-full h-full select-none">
            <Grainient
              color1="#f75268"  // RED-tint
              color2="#38BDF8"
              color3="#F97316"
              timeSpeed={2.05}
              colorBalance={0}
              warpStrength={1}
              warpFrequency={5}
              warpSpeed={4}
              warpAmplitude={80}
              blendAngle={0}
              blendSoftness={0.05}
              rotationAmount={500}
              noiseScale={2}
              grainAmount={0.1}
              grainScale={2}
              grainAnimated={false}
              contrast={1.5}
              gamma={1}
              saturation={2}
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
      {/* <Features /> */}
      <LatherBagCollection />
      {/* <ProductGrid /> */}
      <Footer />
    </>
  );
}
