"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getCardStyle = (index: number) => {
    const total = projects.length;
    let dist = (index - activeIndex + total) % total;
    if (dist > total / 2) dist -= total;

    // Responsive offsets - using approximate mobile width detection
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const offset = isMobile ? 220 : 400;
    const centerScale = isMobile ? 1.2 : 1.4;
    const sideScale = isMobile ? 0.8 : 1.0;

    if (dist === 0) {
      return {
        x: 0,
        scale: centerScale,
        zIndex: 50,
        opacity: 1,
        filter: "blur(0px)",
      };
    } else if (dist === 1) {
      return {
        x: offset,
        scale: sideScale,
        zIndex: 30,
        opacity: 0.8,
        filter: "blur(2px)",
      };
    } else if (dist === -1) {
      return {
        x: -offset,
        scale: sideScale,
        zIndex: 30,
        opacity: 0.8,
        filter: "blur(2px)",
      };
    } else {
      return {
        x: dist > 0 ? offset * 1.5 : -offset * 1.5,
        scale: sideScale * 0.8,
        zIndex: 10,
        opacity: 0,
        filter: "blur(4px)",
      };
    }
  };

  return (
    <section className="relative overflow-hidden bg-white text-black">
      <div className="max-w-7xl mx-auto px-4  relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight text-black">
          Our Work
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
          Explore the breadth of what we do — from world-class audio to global
          distribution.
        </p>
      </div>

      <div className="relative h-[500px] md:h-[700px] w-full flex items-center justify-center">
        {/* Navigation Buttons - Hidden on Mobile */}
        <button
          onClick={handlePrev}
          className="absolute left-8 lg:left-64 z-50 p-4 rounded-full bg-black/30 hover:bg-black text-white shadow-xl transition-all hidden md:flex"
          aria-label="Previous project"
        >
          <IconChevronLeft size={32} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-8 lg:right-64 z-50 p-4 rounded-full bg-black/30 hover:bg-black text-white shadow-xl transition-all hidden md:flex"
          aria-label="Next project"
        >
          <IconChevronRight size={32} />
        </button>

        {/* Carousel Items */}
        <div className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center touch-none">
          {projects.map((project, index) => {
            const style = getCardStyle(index);

            return (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2 cursor-grab active:cursor-grabbing"
                initial={false}
                animate={{
                  x: `calc(-50% + ${style.x}px)`,
                  y: "-50%",
                  scale: style.scale,
                  zIndex: style.zIndex,
                  opacity: style.opacity,
                  filter: style.filter,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1],
                  opacity: { duration: 0.3 },
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) handleNext();
                  if (info.offset.x > 50) handlePrev();
                }}
              >
                <div className="pointer-events-none sm:pointer-events-auto">
                  <TiltedCard
                    imageSrc={project.src}
                    altText={project.title}
                    captionText={project.title}
                    containerHeight="min(400px, 60vw)"
                    containerWidth="min(400px, 60vw)"
                    imageHeight="min(400px, 60vw)"
                    imageWidth="min(400px, 60vw)"
                    rotateAmplitude={10}
                    scaleOnHover={1.02}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="w-full h-full relative p-6 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent rounded-[15px]" />
                    }
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

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
