"use client";

import React, { useEffect, useRef, useState } from "react";

interface BgVideoProps {
  style?: React.CSSProperties;
}

// YouTube IFrame API types
interface YTPlayer {
  destroy: () => void;
  setPlaybackRate: (rate: number) => void;
  playVideo: () => void;
}

interface YTPlayerEvent {
  target: YTPlayer;
}

interface YTPlayerOptions {
  videoId: string;
  playerVars: {
    autoplay?: number;
    mute?: number;
    loop?: number;
    playlist?: string;
    controls?: number;
    showinfo?: number;
    rel?: number;
    modestbranding?: number;
    vq?: string;
    playsinline?: number;
    disablekb?: number;
    fs?: number;
    iv_load_policy?: number;
  };
  events?: {
    onReady?: (event: YTPlayerEvent) => void;
  };
}

interface YTNamespace {
  Player: new (elementId: string, options: YTPlayerOptions) => YTPlayer;
}

declare global {
  interface Window {
    YT: YTNamespace;
    onYouTubeIframeAPIReady: () => void;
  }
}

const BgVideo: React.FC<BgVideoProps> = ({ style }) => {
  const playerRef = useRef<YTPlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerMountRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const applyIframeCoverStyles = () => {
      const iframe = playerMountRef.current?.querySelector("iframe") as
        | HTMLIFrameElement
        | null;

      if (!iframe) {
        return;
      }

      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      iframe.style.position = "absolute";
      iframe.style.top = "50%";
      iframe.style.left = "50%";
      iframe.style.transform = "translate(-50%, -50%)";
      iframe.style.height = "130%";
      iframe.style.width = isMobile ? "230%" : "140%";
      iframe.style.maxWidth = "none";
    };

    const overlayFailSafe = setTimeout(() => {
      setIsLoaded(true);
    }, 5000);

    // Load YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      if (!playerMountRef.current) {
        return;
      }

      playerRef.current = new window.YT.Player(playerMountRef.current.id, {
        videoId: "f0zOqdGdBE4",
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: "f0zOqdGdBE4",
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          vq: "tiny",
          playsinline: 1,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: (event: YTPlayerEvent) => {
            event.target.setPlaybackRate(1.25);
            // Force 144p if possible via internal API method (deprecated but often still works for hints)
            try {
              (event.target as any).setPlaybackQuality("tiny");
            } catch (e) { }
            event.target.playVideo();
            applyIframeCoverStyles();
            // Fade out white overlay after a short delay
            setTimeout(() => setIsLoaded(true), 500);
          },
        },
      });
    };

    // If API already loaded, initialize immediately
    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady();
    }

    window.addEventListener("resize", applyIframeCoverStyles);

    return () => {
      clearTimeout(overlayFailSafe);
      window.removeEventListener("resize", applyIframeCoverStyles);
      playerRef.current?.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute w-full h-full overflow-hidden"
      style={style}
    >
      {/* Overlay that fades out when video loads */}
      <div
        className={`absolute inset-0 bg-white z-20 transition-opacity duration-700 ${isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
      />

      <div
        id="yt-bg-player"
        ref={playerMountRef}
        className="absolute inset-0 overflow-hidden blur-[18px] md:blur-2xl"
      />
    </div>
  );
};

export default BgVideo;
