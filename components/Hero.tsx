import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { RainbowButton } from "./ui/rainbow-button";

export function Hero() {
  return (
    <section className="container mx-auto px-4 pt-8 md:pt-12 pb-10">
      <div className="flex flex-col items-start mb-4 md:mb-8 gap-8">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.1]"
          // style={{
          //   textShadow: "0 0 60px rgba(255,255,255,0.5)",
          // }}
        >
          <span className="font-extrabold tracking-widest text-[4.5rem] text-zinc-900 block mb-3 lg:mb-5">
            TALENTZ
          </span>
          <span className="font-semibold text-[3.5rem] text-zinc-800 ">
            Ready for Every Stage.
          </span>
          <br />
          <span className="text-zinc-700">
            AVL Rentals, Pro Audio, Music Gears.
          </span>
          <IconArrowRight className="inline-block h-10 w-10 md:h-16 md:w-16 ml-1 md:ml-2 text-zinc-600 align-middle" />
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 h-auto md:h-100">
        {/* Event Production */}
        <Link
          href="/event-production"
          className="relative group overflow-hidden rounded-3xl bg-slate-900 md:flex-4 flex-1 min-h-75 md:min-h-0 block"
        >
          <img
            src="/production-hero.jpg"
            alt="Event Production"
            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105 opacity-60"
          />
          <div className="absolute top-4 right-4">
            <Button
              variant="secondary"
              size="icon"
              className="h-16 w-16 rounded-full bg-white/20 backdrop-blur border-none hover:bg-white/40 text-white pointer-events-none"
            >
              <IconArrowRight className="h-8 w-8 transition-transform duration-300 group-hover:-rotate-45" />
            </Button>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Event Production
            </h3>
            <p className="text-white/80 text-sm">
              World-class event production resources. Sound, Light, LED screens,
              tents, staging and more for events of all sizes.
            </p>
          </div>
        </Link>

        {/* Music Institute Oman */}
        <Link
          href="https://talentz-music-store.vercel.app"
          className="relative group overflow-hidden rounded-3xl bg-slate-900 md:flex-3 flex-1 min-h-75 md:min-h-0 block"
        >
          <img
            src="/DJ-hero.jpg"
            alt="Talentz Music Institute (TMI)"
            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105 opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
          <div className="absolute top-4 right-4">
            <Button
              variant="secondary"
              size="icon"
              className="h-16 w-16 rounded-full bg-white/20 backdrop-blur border-none hover:bg-white/40 text-white pointer-events-none"
            >
              <IconArrowRight className="transition-transform duration-300 group-hover:-rotate-45" />
            </Button>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">Music Store</h3>
            <p className="text-white/80 text-sm">
              Innovative music learning since 2002. Piano, Guitar, Violin, Drums
              & more with ABRSM & RSL exam preparation.
            </p>
          </div>
        </Link>

        {/* Service & Repairs */}
        <Link
          href="/###"
          className="relative group overflow-hidden rounded-3xl bg-slate-900 md:flex-3 flex-1 min-h-75 md:min-h-0 block"
        >
          <img
            src="/repair-hero.jpg"
            alt="Service & Repairs"
            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105 opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
          <div className="absolute top-4 right-4">
            <Button
              variant="secondary"
              size="icon"
              className="h-16 w-16 rounded-full bg-white/20 backdrop-blur border-none hover:bg-white/40 text-white pointer-events-none"
            >
              <IconArrowRight className="h-8 w-8 transition-transform duration-300 group-hover:-rotate-45" />
            </Button>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Distribution & Dealership
            </h3>
            <p className="text-white/80 text-sm">
              Expert repairs for Pro Audio, Lighting gear, LED Screens & musical
              instruments. Guitar luthier with 30+ years experience.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
