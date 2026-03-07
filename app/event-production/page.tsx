"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import FlowingMenu from "@/components/FlowingMenu";
import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconBrandFacebook,
  IconBrandX,
  IconBrandLinkedin,
} from "@tabler/icons-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function EventProductionPage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const initPlayer = useCallback(() => {
    if (!window.YT || !window.YT.Player) return;

    playerRef.current = new window.YT.Player("yt-player", {
      videoId: "r9OlkJia5lM",
      playerVars: {
        autoplay: 1,
        mute: 1,
        loop: 1,
        controls: 0,
        showinfo: 0,
        rel: 0,
        playlist: "r9OlkJia5lM",
        playsinline: 1,
        disablekb: 1,
        modestbranding: 1,
        iv_load_policy: 3,
        enablejsapi: 1,
        vq: "hd1080",
        origin: typeof window !== "undefined" ? window.location.origin : "",
      },
      events: {
        onReady: (event: any) => {
          event.target.mute();
          event.target.setPlaybackQuality("hd1080");
          event.target.playVideo();
        },
        onStateChange: (event: any) => {
          // Fade out fallback image only once video is actually playing
          if (event.data === window.YT.PlayerState.PLAYING) {
            event.target.setPlaybackQuality("hd1080");
            if (!isVideoLoaded) {
              setTimeout(() => setIsVideoLoaded(true), 800);
            }
          }
          // If video ends, replay it
          if (event.data === window.YT.PlayerState.ENDED) {
            event.target.playVideo();
          }
        },
      },
    });
  }, []);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = initPlayer;
    } else {
      initPlayer();
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [initPlayer]);

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
    <main className="bg-transparent text-white min-h-screen relative">
      <section className="relative h-screen flex flex-col items-center justify-center">
        {/* Video Background - Fixed Wrapper so it stays behind the whole page */}
        <div className="fixed top-0 left-0 w-full h-dvh z-[-1] pointer-events-none overflow-hidden bg-black">
          {/* Fallback Image while video is loading */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isVideoLoaded ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src="/events-hero.png"
              alt="Event Production"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* YouTube Player Container */}
          <div
            ref={containerRef}
            className={`absolute top-1/2 left-1/2 w-[max(100vw,177.77vh)] h-[max(56.25vw,100vh)] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 flex items-center justify-center ${
              isVideoLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              id="yt-player"
              className="w-full h-full pointer-events-none scale-[1.05] md:scale-100"
            />
          </div>

          {/* Subtle overlay and vignette for readability and focus */}
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.85)_80%,rgba(0,0,0,1)_100%)]"></div>
        </div>

        {/* Hero Content Overlay - Parallax and Fade */}
        <div
          className="absolute inset-0 z-10 flex flex-col justify-center container mx-auto px-4 pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            opacity: Math.max(0, 1 - scrollY / 600),
          }}
        >
          <div className="pointer-events-auto max-w-2xl mt-10 md:ml-3">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium text-white mb-6 leading-[1.1] tracking-tight flex flex-col gap-2">
              <span className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 md:w-16 md:h-16 shrink-0 opacity-90"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="1.5"
                    ry="1.5"
                  ></rect>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
                Event
              </span>
              Production
            </h1>
            <p className="text-lg text-white/80 font-normal tracking-wide mb-10 leading-relaxed max-w-md">
              Unlock a world of possibilities with Talentz, the ultimate
              destination for world-class high-quality events in Oman & GCC.
            </p>
            <div className="flex flex-row items-center gap-6 sm:gap-8 mt-2 md:mt-0">
              <button className="px-6 py-2.5 rounded-full font-medium text-zinc-300 bg-black/30 border border-white/20 hover:bg-white/10 transition-colors text-sm flex items-center gap-2 backdrop-blur-sm">
                Contact Us{" "}
                <span className="text-xl mb-0.5 leading-none">»</span>
              </button>
              <button
                onClick={() => {
                  if (playerRef.current && playerRef.current.unMute) {
                    playerRef.current.unMute();
                    playerRef.current.setVolume(100);
                  }
                }}
                className="text-white flex items-center gap-3 hover:text-white/80 transition-colors font-medium text-sm group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:scale-110 transition-transform"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon
                    points="10 8 16 12 10 16 10 8"
                    className="translate-x-px"
                  ></polygon>
                </svg>
                Watch the Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="bg-zinc-950 relative z-10 w-full border-t border-white/5">
        <div className="h-[300px] md:h-[350px] relative w-full border-b border-t border-white/5">
          <FlowingMenu
            items={[
              {
                link: "#",
                text: "Resounding Success",
                image: "/new/6L8A0127.jpg",
              },
              {
                link: "#",
                text: "Diverse Gatherings",
                image: "/new/6L8A4309.jpg",
              },
              {
                link: "#",
                text: "World-Class Execution",
                image: "/new/TALENTZOCEC-005.jpg",
              },
              {
                link: "#",
                text: "Unforgettable Experiences",
                image: "/new/TALENTZOCEC-010.jpg",
              },
              {
                link: "#",
                text: "Cutting-Edge Tech",
                image: "/new/6L8A4415.jpg",
              },
            ]}
            speed={15}
            textColor="#ffffff"
            bgColor="#000000"
            marqueeBgColor="#ffffff"
            marqueeTextColor="#000000"
            borderColor="rgba(255,255,255,0.1)"
          />
        </div>
      </section>

      {/* Section 2: Equipment / Capabilities */}
      <section className="py-16 bg-zinc-950 relative overflow-hidden border-y border-white/5 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0,transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[280px]">
            {/* Card 1: Left tall */}
            <div className="feature-card col-span-2 md:col-span-1 md:row-span-2 bg-zinc-950 border border-white/10 p-5 md:p-6 flex flex-row md:flex-col justify-between relative group transition-colors duration-500 hover:bg-white [&.is-active]:bg-white text-white hover:text-black [&.is-active]:text-black overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-[65%] bg-linear-to-r from-zinc-950 via-zinc-950/95 to-transparent group-hover:from-white group-[.is-active]:from-white group-hover:via-white/95 group-[.is-active]:via-white/95 transition-colors duration-500 z-1 md:hidden" />
              <div className="w-1/2 md:w-full h-[120%] md:h-1/2 absolute right-0 top-1/2 -translate-y-1/2 md:translate-y-0 md:relative md:top-auto md:mt-4 z-0">
                <Image
                  src="/new/6L8A2615.jpg"
                  alt="Inventory"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain object-right py-4 md:py-0 md:object-center grayscale group-hover:grayscale-0 group-[.is-active]:grayscale-0 transition-all duration-700 pointer-events-none drop-shadow-2xl"
                />
              </div>
              <div className="space-y-1 md:space-y-3 mb-0 md:mb-2 text-left w-[50%] pr-2 md:pr-0 md:w-full z-10 relative">
                <h3 className="text-2xl md:text-4xl font-medium leading-[1.1] transition-colors duration-500">
                  Total <br className="hidden md:block" /> Inventory
                </h3>
                <p className="text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 font-light text-[11px] leading-tight md:text-sm transition-colors duration-500">
                  Continuous investment in the largest and most cutting-edge AV
                  equipment in Oman.
                </p>
              </div>
            </div>

            {/* Card 2: Top Right wide */}
            <div className="feature-card col-span-2 md:col-span-2 md:row-span-1 bg-zinc-950 text-white border border-white/10 p-5 md:p-6 flex flex-col justify-center relative group hover:bg-white [&.is-active]:bg-white hover:text-black [&.is-active]:text-black transition-colors duration-500 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-[70%] bg-linear-to-r from-zinc-950 via-zinc-950/95 to-transparent group-hover:from-white group-[.is-active]:from-white group-hover:via-white/95 group-[.is-active]:via-white/95 transition-colors duration-500 z-1 md:hidden" />
              <div className="space-y-1 md:space-y-3 w-[55%] md:w-auto md:max-w-xs z-10 relative">
                <h3 className="text-2xl md:text-4xl font-medium leading-[1.1] transition-colors duration-500">
                  Immersive <br className="hidden md:block" /> Events
                </h3>
                <p className="text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 font-light text-xs md:text-sm transition-colors duration-500 hidden md:block">
                  From architectural lighting to glitzy fashion shows, advanced
                  visual setups redefine audience engagement.
                </p>
                <p className="text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 font-light text-[11px] md:hidden transition-colors duration-500">
                  Advanced visual setups redefine audience engagement.
                </p>
              </div>
              <div className="w-[60%] md:w-1/2 h-full absolute right-[-5%] top-0 z-0 opacity-80 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity">
                <Image
                  src="/new/RED_5641.jpg"
                  alt="Lighting"
                  fill
                  sizes="(max-width: 768px) 50vw, 66vw"
                  className="object-cover md:object-contain object-left md:object-right grayscale group-hover:grayscale-0 group-[.is-active]:grayscale-0 transition-all duration-700 md:scale-110 pointer-events-none"
                />
              </div>
            </div>

            {/* Card 3: Bottom Left small */}
            <div className="feature-card col-span-1 md:col-span-1 md:row-span-1 bg-zinc-950 text-white border border-white/10 p-4 md:p-6 flex flex-col items-start justify-end relative group hover:bg-white [&.is-active]:bg-white hover:text-black [&.is-active]:text-black transition-colors duration-500 overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-[75%] bg-linear-to-t from-zinc-950 via-zinc-950/90 to-transparent group-hover:from-white group-[.is-active]:from-white group-hover:via-white/90 group-[.is-active]:via-white/90 transition-colors duration-500 z-1 md:hidden" />
              <div className="w-[120%] h-[120%] md:w-[60%] md:h-[60%] absolute right-[-10%] top-[-10%] md:bottom-2 md:top-auto z-0 opacity-60 md:opacity-100 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity">
                <Image
                  src="/new/DSC01552.jpg"
                  alt="Microphone"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover md:object-contain object-top md:object-center scale-[1.3] grayscale group-hover:grayscale-0 group-[.is-active]:grayscale-0 transition-all duration-700 pointer-events-none"
                />
              </div>
              <div className="space-y-1 z-10 mt-auto md:mt-0 md:space-y-2 w-full relative">
                <h3 className="text-xl md:text-3xl font-medium leading-[1.1] transition-colors duration-500">
                  Precise <br className="hidden md:block" /> Audio
                </h3>
                <p className="text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 text-[10px] md:text-xs font-light mt-1 transition-colors duration-500 hidden sm:block">
                  Line arrays & pro sound.
                </p>
              </div>
            </div>

            {/* Card 4: Bottom Right small */}
            <div className="feature-card col-span-1 md:col-span-1 md:row-span-1 bg-zinc-950 border border-white/10 p-4 md:p-6 flex flex-col justify-end relative group hover:bg-white [&.is-active]:bg-white hover:text-black [&.is-active]:text-black transition-colors duration-500 overflow-hidden text-white">
              <div className="absolute inset-0 top-0 h-full w-full opacity-60 md:opacity-100 md:h-[60%] group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity z-0">
                <Image
                  src="/new/TALENTZOCEC-040.jpg"
                  alt="Trussing"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover object-bottom grayscale group-hover:grayscale-0 group-[.is-active]:grayscale-0 transition-all duration-700 pointer-events-none"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[75%] bg-linear-to-t from-zinc-950 via-zinc-950/90 to-transparent group-hover:from-white group-[.is-active]:from-white group-hover:via-white/90 group-[.is-active]:via-white/90 transition-colors duration-500 z-1 md:hidden" />
              <div className="space-y-1 md:space-y-2 relative z-10 mt-auto text-left">
                <h3 className="text-xl md:text-2xl font-medium leading-[1.1] transition-colors duration-500">
                  Seamless <br className="md:hidden" /> Structures
                </h3>
                <p className="text-zinc-500 group-hover:text-zinc-600 group-[.is-active]:text-zinc-600 text-[10px] md:text-xs font-light transition-colors duration-500">
                  Trusses, staging{" "}
                  <span className="hidden sm:inline">& barriers</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section X: The "Window" Exposing the BG Video */}
      <section className="py-10 md:py-16 bg-black/40 backdrop-blur-sm relative flex items-center justify-center z-10 w-full border-t border-b border-white/5 min-h-[25vh] md:min-h-[35vh]">
        <div className="container mx-auto px-4 text-center relative pointer-events-none">
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[8rem] font-black uppercase tracking-widest text-white/30 inline-block">
            EVENT PRODUCTION
          </h2>
        </div>
      </section>

      {/* Section 4: Recent Projects Gallery */}
      <section className="py-24 bg-zinc-950 relative z-10 w-full border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4 border-l-2 border-white/20 pl-4 inline-block">
              Our Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Recent Projects
            </h3>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[400px]">
              {/* Project 1 - Tall */}
              <div className="col-span-2 md:col-span-1 row-span-2 relative group overflow-hidden bg-zinc-900 border border-white/5">
                <Image
                  src="/new/6L8A0127.jpg"
                  alt="Live Concert"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h4 className="text-white text-2xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Live Concert
                  </h4>
                  <p className="text-zinc-400 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 uppercase tracking-wider">
                    Full AV Production
                  </p>
                </div>
              </div>

              {/* Project 2 - Wide */}
              <div className="col-span-2 lg:col-span-2 row-span-1 relative group overflow-hidden bg-zinc-900 border border-white/5">
                <Image
                  src="/new/6L8A4309.jpg"
                  alt="Corporate Event"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h4 className="text-white text-2xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Corporate Event
                  </h4>
                  <p className="text-zinc-400 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 uppercase tracking-wider">
                    Lighting & Stage
                  </p>
                </div>
              </div>

              {/* Project 3 - Regular */}
              <div className="col-span-1 row-span-1 relative group overflow-hidden bg-zinc-900 border border-white/5">
                <Image
                  src="/new/TALENTZOCEC-005.jpg"
                  alt="Exhibition Setup"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h4 className="text-white text-2xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Exhibition Setup
                  </h4>
                  <p className="text-zinc-400 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 uppercase tracking-wider">
                    LED Screens
                  </p>
                </div>
              </div>

              {/* Project 4 - Regular */}
              <div className="col-span-1 row-span-1 relative group overflow-hidden bg-zinc-900 border border-white/5">
                <Image
                  src="/new/DSC00782.jpg"
                  alt="Music Festival"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h4 className="text-white text-2xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Music Festival
                  </h4>
                  <p className="text-zinc-400 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 uppercase tracking-wider">
                    Stage & Lighting
                  </p>
                </div>
              </div>

              {/* Project 5 - Wide */}
              <div className="col-span-2 lg:col-span-2 row-span-1 relative group overflow-hidden bg-zinc-900 border border-white/5">
                <Image
                  src="/new/DAS_0439.jpg"
                  alt="Outdoor Stage"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-bottom group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h4 className="text-white text-2xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Outdoor Stage
                  </h4>
                  <p className="text-zinc-400 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 uppercase tracking-wider">
                    Trussing & Sound
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section X: Statistics / Impact */}
      <section className="py-16 bg-black/40 backdrop-blur-sm relative z-10 w-full border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left side content */}
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.05]">
                They Say Numbers <br className="hidden lg:block" />
                Don&apos;t Lie, and Neither <br className="hidden lg:block" />
                Do Ours.
              </h2>
              <p className="text-zinc-400 text-base md:text-lg font-light max-w-md leading-relaxed">
                Our results speak louder than words, delivering measurable
                success and undeniable growth.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
                <button className="px-5 md:px-6 py-2.5 rounded-full font-medium text-zinc-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs md:text-sm flex items-center gap-2">
                  Let&apos;s Collaborate
                </button>
                <button className="px-5 md:px-6 py-2.5 rounded-full font-medium text-zinc-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs md:text-sm flex items-center gap-2">
                  Book a Call
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right side stats */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="w-full max-w-[650px] relative flex flex-col justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-y-10 gap-x-4 md:gap-x-6 relative z-10">
                  {/* Stat 1 */}
                  <div className="text-center space-y-1 border-r border-white/10 md:border-transparent">
                    <h4 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
                      15+
                    </h4>
                    <p className="text-zinc-400 text-[10px] md:text-xs font-light uppercase tracking-wider">
                      Years Exp.
                    </p>
                  </div>

                  {/* Stat 2 */}
                  <div className="text-center space-y-1">
                    <h4 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
                      5k+
                    </h4>
                    <p className="text-zinc-400 text-[10px] md:text-xs font-light uppercase tracking-wider">
                      Events Done
                    </p>
                  </div>

                  {/* Stat 3 */}
                  <div className="text-center space-y-1 border-r border-white/10 md:border-transparent">
                    <h4 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
                      400+
                    </h4>
                    <p className="text-zinc-400 text-[10px] md:text-xs font-light uppercase tracking-wider">
                      Partner Brands
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block md:col-span-3 w-full h-px bg-white/10 my-2"></div>

                  {/* Stat 4 */}
                  <div className="text-center space-y-1">
                    <h4 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
                      100%
                    </h4>
                    <p className="text-zinc-400 text-[10px] md:text-xs font-light uppercase tracking-wider">
                      Commitment
                    </p>
                  </div>

                  {/* Stat 5 */}
                  <div className="text-center space-y-1 border-r border-white/10 md:border-transparent">
                    <h4 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
                      50+
                    </h4>
                    <p className="text-zinc-400 text-[10px] md:text-xs font-light uppercase tracking-wider">
                      Team Members
                    </p>
                  </div>

                  {/* Stat 6 */}
                  <div className="text-center space-y-1">
                    <h4 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
                      24/7
                    </h4>
                    <p className="text-zinc-400 text-[10px] md:text-xs font-light uppercase tracking-wider">
                      Logistics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Reviews */}
      <section className="py-16 md:py-20 bg-zinc-950 border-t border-white/5 relative z-10 w-full overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-12 md:mb-16">
            <h2 className="text-white text-7xl md:text-9xl lg:text-[11rem] font-medium tracking-tighter leading-none mb-4 md:mb-6">
              Reviews
            </h2>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <span className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
                ©2026
              </span>
              <p className="text-zinc-400 text-sm max-w-[280px] leading-relaxed">
                100+ top brands trusted us to elevate their events and
                production quality.
              </p>
            </div>
          </div>

          {/* Stacked Vertical Layout on Mobile, Masonry Grid on Desktop */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:space-x-0 pt-2 pb-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 min-w-[85vw] md:min-w-0 snap-center shrink-0">
              {/* Black Card */}
              <div className="bg-black border border-white/10 text-white p-5 md:p-7 flex flex-col justify-between h-[260px]">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-3.5 h-3.5 text-[#E75033] fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-light leading-relaxed text-zinc-300">
                    "Truly world class service. Talentz provides Light & Sound
                    with giant LED screens that is really an eye/ear candy.
                    Simply the best in the business!"
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-sm font-bold">
                    C
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Cloud 9 Band Oman</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">Client</p>
                  </div>
                </div>
              </div>

              {/* Zinc Card (Formerly White) */}
              <div className="bg-zinc-900 border border-white/10 text-white p-5 md:p-7 flex flex-col justify-between h-[220px] shadow-sm">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4].map((star) => (
                      <svg
                        key={star}
                        className="w-3.5 h-3.5 text-[#E75033] fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <svg
                      className="w-3.5 h-3.5 text-zinc-700 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <p className="text-sm font-light leading-relaxed text-zinc-300">
                    "Working with Talentz was truly exceptional. Their team was
                    profoundly insightful and highly dedicated."
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-sm font-bold">
                    S
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Sarah Jenkins</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Event Coordinator
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 min-w-[85vw] md:min-w-0 snap-center shrink-0">
              {/* Tall Image Card */}
              <div className="relative bg-black border border-white/10 text-white p-5 md:p-7 flex flex-col justify-end h-[496px] overflow-hidden group">
                <Image
                  src="/new/TALENTZOCEC-005.jpg"
                  alt="Review Background"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent z-10 pointer-events-none"></div>

                <div className="relative z-20">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-3.5 h-3.5 text-[#E75033] fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-light leading-relaxed text-zinc-200 mb-6 relative z-20">
                    "We really appreciate that you were able to provide us with
                    such outstanding AV equipment and services. Your staff were
                    professional, courteous, flexible to accommodate our need
                    and efficient!"
                  </p>

                  <div className="flex gap-8 border-b border-white/20 pb-4 mb-4">
                    <div>
                      <h5 className="text-2xl font-medium mb-0.5">100%</h5>
                      <p className="text-[11px] text-zinc-400 uppercase tracking-wider">
                        satisfaction
                      </p>
                    </div>
                    <div>
                      <h5 className="text-2xl font-medium mb-0.5">24/7</h5>
                      <p className="text-[11px] text-zinc-400 uppercase tracking-wider">
                        support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-sm font-bold relative z-20">
                      A
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Antonia Vegh</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Environment Society of Oman
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 min-w-[85vw] md:min-w-0 snap-center shrink-0">
              {/* Zinc Card (Formerly White) */}
              <div className="bg-zinc-900 border border-white/10 text-white p-5 md:p-7 flex flex-col justify-between h-[240px] shadow-sm">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-3.5 h-3.5 text-[#E75033] fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-light leading-relaxed text-zinc-300">
                    "The lighting setup provided by your team transformed our
                    entire venue. Flawless execution from start to finish."
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-sm font-bold">
                    M
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Marcus Trevis</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Festival Director
                    </p>
                  </div>
                </div>
              </div>

              {/* Black Card */}
              <div className="bg-black border border-white/10 text-white p-5 md:p-7 flex flex-col justify-between h-[240px]">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4].map((star) => (
                      <svg
                        key={star}
                        className="w-3.5 h-3.5 text-[#E75033] fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <svg
                      className="w-3.5 h-3.5 text-zinc-700 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <p className="text-sm font-light leading-relaxed text-zinc-300">
                    "Exceptional sound quality and unparalleled professionalism.
                    Talentz sets the standard for event production."
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-sm font-bold">
                    D
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">David Chen</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Corporate Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-black text-white pt-20 pb-12 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-10">
            {/* Top Part: Logo and Description from Footer.tsx */}
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

            {/* Additional Info from Footer.tsx */}
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
                <span>Sat-Thu: 9am-1pm, 4pm-8pm</span>
              </div>
            </div>

            {/* Existing Footer Links, rendered horizontally to match the image's vibe */}
            <div className="pt-4 grid grid-cols-2 gap-x-6 gap-y-10 md:flex md:flex-col md:gap-6">
              <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-x-8 gap-y-3 md:gap-y-4 text-[13px] md:text-sm font-semibold text-white">
                <span className="text-zinc-500 mb-1 md:mb-0 md:mr-2 uppercase tracking-[0.2em] text-[10px] md:hidden">
                  Products
                </span>
                <span className="text-zinc-600 mr-2 uppercase tracking-[0.2em] text-[10px] hidden md:inline-block">
                  Products
                </span>
                {[
                  "Guitars",
                  "Studio & Recording",
                  "Keyboards & Pianos",
                  "Ukuleles",
                  "Drums & Percussion",
                  "Guitar Amplifiers",
                  "Headphones",
                  // "Microphones",
                  // "Effects",
                  // "Strings",
                  // "Special Offers",
                  // "Preloved",
                ].map((cat) => (
                  <Link
                    key={cat}
                    href="#"
                    className="hover:text-zinc-400 text-zinc-200 transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>

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
            </div>

            {/* Divider from image */}
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
                  href="#"
                  className="hover:text-white hover:scale-110 transition-all"
                >
                  <IconBrandX className="h-5 w-5" />
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
    </main>
  );
}
