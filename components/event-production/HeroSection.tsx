"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { IconVideo } from "@tabler/icons-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const y = window.scrollY;
        if (y < 800) {
          heroRef.current.style.transform = `translateY(${y * 0.15}px)`;
          heroRef.current.style.opacity = Math.max(0, 1 - y / 600).toString();
        }
      }
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
          if (event.data === window.YT.PlayerState.PLAYING) {
            event.target.setPlaybackQuality("hd1080");
            if (!isVideoLoaded) {
              setTimeout(() => setIsVideoLoaded(true), 800);
            }
          }
          if (event.data === window.YT.PlayerState.ENDED) {
            event.target.playVideo();
          }
        },
      },
    });
  }, [isVideoLoaded]);

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
        ref={heroRef}
        className="absolute inset-0 z-10 flex flex-col justify-center container mx-auto px-4 pointer-events-none will-change-[transform,opacity]"
      >
        <div className="pointer-events-auto max-w-2xl mt-10 md:ml-3">
          <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-medium text-white mb-6 leading-[1.1] tracking-tight flex flex-col gap-2">
            <span className="flex items-center gap-4">Event Production </span>
          </h1>
          <p className="text-lg text-white/80 font-normal tracking-wide mb-10 leading-relaxed max-w-md">
            Unlock a world of possibilities with Talentz — delivering
            world-class audio-visual solutions and unforgettable event
            experiences across Oman and the GCC.
          </p>
          <div className="flex flex-row items-center gap-6 sm:gap-8 mt-2 md:mt-0">
            <button className="px-6 py-2.5 rounded-sm font-medium text-zinc-300 bg-black/30 border border-white/20 hover:bg-white/10 transition-colors text-sm flex items-center gap-2 backdrop-blur-sm">
              Contact Us <span className="text-xl mb-0.5 leading-none">»</span>
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
              <IconVideo className="w-5 h-5" />
              Watch the Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
