import { Button } from "@/components/ui/button";
import {
  IconChevronLeft,
  IconChevronRight,
  IconArrowUpRight,
} from "@tabler/icons-react";

const products = [
  {
    id: 1,
    name: "Roland TD-17KVX2 V-Drums",
    price: "OMR 645",
    rating: 4.9,
    image:
      "https://img.freepik.com/free-photo/man-plays-acoustic-guitar-closeup_169016-20618.jpg",
  },
  {
    id: 2,
    name: "Ibanez JEM7V Steve Vai",
    price: "OMR 890",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?w=400&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Yamaha C40 Classical",
    price: "OMR 55",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=500&fit=crop",
  },
  {
    id: 4,
    name: "Sennheiser EW-D wireless",
    price: "OMR 245",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=400&fit=crop",
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
              <div className="relative overflow-hidden rounded-[2.5rem] bg-muted mb-4 h-[300px] transition-all duration-1000 ease-in-out group-hover:h-[400px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold text-base text-foreground truncate mr-2">
                  {product.name}
                </h3>
                <p className="font-bold text-base">{product.price}</p>
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
