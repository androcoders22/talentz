"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  IconSearch,
  IconShoppingCart,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#", label: "Events Productions" },
    {
      href: "https://talentz-music-store.vercel.app",
      label: "Music Store",
    },
    { href: "/###", label: "Distribution & Dealership" },
  ];

  return (
    <header className="sticky top-0 z-9999 w-full pt-4 bg-transparent">
      <div className="container mx-auto px-4">
        <nav className="flex h-14 items-center justify-between rounded-full bg-black/70 px-2 md:px-3 py-1.5 backdrop-blur-md relative z-50 shadow-2xl border border-white/10">
          <div className="flex items-center gap-3">
            <Link href="/" className="shrink-0 flex items-center gap-3">
              <div className="ml-2 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 brightness-125">
                <Image
                  src="/logov3.png"
                  alt="Talentz"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
              <h2 className="text-lg md:text-xl font-bold tracking-[0.18em] text-white">
                TALENTZ
              </h2>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all text-white`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden md:flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="text-neutral-400 hover:text-white hover:bg-white/10 rounded-full h-10 w-10"
              >
                <IconSearch className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-neutral-400 hover:text-white hover:bg-white/10 rounded-full h-10 w-10"
              >
                <IconShoppingCart className="h-5 w-5" />
              </Button>
            </div>

            <Link href="/login" className="hidden md:block">
              <Button className="bg-white text-black hover:bg-neutral-200 rounded-full px-5 py-2 h-10 font-bold text-sm transition-all">
                Login
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden bg-white text-black hover:bg-neutral-200 rounded-full h-10 w-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <IconX className="h-5 w-5" />
              ) : (
                <IconMenu2 className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              className="absolute top-20 left-4 right-4 lg:hidden z-40"
            >
              <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl overflow-hidden">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`px-6 py-4 rounded-2xl text-lg font-medium transition-all ${
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-neutral-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-4 pt-6 border-t border-white/10 flex flex-col gap-4">
                  <div className="flex gap-4 px-4">
                    <IconSearch className="h-6 w-6 text-neutral-400" />
                    <IconShoppingCart className="h-6 w-6 text-neutral-400" />
                  </div>
                  <Button className="w-full rounded-full h-14 bg-white text-black font-bold text-lg hover:bg-neutral-200">
                    Login
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
