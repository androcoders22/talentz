import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="container mx-auto px-4 pt-8 md:pt-12 pb-10">
      <div className="flex flex-col items-start mb-4 md:mb-8">
        <h1 className="tracking-tight leading-[1.05] font-sans">
          <span className="font-bold -tracking-tight text-[3rem] sm:text-[4rem] md:text-[4.8rem] text-gray-900 block mb-3 md:mb-4">
            TALENTZ
          </span>

          <span className="text-[1.5rem] sm:text-[1.9rem] md:text-[2.2rem] text-gray-800 block mb-2 md:mb-3">
            Ready for Every Stage.
          </span>

          <span className="text-gray-800/90 text-xl sm:text-2xl md:text-4xl">
            AVL Rentals, Pro Audio, Music Gears.
          </span>
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
