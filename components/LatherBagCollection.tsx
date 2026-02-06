import { Button } from "@/components/ui/button";

export function LatherBagCollection() {
  return (
    <section className="container mx-auto px-4 py-4 mb-4">
      <div className="bg-yellow-50/50 rounded-[2rem] p-8 md:p-14 relative overflow-hidden">
        <div className="max-w-md relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Best Lather Bag
            <br />
            Collection For You
          </h2>
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            Exclusive leather bags collection curated for your style and
            functionality needs.
          </p>
          <Button
            variant="outline"
            className="rounded-full px-6 py-2.5 h-auto font-bold uppercase tracking-widest text-[10px] border-foreground/20 hover:bg-foreground hover:text-background transition-colors"
          >
            Order Now
          </Button>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden md:flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10 scale-125" />
            <img
              src="https://placehold.co/600x600?text=Premium+Bag"
              alt="Leather Bag"
              className="max-w-xs drop-shadow-2xl transition-transform hover:scale-110 duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
