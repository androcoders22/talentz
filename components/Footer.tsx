import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1c23] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-bold mb-6 block">
              Meher
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm">
              We provide the best quality eco-friendly products for our
              customers to live a better and healthier life.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <IconBrandFacebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <IconBrandInstagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <IconBrandTwitter className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest">
              Customer Service
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  My Orders
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Returns & Refund
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest">
              Products
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Shoes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Jewelry
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest">
              Company Info
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Main Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Refer and Earn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:row justify-between items-center gap-6 text-xs text-gray-500">
          <p>© 2024 Meher. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Security
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span>English</span>
            <div className="w-4 h-3 bg-red-600 rounded-sm" />
          </div>
        </div>
      </div>
    </footer>
  );
}
