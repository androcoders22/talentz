import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
// import { Features } from "@/components/Features";
import { LatherBagCollection } from "@/components/LatherBagCollection";
// import { ProductGrid } from "@/components/ProductGrid";
import Gallery from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import BgVideo from "@/components/BgVideo";

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Video */}
      <section className="relative overflow-hidden -mt-20 pt-20">
        {/* Background Video with White Overlay and Blur */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-b from-white/40 to-white z-10" />
          <div className="w-full h-full select-none">
            <BgVideo />
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10">
          <Hero />
        </div>
      </section>

      <WhyChooseUs />
      <Gallery />
      {/* <Features /> */}
      <LatherBagCollection />
      {/* <ProductGrid /> */}
      <Footer />
    </>
  );
}
