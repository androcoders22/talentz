"use client";

import { useRef, useState, useEffect, memo, useCallback } from "react";
import Image from "next/image";
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface BentoItem {
  id: number | string;
  src: string;
  span: number;
}

interface BentoColumn {
  width: string;
  items: BentoItem[];
}

const DEFAULT_COLUMNS: BentoColumn[] = [
  {
    width: "w-[220px] md:w-[250px]",
    items: [
      { id: 1, src: "/new/6L8A0127.jpg", span: 1 },
      { id: 2, src: "/new/6L8A4309.jpg", span: 2 },
    ],
  },
  {
    width: "w-[240px] md:w-[300px]",
    items: [
      { id: 3, src: "/new/TALENTZOCEC-005.jpg", span: 2 },
      { id: 4, src: "/new/TALENTZOCEC-010.jpg", span: 1 },
    ],
  },
  {
    width: "w-[200px] md:w-[240px]",
    items: [{ id: 5, src: "/new/6L8A4415.jpg", span: 3 }],
  },
  {
    width: "w-[220px] md:w-[280px]",
    items: [
      { id: 6, src: "/new/6L8A2615.jpg", span: 1 },
      { id: 7, src: "/new/RED_5641.jpg", span: 1 },
      { id: 8, src: "/new/DSC01552.jpg", span: 1 },
    ],
  },
  {
    width: "w-[240px] md:w-[340px]",
    items: [
      { id: 9, src: "/new/TALENTZOCEC-040.jpg", span: 1 },
      { id: 10, src: "/new/DAS_0439.jpg", span: 2 },
    ],
  },
  {
    width: "w-[200px] md:w-[250px]",
    items: [
      { id: 11, src: "/new/6L8A3952.jpg", span: 2 },
      { id: 12, src: "/new/6L8A9208.jpg", span: 1 },
    ],
  },
  {
    width: "w-[220px] md:w-[280px]",
    items: [
      { id: 13, src: "/new/6L8A0127.jpg", span: 1 },
      { id: 14, src: "/new/TALENTZOCEC-005.jpg", span: 1 },
      { id: 15, src: "/new/6L8A4309.jpg", span: 1 },
    ],
  },
  {
    width: "w-[240px] md:w-[250px]",
    items: [
      { id: 16, src: "/new/6L8A4415.jpg", span: 1 },
      { id: 17, src: "/new/RED_5641.jpg", span: 2 },
    ],
  },
];

const VirtualizedColumn = memo(
  ({
    col,
    suffix,
    onImageClick,
  }: {
    col: BentoColumn;
    suffix: string;
    onImageClick: (src: string) => void;
  }) => {
    const [isInView, setIsInView] = useState(false);
    const colRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        {
          rootMargin: "600px", // Pre-render before coming into view
          threshold: 0,
        },
      );

      if (colRef.current) {
        observer.observe(colRef.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={colRef}
        className={`flex flex-col gap-3 md:gap-4 shrink-0 ${col.width}`}
      >
        {col.items.map((item) => (
          <div
            key={`${item.id}-${suffix}`}
            onClick={() => onImageClick(item.src)}
            className="relative overflow-hidden bg-zinc-900 border border-white/10 group/item shrink-0 cursor-pointer transform-gpu"
            style={{ flex: item.span }}
          >
            {isInView && (
              <>
                <div className="absolute inset-0 bg-neutral-900/10 group-hover/item:bg-black/20 transition-colors duration-500 z-10" />
                <Image
                  src={item.src}
                  alt="Gallery"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover scale-[1.02] group-hover/item:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
              </>
            )}
          </div>
        ))}
      </div>
    );
  },
);

VirtualizedColumn.displayName = "VirtualizedColumn";

export default function ScrollingBento({ speed = 1.0 }: { speed?: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstHalfRef = useRef<HTMLDivElement>(null);
  const currentSpeedRef = useRef(speed);
  const manualOffsetRef = useRef(0);

  const [isHovering, setIsHovering] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Monitor visibility of the entire component
  useEffect(() => {
    if (!scrollRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(scrollRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-scroll loop
  useEffect(() => {
    if (!isInView) return;

    let animationFrameId: number;

    const scroll = () => {
      const targetSpeed = isHovering || isDialogOpen ? 0 : speed;
      const diff = targetSpeed - currentSpeedRef.current;

      if (Math.abs(diff) < 0.01) {
        currentSpeedRef.current = targetSpeed;
      } else {
        currentSpeedRef.current += diff * 0.05;
      }

      if (scrollRef.current && firstHalfRef.current) {
        let totalScrollThisFrame = currentSpeedRef.current;

        if (Math.abs(manualOffsetRef.current) > 0.5) {
          const step = manualOffsetRef.current * 0.1;
          totalScrollThisFrame += step;
          manualOffsetRef.current -= step;
        } else {
          manualOffsetRef.current = 0;
        }

        if (totalScrollThisFrame !== 0) {
          scrollRef.current.scrollLeft += totalScrollThisFrame;
        }

        const halfWidth = firstHalfRef.current.offsetWidth;
        if (scrollRef.current.scrollLeft >= halfWidth) {
          scrollRef.current.scrollLeft -= halfWidth;
        } else if (scrollRef.current.scrollLeft <= 0) {
          scrollRef.current.scrollLeft += halfWidth;
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovering, isDialogOpen, speed, isInView]);

  // Handle manual scroll with mouse wheel
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      manualOffsetRef.current += e.deltaY + e.deltaX;
    };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
    return () => scrollContainer.removeEventListener("wheel", handleWheel);
  }, []);

  const handleScroll = useCallback((dir: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.6;
      manualOffsetRef.current += dir === "left" ? -scrollAmount : scrollAmount;
    }
  }, []);

  const openImage = useCallback((src: string) => {
    setSelectedImage(src);
    setIsDialogOpen(true);
  }, []);

  return (
    <>
      <div
        className="relative w-full overflow-hidden group py-6 md:py-10 transform-gpu"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-linear-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-linear-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

        <div className="absolute inset-y-0 left-2 md:left-6 flex items-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => handleScroll("left")}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-105 transition-all shadow-xl"
          >
            <IconChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-2 md:right-6 flex items-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => handleScroll("right")}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-105 transition-all shadow-xl"
          >
            <IconChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-3 md:gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-stretch h-[350px] md:h-[500px]"
        >
          <div
            ref={firstHalfRef}
            className="flex gap-3 md:gap-4 shrink-0 pr-3 md:pr-4"
          >
            {DEFAULT_COLUMNS.map((col, idx) => (
              <VirtualizedColumn
                key={`orig-${idx}`}
                col={col}
                suffix="orig"
                onImageClick={openImage}
              />
            ))}
          </div>
          <div className="flex gap-3 md:gap-4 shrink-0">
            {DEFAULT_COLUMNS.map((col, idx) => (
              <VirtualizedColumn
                key={`dup-${idx}`}
                col={col}
                suffix="dup"
                onImageClick={openImage}
              />
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className="max-w-[95vw] w-full sm:max-w-5xl h-[85vh] p-0 bg-transparent border-0 shadow-none outline-none"
          showCloseButton={false}
        >
          {selectedImage && (
            <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden outline-none">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-all border border-white/20"
                aria-label="Close"
              >
                <IconX className="w-6 h-6" />
              </button>
              <Image
                src={selectedImage}
                alt="Gallery Enlarged view"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
