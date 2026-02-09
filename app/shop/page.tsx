"use client";

import { ProductGrid } from "@/components/ProductGrid";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
export default function ShopPage() {
  return (
    <>
      {/* Shop Hero Section */}
      <section className="relative pt-24 md:pt-16 pb-12 md:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight mb-6 leading-[1.1]">
              Musical Instruments
              <br />
              <span className="font-bold text-primary">& Pro Audio</span> Shop
            </h1>
            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
              Explore our curated collection of world-class instruments and
              professional audio gear. From Muscat to the world, we bring you
              the finest tools for your art.
            </p>
          </motion.div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10">
          <div className="absolute inset-0 bg-linear-to-bl from-primary/20 to-transparent blur-3xl" />
        </div>
      </section>

      {/* Categories / Filters Strip would go here if needed, but the user asked for a 2nd level strip on Navbar */}

      <ProductGrid />
      <Footer />
    </>
  );
}
