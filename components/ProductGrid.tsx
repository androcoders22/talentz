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
    <section className="container mx-auto px-4 py-20">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">Our All Products</h2>
        <p className="text-muted-foreground mb-8">
          Exclusive collections and trending items for you.
        </p>

        <Tabs defaultValue="shoes" className="w-full">
          <TabsList className="bg-transparent border gap-2 p-1 rounded-full mb-12">
            <TabsTrigger
              value="shoes"
              className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background"
            >
              Shoes
            </TabsTrigger>
            <TabsTrigger
              value="clothing"
              className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background"
            >
              Clothing
            </TabsTrigger>
            <TabsTrigger
              value="accessories"
              className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background"
            >
              Accessories
            </TabsTrigger>
            <TabsTrigger
              value="jewelry"
              className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background"
            >
              Jewelry
            </TabsTrigger>
          </TabsList>

          <TabsContent value="shoes">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="group">
                  <div className="aspect-square bg-muted/50 rounded-3xl overflow-hidden mb-4 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="font-bold">{product.price}</p>
                  </div>
                  <div className="flex text-yellow-400 text-sm">
                    {"★".repeat(product.rating)}
                    <span className="text-xs ml-2 text-muted-foreground hover:text-foreground cursor-pointer">
                      View Details
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent
            value="clothing"
            className="py-20 text-center text-muted-foreground"
          >
            Browse our clothing collection (coming soon)
          </TabsContent>
          <TabsContent
            value="accessories"
            className="py-20 text-center text-muted-foreground"
          >
            Browse our accessories collection (coming soon)
          </TabsContent>
          <TabsContent
            value="jewelry"
            className="py-20 text-center text-muted-foreground"
          >
            Browse our jewelry collection (coming soon)
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
