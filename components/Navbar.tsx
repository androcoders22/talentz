"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconSearch,
  IconShoppingCart,
  IconUser,
  IconChevronDown,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const isShop = pathname === "/shop";

  return (
    <header className="sticky top-6 z-50 flex flex-col items-center px-4 gap-2">
      <nav className="container mx-auto flex h-16 items-center justify-between rounded-full border bg-background/60 px-8 py-2 backdrop-blur-md relative z-10">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter text-primary font-serif"
          >
            Talentz
          </Link>
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-primary/80">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/shop"
              className={`hover:text-primary transition-colors ${
                isShop ? "text-primary font-bold" : ""
              }`}
            >
              Shop
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Events
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Institute
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              About
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-primary rounded-full hover:bg-primary/10"
          >
            <IconSearch className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="hidden sm:flex rounded-full border-primary/20 hover:bg-primary/10"
          >
            Login/Signup
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-primary/10"
          >
            <IconShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Second Level Strip for Shop Page */}
      <AnimatePresence>
        {isShop && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
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
