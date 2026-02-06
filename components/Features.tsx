import { Button } from "@/components/ui/button";

export function Features() {
  return (
    <section className="container mx-auto px-4 pt-4 pb-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-[#fef3eb] p-6 rounded-[1.5rem] flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="text-xl font-bold mb-2">100% Authentic Product</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Prominently display a clear "100% Authentic Guarantee"
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full px-4 py-1.5 w-fit bg-white hover:bg-muted text-[10px] text-foreground border-muted-foreground/10 self-end mt-2 h-auto"
          >
            See More
          </Button>
        </div>

        {/* Card 2 */}
        <div className="bg-muted/20 p-6 rounded-[1.5rem] flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="text-xl font-bold mb-2">Free & Easy Return</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Provide customers with prepaid return labels hassle-free.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full px-4 py-1.5 w-fit bg-white hover:bg-muted text-[10px] text-foreground border-muted-foreground/10 self-end mt-2 h-auto"
          >
            See More
          </Button>
        </div>

        {/* Card 3 */}
        <div className="bg-muted/20 p-6 rounded-[1.5rem] flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="text-xl font-bold mb-2">Safe Payments</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Use fraud detection tools to identify suspicious activity.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full px-4 py-1.5 w-fit bg-white hover:bg-muted text-[10px] text-foreground border-muted-foreground/10 self-end mt-2 h-auto"
          >
            See More
          </Button>
        </div>

        {/* Card 4 - Summer Cloth */}
        <div className="relative group overflow-hidden rounded-[1.5rem] min-h-[220px]">
          <img
            src="https://placehold.co/600x600"
            alt="Summer Cloth"
            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute inset-x-6 bottom-6">
            <h3 className="text-2xl font-bold text-white leading-tight">
              Summer
              <br />
              Cloth
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
