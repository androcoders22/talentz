"use client";

import { ProductGrid } from "@/components/ProductGrid";
import { motion } from "framer-motion";

export default function ShopPage() {
  return (
    <>
      {/* Shop Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 font-serif">
              Musical instrument <br />
              <span className="text-primary">& Pro Audio Shop</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
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
    </>
  );
}
