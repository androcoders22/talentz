"use client";

import {
  IconBrandYoutube,
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-10">
            {/* Brand and Description */}
            <div className="space-y-8">
              <Link href="/" className="inline-block">
                <img
                  src="/logo-old.png"
                  alt="Talentz"
                  className="h-16 w-auto object-contain object-left"
                />
              </Link>
              <p className="text-black/50 text-sm leading-relaxed max-w-sm">
                Oman&apos;s leading provider for Event Productions, Musical
                Instruments, and Professional Light &amp; Sound solutions since
                2002.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://www.youtube.com/@talentzeventsproduction"
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-all group"
                >
                  <IconBrandYoutube className="h-5 w-5 text-black/40 group-hover:text-black" />
                </Link>
                <Link
                  href="https://www.instagram.com/talentzeventsproduction/"
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-all group"
                >
                  <IconBrandInstagram className="h-5 w-5 text-black/40 group-hover:text-black" />
                </Link>
              </div>
            </div>

            {/* Our Locations */}
            <div>
              <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.3em] text-black/40">
                Our Locations
              </h4>
              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4 group">
                  <IconMapPin className="h-5 w-5 text-black/50 shrink-0 mt-0.5" />
                  <Link
                    href="https://www.google.com/maps/place/Talentz+Enterprises+LLC+%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%87%D8%A8+%D9%84%D9%84%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9+-+%D8%A8%D9%8A%D8%B9%E2%80%AD/@23.5990009,58.5372331,1057m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3e91f9ce8eae6501:0xd260c3cd08ccced1!8m2!3d23.598996!4d58.539808!16s%2Fg%2F1v44nx41?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="text-black/50 leading-relaxed group-hover:text-black hover:underline transition-colors"
                  >
                    <span className="text-black/70 font-medium">
                      Music Store
                    </span>
                    <br />
                    Shop 94, Al An Noor Street, <br /> Ruwi, Muscat, Sultanate
                    of Oman
                  </Link>
                </div>
                <div className="flex items-start gap-4 group">
                  <IconMapPin className="h-5 w-5 text-black/50 shrink-0 mt-0.5" />
                  <Link
                    href="https://www.google.com/maps/place/Talentz+Wadi+Kabir+Warehouse/@23.572361,58.5790389,471m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3e91f7007ce2aadf:0x7918b01ebd38f9da!2sTalentz+Wadi+Kabir+Warehouse!8m2!3d23.5731323!4d58.580665!16s%2Fg%2F11xt70b31n!3m5!1s0x3e91f7007ce2aadf:0x7918b01ebd38f9da!8m2!3d23.5731323!4d58.580665!16s%2Fg%2F11xt70b31n!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="text-black/50 leading-relaxed group-hover:text-black hover:underline transition-colors"
                  >
                    <span className="text-black/70 font-medium">
                      AV Rental Office
                    </span>
                    <br />
                    Wadi Kabir, Muscat, Oman
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.3em] text-black/40">
                Contact
              </h4>
              <div className="space-y-6 text-sm">
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
