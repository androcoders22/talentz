import { Button } from "@/components/ui/button";

export function LatherBagCollection() {
  return (
    <section className="container mx-auto px-4 py-4 mb-4">
      <div className="relative bg-white rounded-[2rem] overflow-hidden min-h-[300px] md:min-h-[350px] flex items-center shadow-sm border border-black/5">
        {/* Background Image with Perfect Fade */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=800&fit=crop"
            alt="Event Production Background"
            className="absolute right-0 top-0 w-full md:w-[85%] h-full object-cover grayscale opacity-20 md:opacity-100"
          />
          {/* Multi-stage gradient to ensure no sharp lines */}
          <div className="absolute inset-0 bg-linear-to-r from-white from-25% via-white/90 via-45% to-transparent md:from-white md:from-30% md:via-white/80 md:via-50% md:to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 md:p-14 max-w-xl">
          <div className="inline-block px-3 py-1 bg-black text-white text-[9px] font-bold uppercase tracking-[0.2em] rounded-full mb-4 italic">
            World-Class Resources
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-3 text-black leading-[1.1]">
            Professional <br />
            <span className="font-bold">Event Production</span>
          </h2>
          <p className="text-xs md:text-sm text-black/60 mb-6 leading-relaxed max-w-sm">
            Oman's largest inventory of professional audiovisual equipment. From
            intimate gatherings to large-scale concerts.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="rounded-full px-6 py-4 h-auto font-bold uppercase tracking-widest text-[9px] bg-black text-white hover:bg-black/90 transition-all">
              Get a Quote
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6 py-4 h-auto font-bold uppercase tracking-widest text-[9px] border-black/10 text-black hover:bg-black/5 transition-all"
            >
              Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
