"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

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
    <main className="bg-transparent text-white min-h-screen pb-20 relative">
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

          {/* Subtle overlay for readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content Overlay - Parallax and Fade */}
        <div
          className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-14 lg:px-24 pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            opacity: Math.max(0, 1 - scrollY / 600),
          }}
        >
          <div className="pointer-events-auto max-w-2xl mt-10">
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
      <section className="py-32 px-6 md:px-14 container mx-auto bg-zinc-950 relative z-10 w-full max-w-none border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4 border-l-2 border-white/20 pl-4 inline-block">
            Leading Partner in Oman
          </h2>
          <p className="text-3xl md:text-5xl font-medium leading-tight text-white/90">
            Talentz Event Production division is the leading partner for events
            and entertainment production solutions.
          </p>
          <div className="h-px w-24 bg-white/20 mx-auto my-12" />
          <p className="text-lg text-white/60 leading-relaxed font-light">
            We have helped many events become resounding successes across a wide
            range of market segments. From unique destination wedding setups to
            innovative car launches, beautiful architectural lighting to glitzy
            fashion shows, from concerts of Grammy Award-winning artists to
            local performances; our team delivers quality service, often going
            above and beyond.
          </p>
        </div>
      </section>

      {/* Section 2: Equipment / Capabilities */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden border-y border-white/5 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4 border-l-2 border-white/20 pl-4">
                Cutting-Edge Inventory
              </h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                World-Class <br />
                <span className="text-zinc-500">Equipment.</span>
              </h3>
              <p className="text-lg text-white/60 leading-relaxed font-light">
                Our continuous investment in world-class equipment makes our
                inventory the largest and most cutting edge in the country. Our
                warehouses stock professional audiovisual equipment for rent
                which includes sound & audio equipment, lighting equipment, LED
                screens, projectors, trusses and special effect equipment.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                {[
                  "Audio & Sound",
                  "Lighting",
                  "LED Screens",
                  "Trusses",
                  "Staging",
                  "Special Effects",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-5 py-2 border border-white/20 bg-white/5 text-sm uppercase tracking-wider text-white/80 hover:bg-white hover:text-black transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] overflow-hidden border border-white/20 grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                src="/events-hero.png"
                alt="Event Equipment"
                fill
                className="object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent" />
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
    </main>
  );
}
