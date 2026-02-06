import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconArrowRight } from "@tabler/icons-react";

export function Hero() {
  return (
    <section className="container mx-auto px-4 pt-12 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight">
          Access to high-Quality,
          <br />
          <span className="font-bold">Eco-Friendly</span> products
          <br />
          and services{" "}
          <IconArrowRight className="inline-block h-12 w-12 ml-2" />
        </h1>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex -space-x-3 overflow-hidden">
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover"
              src="https://placehold.co/100x100"
              alt="User"
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover"
              src="https://placehold.co/100x100"
              alt="User"
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover"
              src="https://placehold.co/100x100"
              alt="User"
            />
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xs font-medium ring-2 ring-background">
              +
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm font-bold">500+</p>
            <p className="text-xs text-muted-foreground">Happy Customers</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 h-[400px]">
        <div className="relative group overflow-hidden rounded-3xl bg-yellow-100 flex-4">
          <img
            src="https://placehold.co/600x400"
            alt="Product"
            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute top-4 right-4">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-white/50 backdrop-blur border-none hover:bg-white/70"
            >
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/90 backdrop-blur p-4 rounded-2xl">
              <p className="text-base font-semibold">
                Get up to 5% off discounts
              </p>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-3xl bg-blue-100 flex-3">
          <img
            src="https://placehold.co/400x400"
            alt="Product"
            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute top-4 right-4">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-white/50 backdrop-blur border-none hover:bg-white/70"
            >
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/90 backdrop-blur p-4 rounded-2xl">
              <p className="text-base font-semibold">Soothing Cap comfort</p>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-3xl bg-orange-100 flex-3">
          <img
            src="https://placehold.co/400x400"
            alt="Product"
            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute top-4 right-4">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-white/50 backdrop-blur border-none hover:bg-white/70"
            >
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/90 backdrop-blur p-4 rounded-2xl">
              <p className="text-base font-semibold">Wave rubber shoes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
