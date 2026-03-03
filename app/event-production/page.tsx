"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function EventProductionPage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="absolute top-0 left-0 z-0 w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Fallback Image while video is loading */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
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

      <iframe
        className={`absolute top-1/2 left-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        src="https://www.youtube.com/embed/r9OlkJia5lM?autoplay=1&mute=1&loop=1&controls=0&playlist=r9OlkJia5lM&showinfo=0&rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        onLoad={() => setIsVideoLoaded(true)}
      ></iframe>

      {/* Overlay for UI Elements */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-12 px-8 md:px-16 lg:px-24">
        {/* Centered Button at bottom */}
        <div className="absolute left-1/2 bottom-12 -translate-x-1/2 z-20">
          <button className="border border-white text-white px-8 py-3 text-sm font-bold tracking-widest hover:bg-white hover:text-black transition-colors uppercase">
            Let&#39;s Talk
          </button>
        </div>

        {/* Right Aligned Text */}
        <div className="ml-auto text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight z-20 pb-4 md:pr-12 lg:pr-24">
          Production <br />
          Technology.
        </div>
      </div>

      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
    </div>
  );
}
