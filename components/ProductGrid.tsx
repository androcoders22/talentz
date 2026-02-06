"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Winter cloth collection",
    price: "$325.00",
    rating: 4,
    image: "https://placehold.co/400x400",
  },
  {
    id: 2,
    name: "One oil water fabric",
    price: "$230.00",
    rating: 4,
    image: "https://placehold.co/400x400",
  },
  {
    id: 3,
    name: "Handphone collection",
    price: "$145.00",
    rating: 4,
    image: "https://placehold.co/400x400",
  },
  {
    id: 4,
    name: "New shoes",
    price: "$359.00",
    rating: 4,
    image: "https://placehold.co/400x400",
  },
  {
    id: 5,
    name: "Fashionable women bag",
    price: "$740.00",
    rating: 4,
    image: "https://placehold.co/400x400",
  },
  {
    id: 6,
    name: "Luxury table lamp",
    price: "$210.00",
    rating: 4,
    image: "https://placehold.co/400x400",
  },
];

export function ProductGrid() {
  return (
    <section className="container mx-auto px-4 pt-4 pb-12">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
          <div>
            <h2 className="text-3xl font-bold">Our All Products</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {products.slice(0, 4).map((product) => (
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
