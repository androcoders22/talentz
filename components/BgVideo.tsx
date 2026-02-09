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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-bg-player", {
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
            event.target.playVideo();
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

    return () => {
      playerRef.current?.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute w-full h-full overflow-hidden bg-white"
      style={style}
    >
      {/* White overlay that fades out when video loads */}
      <div
        className={`absolute inset-0 bg-white z-10 transition-opacity duration-500 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
      <div
        id="yt-bg-player"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[4] md:scale-150 w-full h-full"
      />
    </div>
  );
};

export default BgVideo;
