import { Button } from "@/components/ui/button";

export function Features() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-orange-50 p-8 rounded-3xl flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">100% Authentic Product</h3>
            <p className="text-sm text-muted-foreground mb-6">
              We ensure that all our products are 100% authentic and high
              quality.
            </p>
          </div>
          <Button
            variant="link"
            className="p-0 h-auto self-start border border-foreground/20 rounded-full px-4 py-1 text-xs uppercase font-bold"
          >
            See More
          </Button>
        </div>

        <div className="bg-blue-50 p-8 rounded-3xl flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Free & Easy Return</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Shop with confidence with our free and easy return policy.
            </p>
          </div>
          <Button
            variant="link"
            className="p-0 h-auto self-start border border-foreground/20 rounded-full px-4 py-1 text-xs uppercase font-bold"
          >
            See More
          </Button>
        </div>

        <div className="bg-green-50 p-8 rounded-3xl flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Safe Payments</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Your payments are always safe and secure with our multiple payment
              options.
            </p>
          </div>
          <Button
            variant="link"
            className="p-0 h-auto self-start border border-foreground/20 rounded-full px-4 py-1 text-xs uppercase font-bold"
          >
            See More
          </Button>
        </div>

        <div className="relative group overflow-hidden rounded-3xl aspect-square">
          <img
            src="https://placehold.co/400x400"
            alt="Summer Cloth"
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
              Summer
              <br />
              Cloth
            </h3>
            <div className="absolute top-4 right-4 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-[10px] font-bold rotate-12">
              25% OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
