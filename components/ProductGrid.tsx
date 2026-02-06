"use client";

const products = [
  {
    id: 1,
    name: "Roland Fantom-08 Synthesizer",
    price: "OMR 845.000",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1593106410288-caf65eca7c9d?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Sennheiser MD 421-II",
    price: "OMR 155.000",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Kawai KDP120 Digital Piano",
    price: "OMR 425.000",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Yamaha HS5 Studio Monitor",
    price: "OMR 120.000",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=400&h=400&fit=crop",
  },
];

export function ProductGrid() {
  return (
    <section className="container mx-auto px-4 pt-4 pb-12">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
          <div>
            <h2 className="text-3xl font-bold">Featured Equipment</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-square bg-muted/40 rounded-2xl overflow-hidden mb-3 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold text-sm truncate mr-2">
                  {product.name}
                </h3>
                <p className="font-bold text-sm whitespace-nowrap">
                  {product.price}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-[10px]">★</span>
                <span className="text-[10px] text-muted-foreground mr-auto">
                  ({product.rating})
                </span>
                <span className="text-[10px] text-muted-foreground hover:text-foreground cursor-pointer underline underline-offset-2">
                  Details
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
