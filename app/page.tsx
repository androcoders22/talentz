import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TopSelling } from "@/components/TopSelling";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Features } from "@/components/Features";
import { LatherBagCollection } from "@/components/LatherBagCollection";
import { ProductGrid } from "@/components/ProductGrid";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TopSelling />
        <WhyChooseUs />
        <Features />
        <LatherBagCollection />
        <ProductGrid />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
