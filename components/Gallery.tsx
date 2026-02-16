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
    <section className="relative overflow-hidden bg-white text-black py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight text-black">
          Our Work
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4 mb-10">
          Explore the breadth of what we do — from world-class audio to global
          distribution.
        </p>
      </div>

      <div className="relative h-[450px] md:h-[600px] w-full flex items-center justify-center">
        {/* Navigation Buttons - Hidden on Mobile */}
        <button
          onClick={handlePrev}
          className="absolute left-4 lg:left-20 z-50 p-4 rounded-full bg-black/10 hover:bg-black/30 backdrop-blur-md transition-all text-black hover:text-white"
          aria-label="Previous project"
        >
          <IconChevronLeft size={32} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 lg:right-20 z-50 p-4 rounded-full bg-black/10 hover:bg-black/30 backdrop-blur-md transition-all text-black hover:text-white"
          aria-label="Next project"
        >
          <IconChevronRight size={32} />
        </button>

        {/* Carousel Drag Surface */}
        <motion.div
          className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center touch-none cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDrag={(_, info) => {
            // Real-time feedback by shifting the spring target slightly or setting x
            // For smooth real-time drag, we drive the spring target with the drag progress
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
              // Snap back to current
              springX.set(activeIndex);
            }
          }}
        >
          {projects.map((project, index) => {
            // Using a continuous motion value for properties
            // We calculate distance from active including wrapping
            const cardProgress = useTransform(springX, (val: number) => {
              let diff = index - val;
              // Wrap diff to -total/2 to total/2
              while (diff > total / 2) diff -= total;
              while (diff < -total / 2) diff += total;
              return diff;
            });

            const cardX = useTransform(cardProgress, (p: number) => p * offset);
            const scale = useTransform(
              cardProgress,
              [-1, 0, 1],
              [
                isMobile ? 0.8 : 0.9,
                isMobile ? 1.2 : 1.4,
                isMobile ? 0.8 : 0.9,
              ],
            );
            const opacity = useTransform(
              cardProgress,
              [-1.5, -1, 0, 1, 1.5],
              [0, 0.6, 1, 0.6, 0],
            );
            const zIndex = useTransform(cardProgress, [-1, 0, 1], [10, 50, 10]);
            const blur = useTransform(
              cardProgress,
              [-1, 0, 1],
              ["4px", "0px", "4px"],
            );

            return (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2 rounded-xl overflow-hidden" // Added rounded-xl and overflow-hidden for corner fix
                style={{
                  x: cardX,
                  translateX: "-50%",
                  translateY: "-50%",
                  scale,
                  zIndex,
                  opacity,
                  filter: blur, // Use blur directly as a MotionValue
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="pointer-events-none sm:pointer-events-auto">
                  <TiltedCard
                    imageSrc={project.src}
                    altText={project.title}
                    captionText={project.title}
                    containerHeight={
                      isMobile ? "min(350px, 50vw)" : "min(450px, 70vw)"
                    }
                    containerWidth={
                      isMobile ? "min(350px, 50vw)" : "min(800px, 85vw)"
                    }
                    imageHeight={
                      isMobile ? "min(350px, 50vw)" : "min(450px, 70vw)"
                    }
                    imageWidth={
                      isMobile ? "min(350px, 50vw)" : "min(800px, 85vw)"
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

        {/* Swipe Hint for mobile */}
        <div className="absolute bottom-10 left-0 w-full text-center md:hidden pointer-events-none">
          <p className="text-gray-400 text-sm animate-pulse">
            Swipe to explore
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
