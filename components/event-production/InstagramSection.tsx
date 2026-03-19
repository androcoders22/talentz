"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const instagramPostImages = [
  "/new/6L8A0127.jpg",
  "/new/6L8A2595.jpg",
  "/new/6L8A2615.jpg",
  "/new/6L8A3952.jpg",
  "/new/6L8A4309.jpg",
  "/new/6L8A4423.jpg",
  "/new/6L8A9208.jpg",
  "/new/6L8A9379.jpg",
  "/new/6L8A9483.jpg",
  "/new/DAS_0439.jpg",
  "/new/DSC00782.jpg",
  "/new/DSC01552.jpg",
  "/new/DSC02598.jpg",
  "/new/DSC04010.jpg",
  "/new/DSC04045.jpg",
  "/new/DSC05565.jpg",
  "/new/DSC06641.jpg",
  "/new/DSC07075.jpg",
  "/new/DSC07093.jpg",
  "/new/DSC07951.jpg",
  "/new/RED_5641.jpg",
  "/new/TALENTZ-03.jpg",
  "/new/TALENTZOCEC-005.jpg",
  "/new/TALENTZOCEC-040.jpg",
];

const instagramPosts = instagramPostImages.map((src, index) => ({
  src,
  alt: `Talentz Instagram post ${index + 1}`,
}));

const instagramCardCount = instagramPosts.length + 1;

export function InstagramSection() {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1280) setItemsPerPage(5);
      else if (window.innerWidth >= 1024) setItemsPerPage(4);
      else if (window.innerWidth >= 768) setItemsPerPage(3);
      else if (window.innerWidth >= 640) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalCardsCount = instagramCardCount;
  const totalPages = Math.ceil(totalCardsCount / itemsPerPage);

  const handleInstagramPrev = useCallback(() => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  }, [totalPages]);

  const handleInstagramNext = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  }, [totalPages]);

  const rawStartIndex = currentPage * itemsPerPage;
  const startIndex =
    currentPage === totalPages - 1 && totalCardsCount > itemsPerPage
      ? totalCardsCount - itemsPerPage
      : rawStartIndex;

  const progressPercent =
    (startIndex / (totalCardsCount - itemsPerPage || 1)) * 100;

  const instagramProgressStart = startIndex + 1;
  const instagramProgressEnd = Math.min(
    totalCardsCount,
    startIndex + itemsPerPage,
  );
  const instagramProgressWidth = (itemsPerPage / totalCardsCount) * 100;

  const instagramProgressLabel = `${String(instagramProgressStart).padStart(
    2,
    "0",
  )}-${String(instagramProgressEnd).padStart(2, "0")} / ${String(
    totalCardsCount,
  ).padStart(2, "0")}`;

  return (
    <section
      id="social"
      className="py-12 md:py-16 bg-black border-t border-white/5 relative z-10 w-full overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Social Feed"
          title="Instagram Posts"
          description="Fresh production highlights, stage builds, and event snapshots from the Talentz feed."
          action={
            <Link
              href="https://www.instagram.com/talentzeventsproduction/"
              target="_blank"
              className="group flex items-center gap-3 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[linear-gradient(145deg,#833ab4_0%,#c13584_35%,#fd1d1d_68%,#fcb045_100%)] text-white transition-transform duration-300 group-hover:scale-110">
                <IconBrandInstagram className="h-5 w-5" />
              </div>
              <span>@talentzeventsproduction</span>
            </Link>
          }
        />

        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
            >
              {[...instagramPosts, { isFollowCard: true }]
                .slice(startIndex, startIndex + itemsPerPage)
                .map((item, idx) => {
                  if ("isFollowCard" in item) {
                    return (
                      <Link
                        key="follow-card"
                        href="https://www.instagram.com/talentzeventsproduction/"
                        target="_blank"
                        className="group block h-full"
                      >
                        <article className="relative flex aspect-4/5 flex-col justify-between overflow-hidden rounded-sm bg-[linear-gradient(145deg,#833ab4_0%,#c13584_35%,#fd1d1d_68%,#fcb045_100%)] p-6 shadow-xl md:p-7">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.18),transparent_40%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-sm bg-white/15 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                            <IconBrandInstagram className="h-8 w-8 text-white" />
                          </div>
                          <div className="relative z-10 space-y-3">
                            <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/70">
                              Instagram
                            </p>
                            <div>
                              <h4 className="text-3xl font-semibold tracking-tight text-white">
                                Follow Us
                              </h4>
                              <p className="mt-2 text-sm text-white/80">
                                @talentzeventsproduction
                              </p>
                            </div>
                          </div>
                        </article>
                      </Link>
                    );
                  }
                  return (
                    <Link
                      key={(item as any).src}
                      href="https://www.instagram.com/talentzeventsproduction/"
                      target="_blank"
                      className="group block h-full"
                    >
                      <article className="relative aspect-4/5 overflow-hidden rounded-sm bg-zinc-900 shadow-xl">
                        <Image
                          src={(item as any).src}
                          alt={(item as any).alt}
                          width={400}
                          height={500}
                          quality={75}
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />
                      </article>
                    </Link>
                  );
                })}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-30 mt-8 flex items-center justify-between gap-6 px-1">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleInstagramPrev}
              className="flex h-11 w-11 items-center justify-center rounded-sm bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="Previous Instagram post"
            >
              <IconChevronLeft className="h-5 w-5" stroke={1.5} />
            </button>
            <button
              type="button"
              onClick={handleInstagramNext}
              className="flex h-11 w-11 items-center justify-center rounded-sm bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="Next Instagram post"
            >
              <IconChevronRight className="h-5 w-5" stroke={1.5} />
            </button>
          </div>

          <div className="ml-auto flex w-32 flex-col items-end gap-2 md:w-40">
            <div className="text-[11px] font-medium tracking-[0.2em] text-white/45 tabular-nums">
              {instagramProgressLabel}
            </div>
            <div className="relative h-1.5 w-full overflow-hidden rounded-sm bg-white/10">
              <div
                className="absolute top-0 h-full rounded-sm bg-white transition-[left,width] duration-300 ease-out"
                style={{
                  left: `${Math.min(100 - instagramProgressWidth, progressPercent)}%`,
                  width: `${instagramProgressWidth}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
