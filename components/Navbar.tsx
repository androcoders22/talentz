"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  IconMenu2,
  IconX,
  IconChevronDown,
  IconPhone,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
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
import { useState, useEffect } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    // Set initial hash
    const handleHashChange = () => setCurrentHash(window.location.hash);

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  const isLinkActive = (href: string) => {
    if (typeof window === "undefined") return false;
    const [linkPath, linkHash] = href.split("#");
    const normalizedHash = linkHash ? "#" + linkHash : "";

    return (
      pathname === linkPath &&
      (currentHash === normalizedHash ||
        (!normalizedHash && (!currentHash || currentHash === "#")))
    );
  };

  const eventsLinks = [
    { label: "Overview", href: "/event-production" },
    { label: "Our Expertise", href: "/event-production#equipment" },
    { label: "Recent Projects", href: "/event-production#portfolio" },
    { label: "Social Feed", href: "/event-production#social" },
    { label: "Blogs & Updates", href: "/event-production#blog" },
    { label: "Testimonials", href: "/event-production#testimonials" },
    { label: "Contact Us", href: "/event-production#contact-us" },
  ];

  const musicLinks = [
    { label: "Musical Instruments", href: "/#" },
    { label: "Professional Audio", href: "/#" },
  ];

  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-9999 w-full pt-4 bg-transparent">
      <div className="container mx-auto px-4">
        <nav className="flex h-14 items-center justify-between rounded-full bg-black/20 px-2 md:px-3 py-1.5 backdrop-blur-sm relative z-50 shadow-2xl border border-white/10">
          <div className="flex items-center gap-3">
            <Link href="/" className="shrink-0 flex items-center">
              <div className="ml-2 flex items-center justify-center h-[34px] md:h-[37px] brightness-125">
                <Image
                  src="/WhiteLogo.png"
                  alt="Talentz"
                  width={200}
                  height={60}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center ml-auto mr-2">
            <NavigationMenu align="end">
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
                          active={isLinkActive(link.href)}
                          render={
                            <Link
                              href={link.href}
                              onClick={() => {
                                if (link.href.includes("#")) {
                                  setCurrentHash("#" + link.href.split("#")[1]);
                                } else {
                                  setCurrentHash("");
                                }
                                document.dispatchEvent(
                                  new KeyboardEvent("keydown", {
                                    key: "Escape",
                                  }),
                                );
                              }}
                            />
                          }
                          className="block px-4 py-2.5 text-sm rounded-lg transition-colors text-neutral-300 hover:text-black hover:bg-white focus:text-neutral-300 focus:bg-transparent data-active:bg-white! data-active:text-black! data-active:font-bold"
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
                          active={isLinkActive(link.href)}
                          render={
                            <Link
                              href={link.href}
                              onClick={() => {
                                if (link.href.includes("#")) {
                                  setCurrentHash("#" + link.href.split("#")[1]);
                                } else {
                                  setCurrentHash("");
                                }
                                document.dispatchEvent(
                                  new KeyboardEvent("keydown", {
                                    key: "Escape",
                                  }),
                                );
                              }}
                            />
                          }
                          className="block px-4 py-2.5 text-sm rounded-lg transition-colors text-neutral-300 hover:text-black hover:bg-white focus:text-neutral-300 focus:bg-transparent data-active:bg-white! data-active:text-black! data-active:font-bold"
                        >
                          {link.label}
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    render={<Link href="/event-production#blog" />}
                    className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white h-9 px-4 py-2 rounded-lg text-sm font-medium transition-all inline-flex items-center justify-center w-max"
                  >
                    Blog
                  </NavigationMenuLink>
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
                  <div className="flex items-center bg-white rounded-full overflow-hidden">
                    <Link
                      href="/contact"
                      className="bg-transparent text-black hover:bg-neutral-100 h-9 px-4 py-2 text-sm font-bold transition-colors inline-flex items-center justify-center border-r border-black/10"
                    >
                      Contact Us
                    </Link>
                    <NavigationMenuTrigger className="bg-transparent! text-black hover:bg-neutral-100 h-9 px-1.5 rounded-none! border-none! transition-colors">
                      <span className="sr-only">Options</span>
                    </NavigationMenuTrigger>
                  </div>
                  <NavigationMenuContent className="bg-black/95 backdrop-blur-xl border border-white/10 text-white rounded-xl shadow-2xl p-1.5 w-[200px]">
                    <div className="flex flex-col gap-0.5 w-full">
                      <a
                        href="tel:+96824783443"
                        className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        <IconPhone className="w-4 h-4 opacity-70" />
                        +968 2478 3443
                      </a>
                      <a
                        href="https://wa.me/96892252685"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        <IconBrandWhatsapp className="w-4 h-4 opacity-70" />
                        WhatsApp
                      </a>
                      <a
                        href="mailto:customerservice@talentz.net"
                        className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        <IconMail className="w-4 h-4 opacity-70" />
                        Email Us
                      </a>
                    </div>
                  </NavigationMenuContent>
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
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (link.href.includes("#")) {
                          setCurrentHash("#" + link.href.split("#")[1]);
                        } else {
                          setCurrentHash("");
                        }
                      }}
                      className={`px-6 py-2.5 rounded-2xl text-[15px] font-medium transition-all ${
                        isLinkActive(link.href)
                          ? "bg-white text-black font-bold"
                          : "text-neutral-400 hover:bg-white hover:text-black"
                      }`}
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
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (link.href.includes("#")) {
                          setCurrentHash("#" + link.href.split("#")[1]);
                        } else {
                          setCurrentHash("");
                        }
                      }}
                      className={`px-6 py-2.5 rounded-2xl text-[15px] font-medium transition-all ${
                        isLinkActive(link.href)
                          ? "bg-white text-black font-bold"
                          : "text-neutral-400 hover:bg-white hover:text-black"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="mt-2 h-px bg-white/10 mx-6 my-2" />

                  <Link
                    href="/event-production#blog"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-6 py-3 rounded-2xl text-base font-medium transition-all text-white hover:bg-white/5"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/###"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-6 py-3 rounded-2xl text-base font-medium transition-all text-white hover:bg-white/5"
                  >
                    Distribution & Dealership
                  </Link>
                  <div className="flex items-center w-full rounded-2xl overflow-hidden border border-white/10 mb-1">
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex-1 px-6 py-3 text-base font-medium transition-all text-white hover:bg-white/5 text-left border-r border-white/10"
                    >
                      Contact Us
                    </Link>
                    <button
                      onClick={() => setIsContactOpen(!isContactOpen)}
                      className="px-4 py-3 text-white hover:bg-white/5 transition-all flex items-center justify-center"
                    >
                      <IconChevronDown
                        className={`w-5 h-5 transition-transform ${isContactOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {isContactOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 py-2 px-2 bg-white/5 rounded-2xl mb-4 border border-white/10 mx-2">
                          <a
                            href="tel:+96824783443"
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-neutral-300 hover:bg-white/5 rounded-xl transition-all"
                          >
                            <IconPhone className="w-4 h-4 opacity-70" />
                            +968 2478 3443
                          </a>
                          <a
                            href="https://wa.me/96892252685"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-neutral-300 hover:bg-white/5 rounded-xl transition-all"
                          >
                            <IconBrandWhatsapp className="w-4 h-4 opacity-70" />
                            WhatsApp
                          </a>
                          <a
                            href="mailto:customerservice@talentz.net"
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-neutral-300 hover:bg-white/5 rounded-xl transition-all"
                          >
                            <IconMail className="w-4 h-4 opacity-70" />
                            Email Us
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
