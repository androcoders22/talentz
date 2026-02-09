import { Hero } from "@/components/Hero";
import { TopSelling } from "@/components/TopSelling";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Features } from "@/components/Features";
import { LatherBagCollection } from "@/components/LatherBagCollection";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TopSelling />
      <WhyChooseUs />
      <Features />
      <LatherBagCollection />
      <ProductGrid />
      <Footer />
    </>
  );
}
