"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  IconSearch,
  IconShoppingCart,
  IconChevronDown,
  IconMenu2,
  IconX,
  IconArrowRight,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const isShop = pathname === "/shop";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const navLinks = [
    { href: "/#", label: "Events Productions" },
    { href: "/##", label: "Music Store" },
    { href: "/###", label: "Distribution & Dealership" },
  ];

  const shopCategories = [
    {
      title: "Guitars",
      items: ["Electric", "Acoustic", "Bass", "Classical", "Amps"],
    },
    {
      title: "Keys",
      items: [
        "Digital Pianos",
        "Synthesizers",
        "Workstations",
        "Midi Controllers",
      ],
    },
    {
      title: "Audio",
      items: ["Microphones", "Interfaces", "Monitors", "Mixers", "PA Systems"],
    },
    {
      title: "Other",
      items: ["Drums", "Ukuleles", "Violins", "Effects", "Strings"],
    },
  ];

  return (
    <header className="sticky top-6 z-9999 flex flex-col items-center px-4 ">
      <nav className="container mx-auto flex h-16 items-center justify-between rounded-full border bg-background/60 px-6 md:px-8 py-2 backdrop-blur-md relative z-50 shadow-sm">
        <div className="flex items-center gap-4 lg:gap-8">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-full h-9 w-9"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <IconX className="h-5 w-5" />
            ) : (
              <IconMenu2 className="h-5 w-5" />
            )}
          </Button>
          <Link href="/" className="shrink-0 flex items-center gap-2">
            <Image
              src="/logov2.png"
              alt="Talentz"
              width={256}
              height={256}
              className="h-5 md:h-8 w-auto mt-[0.5] object-contain"
              priority
            />
            <h2 className="text-2xl font-bold text-primary">TALENTZ</h2>
          </Link>
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full transition-all text-sm font-medium ${
                    isActive
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "text-foreground/70 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-primary rounded-full hover:bg-primary/10 h-9 w-9 md:h-10 md:w-10"
          >
            <IconSearch className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-primary/10 h-9 w-9 md:h-10 md:w-10"
          >
            <IconShoppingCart className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="hidden md:flex rounded-full border-primary/20 hover:bg-primary/10"
          >
            Login/Signup
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="container mx-auto lg:hidden w-full px-2"
          >
            <div className="bg-background/90 backdrop-blur-xl border rounded-[2rem] p-6 mt-2 shadow-2xl overflow-hidden">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-6 py-4 rounded-2xl text-lg font-semibold transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {link.label}
                      <IconChevronDown
                        className={`h-5 w-5 transition-transform ${
                          isActive ? "-rotate-90 opacity-40" : "opacity-20"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>
              <div className="mt-6 pt-6 border-t flex flex-col gap-4 px-2">
                <Button className="w-full rounded-2xl h-14 bg-black text-white font-bold text-base">
                  Login / Signup
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Second Level Mega Menu Strip for Shop Page */}
      <AnimatePresence mode="wait">
        {isShop && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="container mx-auto w-full mt-4"
          >
            <motion.div
              animate={{ height: isCategoriesOpen ? "auto" : "50px" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-black text-white rounded-[2rem] px-8 relative z-0 mx-1.5 overflow-hidden shadow-2xl"
            >
              {/* Primary Bar */}
              <div className="flex items-center justify-between h-[50px]">
                <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
                  <button
                    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                    className="text-xs uppercase tracking-widest font-semibold hover:text-white/70 transition-colors flex items-center gap-2 whitespace-nowrap outline-none group"
                  >
                    Categories
                    <IconChevronDown
                      className={`h-3 w-3 transition-transform duration-300 ${isCategoriesOpen ? "rotate-180 text-primary" : ""}`}
                    />
                  </button>
                  <Link
                    href="#"
                    className="text-xs uppercase tracking-widest font-semibold hover:text-white/70 transition-colors whitespace-nowrap"
                  >
                    Guitars
                  </Link>
                  <Link
                    href="#"
                    className="text-xs uppercase tracking-widest font-semibold hover:text-white/70 transition-colors whitespace-nowrap"
                  >
                    Keyboards
                  </Link>
                  <Link
                    href="#"
                    className="text-xs uppercase tracking-widest font-semibold hover:text-white/70 transition-colors whitespace-nowrap"
                  >
                    Pro Audio
                  </Link>
                </div>
                <div className="hidden md:flex items-center gap-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Free Muscat Delivery on Gear
                  </span>
                  <div className="h-4 w-px bg-white/10" />
                  <Link
                    href="#"
                    className="text-[10px] uppercase tracking-[0.2em] hover:text-white/70 transition-colors"
                  >
                    Track Order
                  </Link>
                </div>
              </div>

              {/* Mega Menu Content */}
              <AnimatePresence>
                {isCategoriesOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="py-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-x-12"
                  >
                    {shopCategories.map((group) => (
                      <div key={group.title}>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] text-white font-black mb-6 border-l border-white/20 pl-4">
                          {group.title}
                        </h4>
                        <ul className="space-y-4">
                          {group.items.map((item) => (
                            <li key={item}>
                              <Link
                                href="#"
                                className="text-sm text-gray-400 hover:text-white transition-colors block"
                                onClick={() => setIsCategoriesOpen(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="md:col-span-4 mt-8 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
                      <span>Explore over 5000+ Products</span>
                      <Link
                        href="/shop"
                        className="text-white  flex items-center gap-2 group transition-colors"
                      >
                        View Storefront{" "}
                        <IconArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
