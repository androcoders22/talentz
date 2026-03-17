import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  IconChevronLeft,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMapPin,
  IconPhone,
  IconBrandWhatsapp,
  IconMail,
  IconClock,
  IconBrandFacebook,
  IconBrandYoutube,
} from "@tabler/icons-react";
import ClientScrollSpy from "./client-scroll-spy";
import { ShareButton } from "./share-button";
import { DevToArticle } from "@/types/blog";
import { notFound } from "next/navigation";

async function getArticle(id: string): Promise<DevToArticle | null> {
  try {
    const response = await fetch(`https://dev.to/api/articles/${id}`);
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

export default async function AnnouncementPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const article = await getArticle(id);
  console.log(article);

  if (!article) {
    notFound();
  }

  const publishDate = new Date(article.published_at);

  // Normalize tags as the API can be inconsistent (sometimes string, sometimes array)
  const articleTags = Array.isArray(article.tags)
    ? article.tags
    : typeof article.tag_list === "string"
      ? article.tag_list
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : Array.isArray(article.tag_list)
        ? article.tag_list
        : [];

  return (
    <>
      <main className="bg-transparent min-h-screen text-neutral-50 font-(--font-century-gothic) pb-24 relative">
        {/* Background Image Wrapper */}
        <div className="fixed top-0 left-0 w-full h-dvh z-[-1] pointer-events-none overflow-hidden bg-[#0a0a0a]">
          <div className="absolute top-0 left-0 w-full h-[60vh] md:h-[70vh]">
            <Image
              src={article.cover_image || "/new/TALENTZ-03.jpg"}
              alt={article.title}
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-black/50 to-black/10" />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 pt-8 md:pt-12 lg:pt-16">
          {/* Back Button */}
          <Link href="/event-production#blog">
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
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-400 font-medium mt-2">
              <span>
                {publishDate.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-neutral-600" />
              <span>
                {publishDate.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-neutral-600" />
              {articleTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-white/10 text-white hover:bg-white/20 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm rounded-full font-medium mt-1 sm:mt-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="w-full relative aspect-4/3 sm:aspect-video md:aspect-2.5/1 mt-6 md:mt-8 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={article.cover_image || "/new/TALENTZ-03.jpg"}
                alt={article.title}
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
                {/* Share Article */}
                <div>
                  <h3 className="text-sm font-semibold text-white mb-4">
                    Share Article
                  </h3>
                  <ShareButton />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 order-1 lg:order-2 w-full">
              <div className="prose md:prose-lg prose-invert max-w-none text-neutral-300 leading-relaxed devto-content">
                {article.body_html ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: article.body_html }}
                  />
                ) : (
                  <p>{article.description}</p>
                )}

                {/* Author Section */}
                <div className="mt-16 md:mt-20 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 bg-black/40 p-5 sm:p-6 rounded-2xl border border-white/5 not-prose">
                  <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden border border-white/10 sm:mt-1">
                    <Image
                      src={article.user.profile_image}
                      alt={article.user.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-1 w-full text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {article.user.name}
                        </h3>
                        <p className="text-neutral-400 text-sm font-medium">
                          Author @dev.to/{article.user.username}
                        </p>
                      </div>
                      <div className="flex items-center justify-center sm:justify-end gap-2 text-neutral-400">
                        <Link
                          href={`https://dev.to/${article.user.username}`}
                          target="_blank"
                          className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                        >
                          <IconBrandLinkedin className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
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
