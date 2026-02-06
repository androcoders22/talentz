import { Button } from "@/components/ui/button";

export function Features() {
  return (
    <section className="container mx-auto px-4 pt-4 pb-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-[#fef3eb] p-6 rounded-[1.5rem] flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="text-xl font-bold mb-2">100% Original Products</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We guarantee 100% authentic gear from world-renowned brands.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full px-4 py-1.5 w-fit bg-white hover:bg-muted text-[10px] text-foreground border-muted-foreground/10 self-end mt-2 h-auto"
          >
            Our Brands
          </Button>
        </div>

        {/* Card 2 */}
        <div className="bg-muted/20 p-6 rounded-[1.5rem] flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="text-xl font-bold mb-2">Professional Support</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Expert technicians available for all your service and repair
              needs.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full px-4 py-1.5 w-fit bg-white hover:bg-muted text-[10px] text-foreground border-muted-foreground/10 self-end mt-2 h-auto"
          >
            Get Help
          </Button>
        </div>

        {/* Card 3 */}
        <div className="bg-muted/20 p-6 rounded-[1.5rem] flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="text-xl font-bold mb-2">Oman-wide Delivery</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Fast and secure shipping across the Sultanate of Oman.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full px-4 py-1.5 w-fit bg-white hover:bg-muted text-[10px] text-foreground border-muted-foreground/10 self-end mt-2 h-auto"
          >
            Shipping Info
          </Button>
        </div>

        {/* Card 4 - Music Institute */}
        <div className="relative group overflow-hidden rounded-[1.5rem] min-h-[220px] bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=600&fit=crop"
            alt="Music Institute"
            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110 opacity-60"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-x-6 bottom-6">
            <h3 className="text-2xl font-bold text-white leading-tight">
              Music
              <br />
              Institute
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
