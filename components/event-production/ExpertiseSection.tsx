"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SectionHeader } from "./SectionHeader";

const expertiseTitles = [
  "Event Technology",
  "Professional Audio Systems",
  "Kinetic Systems",
  "Lighting Systems",
  "LED Video & Display Systems",
  "Staging Systems",
] as const;

type ExpertiseTitle = (typeof expertiseTitles)[number];

const expertiseDescriptions: Record<ExpertiseTitle, string> = {
  "Event Technology":
    "Our Rentals division has played a key role in delivering exceptional events across Oman and beyond. Our team of professionally trained engineers collaborates closely with clients to transform creative visions into seamless, memorable experiences.\n\nFrom bespoke destination weddings and innovative car launches to striking architectural lighting at historical buildings, we bring technical excellence to every project. Our portfolio spans international concerts featuring Grammy Award-winning artists to impactful local performances.\n\nWith a commitment to flexibility and client satisfaction, we cater to events of all sizes and budgets, ensuring the same level of quality and attention to detail throughout. We provide a comprehensive range of professional audio-visual equipment for rent, including sound systems, lighting, LED screens, projectors, special effects equipment, and trussing solutions.\n\nOur trusted client portfolio includes the Royal Opera House Muscat, Sultan Qaboos University, Ernst & Young, Zamakan Media, Match Media Oman, Tiara Events, Mosaic Events, Suza Events, Royal Court of Affairs, Oman Automobile Association, Oman Football Association, Bank Muscat, Ministry of Defense, Ministry of Sports, Ministry of Commerce, and many more.",
  "Professional Audio Systems":
    "Our professional audio solutions are engineered to deliver exceptional clarity and coverage for events of all scales. Whether it is a corporate conference, live concert, or private event, we provide high-performance sound systems supported by skilled technicians to ensure flawless audio delivery.",
  "Kinetic Systems":
    "We offer cutting-edge kinetic systems that introduce motion, depth, and visual drama to event environments. From automated rigging to synchronized moving elements, our solutions are designed to enhance stage design and create immersive, unforgettable experiences.",
  "Lighting Systems":
    "Our lighting solutions are crafted to transform spaces and elevate the overall atmosphere of any event. From sophisticated architectural lighting to dynamic concert effects, we design tailored lighting concepts that enhance mood, highlight key moments, and captivate audiences.",
  "LED Video & Display Systems":
    "We specialize in high-quality LED video and display solutions for both large-scale venues and corporate environments. In 2020, we successfully installed over 750 meters of permanent LED screens across three major stadiums in Oman: Seeb Stadium, Sohar Stadium, and Salalah Saada Stadium. Our expertise also extends to corporate installations, having delivered LED solutions for organizations such as OQ, Royal Oman Police, Oman Automobile Association, and others, ensuring reliable performance and outstanding visual impact.",
  "Staging Systems":
    "We provide versatile staging solutions tailored to a wide range of event requirements. Our purpose-built stages have supported world-renowned artists such as A.R. Rahman and Shah Rukh Khan, ensuring both structural excellence and visual appeal. From large concert stages to customized event platforms, we deliver safe, durable, and professionally designed staging systems.",
};

export function ExpertiseSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isComboboxOpen, setIsComboboxOpen] = useState(false);
  const [selectedExpertise, setSelectedExpertise] = useState<ExpertiseTitle | null>(
    null,
  );
  const comboboxRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Partial<Record<ExpertiseTitle, HTMLDivElement | null>>>(
    {},
  );

  const filteredExpertise = expertiseTitles.filter((title) =>
    title.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );

  const selectExpertise = (title: ExpertiseTitle) => {
    setSelectedExpertise(title);
    setSearchQuery(title);
    setIsComboboxOpen(false);

    const card = cardRefs.current[title];
    if (!card) return;

    card.scrollIntoView({ behavior: "smooth", block: "center" });

    if (window.innerWidth < 768) {
      document.querySelectorAll(".feature-card").forEach((featureCard) => {
        featureCard.classList.remove("is-active");
      });
      card.classList.add("is-active");
    }
  };

  const cardHighlightClass = (title: ExpertiseTitle) =>
    selectedExpertise === title
      ? "ring-2 ring-white/70 ring-offset-2 ring-offset-zinc-950"
      : "";

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!comboboxRef.current) return;
      if (!comboboxRef.current.contains(event.target as Node)) {
        setIsComboboxOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
        <div ref={comboboxRef} className="mb-6 md:mb-8 max-w-xl relative">
          <label
            htmlFor="expertise-search"
            className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-zinc-400"
          >
            Search Expertise
          </label>
          <input
            id="expertise-search"
            type="text"
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
              setIsComboboxOpen(true);
            }}
            onFocus={() => setIsComboboxOpen(true)}
            placeholder="Search by equipment capability"
            className="h-11 w-full rounded-sm border border-white/15 bg-zinc-900/90 px-3 text-sm text-white placeholder:text-zinc-500 focus:border-white/40 focus:outline-none"
            role="combobox"
            aria-expanded={isComboboxOpen}
            aria-controls="expertise-search-list"
          />
          {isComboboxOpen ? (
            <div className="absolute z-30 mt-2 w-full rounded-sm border border-white/15 bg-zinc-900/95 p-1 backdrop-blur-sm">
              {filteredExpertise.length ? (
                <ul id="expertise-search-list" role="listbox" className="max-h-64 overflow-y-auto">
                  {filteredExpertise.map((title) => (
                    <li key={title} role="option" aria-selected={selectedExpertise === title}>
                      <button
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => selectExpertise(title)}
                        className={`w-full rounded-sm px-3 py-2 text-left text-sm transition-colors ${selectedExpertise === title
                          ? "bg-white text-black"
                          : "text-zinc-200 hover:bg-white/10"
                          }`}
                      >
                        {title}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="px-3 py-2 text-sm text-zinc-400">No matching expertise found.</p>
              )}
            </div>
          ) : null}
        </div>

        <TooltipProvider delay={80}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[280px]">
            {/* Card 1: Event Technology (Tall) */}
            <div
              ref={(element) => {
                cardRefs.current["Event Technology"] = element;
              }}
              className={`feature-card col-span-2 md:col-span-1 md:row-span-2 bg-zinc-950 rounded-sm border border-white/10 p-5 md:p-6 flex flex-row md:flex-col justify-start relative group transition-colors duration-500 hover:bg-white [&.is-active]:bg-white text-white hover:text-black [&.is-active]:text-black overflow-hidden ${cardHighlightClass("Event Technology")}`}
            >
              <div className="absolute inset-y-0 left-0 w-[65%] bg-linear-to-r from-zinc-950 via-zinc-950/95 to-transparent group-hover:from-white group-[.is-active]:from-white group-hover:via-white/95 group-[.is-active]:via-white/95 transition-colors duration-500 z-1 md:hidden" />
              <div className="space-y-1 md:space-y-3 mb-4 md:mb-6 text-left w-[50%] pr-2 md:pr-0 md:w-full z-10 relative">
                <h3 className="text-xl md:text-2xl font-medium leading-[1.1] transition-colors duration-500 uppercase tracking-wide">
                  Event <br /> Technology
                </h3>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <p className="cursor-help text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 font-light text-[11px] leading-tight md:text-sm transition-colors duration-500 [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
                        {expertiseDescriptions["Event Technology"]}
                      </p>
                    }
                  />
                  <TooltipContent className="max-w-lg max-h-72 overflow-y-auto whitespace-pre-line text-xs leading-relaxed">
                    {expertiseDescriptions["Event Technology"]}
                  </TooltipContent>
                </Tooltip>
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
            <div
              ref={(element) => {
                cardRefs.current["Professional Audio Systems"] = element;
              }}
              className={`feature-card col-span-2 md:col-span-2 md:row-span-1 bg-zinc-950 rounded-sm text-white border border-white/10 p-5 md:p-6 flex flex-col justify-center relative group hover:bg-white [&.is-active]:bg-white hover:text-black [&.is-active]:text-black transition-colors duration-500 overflow-hidden ${cardHighlightClass("Professional Audio Systems")}`}
            >
              <div className="absolute inset-y-0 left-0 w-[70%] bg-linear-to-r from-zinc-950 via-zinc-950/95 to-transparent group-hover:from-white group-[.is-active]:from-white group-hover:via-white/95 group-[.is-active]:via-white/95 transition-colors duration-500 z-1 md:hidden" />
              <div className="space-y-1 md:space-y-3 w-[55%] md:w-auto md:max-w-xs z-10 relative">
                <h3 className="text-xl md:text-2xl font-medium leading-[1.1] transition-colors duration-500 uppercase tracking-wide">
                  Professional <br className="hidden md:block" /> Audio Systems
                </h3>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <p className="cursor-help text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 font-light text-[11px] md:text-sm transition-colors duration-500 [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
                        {expertiseDescriptions["Professional Audio Systems"]}
                      </p>
                    }
                  />
                  <TooltipContent className="max-w-lg max-h-72 overflow-y-auto whitespace-pre-line text-xs leading-relaxed">
                    {expertiseDescriptions["Professional Audio Systems"]}
                  </TooltipContent>
                </Tooltip>
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
            <div
              ref={(element) => {
                cardRefs.current["Kinetic Systems"] = element;
              }}
              className={`feature-card col-span-1 md:col-span-1 md:row-span-1 bg-zinc-950 rounded-sm text-white border border-white/10 p-4 md:p-6 flex flex-col items-start justify-end relative group hover:bg-white [&.is-active]:bg-white hover:text-black [&.is-active]:text-black transition-colors duration-500 overflow-hidden ${cardHighlightClass("Kinetic Systems")}`}
            >
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
              <div className="space-y-1 z-10 mt-auto md:mt-0 md:space-y-2 w-[48%] pr-2 relative min-w-0">
                <h3 className="text-xl md:text-2xl font-medium leading-[1.1] transition-colors duration-500 uppercase tracking-wide">
                  Kinetic <br className="hidden md:block" /> Systems
                </h3>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <p className="cursor-help w-full overflow-hidden truncate text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 text-[10px] md:text-xs font-light mt-1 transition-colors duration-500">
                        {expertiseDescriptions["Kinetic Systems"]}
                      </p>
                    }
                  />
                  <TooltipContent className="max-w-lg max-h-72 overflow-y-auto whitespace-pre-line text-xs leading-relaxed">
                    {expertiseDescriptions["Kinetic Systems"]}
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            {/* Card 4: Lighting Systems (Small) */}
            <div
              ref={(element) => {
                cardRefs.current["Lighting Systems"] = element;
              }}
              className={`feature-card col-span-1 md:col-span-1 md:row-span-1 bg-zinc-950 rounded-sm border border-white/10 p-4 md:p-6 flex flex-col justify-start items-end relative group hover:bg-white [&.is-active]:bg-white hover:text-black [&.is-active]:text-black transition-colors duration-500 overflow-hidden text-white ${cardHighlightClass("Lighting Systems")}`}
            >
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
              <div className="space-y-1 md:space-y-2 relative z-10 text-right ml-auto w-[48%] pl-2 min-w-0">
                <h3 className="text-xl md:text-2xl font-medium leading-[1.1] transition-colors duration-500 uppercase tracking-wide text-balance">
                  Lighting <br /> Systems
                </h3>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <p className="cursor-help w-full overflow-hidden truncate text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 text-[10px] md:text-xs font-light transition-colors duration-500">
                        {expertiseDescriptions["Lighting Systems"]}
                      </p>
                    }
                  />
                  <TooltipContent className="max-w-lg max-h-72 overflow-y-auto whitespace-pre-line text-xs leading-relaxed">
                    {expertiseDescriptions["Lighting Systems"]}
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            {/* Card 5: LED Video & Display Systems (Wide) */}
            <div
              ref={(element) => {
                cardRefs.current["LED Video & Display Systems"] = element;
              }}
              className={`feature-card col-span-2 md:col-span-2 md:row-span-1 bg-zinc-950 rounded-sm border border-white/10 p-5 md:p-6 flex flex-col justify-center relative group hover:bg-white [&.is-active]:bg-white hover:text-black [&.is-active]:text-black transition-colors duration-500 overflow-hidden text-white ${cardHighlightClass("LED Video & Display Systems")}`}
            >
              <div className="absolute inset-y-0 left-0 w-[70%] bg-linear-to-r from-zinc-950 via-zinc-950/95 to-transparent group-hover:from-white group-[.is-active]:from-white group-hover:via-white/95 group-[.is-active]:via-white/95 transition-colors duration-500 z-1 md:hidden" />
              <div className="space-y-1 md:space-y-3 w-[55%] md:w-auto md:max-w-xs z-10 relative">
                <h3 className="text-xl md:text-2xl font-medium leading-[1.1] transition-colors duration-500 uppercase tracking-wide">
                  LED Video & <br className="hidden md:block" /> Display Systems
                </h3>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <p className="cursor-help text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 font-light text-[11px] md:text-sm transition-colors duration-500 [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
                        {expertiseDescriptions["LED Video & Display Systems"]}
                      </p>
                    }
                  />
                  <TooltipContent className="max-w-lg max-h-72 overflow-y-auto whitespace-pre-line text-xs leading-relaxed">
                    {expertiseDescriptions["LED Video & Display Systems"]}
                  </TooltipContent>
                </Tooltip>
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
            <div
              ref={(element) => {
                cardRefs.current["Staging Systems"] = element;
              }}
              className={`feature-card col-span-1 md:col-span-1 md:row-span-1 bg-zinc-950 rounded-sm border border-white/10 p-4 md:p-6 flex flex-col justify-end relative group hover:bg-white [&.is-active]:bg-white hover:text-black [&.is-active]:text-black transition-colors duration-500 overflow-hidden text-white ${cardHighlightClass("Staging Systems")}`}
            >
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
              <div className="space-y-1 md:space-y-2 relative z-10 mt-auto text-left w-[48%] pr-2 min-w-0">
                <h3 className="text-xl md:text-2xl font-medium leading-[1.1] transition-colors duration-500 uppercase tracking-wide text-balance">
                  Staging <br className="hidden md:block" /> Systems
                </h3>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <p className="cursor-help w-full overflow-hidden truncate text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 text-[10px] md:text-xs font-light transition-colors duration-500">
                        {expertiseDescriptions["Staging Systems"]}
                      </p>
                    }
                  />
                  <TooltipContent className="max-w-lg max-h-72 overflow-y-auto whitespace-pre-line text-xs leading-relaxed">
                    {expertiseDescriptions["Staging Systems"]}
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
