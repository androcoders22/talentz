"use client";

import { useEffect } from "react";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export function ExpertiseSection() {
  // Mobile: activate cards when they scroll to center of screen
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
          } else {
            entry.target.classList.remove("is-active");
          }
        });
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0,
      },
    );

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll(".feature-card");
      cards.forEach((card) => observer.observe(card));
    }, 100);

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.querySelectorAll(".feature-card").forEach((card) => {
          card.classList.remove("is-active");
        });
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="equipment"
      className="py-12 md:py-16 bg-zinc-950 relative overflow-hidden border-y border-white/5 z-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0,transparent_100%)] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          eyebrow="What We Do Best"
          title="Our Expertise"
          description="From cutting-edge technology to full-scale logistics, explore the core capabilities that power every Talentz production."
          className="mb-10"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[280px]">
          {/* Card 1: Event Technology (Tall) */}
          <div className="feature-card col-span-2 md:col-span-1 md:row-span-2 bg-zinc-950 border border-white/10 p-5 md:p-6 flex flex-row md:flex-col justify-start relative group transition-colors duration-500 hover:bg-white [&.is-active]:bg-white text-white hover:text-black [&.is-active]:text-black overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-[65%] bg-linear-to-r from-zinc-950 via-zinc-950/95 to-transparent group-hover:from-white group-[.is-active]:from-white group-hover:via-white/95 group-[.is-active]:via-white/95 transition-colors duration-500 z-1 md:hidden" />
            <div className="space-y-1 md:space-y-3 mb-4 md:mb-6 text-left w-[50%] pr-2 md:pr-0 md:w-full z-10 relative">
              <h3 className="text-xl md:text-2xl font-medium leading-[1.1] transition-colors duration-500 uppercase tracking-wide">
                Event <br /> Technology
              </h3>
              <p className="text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 font-light text-[11px] leading-tight md:text-sm transition-colors duration-500">
                Continuous investment in the largest and most cutting-edge AV
                equipment in Oman.
              </p>
            </div>
            <div className="w-1/2 md:w-full h-[120%] md:h-[55%] absolute right-0 top-1/2 -translate-y-1/2 md:translate-y-0 md:top-auto md:bottom-0 md:left-0 z-0">
              <Image
                src="/new/6L8A2615.jpg"
                alt="Event Technology"
                width={600}
                height={800}
                className="h-full w-full object-cover object-center grayscale group-hover:grayscale-0 group-[.is-active]:grayscale-0 transition-all duration-700 pointer-events-none"
              />
            </div>
          </div>

          {/* Card 2: Professional Audio Systems (Wide) */}
          <div className="feature-card col-span-2 md:col-span-2 md:row-span-1 bg-zinc-950 text-white border border-white/10 p-5 md:p-6 flex flex-col justify-center relative group hover:bg-white [&.is-active]:bg-white hover:text-black [&.is-active]:text-black transition-colors duration-500 overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-[70%] bg-linear-to-r from-zinc-950 via-zinc-950/95 to-transparent group-hover:from-white group-[.is-active]:from-white group-hover:via-white/95 group-[.is-active]:via-white/95 transition-colors duration-500 z-1 md:hidden" />
            <div className="space-y-1 md:space-y-3 w-[55%] md:w-auto md:max-w-xs z-10 relative">
              <h3 className="text-xl md:text-2xl font-medium leading-[1.1] transition-colors duration-500 uppercase tracking-wide">
                Professional <br className="hidden md:block" /> Audio Systems
              </h3>
              <p className="text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 font-light text-xs md:text-sm transition-colors duration-500 hidden md:block">
                World-class sound reinforcement solutions and live audio
                management for crystal clear acoustics.
              </p>
              <p className="text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 font-light text-[11px] md:hidden transition-colors duration-500">
                World-class sound reinforcement solutions.
              </p>
            </div>
            <div className="w-[60%] md:w-1/2 h-full absolute right-[-5%] top-0 z-0 opacity-80 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity">
              <Image
                src="/new/DAS_0439.jpg"
                alt="Professional Audio Systems"
                width={800}
                height={600}
                className="h-full w-full object-cover md:object-contain object-left md:object-right grayscale group-hover:grayscale-0 group-[.is-active]:grayscale-0 transition-all duration-700 md:scale-110 pointer-events-none"
              />
            </div>
          </div>

          {/* Card 3: Kinetic Systems (Small) */}
          <div className="feature-card col-span-1 md:col-span-1 md:row-span-1 bg-zinc-950 text-white border border-white/10 p-4 md:p-6 flex flex-col items-start justify-end relative group hover:bg-white [&.is-active]:bg-white hover:text-black [&.is-active]:text-black transition-colors duration-500 overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-[75%] bg-linear-to-t from-zinc-950 via-zinc-950/90 to-transparent group-hover:from-white group-[.is-active]:from-white group-hover:via-white/90 group-[.is-active]:via-white/90 transition-colors duration-500 z-1 md:hidden" />
            <div className="w-[45%] h-full absolute right-0 top-0 z-0 opacity-80 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity">
              <Image
                src="/new/6L8A3952.jpg"
                alt="Kinetic Systems"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 group-[.is-active]:grayscale-0 transition-all duration-700 pointer-events-none"
              />
            </div>
            <div className="space-y-1 z-10 mt-auto md:mt-0 md:space-y-2 w-full relative">
              <h3 className="text-xl md:text-2xl font-medium leading-[1.1] transition-colors duration-500 uppercase tracking-wide">
                Kinetic <br className="hidden md:block" /> Systems
              </h3>
              <p className="text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 text-[10px] md:text-xs font-light mt-1 transition-colors duration-500 hidden sm:block">
                Automated motion control.
              </p>
            </div>
          </div>

          {/* Card 4: Lighting Systems (Small) */}
          <div className="feature-card col-span-1 md:col-span-1 md:row-span-1 bg-zinc-950 border border-white/10 p-4 md:p-6 flex flex-col justify-start items-end relative group hover:bg-white [&.is-active]:bg-white hover:text-black [&.is-active]:text-black transition-colors duration-500 overflow-hidden text-white">
            <div className="absolute inset-x-0 bottom-0 h-[75%] bg-linear-to-t from-zinc-950 via-zinc-950/90 to-transparent group-hover:from-white group-[.is-active]:from-white group-hover:via-white/90 group-[.is-active]:via-white/90 transition-colors duration-500 z-1 md:hidden" />
            <div className="w-[45%] h-full absolute left-0 top-0 z-0 opacity-80 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity">
              <Image
                src="/new/RED_5641.jpg"
                alt="Lighting Systems"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 group-[.is-active]:grayscale-0 transition-all duration-700 pointer-events-none"
              />
            </div>
            <div className="space-y-1 md:space-y-2 relative z-10 text-right">
              <h3 className="text-xl md:text-2xl font-medium leading-[1.1] transition-colors duration-500 uppercase tracking-wide text-balance">
                Lighting <br /> Systems
              </h3>
              <p className="text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 text-[10px] md:text-xs font-light transition-colors duration-500">
                Atmospheric visual design.
              </p>
            </div>
          </div>

          {/* Card 5: LED Video & Display Systems (Wide) */}
          <div className="feature-card col-span-2 md:col-span-2 md:row-span-1 bg-zinc-950 border border-white/10 p-5 md:p-6 flex flex-col justify-center relative group hover:bg-white [&.is-active]:bg-white hover:text-black [&.is-active]:text-black transition-colors duration-500 overflow-hidden text-white">
            <div className="absolute inset-y-0 left-0 w-[70%] bg-linear-to-r from-zinc-950 via-zinc-950/95 to-transparent group-hover:from-white group-[.is-active]:from-white group-hover:via-white/95 group-[.is-active]:via-white/95 transition-colors duration-500 z-1 md:hidden" />
            <div className="space-y-1 md:space-y-3 w-[55%] md:w-auto md:max-w-xs z-10 relative">
              <h3 className="text-xl md:text-2xl font-medium leading-[1.1] transition-colors duration-500 uppercase tracking-wide">
                LED Video & <br className="hidden md:block" /> Display Systems
              </h3>
              <p className="text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 font-light text-xs md:text-sm transition-colors duration-500 hidden md:block">
                High-definition indoor & outdoor LED video walls for crystal
                clear immersive visual communication.
              </p>
            </div>
            <div className="w-[60%] md:w-1/2 h-full absolute right-[-5%] top-0 z-0 opacity-80 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity">
              <Image
                src="/new/6L8A4415.jpg"
                alt="LED Video & Display Systems"
                width={800}
                height={600}
                className="h-full w-full object-cover md:object-contain object-left md:object-right grayscale group-hover:grayscale-0 group-[.is-active]:grayscale-0 transition-all duration-700 md:scale-110 pointer-events-none"
              />
            </div>
          </div>

          {/* Card 6: Staging & Structural Systems (Small) */}
          <div className="feature-card col-span-1 md:col-span-1 md:row-span-1 bg-zinc-950 border border-white/10 p-4 md:p-6 flex flex-col justify-end relative group hover:bg-white [&.is-active]:bg-white hover:text-black [&.is-active]:text-black transition-colors duration-500 overflow-hidden text-white">
            <div className="absolute inset-x-0 bottom-0 h-[75%] bg-linear-to-t from-zinc-950 via-zinc-950/90 to-transparent group-hover:from-white group-[.is-active]:from-white group-hover:via-white/90 group-[.is-active]:via-white/90 transition-colors duration-500 z-1 md:hidden" />
            <div className="w-[45%] h-full absolute right-0 top-0 z-0 opacity-80 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity">
              <Image
                src="/new/TALENTZOCEC-040.jpg"
                alt="Staging & Structural Systems"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 group-[.is-active]:grayscale-0 transition-all duration-700 pointer-events-none"
              />
            </div>
            <div className="space-y-1 md:space-y-2 relative z-10 mt-auto text-left">
              <h3 className="text-xl md:text-2xl font-medium leading-[1.1] transition-colors duration-500 uppercase tracking-wide text-balance">
                Staging <br className="hidden md:block" /> Systems
              </h3>
              <p className="text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 text-[10px] md:text-xs font-light transition-colors duration-500">
                Custom staging & trussing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
