"use client";

const products = [
  {
    id: 1,
    name: "Kawai KDP120 Digital Piano",
    category: "Pianos & Keyboards",
    brand: "Kawai",
    price: "OMR 425.000",
    rating: 5,
    image:
      "https://www.kawai-global.com/mgr/wp-content/uploads/2021/04/img_kdp120_sound_speakers.jpg",
  },
  {
    id: 2,
    name: "Shure SM58 Vocal Microphone",
    category: "Pro Audio",
    brand: "Shure",
    price: "OMR 45.000",
    rating: 5,
    image: "/bose-mic.jpg",
  },
  {
    id: 3,
    name: "Boss Katana-100 MkII Amp",
    category: "Guitars & Amps",
    brand: "Boss",
    price: "OMR 185.000",
    rating: 5,
    image:
      "https://www.bax-shop.nl/blog/wp-content/uploads/2021/12/blog_katana.jpg",
  },
  {
    id: 4,
    name: "Presonus AudioBox USB 96",
    category: "Studio Recording",
    brand: "Presonus",
    price: "OMR 55.000",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/81p3lhVaOEL._SL1500_.jpg",
  },
];

export function ProductGrid() {
  return (
    <section className="container mx-auto px-4 pt-4 pb-12">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Equipment
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Professional tools for musicians and audio engineers in Oman
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white shadow-sm border border-black/5 rounded-3xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-black/3 hover:border-black/10 flex flex-col"
            >
              <div className="aspect-square bg-muted/40 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-black text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {product.brand}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <div className="mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mb-1 block">
                    {product.category}
                  </span>
                  <h3 className="font-bold text-base text-black group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </div>

                <div className="mt-auto pt-4 border-t border-black/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">
                      Price
                    </p>
                    <p className="font-black text-black text-sm">
                      {product.price}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-0.5 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-[10px]">
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-[9px] text-muted-foreground font-medium uppercase tracking-tighter cursor-pointer hover:text-black transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
