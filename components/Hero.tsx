import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconArrowRight } from "@tabler/icons-react";

export function Hero() {
  return (
    <section className="container mx-auto px-4 pt-12 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight">
          Oman's Premier
          <br />
          <span className="font-bold text-primary">Music & Event</span> Partner
          <br />
          since 2002{" "}
          <IconArrowRight className="inline-block h-12 w-12 ml-2 text-primary" />
        </h1>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex -space-x-3 overflow-hidden">
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover"
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&h=100&fit=crop"
              alt="User"
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover"
              src="https://images.unsplash.com/photo-1514525253361-bee8a487400e?w=100&h=100&fit=crop"
              alt="User"
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover"
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop"
              alt="User"
            />
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xs font-medium ring-2 ring-background">
              +
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm font-bold">20+ Years</p>
            <p className="text-xs text-muted-foreground">
              Of Excellence in Oman
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[400px]">
        {/* Event Production */}
        <div className="relative group overflow-hidden rounded-3xl bg-slate-900 md:flex-4 flex-1 min-h-[300px] md:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80"
            alt="Event Production"
            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105 opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
          <div className="absolute top-4 right-4">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-white/20 backdrop-blur border-none hover:bg-white/40 text-white"
            >
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Event Production
            </h3>
            <p className="text-white/80 text-sm">
              Rentals to make your events a reality: Sound, Light, LED screens
              and more!
            </p>
          </div>
        </div>

        {/* Music Institute Oman */}
        <div className="relative group overflow-hidden rounded-3xl bg-slate-900 md:flex-3 flex-1 min-h-[300px] md:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80"
            alt="Music Institute Oman"
            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105 opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
          <div className="absolute top-4 right-4">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-white/20 backdrop-blur border-none hover:bg-white/40 text-white"
            >
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Music Institute Oman
            </h3>
            <p className="text-white/80 text-sm">
              Affordable quality music lessons following ABRSM & Trinity
              curriculum.
            </p>
          </div>
        </div>

        {/* Service & Repairs */}
        <div className="relative group overflow-hidden rounded-3xl bg-slate-900 md:flex-3 flex-1 min-h-[300px] md:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
            alt="Service & Repairs"
            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105 opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
          <div className="absolute top-4 right-4">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-white/20 backdrop-blur border-none hover:bg-white/40 text-white"
            >
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Service & Repairs
            </h3>
            <p className="text-white/80 text-sm">
              Expert repairs of Professional Audio, Lighting gear, LED Screens
              and instruments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
