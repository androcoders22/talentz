import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const products = [
  {
    id: 1,
    name: "Stellar TX-1940 Zoom",
    rating: 4.9,
    image: "/steller-tx-1940-zoom.jpg",
  },
  {
    id: 2,
    name: "Avid S6L Console",
    rating: 5.0,
    image: "/avid-s6l.png",
  },
  {
    id: 3,
    name: "Sennheiser HD 1000",
    rating: 4.8,
    image: "/hz1000.jpeg",
  },
  {
    id: 4,
    name: "GrandMA3 Lighting Console",
    rating: 4.9,
    image: "/grandMA3.png",
  },
];

export function TopSelling() {
  return (
    <section className="container mx-auto px-4 py-8 border-t border-muted">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-8">
        <div className="max-w-xl">
          <Badge className="mb-4">Official Distributor</Badge>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground">
            Top-Selling Gear
            <br />
            of the Year Collection
          </h2>
        </div>
        <div className="max-w-xs md:text-left mt-4 md:mt-10">
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Discover our most popular musical instruments and professional audio
            equipment trusted by artists across Oman.
          </p>
          <Button
            variant="outline"
            className="rounded-full px-6 py-4 h-auto text-xs font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            Explore All
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="flex justify-end mb-6 gap-2">
          <div className="bg-muted/30 rounded-full p-1 flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-7 w-7 hover:bg-background"
            >
              <IconChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-7 w-7 hover:bg-background"
            >
              <IconChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer flex flex-col justify-end"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white mb-4 h-[300px] transition-all duration-1000 ease-in-out group-hover:h-[400px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold text-base text-foreground truncate mr-2">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground whitespace-nowrap">
                  Search for details
                </p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-[10px]">★</span>
                <span className="text-[10px] text-muted-foreground">
                  ({product.rating})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block px-6 py-2 rounded-full text-sm font-medium border border-muted-foreground/20 bg-background text-foreground shadow-sm ${className}`}
    >
      {children}
    </span>
  );
}
