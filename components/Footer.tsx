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
    <footer className="container mx-auto px-4 py-4 mb-4">
      <div className="bg-white text-black rounded-[2rem] border border-black/5 shadow-sm overflow-hidden relative pt-24 pb-12">
        {/* Subtle Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-black/10 to-transparent" />

        <div className="px-6 md:px-14 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-10">
            {/* Brand and Description */}
            <div className="space-y-8">
              <Link href="/" className="block">
                <img
                  src="/logo-old.png"
                  alt="Talentz"
                  className="h-16 w-auto"
                />
              </Link>
              <p className="text-black/50 text-sm leading-relaxed max-w-sm">
                Oman's leading provider for Event Productions, Musical
                Instruments, and Professional Light &amp; Sound solutions since
                2002.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-all group"
                >
                  <IconBrandFacebook className="h-5 w-5 text-black/40 group-hover:text-black" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-all group"
                >
                  <IconBrandInstagram className="h-5 w-5 text-black/40 group-hover:text-black" />
                </Link>
              </div>
            </div>

            {/* Reach Us */}
            <div>
              <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.3em] text-black/40">
                Reach Us
              </h4>
              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4 group">
                  <IconMapPin className="h-5 w-5 text-black/50 shrink-0 mt-0.5" />
                  <span className="text-black/50 leading-relaxed group-hover:text-black transition-colors">
                    Shop 94, Al An Noor Street, <br /> Ruwi, Muscat, Sultanate
                    of Oman
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <IconPhone className="h-5 w-5 text-black/50 shrink-0" />
                  <span className="text-black/50 group-hover:text-black transition-colors">
                    +968-2478-3443
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <IconBrandWhatsapp className="h-5 w-5 text-black/50 shrink-0" />
                  <span className="text-black/50 group-hover:text-black transition-colors">
                    +968-9225-2685
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <IconMail className="h-5 w-5 text-black/50 shrink-0" />
                  <span className="text-black/50 group-hover:text-black transition-colors font-medium">
                    customerservice@talentz.net
                  </span>
                </div>
              </div>
            </div>

            {/* Showroom Hours */}
            <div>
              <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.3em] text-black/50">
                Showroom Hours
              </h4>
              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <IconClock className="h-5 w-5 text-black/50 shrink-0 mt-0.5" />
                  <div className="text-black/50 space-y-1">
                    <p className="text-black font-medium">
                      Saturday to Thursday
                    </p>
                    <p>9 am to 1 pm</p>
                    <p>4 pm to 8 pm</p>
                  </div>
                </div>
                <div className="pt-2">
                  <span className="inline-block px-4 py-2 rounded-full border border-black/10 bg-black/3 text-xs text-black/40 font-medium italic">
                    Closed on Fridays
                  </span>
                </div>
              </div>
            </div>

            {/* Experience Detail */}
            <div>
              <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.3em] text-black/40">
                Excellence
              </h4>
              <p className="text-black/50 text-xs mb-8 leading-relaxed">
                Serving the creative community of Oman for over two decades with
                authentic gear and expert technical support.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-px bg-black/10 grow" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black text-black/15">
                    EST 2002
                  </span>
                  <div className="h-px bg-black/10 grow" />
                </div>
              </div>
            </div>
          </div>

          {/* Links Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-10 border-y border-black/5 mb-12">
            <div>
              <h4 className="font-bold mb-8 uppercase text-[10px] tracking-[0.2em] text-black border-l-2 border-black/20 pl-4">
                Product Category
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 text-[13px] text-black/40">
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
                    className="hover:text-black transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-8 uppercase text-[10px] tracking-[0.2em] text-black border-l-2 border-black/20 pl-4">
                Quick Links
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-[13px] text-black/40">
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-black/30">
            <p>© 2025 Talentz Enterprises L.L.C. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span>Muscat</span>
                <div className="h-1 w-1 bg-black/15 rounded-full" />
                <span>Oman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
