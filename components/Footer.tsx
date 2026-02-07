import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-3xl font-bold mb-6 block text-primary font-serif"
            >
              Talentz
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm">
              Oman's leading provider for Event Productions, Musical
              Instruments, and Professional Light & Sound solutions since 2002.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-gray-400 hover:text-white"
              >
                <IconBrandFacebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-gray-400 hover:text-white"
              >
                <IconBrandInstagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-gray-400 hover:text-white"
              >
                <IconBrandTwitter className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-8 text-gray-400 text-sm">
              <p>+968 2478 3443</p>
              <p>customerservice@talentz.net</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-primary">
              Shop Categories
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  href="/shop"
                  className="hover:text-primary transition-colors"
                >
                  Guitars & Bass
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-primary transition-colors"
                >
                  Keyboards & Pianos
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-primary transition-colors"
                >
                  Studio & Recording
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-primary transition-colors"
                >
                  Drums & Percussion
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-primary transition-colors"
                >
                  Microphones & Audio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-primary">
              Services
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Event Production
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Music Institute
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Service & Repairs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Pro AV Installs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Marquees & Tents
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-primary">
              Information
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:row justify-between items-center gap-6 text-xs text-gray-500">
          <p>© 2025 Talentz Enterprises L.L.C. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              User Agreement
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span>Oman</span>
            <div className="flex items-center gap-2">
              <span>English</span>
              <div className="w-4 h-3 bg-red-600 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
