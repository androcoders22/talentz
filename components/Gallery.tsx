"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
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

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  // x is not directly used as a MotionValue for drag, but springX drives the activeIndex
  const springX = useSpring(activeIndex, { stiffness: 300, damping: 30 });

  // Update spring target when activeIndex changes or on snap
  useEffect(() => {
    springX.set(activeIndex);
  }, [activeIndex, springX]);

  const total = projects.length;
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const offset = isMobile ? 220 : 450;

  const handleNext = () => setActiveIndex((p) => (p + 1) % total);
  const handlePrev = () => setActiveIndex((p) => (p - 1 + total) % total);

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="rounded-[2rem] relative">
        <div className="pt-12 md:pt-16 pb-8 relative z-10 px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-black">
            Our Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg mb-4">
            Explore the breadth of what we do — from world-class audio to global
            distribution.
          </p>
        </div>

        <div className="relative h-[450px] md:h-[550px] w-full flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 lg:left-8 z-50 p-3 rounded-full bg-black/5 hover:bg-black/10 transition-all text-black"
            aria-label="Previous project"
          >
            <IconChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 lg:right-8 z-50 p-3 rounded-full bg-black/5 hover:bg-black/10 transition-all text-black"
            aria-label="Next project"
          >
            <IconChevronRight size={24} />
          </button>

          {/* Carousel Drag Surface */}
          <motion.div
            className="relative w-full h-full flex items-center justify-center touch-none cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDrag={(_, info) => {
              const dragOffset = info.offset.x / offset;
              springX.set(activeIndex - dragOffset);
            }}
            onDragEnd={(_, info) => {
              const dragDistance = info.offset.x;
              const threshold = 50;
              if (dragDistance < -threshold) {
                handleNext();
              } else if (dragDistance > threshold) {
                handlePrev();
              } else {
                springX.set(activeIndex);
              }
            }}
          >
            {projects.map((project, index) => {
              const cardProgress = useTransform(springX, (val: number) => {
                let diff = index - val;
                while (diff > total / 2) diff -= total;
                while (diff < -total / 2) diff += total;
                return diff;
              });

              const cardX = useTransform(
                cardProgress,
                (p: number) => p * offset,
              );
              const scale = useTransform(
                cardProgress,
                [-1, 0, 1],
                [
                  isMobile ? 0.75 : 0.85,
                  isMobile ? 1.05 : 1.15,
                  isMobile ? 0.75 : 0.85,
                ],
              );
              const opacity = useTransform(
                cardProgress,
                [-1.5, -1, 0, 1, 1.5],
                [0, 0.4, 1, 0.4, 0],
              );
              const zIndex = useTransform(
                cardProgress,
                [-1, 0, 1],
                [10, 50, 10],
              );
              const blurValue = useTransform(
                cardProgress,
                [-1, 0, 1],
                [4, 0, 4],
              );

              return (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2 rounded-xl overflow-hidden"
                  style={{
                    x: cardX,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale,
                    zIndex,
                    opacity,
                    filter: useTransform(
                      blurValue,
                      (v: number) => `blur(${v}px)`,
                    ),
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="pointer-events-none sm:pointer-events-auto">
                    <TiltedCard
                      imageSrc={project.src}
                      altText={project.title}
                      captionText={project.title}
                      containerHeight={
                        isMobile ? "min(320px, 45vw)" : "min(400px, 60vw)"
                      }
                      containerWidth={
                        isMobile ? "min(320px, 80vw)" : "min(750px, 70vw)"
                      }
                      imageHeight={
                        isMobile ? "min(320px, 45vw)" : "min(400px, 60vw)"
                      }
                      imageWidth={
                        isMobile ? "min(320px, 80vw)" : "min(750px, 70vw)"
                      }
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
            })}
          </motion.div>

          {/* Swipe Hint */}
          <div className="absolute bottom-6 left-0 w-full text-center md:hidden pointer-events-none">
            <p className="text-gray-400 text-xs animate-pulse">
              Swipe to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
