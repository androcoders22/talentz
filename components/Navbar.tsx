"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconSearch,
  IconShoppingCart,
  IconUser,
  IconChevronDown,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const isShop = pathname === "/shop";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/event-production", label: "Events" },
    { href: "/institute", label: "Institute" },
    { href: "/services", label: "Services" },
  ];

  return (
    <header className="sticky top-6 z-50 flex flex-col items-center px-4 gap-2">
      <nav className="container mx-auto flex h-16 items-center justify-between rounded-full border bg-background/60 px-6 md:px-8 py-2 backdrop-blur-md relative z-50">
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
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-tighter text-primary font-serif shrink-0"
          >
            Talentz
          </Link>
          <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-primary/80">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full transition-all ${
                    isActive
                      ? "bg-black text-white font-semibold"
                      : "hover:bg-muted/50 hover:text-primary"
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
            variant="outline"
            className="hidden md:flex rounded-full border-primary/20 hover:bg-primary/10"
          >
            Login/Signup
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-primary/10 h-9 w-9 md:h-10 md:w-10"
          >
            <IconShoppingCart className="h-5 w-5" />
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
                          ? "bg-black text-white"
                          : "hover:bg-muted text-primary"
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
                <div className="flex justify-center gap-8 py-2">
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                      Call Us
                    </p>
                    <p className="text-sm font-bold">+968 2478 3443</p>
                  </div>
                  <div className="h-8 w-px bg-muted" />
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                      Email
                    </p>
                    <p className="text-sm font-bold">info@talentz.net</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Second Level Strip for Shop Page */}
      <AnimatePresence mode="wait">
        {isShop && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0 } }}
            className="container mx-auto "
          >
            <div className="bg-black text-white py-3 rounded-full px-8 relative z-0 mx-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
                  <Link
                    href="#"
                    className="text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap"
                  >
                    Categories <IconChevronDown className="h-3 w-3" />
                  </Link>
                  <Link
                    href="#"
                    className="text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors whitespace-nowrap"
                  >
                    Guitars
                  </Link>
                  <Link
                    href="#"
                    className="text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors whitespace-nowrap"
                  >
                    Keyboards
                  </Link>
                  <Link
                    href="#"
                    className="text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors whitespace-nowrap"
                  >
                    Pro Audio
                  </Link>
                  <Link
                    href="#"
                    className="text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors whitespace-nowrap"
                  >
                    Drums
                  </Link>
                  <Link
                    href="#"
                    className="text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors whitespace-nowrap"
                  >
                    Microphones
                  </Link>
                </div>
                <div className="hidden md:flex items-center gap-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Free Muscat Delivery on Gear
                  </span>
                  <div className="h-4 w-px bg-white/10" />
                  <Link
                    href="#"
                    className="text-[10px] uppercase tracking-[0.2em] hover:text-primary transition-colors"
                  >
                    Track Order
                  </Link>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
