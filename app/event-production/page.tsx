"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import ScrollingBento from "@/components/ScrollingBento";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { z } from "zod/v3";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const businessTypeOptions = [
  "End Client",
  "Agency",
  "Event Company",
  "Fabricator",
  "AV Company",
  "Other",
] as const;

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Invalid email address"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .refine(
      (val) => isValidPhoneNumber(val, "OM"),
      "Enter a valid phone number",
    ),
  company: z.string().optional(),
  remark: z.string().optional(),
  businessType: z.enum(businessTypeOptions),
  terms: z.boolean().refine((val) => val === true, "You must accept the terms"),
});

type FormValues = z.infer<typeof formSchema>;

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const instagramPostImages = [
  "/new/6L8A0127.jpg",
  "/new/6L8A2595.jpg",
  "/new/6L8A2615.jpg",
  "/new/6L8A3952.jpg",
  "/new/6L8A4309.jpg",
  "/new/6L8A4423.jpg",
  "/new/6L8A9208.jpg",
  "/new/6L8A9379.jpg",
  "/new/6L8A9483.jpg",
  "/new/DAS_0439.jpg",
  "/new/DSC00782.jpg",
  "/new/DSC01552.jpg",
  "/new/DSC02598.jpg",
  "/new/DSC04010.jpg",
  "/new/DSC04045.jpg",
  "/new/DSC05565.jpg",
  "/new/DSC06641.jpg",
  "/new/DSC07075.jpg",
  "/new/DSC07093.jpg",
  "/new/DSC07951.jpg",
  "/new/RED_5641.jpg",
  "/new/TALENTZ-03.jpg",
  "/new/TALENTZOCEC-005.jpg",
  "/new/TALENTZOCEC-040.jpg",
];

const instagramPosts = instagramPostImages.map((src, index) => ({
  src,
  alt: `Talentz Instagram post ${index + 1}`,
}));

const instagramCardCount = instagramPosts.length + 1;

const blog = [
  {
    id: "warehouse-restock",
    title: "Warehouse Restock: Popular Models Back in Inventory",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    description:
      "Our latest shipment has arrived and several high-demand models are now back in stock. This restock includes some of the most requested items from the past few months. Availability may be limited, so customers are encouraged to place orders early while inventory lasts.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between ${className}`}
    >
      <div className="max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.42em] text-zinc-500">
          <span className="h-7 w-px bg-white/60" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[3.75rem] lg:leading-[0.98]">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="md:shrink-0">{action}</div> : null}
    </div>
  );
}

const contactFieldClassName =
  "peer h-12 w-full rounded-none border-0 border-b border-white/15 bg-transparent px-0 pb-2 pt-5 text-sm text-white shadow-none outline-none transition-colors placeholder:text-transparent focus-visible:border-white focus-visible:ring-0 focus-visible:ring-offset-0";

const floatingLabelClassName =
  "absolute left-0 top-3 cursor-text text-sm text-zinc-500 transition-all duration-200 peer-focus:-top-4 peer-focus:text-[11px] peer-focus:text-white peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[11px] peer-not-placeholder-shown:text-zinc-400";

function FloatingField({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("relative", className)}>
      {children}
      <label htmlFor={id} className={floatingLabelClassName}>
        {label}
      </label>
      {error ? <p className="mt-2 text-xs text-red-400">{error}</p> : null}
    </div>
  );
}

export default function EventProductionPage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      remark: "",
      businessType: "End Client",
      terms: false,
    },
  });

  const phoneValue = watch("phone");

  const onSubmit = async (data: FormValues) => {
    try {
      console.log(data);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1280) setItemsPerPage(5);
      else if (window.innerWidth >= 1024) setItemsPerPage(4);
      else if (window.innerWidth >= 768) setItemsPerPage(3);
      else if (window.innerWidth >= 640) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalCardsCount = instagramCardCount;
  const totalPages = Math.ceil(totalCardsCount / itemsPerPage);

  const handleInstagramPrev = useCallback(() => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  }, [totalPages]);

  const handleInstagramNext = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  }, [totalPages]);

  // Calculate the starting index for the current page
  // If it's the last page, we shift the startIndex back to always show a full row if possible
  const rawStartIndex = currentPage * itemsPerPage;
  const startIndex =
    currentPage === totalPages - 1 && totalCardsCount > itemsPerPage
      ? totalCardsCount - itemsPerPage
      : rawStartIndex;

  const progressPercent =
    (startIndex / (totalCardsCount - itemsPerPage || 1)) * 100;

  // Use adjusted startIndex to calculate progress labels
  const instagramProgressStart = startIndex + 1;
  const instagramProgressEnd = Math.min(
    totalCardsCount,
    startIndex + itemsPerPage,
  );
  const instagramProgressWidth = (itemsPerPage / totalCardsCount) * 100;
  const instagramProgressOffset = (startIndex / totalCardsCount) * 100;

  const instagramProgressLabel = `${String(instagramProgressStart).padStart(
    2,
    "0",
  )}-${String(instagramProgressEnd).padStart(2, "0")} / ${String(
    totalCardsCount,
  ).padStart(2, "0")}`;

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

      {/* Section 2: Our Expertise */}
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

      {/* Section 4: Projects Gallery */}
      <section
        id="portfolio"
        className="py-12 md:py-16 bg-zinc-950 relative z-10 w-full border-t border-white/5 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Featured Work"
            title="Our Gallery"
            description="A closer look at the stages, screen builds, lighting environments, and live event moments shaped by Talentz."
          />

          <div className="relative">
            <ScrollingBento speed={1.5} />
          </div>
        </div>
      </section>

      {/* Section X: Instagram Posts */}
      <section
        id="social"
        className="py-12 md:py-16 bg-black border-t border-white/5 relative z-10 w-full overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Social Feed"
            title="Instagram Posts"
            description="Fresh production highlights, stage builds, and event snapshots from the Talentz feed."
            action={
              <Link
                href="https://www.instagram.com/talentzeventsproduction/"
                target="_blank"
                className="group flex items-center gap-3 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(145deg,#833ab4_0%,#c13584_35%,#fd1d1d_68%,#fcb045_100%)] text-white transition-transform duration-300 group-hover:scale-110">
                  <IconBrandInstagram className="h-5 w-5" />
                </div>
                <span>@talentzeventsproduction</span>
              </Link>
            }
          />

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
              >
                {[...instagramPosts, { isFollowCard: true }]
                  .slice(startIndex, startIndex + itemsPerPage)
                  .map((item) => {
                    if ("isFollowCard" in item) {
                      return (
                        <Link
                          key="follow-card"
                          href="https://www.instagram.com/talentzeventsproduction/"
                          target="_blank"
                          className="group block h-full"
                        >
                          <article className="relative flex aspect-4/5 flex-col justify-between overflow-hidden rounded-[1.75rem] bg-[linear-gradient(145deg,#833ab4_0%,#c13584_35%,#fd1d1d_68%,#fcb045_100%)] p-6 shadow-xl md:p-7">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.18),transparent_40%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                              <IconBrandInstagram className="h-8 w-8 text-white" />
                            </div>
                            <div className="relative z-10 space-y-3">
                              <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/70">
                                Instagram
                              </p>
                              <div>
                                <h4 className="text-3xl font-semibold tracking-tight text-white">
                                  Follow Us
                                </h4>
                                <p className="mt-2 text-sm text-white/80">
                                  @talentzeventsproduction
                                </p>
                              </div>
                            </div>
                          </article>
                        </Link>
                      );
                    }
                    return (
                      <Link
                        key={item.src}
                        href="https://www.instagram.com/talentzeventsproduction/"
                        target="_blank"
                        className="group block h-full"
                      >
                        <article className="relative aspect-4/5 overflow-hidden rounded-[1.75rem] bg-zinc-900 shadow-xl">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            width={400}
                            height={500}
                            quality={75}
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />
                        </article>
                      </Link>
                    );
                  })}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative z-30 mt-8 flex items-center justify-between gap-6 px-1">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleInstagramPrev}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10"
                aria-label="Previous Instagram post"
              >
                <IconChevronLeft className="h-5 w-5" stroke={1.5} />
              </button>
              <button
                type="button"
                onClick={handleInstagramNext}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10"
                aria-label="Next Instagram post"
              >
                <IconChevronRight className="h-5 w-5" stroke={1.5} />
              </button>
            </div>

            <div className="ml-auto flex w-32 flex-col items-end gap-2 md:w-40">
              <div className="text-[11px] font-medium tracking-[0.2em] text-white/45 tabular-nums">
                {instagramProgressLabel}
              </div>
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="absolute top-0 h-full rounded-full bg-white transition-[left,width] duration-300 ease-out"
                  style={{
                    left: `${Math.min(100 - instagramProgressWidth, progressPercent)}%`,
                    width: `${instagramProgressWidth}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Blog */}
      <section
        id="blog"
        className="py-12 md:py-16 bg-zinc-950 border-t border-white/5 relative z-10 w-full overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="News & Updates"
            title="Blogs & Updates"
            description="Stay informed with the latest updates on our inventory, product releases, and behind-the-scenes insights."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blog.map((item, index) => (
              <Link
                key={index}
                href={`/blog/${item.id}`}
                className="group relative flex flex-col justify-between bg-zinc-900/30 border border-white/5 p-1 rounded-[1.75rem] overflow-hidden transition-all duration-500 hover:bg-zinc-900/50 hover:border-white/10"
              >
                <div className="relative aspect-video overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="flex grow flex-col p-5 md:p-6">
                  <h3 className="mb-2 text-lg font-medium leading-[1.2] text-white">
                    {item.title}
                  </h3>
                  <p className="grow line-clamp-3 text-[13px] font-light leading-relaxed text-zinc-500">
                    {item.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="h-px grow bg-white/10 transition-colors group-hover:bg-white/20" />
                    <div className="ml-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all group-hover:bg-white group-hover:text-black">
                      <IconChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Testimonials */}
      <section
        id="testimonials"
        className="py-12 md:py-16 bg-zinc-950 border-t border-white/5 relative z-10 w-full overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Client Stories"
            title="Testimonials"
            description="100+ brands have trusted Talentz to elevate their events, environments, and production quality."
          />

          {/* Stacked Vertical Layout on Mobile, Masonry Grid on Desktop */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:space-x-0 pt-2 pb-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 min-w-[85vw] md:min-w-0 snap-center shrink-0">
              {/* Cloud 9 Testimonial (Active) */}
              <div className="bg-black border border-white/10 text-white p-5 md:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-3.5 h-3.5 text-[#ffffff] fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-light leading-relaxed text-zinc-300">
                    Working with Talentz has been a truly great experience so
                    far; they have an amazing team, a perfect environment and
                    true professionalism. None of their team members from labor
                    to managerial level has ever said no to any work or last
                    minute requests and would support and stand with us together
                    to achieve one goal that is CLIENT satisfaction. I highly
                    recommend them for future events in Oman and wish them a
                    great success in near future.
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-sm font-bold">
                    MEO
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Mosaic Events Oman</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">Yaseen Kamal</p>
                  </div>
                </div>
              </div>

              {/* Other testimonials preserved for future use */}
              {/*
              <div className="bg-zinc-900 border border-white/10 text-white p-5 md:p-7 flex flex-col justify-between h-[220px] shadow-sm">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4].map((star) => (
                      <svg
                        key={star}
                        className="w-3.5 h-3.5 text-[#ffffff] fill-current"
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
              */}
            </div>

            {/* Column 2 (commented for now) */}
            {/*
            <div className="flex flex-col gap-4 min-w-[85vw] md:min-w-0 snap-center shrink-0">
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
                        className="w-3.5 h-3.5 text-[#ffffff] fill-current"
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

            {/* Column 3 (commented for now) */}
            {/*
            <div className="flex flex-col gap-4 min-w-[85vw] md:min-w-0 snap-center shrink-0">
              <div className="bg-zinc-900 border border-white/10 text-white p-5 md:p-7 flex flex-col justify-between h-[240px] shadow-sm">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-3.5 h-3.5 text-[#ffffff] fill-current"
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

              <div className="bg-black border border-white/10 text-white p-5 md:p-7 flex flex-col justify-between h-[240px]">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4].map((star) => (
                      <svg
                        key={star}
                        className="w-3.5 h-3.5 text-[#ffffff] fill-current"
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
            */}
          </div>
        </div>
      </section>
      <section
        id="contact-us"
        className="py-12 md:py-16 bg-zinc-950 relative z-10 w-full border-t border-white/5 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.03)_0,transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-900/30 p-6 md:p-8 lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
              <div className="lg:w-[25%]">
                <div className="mb-4 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.42em] text-zinc-500">
                  <span className="h-7 w-px bg-white/60" />
                  <span>Start Your Journey</span>
                </div>
                <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
                  Let&apos;s Innovate
                  <br className="hidden md:block" /> Together
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
                  We deliver AV solutions for events including LED displays,
                  speaker systems, lighting design, staging, and end-to-end
                  production support.
                  <br />
                  <br />
                  Share your brief below and we&apos;ll get back to you.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-7 md:space-y-8 lg:w-[75%]"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                  <FloatingField
                    id="fullName"
                    label="Full Name*"
                    error={errors.fullName?.message}
                  >
                    <Input
                      {...register("fullName")}
                      id="fullName"
                      type="text"
                      placeholder=" "
                      aria-invalid={!!errors.fullName}
                      className={contactFieldClassName}
                    />
                  </FloatingField>

                  <FloatingField
                    id="email"
                    label="Email*"
                    error={errors.email?.message}
                  >
                    <Input
                      {...register("email")}
                      id="email"
                      type="email"
                      placeholder=" "
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      className={contactFieldClassName}
                    />
                  </FloatingField>

                  <div className="relative">
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <PhoneInput
                          {...field}
                          id="phone"
                          placeholder=" "
                          defaultCountry="OM"
                          className="peer flex h-12 w-full items-end border-0 border-b border-white/15 bg-transparent px-0 pb-2 pt-5 text-sm text-white transition-colors focus-within:border-white [&_.PhoneInputCountry]:mr-3 [&_.PhoneInputCountryIcon]:h-4 [&_.PhoneInputCountryIcon]:w-6 [&_.PhoneInputCountryIcon--border]:border-none [&_.PhoneInputCountryIconImg]:rounded-sm [&_.PhoneInputCountryIconImg]:object-cover [&_.PhoneInputInput]:w-full [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:placeholder:text-transparent [&_.PhoneInputCountrySelect]:bg-zinc-950 [&_.PhoneInputCountrySelect]:text-white"
                        />
                      )}
                    />
                    <label
                      htmlFor="phone"
                      className={cn(
                        "absolute top-3 cursor-text text-sm transition-all duration-200",
                        "peer-focus-within:-top-4 peer-focus-within:left-0 peer-focus-within:text-[11px] peer-focus-within:text-white",
                        phoneValue
                          ? "-top-4 left-0 text-[11px] text-zinc-400"
                          : "left-14 text-zinc-500",
                      )}
                    >
                      Phone*
                    </label>
                    {errors.phone ? (
                      <p className="mt-2 text-xs text-red-400">
                        {errors.phone?.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                  <FloatingField
                    id="company"
                    label="Company Name"
                    error={errors.company?.message}
                  >
                    <Input
                      {...register("company")}
                      id="company"
                      type="text"
                      placeholder=" "
                      className={contactFieldClassName}
                    />
                  </FloatingField>

                  <FloatingField
                    id="remark"
                    label="Remark"
                    error={errors.remark?.message}
                  >
                    <Textarea
                      {...register("remark")}
                      id="remark"
                      rows={1}
                      placeholder=" "
                      className={cn(
                        contactFieldClassName,
                        "min-h-[52px] resize-none pt-5",
                      )}
                    />
                  </FloatingField>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  <fieldset className="space-y-4">
                    <legend className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
                      I am an...
                    </legend>
                    <Controller
                      name="businessType"
                      control={control}
                      render={({ field }) => (
                        <div className="flex flex-wrap gap-2.5">
                          {businessTypeOptions.map((option) => {
                            const isActive = field.value === option;

                            return (
                              <Button
                                key={option}
                                type="button"
                                variant="ghost"
                                size="sm"
                                aria-pressed={isActive}
                                onClick={() => field.onChange(option)}
                                className={cn(
                                  "h-10 rounded-full border px-4 text-[13px] font-normal tracking-normal",
                                  isActive
                                    ? "border-white bg-white text-black hover:bg-zinc-100"
                                    : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/30 hover:bg-white/[0.08] hover:text-white",
                                )}
                              >
                                {option}
                              </Button>
                            );
                          })}
                        </div>
                      )}
                    />
                  </fieldset>
                </div>

                <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center">
                  <div className="space-y-2">
                    <Controller
                      name="terms"
                      control={control}
                      render={({ field }) => (
                        <label
                          htmlFor="terms"
                          className="group flex cursor-pointer items-start gap-3"
                        >
                          <Checkbox
                            id="terms"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            aria-invalid={!!errors.terms}
                            className="mt-0.5"
                          />
                          <span className="max-w-xl text-[13px] font-light leading-snug text-zinc-400 transition-colors group-hover:text-zinc-300">
                            I have read the Terms and Condition & Privacy Notice
                            agreement
                          </span>
                        </label>
                      )}
                    />
                    {errors.terms ? (
                      <p className="text-xs text-red-400">
                        {errors.terms.message}
                      </p>
                    ) : null}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-auto w-full rounded-sm border-0 bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200 disabled:opacity-60 md:w-auto md:px-12 md:py-3.5 md:text-sm"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-black text-white pt-16 pb-12 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-6">
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
                <span>
                  Sat-Thu: [ 9:00 AM - 1:00 PM ] & [ 2:30 PM - 6:00 PM ]
                </span>
              </div>
            </div>

            {/* Existing Footer Links, rendered horizontally to match the image's vibe */}
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

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] pointer-events-auto  transition-all duration-300 hover:bg-zinc-900 hover:border-white/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        {/* WhatsApp Floating Button */}
        <Link
          href="https://wa.me/96892252685"
          target="_blank"
          className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-transparent hover:bg-[#25D366]/10 transition-colors duration-300"
          title="WhatsApp Us"
        >
          <IconBrandWhatsapp
            className="w-6 h-6 md:w-7 md:h-7 text-[#25D366] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300"
            stroke={1.5}
          />
        </Link>

        {/* Divider */}
        <div className="w-px h-6 bg-white/10 mx-1"></div>

        {/* Contact Us Floating Button */}
        <Link
          href="#contact-us"
          className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-transparent hover:bg-white transition-colors duration-300"
          title="Contact Us"
        >
          <IconMail
            className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black group-hover:scale-110 transition-all duration-300"
            stroke={1.5}
          />
        </Link>
      </div>
    </main>
  );
}
