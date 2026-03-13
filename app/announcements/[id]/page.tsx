import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  IconChevronLeft,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMapPin,
  IconPhone,
  IconBrandWhatsapp,
  IconMail,
  IconClock,
  IconBrandFacebook,
  IconBrandYoutube,
} from "@tabler/icons-react";
import ClientScrollSpy from "./client-scroll-spy";

import { Footer } from "@/components/Footer";

export default async function AnnouncementPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  return (
    <>
      <main className="bg-transparent min-h-screen text-neutral-50 font-(--font-century-gothic) pb-24 relative">
        {/* Background Image Wrapper - Fixed behind page to prevent white bar and add hero image */}
        <div className="fixed top-0 left-0 w-full h-dvh z-[-1] pointer-events-none overflow-hidden bg-[#0a0a0a]">
          <div className="absolute top-0 left-0 w-full h-[60vh] md:h-[70vh]">
            <Image
              src="/new/TALENTZ-03.jpg"
              alt="Announcement Banner"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-black/50 to-black/10" />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 pt-8 md:pt-12 lg:pt-16">
          {/* Back Button */}
          <Link href="/event-production#announcements">
            <Button
              variant="ghost"
              className="text-neutral-400 hover:text-white hover:bg-white/10 md:-ml-4 "
            >
              <IconChevronLeft className="mr-1 h-5 w-5" />
              Back
            </Button>
          </Link>

          {/* Header Section */}
          <div className="flex flex-col items-start text-left w-full mb-8 md:mb-12 space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-white ">
              New Updates for Talentz! (ID: {id})
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-400 font-medium mt-2">
              <span>24 October 2023</span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-neutral-600" />
              <span>08:45 AM</span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-neutral-600" />
              <Badge
                variant="secondary"
                className="bg-white/10 text-white hover:bg-white/20 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm rounded-full font-medium mt-1 sm:mt-0"
              >
                Company News
              </Badge>
            </div>

            <div className="w-full relative aspect-[4/3] sm:aspect-video md:aspect-[2.5/1 mt-6 md:mt-8 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/new/TALENTZ-03.jpg"
                alt="Announcement Header"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-8 md:mt-12 lg:mt-20">
            <ClientScrollSpy />

            {/* Left Sidebar (Sticky) */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="sticky top-24 lg:top-32 space-y-8 lg:space-y-12">
                {/* Table of Contents */}
                <div className="hidden lg:block space-y-4">
                  <div className="text-white font-semibold mb-6 border-l-2 border-purple-500 pl-4">
                    Table of Contents
                  </div>
                  <ul className="space-y-4 text-sm font-medium text-neutral-400 pl-4 border-l-2 border-white/10" id="toc-list">
                    <li className="hover:text-white cursor-pointer transition-colors" data-target="a-new-era">
                      A New Era of Event Production
                    </li>
                    <li className="hover:text-white cursor-pointer transition-colors" data-target="upgraded-inventory">
                      Upgraded Inventory
                    </li>
                    <li className="hover:text-white cursor-pointer transition-colors" data-target="streamlined-processes">
                      Streamlined Processes
                    </li>
                    <li className="hover:text-white cursor-pointer transition-colors" data-target="looking-ahead">
                      Looking Ahead
                    </li>
                    <li className="hover:text-white cursor-pointer transition-colors" data-target="our-commitment">
                      Our Commitment
                    </li>
                  </ul>
                </div>

                {/* Share Article */}
                <div>
                  <h3 className="text-sm font-semibold text-white mb-4">
                    Share Article
                  </h3>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                      <IconBrandInstagram className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                      <IconBrandLinkedin className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                      <IconBrandTwitter className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 order-1 lg:order-2 w-full">
              <div className="prose md:prose-lg prose-invert max-w-none text-neutral-300 leading-relaxed space-y-6 md:space-y-8">
                <h2 id="a-new-era" className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6 scroll-m-24">
                  A New Era of Event Production
                </h2>
                <p>
                  Welcome to the latest update from Talentz. Over the past few
                  months, our team has been working tirelessly to bring you a
                  suite of new tools and enhancements designed to elevate your
                  experience. Whether you are an event producer, institute
                  partner, or looking for our specialized services, these updates
                  are tailored to meet your evolving needs.
                </p>

                <h2 id="upgraded-inventory" className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mt-8 md:mt-12 mb-4 md:mb-6 scroll-m-24">
                  Upgraded Inventory
                </h2>
                <p>
                  One of our biggest areas of focus has been our Event Production
                  capabilities. We have upgraded our inventory with
                  state-of-the-art equipment, including the latest mixing consoles
                  and lighting arrays. Our goal is to ensure that every event we
                  touch is nothing short of spectacular.
                </p>

                <h2 id="streamlined-processes" className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mt-8 md:mt-12 mb-4 md:mb-6 scroll-m-24">
                  Streamlined Processes
                </h2>
                <p>
                  Beyond the hardware, we're also introducing new streamlined
                  processes for project management. From initial consultation to
                  post-event breakdown, our new systems ensure clearer
                  communication and flawless execution.
                </p>

                <ul className="list-disc pl-6 space-y-2 mt-4 text-neutral-300">
                  <li>State-of-the-art sound mixing consoles</li>
                  <li>Advanced lighting arrays for all venues</li>
                  <li>Streamlined project management workflows</li>
                </ul>

                <h2 id="looking-ahead" className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mt-8 md:mt-12 mb-4 md:mb-6 scroll-m-24">
                  Looking Ahead
                </h2>
                <p>
                  This is just the beginning. We have a robust roadmap for the
                  upcoming year, packed with innovative solutions that will
                  continue to empower our clients. We invite you to explore the
                  new features and share your feedback with us. Your insights are
                  invaluable as we continue to grow and improve.
                </p>

                <h2 id="our-commitment" className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mt-8 md:mt-12 mb-4 md:mb-6 scroll-m-24">
                  Our Commitment
                </h2>
                <p>
                  At Talentz, our core philosophy revolves around exceeding
                  expectations. With these new updates, we are taking a
                  significant leap forward in how we deliver value to our partners
                  and clients. From the smallest intimate gatherings to massive
                  arena-scale productions, our commitment remains unchanged:
                  flawless execution, unparalleled creativity, and a seamless
                  experience from start to finish.
                </p>

                <blockquote className="border-l-4 border-blue-500 pl-4 sm:pl-6 py-3 sm:py-4 my-6 sm:my-8 italic text-lg sm:text-xl text-neutral-400 bg-white/5 rounded-r-lg">
                  "The evolution of Talentz is driven by our passion for creating
                  unforgettable moments. These updates are a testament to our
                  ongoing dedication to the art of event production."
                </blockquote>

                <p>
                  We have also expanded our team with industry-leading experts in
                  sound engineering, lighting design, and stage management. Their
                  combined experience brings a new dimension to our capabilities,
                  allowing us to tackle even more complex and ambitious projects.
                </p>

                <p>
                  Thank you for being a part of the Talentz journey. Stay tuned
                  for more updates, and as always, feel free to reach out to our
                  support team if you have any questions or need assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <section className="bg-black text-white pt-16 pb-12 mt-16 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-6">
            {/* Top Part: Logo and Description */}
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
                Instruments, and Professional Light & Sound solutions since
                2002.
              </p>
            </div>

            {/* Additional Info */}
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

            {/* Existing Footer Links */}
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

            {/* Divider */}
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
    </>
  );
}

