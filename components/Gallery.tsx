"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, useSpring, useTransform, MotionValue } from "motion/react";
import TiltedCard from "./TiltedCard";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const projects = [
  {
    title: "Audio Engineering",
    src: "/gallery-1.jpg",
  },
  {
    title: "Studio Services",
    src: "/gallery-3.jpg",
  },
  {
    title: "Curated Gear",
    src: "/gallery-5.jpg",
  },
  {
    title: "Talent Management",
    src: "/gallery-4.jpg",
  },
  {
    title: "Global Distribution",
    src: "/gallery-6.jpg",
  },
];

interface GalleryItemProps {
  project: (typeof projects)[0];
  index: number;
  springX: MotionValue<number>;
  total: number;
  isMobile: boolean;
  offset: number;
}

const GalleryItem = ({
  project,
  index,
  springX,
  total,
  isMobile,
  offset,
}: GalleryItemProps) => {
  const cardProgress = useTransform(springX, (val: number) => {
    const normalizedVal = ((val % total) + total) % total;
    let diff = index - normalizedVal;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;
    return diff;
  });

  const cardX = useTransform(cardProgress, (p: number) => p * offset);
  const scale = useTransform(
    cardProgress,
    [-1, 0, 1],
    [
      isMobile ? 0.72 : 0.8,
      isMobile ? 0.98 : 1.04,
      isMobile ? 0.72 : 0.8,
    ],
  );
  const opacity = useTransform(cardProgress, (p: number) => {
    if (isMobile) {
      return Math.abs(p) < 0.55 ? 1 : 0;
    }
    const abs = Math.abs(p);
    if (abs >= 1.5) return 0;
    if (abs >= 1) return 0.85;
    return 1 - abs * 0.15;
  });
  const zIndex = useTransform(cardProgress, [-1, 0, 1], [10, 50, 10]);
  const blurValue = useTransform(cardProgress, (p: number) => {
    if (isMobile) return 0;
    return Math.min(4, Math.abs(p) * 4);
  });
  const blurFilter = useTransform(blurValue, (v: number) => `blur(${v}px)`);

  return (
    <motion.div
      className="absolute top-[44%] left-1/2 rounded-xl overflow-hidden"
      style={{
        x: cardX,
        translateX: "-50%",
        translateY: "-50%",
        scale,
        zIndex,
        opacity,
        filter: blurFilter,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="pointer-events-none sm:pointer-events-auto">
        <TiltedCard
          imageSrc={project.src}
          altText={project.title}
          captionText={project.title}
          containerHeight={isMobile ? "245px" : "min(400px, 54vw)"}
          containerWidth={isMobile ? "90vw" : "min(820px, 72vw)"}
          imageHeight={isMobile ? "245px" : "min(400px, 54vw)"}
          imageWidth={isMobile ? "90vw" : "min(820px, 72vw)"}
          imageObjectFit="cover"
          rotateAmplitude={5}
          scaleOnHover={1.02}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <div className="w-full h-full bg-linear-to-t from-black/40 via-transparent to-transparent" />
          }
        />
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  const [position, setPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const springX = useSpring(position, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    springX.set(position);
  }, [position, springX]);

  const total = projects.length;
  const offset = isMobile ? 155 : 395;
  const normalizedPosition = ((position % total) + total) % total;

  const handleNext = () => setPosition((p) => p + 1);
  const handlePrev = () => setPosition((p) => p - 1);
  const handleGoTo = (targetIndex: number) => {
    const forwardDistance = (targetIndex - normalizedPosition + total) % total;
    const backwardDistance = (normalizedPosition - targetIndex + total) % total;

    if (forwardDistance <= backwardDistance) {
      setPosition((p) => p + forwardDistance);
    } else {
      setPosition((p) => p - backwardDistance);
    }
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPosition((prev) => prev + 1);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [total]);

  return (
    <section className="container mx-auto px-4">
      <div className="rounded-[2rem] relative">
        <div className="pt-12 md:pt-16 pb-0 md:pb-8 relative z-10 px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight text-black">
            Our Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg mb-0 md:mb-4">
            Explore the breadth of what we do — from world-class audio to global
            distribution.
          </p>
        </div>

        <div className="relative h-95 md:h-125 w-full flex items-center justify-center">

          {/* Carousel Drag Surface */}
          <motion.div
            className="relative w-full h-full flex items-center justify-center touch-none cursor-grab active:cursor-grabbing overflow-hidden"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDrag={(_, info) => {
              const dragOffset = info.offset.x / offset;
              springX.set(position - dragOffset);
            }}
            onDragEnd={(_, info) => {
              const dragDistance = info.offset.x;
              const threshold = 50;
              if (dragDistance < -threshold) {
                handleNext();
              } else if (dragDistance > threshold) {
                handlePrev();
              } else {
                springX.set(position);
              }
            }}
          >
            {projects.map((project, index) => (
              <GalleryItem
                key={index}
                project={project}
                index={index}
                springX={springX}
                total={total}
                isMobile={isMobile}
                offset={offset}
              />
            ))}
          </motion.div>

          {/* Swipe Hint */}
          <div className="absolute bottom-12 left-0 w-full text-center md:hidden pointer-events-none">
            <p className="text-gray-400 text-sm animate-pulse">
              Swipe to explore
            </p>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="h-8 w-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-all text-black"
              aria-label="Previous project"
            >
              <IconChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {projects.map((project, index) => {
                const isActive = index === normalizedPosition;
                return (
                  <button
                    key={project.title}
                    onClick={() => handleGoTo(index)}
                    aria-label={`Go to ${project.title}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`h-2.5 rounded-full transition-all ${isActive ? "w-6 bg-black" : "w-2.5 bg-black/30 hover:bg-black/50"
                      }`}
                  />
                );
              })}
            </div>

            <button
              onClick={handleNext}
              className="h-8 w-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-all text-black"
              aria-label="Next project"
            >
              <IconChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
