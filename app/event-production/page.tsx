"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <main className="bg-transparent text-white min-h-screen relative">
      <section className="relative h-screen flex flex-col items-center justify-center">
        {/* Video Background - Fixed Wrapper so it stays behind the whole page */}
        <div className="fixed top-0 left-0 w-full h-screen z-[-1] pointer-events-none">
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
              className="object-cover"
              priority
            />
          </div>

          {/* YouTube Player Container */}
          <div
            ref={containerRef}
            className={`absolute top-1/2 left-1/2 w-screen h-[56.25vw] min-h-full min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
              isVideoLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <div id="yt-player" className="w-full h-full"></div>
          </div>

          {/* Subtle overlay and vignette for readability and focus */}
          <div className="absolute inset-0 bg-black/20"></div>
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
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <button className="bg-white text-black px-6 py-3.5 rounded-xl font-medium flex items-center gap-2 hover:bg-white/90 transition-colors text-sm">
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
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:scale-110 transition-transform"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
                Watch the Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-24 px-6 md:px-14 bg-zinc-950 relative z-10 w-full border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            {/* Left: Sticky Title */}
            <div className="sticky top-32 mb-12 md:mb-0">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4 border-l-2 border-white/20 pl-4 inline-block">
                Leading Partner in Oman
              </h2>
              <p className="text-3xl md:text-5xl font-medium leading-tight text-white/90">
                Talentz Event Production division is the leading partner for
                events and entertainment production solutions.
              </p>
            </div>

            {/* Right: Scrolling Content */}
            <div className="space-y-24 md:space-y-40 pb-10 mt-10 md:mt-0">
              {/* Block 1 */}
              <div className="space-y-4 relative group">
                <div className="text-5xl text-white/10 font-serif italic absolute -top-8 -left-4 pointer-events-none group-hover:text-white/20 transition-colors duration-500">
                  01
                </div>
                <h4 className="text-2xl font-medium text-white/90 relative z-10">
                  Resounding Success
                </h4>
                <p className="text-lg text-white/60 leading-relaxed font-light relative z-10">
                  We have helped many events become resounding successes across
                  a wide range of market segments.
                </p>
              </div>

              {/* Block 2 */}
              <div className="space-y-4 relative group">
                <div className="text-5xl text-white/10 font-serif italic absolute -top-8 -left-4 pointer-events-none group-hover:text-white/20 transition-colors duration-500">
                  02
                </div>
                <h4 className="text-2xl font-medium text-white/90 relative z-10">
                  Diverse Gatherings
                </h4>
                <p className="text-lg text-white/60 leading-relaxed font-light relative z-10">
                  From unique destination wedding setups to innovative car
                  launches, beautiful architectural lighting to glitzy fashion
                  shows.
                </p>
              </div>

              {/* Block 3 */}
              <div className="space-y-4 relative group">
                <div className="text-5xl text-white/10 font-serif italic absolute -top-8 -left-4 pointer-events-none group-hover:text-white/20 transition-colors duration-500">
                  03
                </div>
                <h4 className="text-2xl font-medium text-white/90 relative z-10">
                  World-Class Execution
                </h4>
                <p className="text-lg text-white/60 leading-relaxed font-light relative z-10">
                  From concerts of Grammy Award-winning artists to local
                  performances; our team delivers quality service, often going
                  above and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Equipment / Capabilities */}
      <section className="py-16 bg-zinc-950 relative overflow-hidden border-y border-white/5 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0,transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-7 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[280px]">
            {/* Card 1: Left tall */}
            <div className="md:col-span-1 md:row-span-2 bg-zinc-900 border border-white/10 p-6 flex flex-col justify-between relative group transition-colors duration-500 hover:bg-white text-white hover:text-black">
              <div className="w-full h-1/2 relative mt-4">
                <img
                  src="https://placehold.co/400x600/18181b/fff?text=AV+Inventory"
                  alt="Inventory"
                  className="w-full h-full object-contain mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                />
              </div>
              <div className="space-y-3 mb-2 text-center md:text-left transition-colors duration-500">
                <h3 className="text-2xl md:text-4xl font-medium leading-[1.1] transition-colors duration-500">
                  Total <br /> Inventory
                </h3>
                <p className="text-zinc-500 group-hover:text-zinc-600 font-light text-sm transition-colors duration-500">
                  Continuous investment in the largest and most cutting-edge AV
                  equipment in Oman.
                </p>
              </div>
            </div>

            {/* Card 2: Top Right wide */}
            <div className="md:col-span-2 md:row-span-1 bg-white text-black border border-white/10 p-6 flex flex-col md:flex-row items-center justify-between relative group hover:bg-zinc-200 transition-colors duration-500 overflow-hidden">
              <div className="space-y-3 max-w-xs z-10 relative">
                <h3 className="text-2xl md:text-4xl font-medium leading-[1.1] transition-colors duration-500">
                  Immersive <br /> Events
                </h3>
                <p className="text-zinc-600 font-light text-sm transition-colors duration-500">
                  From architectural lighting to glitzy fashion shows, advanced
                  visual setups redefine audience engagement.
                </p>
              </div>
              <div className="w-full md:w-1/2 h-40 md:h-full relative mt-6 md:mt-0 right-0">
                <img
                  src="https://placehold.co/600x400/fff/18181b?text=Visual+Lighting"
                  alt="Lighting"
                  className="w-full h-full object-cover md:object-contain object-right mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 scale-110 pointer-events-none"
                />
              </div>
            </div>

            {/* Card 3: Bottom Left small */}
            <div className="md:col-span-1 md:row-span-1 bg-white text-black border border-white/10 p-6 flex flex-row items-center justify-between relative group hover:bg-zinc-200 transition-colors duration-500">
              <div className="space-y-2 max-w-[60%] z-10">
                <h3 className="text-xl md:text-3xl font-medium leading-[1.1] transition-colors duration-500">
                  Precise <br /> Audio
                </h3>
                <p className="text-zinc-600 text-xs font-light mt-1 transition-colors duration-500">
                  Line arrays & pro sound.
                </p>
              </div>
              <div className="w-[40%] h-full relative z-0">
                <img
                  src="https://placehold.co/200x400/fff/18181b?text=Mic"
                  alt="Microphone"
                  className="w-full h-full object-contain object-center scale-[1.3] mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                />
              </div>
            </div>

            {/* Card 4: Bottom Right small */}
            <div className="md:col-span-1 md:row-span-1 bg-zinc-900 border border-white/10 p-6 flex flex-col justify-end relative group hover:bg-zinc-800 transition-colors duration-500 overflow-hidden text-white">
              <div className="absolute inset-0 top-0 h-[60%] w-full">
                <img
                  src="https://placehold.co/400x200/18181b/fff?text=Staging+Truss"
                  alt="Trussing"
                  className="w-full h-full object-cover object-bottom mix-blend-luminosity opacity-40 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                />
              </div>
              <div className="space-y-2 relative z-10 mt-auto text-left">
                <h3 className="text-xl md:text-2xl font-medium leading-[1.1] transition-colors duration-500">
                  Seamless Structures
                </h3>
                <p className="text-zinc-500 text-xs font-light transition-colors duration-500">
                  Trusses, staging & barriers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section X: The "Window" Exposing the BG Video */}
      <section className="py-48 relative flex items-center justify-center">
        {/* Transparent section allowing the fixed video background to show through. */}
        <div className="text-center px-4 relative z-10 mix-blend-difference pointer-events-none">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white border-4 border-white inline-block p-10">
            Unforgettable <br /> Experiences.
          </h2>
        </div>
      </section>

      {/* Section 3: Testimonials */}
      <section className="py-32 px-6 md:px-14 container mx-auto bg-zinc-950 relative z-10 w-full max-w-none">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4 border-l-2 border-white/20 pl-4 inline-block">
            Hear from our Clients
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Trusted by the Best
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-zinc-900/50 p-10 border border-white/10 relative group hover:bg-white transition-colors">
            <div className="text-6xl text-white/10 absolute top-6 left-6 font-serif group-hover:text-black/10 transition-colors">
              "
            </div>
            <div className="relative z-10">
              <p className="text-lg text-white/80 group-hover:text-black/80 leading-relaxed font-light mb-8 italic transition-colors">
                Truly world class service. Talentz provides Light & Sound with
                giant LED screens that is really an eye/ear candy. Simply the
                best in the business!
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-lg group-hover:bg-black group-hover:text-white transition-colors">
                  C
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-black tracking-wide transition-colors">
                    Cloud 9 Band Oman
                  </h4>
                  <p className="text-sm text-white/40 group-hover:text-black/50 uppercase tracking-widest mt-1 transition-colors">
                    Client
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-zinc-900/50 p-10 border border-white/10 relative group hover:bg-white transition-colors">
            <div className="text-6xl text-white/10 absolute top-6 left-6 font-serif group-hover:text-black/10 transition-colors">
              "
            </div>
            <div className="relative z-10">
              <p className="text-lg text-white/80 group-hover:text-black/80 leading-relaxed font-light mb-8 italic transition-colors">
                We really appreciate that you were able to provide us with such
                outstanding AV equipment and services. Your staff were
                professional, courteous, flexible to accommodate our need and
                efficient!
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-lg group-hover:bg-black group-hover:text-white transition-colors">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-black tracking-wide transition-colors">
                    Antonia Vegh
                  </h4>
                  <p className="text-sm text-white/40 group-hover:text-black/50 uppercase tracking-widest mt-1 transition-colors">
                    Environment Society of Oman
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-black text-white px-6 md:px-14 pt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-10 border-t border-white/5">
            <div>
              <h4 className="font-bold mb-8 uppercase text-[10px] tracking-[0.2em] text-white border-l-2 border-white/20 pl-4">
                Product Category
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 text-[13px] text-white/40">
                {[
                  "Guitars",
                  "Studio & Recording",
                  "Keyboards & Pianos",
                  "Ukuleles",
                  "Drums & Percussion",
                  "Guitar Amplifiers",
                  "Headphones",
                  "Microphones",
                  "Effects",
                  "Strings",
                  "Special Offers, Sale & More",
                  "Preloved & Used",
                ].map((cat) => (
                  <Link
                    key={cat}
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-8 uppercase text-[10px] tracking-[0.2em] text-white border-l-2 border-white/20 pl-4">
                Quick Links
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-[13px] text-white/40">
                {[
                  "User Agreement & Terms of Use",
                  "Terms & Conditions for Online Shopping",
                  "Shipping & Delivery",
                  "Frequently Asked Questions [FAQs]",
                  "Privacy Policy",
                  "Promotions, News Releases, Shopping Guides and more!",
                  "About Us",
                ].map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
