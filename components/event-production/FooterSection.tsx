"use client";

import Link from "next/link";
import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export function FooterSection() {
  return (
    <section className="bg-black text-white pt-16 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-6">
          {/* Top Part: Logo and Description from Footer.tsx */}
          <div className="space-y-5 max-w-2xl">
            <Link href="/" className="inline-block mb-1">
              <img
                src="/logo-old.png"
                alt="Talentz"
                className="h-10 w-auto object-contain object-left invert brightness-0 opacity-90"
              />
            </Link>
            <p className="text-zinc-400 text-sm md:text-[15px] leading-relaxed max-w-xl font-medium">
              Oman&apos;s leading provider for Event Productions, Musical
              Instruments, and Professional Light & Sound solutions since 2002.
            </p>
          </div>

          {/* Additional Info from Footer.tsx */}
          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-x-8 gap-y-4 text-xs md:text-sm text-zinc-500 font-medium tracking-wide">
            <div className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
              <IconMapPin className="h-4 w-4 opacity-70 shrink-0" />
              <span>Ruwi, Muscat & Wadi Kabir</span>
            </div>
            <div className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
              <IconPhone className="h-4 w-4 opacity-70 shrink-0" />
              <span>+968-2478-3443</span>
            </div>
            <div className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
              <IconBrandWhatsapp className="h-4 w-4 opacity-70 shrink-0" />
              <span>+968-9225-2685</span>
            </div>
            <div className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
              <IconMail className="h-4 w-4 opacity-70 shrink-0" />
              <span>customerservice@talentz.net</span>
            </div>
            <div className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
              <IconClock className="h-4 w-4 opacity-70 shrink-0" />
              <span>
                Sat-Thu: [ 9:00 AM - 1:00 PM ] & [ 2:30 PM - 6:00 PM ]
              </span>
            </div>
          </div>

          {/* Existing Footer Links, rendered horizontally to match the image's vibe */}
          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-x-8 gap-y-3 md:gap-y-4 text-[13px] md:text-sm font-semibold text-white">
            <span className="text-zinc-500 mb-1 md:mb-0 md:mr-2 uppercase tracking-[0.2em] text-[10px] md:hidden">
              Company
            </span>
            <span className="text-zinc-600 mr-2 uppercase tracking-[0.2em] text-[10px] hidden md:inline-block">
              Company
            </span>
            {[
              "About Us",
              "FAQs",
              "Shipping & Delivery",
              "Promotions & News",
              "Terms & Conditions",
              "Privacy Policy",
              "User Agreement",
            ].map((link) => (
              <Link
                key={link}
                href="#"
                className="hover:text-zinc-400 text-zinc-200 transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Divider from image */}
          <div className="w-full h-px bg-white/10 mt-6 md:mt-10 mb-2"></div>

          {/* Bottom Section: Copyright & Socials */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-zinc-500 text-xs font-medium tracking-wide">
              Copyright 2026© Talentz Enterprises L.L.C. All Rights Reserved.
            </p>

            <div className="flex items-center gap-6 text-zinc-400">
              <Link
                href="#"
                className="hover:text-white hover:scale-110 transition-all"
              >
                <IconBrandFacebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/talentzeventsproduction/"
                className="hover:text-white hover:scale-110 transition-all"
                target="_blank"
              >
                <IconBrandInstagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@talentzeventsproduction"
                className="hover:text-white hover:scale-110 transition-all"
                target="_blank"
              >
                <IconBrandYoutube className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-white hover:scale-110 transition-all"
              >
                <IconBrandLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
