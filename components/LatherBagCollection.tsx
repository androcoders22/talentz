import { Button } from "@/components/ui/button";

export function LatherBagCollection() {
  return (
    <section className="container mx-auto px-4 py-4 mb-4">
      <div className="bg-slate-900 rounded-[2rem] p-8 md:p-14 relative overflow-hidden">
        <div className="max-w-md relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
            Professional Event
            <br />
            Production Services
          </h2>
          <p className="text-xs text-white/70 mb-6 leading-relaxed">
            From sound and lighting to LED screens and staging, we provide
            everything you need for a successful event in Oman.
          </p>
          <Button
            variant="outline"
            className="rounded-full px-6 py-2.5 h-auto font-bold uppercase tracking-widest text-[10px] border-white/20 text-white hover:bg-white hover:text-black transition-colors"
          >
            Get a Quote
          </Button>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden md:flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-40 -z-10 scale-125" />
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=600&fit=crop"
              alt="Event Production"
              className="max-w-xs drop-shadow-2xl transition-transform hover:scale-110 duration-700 rounded-2xl opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
