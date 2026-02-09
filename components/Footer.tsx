"use client";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
} from "@tabler/icons-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#030303] text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-10">
          {/* Brand and Description */}
          <div className="space-y-8">
            <Link
              href="/"
              className="text-4xl font-bold block text-white font-serif italic tracking-tight"
            >
              Talentz
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Oman's leading provider for Event Productions, Musical
              Instruments, and Professional Light & Sound solutions since 2002.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                target="_blank"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all group"
              >
                <IconBrandFacebook className="h-5 w-5 text-zinc-400 group-hover:text-white" />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all group"
              >
                <IconBrandInstagram className="h-5 w-5 text-zinc-400 group-hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Reach Us */}
          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.3em] text-white/50">
              Reach Us
            </h4>
            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4 group">
                <IconMapPin className="h-5 w-5 text-zinc-300 shrink-0 mt-0.5" />
                <span className="text-zinc-400 leading-relaxed group-hover:text-white transition-colors">
                  Shop 94, Al An Noor Street, <br /> Ruwi, Muscat, Sultanate of
                  Oman
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <IconPhone className="h-5 w-5 text-zinc-300 shrink-0" />
                <span className="text-zinc-400 group-hover:text-white transition-colors">
                  +968-2478-3443
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <IconBrandWhatsapp className="h-5 w-5 text-zinc-300 shrink-0" />
                <span className="text-zinc-400 group-hover:text-white transition-colors">
                  +968-9225-2685
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <IconMail className="h-5 w-5 text-zinc-300 shrink-0" />
                <span className="text-zinc-400 group-hover:text-white transition-colors font-medium">
                  customerservice@talentz.net
                </span>
              </div>
            </div>
          </div>

          {/* Showroom Hours */}
          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.3em] text-white/70">
              Showroom Hours
            </h4>
            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <IconClock className="h-5 w-5 text-zinc-300 shrink-0 mt-0.5" />
                <div className="text-zinc-400 space-y-1">
                  <p className="text-white font-medium">Saturday to Thursday</p>
                  <p>9 am to 1 pm</p>
                  <p>4 pm to 8 pm</p>
                </div>
              </div>
              <div className="pt-2">
                <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 font-medium italic">
                  Closed on Fridays
                </span>
              </div>
            </div>
          </div>

          {/* Experience Detail */}
          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.3em] text-white/50">
              Excellence
            </h4>
            <p className="text-zinc-400 text-xs mb-8 leading-relaxed">
              Serving the creative community of Oman for over two decades with
              authentic gear and expert technical support.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-px bg-white/10 grow" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white/20">
                  EST 2002
                </span>
                <div className="h-px bg-white/10 grow" />
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-10 border-y border-white/5 mb-12">
          <div>
            <h4 className="font-bold mb-8 uppercase text-[10px] tracking-[0.2em] text-white border-l-2 border-white/20 pl-4">
              Product Category
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 text-[13px] text-zinc-500">
              {[
                "Guitars",
                "Studio & Recording",
                "Keyboards & Pianos",
                "Ukuleles",
                "Drums & Percussion",
                "Guitar Amplifiers",
                "Headphones",
                "Microphones",
                "Effects",
                "Strings",
                "Special Offers, Sale & More",
                "Preloved & Used",
              ].map((cat) => (
                <Link
                  key={cat}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase text-[10px] tracking-[0.2em] text-white border-l-2 border-white/20 pl-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-[13px] text-zinc-500">
              {[
                "User Agreement & Terms of Use",
                "Terms & Conditions for Online Shopping",
                "Shipping & Delivery",
                "Frequently Asked Questions [FAQs]",
                "Privacy Policy",
                "Promotions, News Releases, Shopping Guides and more!",
                "About Us",
              ].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-600">
          <p>© 2025 Talentz Enterprises L.L.C. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span>Muscat</span>
              <div className="h-1 w-1 bg-white/20 rounded-full" />
              <span>Oman</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
