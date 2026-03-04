"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const eventsLinks = [
    { label: "Technical & AV Rental", href: "/#" },
    { label: "Truss Structures", href: "/#" },
    { label: "Staging", href: "/#" },
    { label: "Tents & Marquees", href: "/#" },
    { label: "Grandstand Seating", href: "/#" },
    { label: "Special Projects", href: "/#" },
  ];

  const musicLinks = [
    { label: "Musical Instruments", href: "/#" },
    { label: "Professional Audio", href: "/#" },
  ];

  return (
    <header className="sticky top-0 z-9999 w-full pt-4 bg-transparent">
      <div className="container mx-auto px-4">
        <nav className="flex h-14 items-center justify-between rounded-full bg-black/20 px-2 md:px-3 py-1.5 backdrop-blur-sm relative z-50 shadow-2xl border border-white/10">
          <div className="flex items-center gap-3">
            <Link href="/" className="shrink-0 flex items-center gap-3">
              <div className="ml-2 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 brightness-125">
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

          <div className="hidden lg:flex items-center ml-auto mr-2">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10! data-[state=open]:text-white! data-open:bg-white/10! data-open:text-white! data-popup-open:bg-white/10! data-popup-open:hover:bg-white/10! text-sm font-medium transition-all">
                    Event Production
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-black/95 backdrop-blur-xl border border-white/10 text-white rounded-xl shadow-2xl p-2 w-[280px]">
                    <div className="flex flex-col gap-1 w-full">
                      {eventsLinks.map((link) => (
                        <NavigationMenuLink
                          key={link.label}
                          render={<Link href={link.href} />}
                          className="block px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                          {link.label}
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10! data-[state=open]:text-white! data-open:bg-white/10! data-open:text-white! data-popup-open:bg-white/10! data-popup-open:hover:bg-white/10! text-sm font-medium transition-all">
                    Music Store
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-black/95 backdrop-blur-xl border border-white/10 text-white rounded-xl shadow-2xl p-2 w-[220px]">
                    <div className="flex flex-col gap-1 w-full">
                      {musicLinks.map((link) => (
                        <NavigationMenuLink
                          key={link.label}
                          render={<Link href={link.href} />}
                          className="block px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                          {link.label}
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    render={<Link href="/###" />}
                    className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white h-9 px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center justify-center w-max"
                  >
                    Distribution & Dealership
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    render={<Link href="/contact" />}
                    className="bg-white text-black hover:bg-neutral-200 h-9 px-5 py-2 rounded-full text-sm font-bold transition-colors inline-flex items-center justify-center w-max"
                  >
                    Contact Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
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
              <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl overflow-y-auto max-h-[calc(100vh-6rem)] overscroll-contain">
                <div className="flex flex-col gap-2">
                  <div className="text-xs font-bold text-white/50 px-6 pt-4 pb-2 uppercase tracking-wider">
                    Events Productions
                  </div>
                  {eventsLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-6 py-2.5 rounded-2xl text-[15px] font-medium transition-all text-neutral-400 hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="text-xs font-bold text-white/50 px-6 pt-4 pb-2 uppercase tracking-wider">
                    Music Store
                  </div>
                  {musicLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-6 py-2.5 rounded-2xl text-[15px] font-medium transition-all text-neutral-400 hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="mt-2 h-px bg-white/10 mx-6 my-2" />

                  <Link
                    href="/###"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-6 py-3 rounded-2xl text-base font-medium transition-all text-white hover:bg-white/5"
                  >
                    Distribution & Dealership
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-6 py-3 rounded-2xl text-base font-medium transition-all text-white hover:bg-white/5"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="mt-4 pt-6 border-t border-white/10 flex flex-col gap-4">
                  <div className="flex gap-4 px-4"></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
