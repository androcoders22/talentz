"use client";

import Link from "next/link";
import { IconBrandWhatsapp, IconMail } from "@tabler/icons-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-sm shadow-[0_8px_32px_rgba(0,0,0,0.4)] pointer-events-auto transition-all duration-300 hover:bg-zinc-900 hover:border-white/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/96892252685"
        target="_blank"
        className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-sm bg-transparent hover:bg-[#25D366]/10 transition-colors duration-300"
        title="WhatsApp Us"
      >
        <IconBrandWhatsapp
          className="w-6 h-6 md:w-7 md:h-7 text-[#25D366] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300"
          stroke={1.5}
        />
      </Link>

      {/* Divider */}
      <div className="w-px h-6 bg-white/10 mx-1"></div>

      {/* Contact Us Floating Button */}
      <Link
        href="#contact-us"
        className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-sm bg-transparent hover:bg-white transition-colors duration-300"
        title="Contact Us"
      >
        <IconMail
          className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black group-hover:scale-110 transition-all duration-300"
          stroke={1.5}
        />
      </Link>
    </div>
  );
}
