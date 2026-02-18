"use client";

import Image from "next/image";
import {
  MoveRight,
  Play,
  Star,
  Twitter,
  Instagram,
  Linkedin,
  ShoppingCart,
  Plus,
  ArrowUpRight,
} from "lucide-react";
import { Footer } from "@/components/Footer";

export default function ShopPage() {
  return (
    <div className="text-[#1E1E1E] font-sans selection:bg-[#3B82F6]/30">
      <div className="container mx-auto px-4 space-y-4 pt-4">
        {/* Hero Section Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:h-[620px]">
          {/* Main Hero Card (Large White) */}
          <div className="lg:col-span-3 lg:row-span-2 bg-white rounded-[40px] p-6 md:p-10 relative overflow-hidden flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-[#EBECE9]">
            <div className="relative z-20 flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-[#1E1E1E] rounded flex items-center justify-center p-1">
                <div className="w-full h-full bg-white rounded-[1px] rotate-45 transform origin-center" />
              </div>
              <span className="font-bold text-xs uppercase tracking-[0.15em] text-[#1E1E1E]/80">
                Music is Classic
              </span>
            </div>

            <div className="relative z-20 max-w-2xl">
              <h1 className="text-5xl md:text-[96px] font-bold tracking-[-0.05em] leading-[0.9] text-[#1E1E1E]">
                Sequoia <br />
                Inspiring <br />
                Musico.
              </h1>

              <div className="mt-4 flex flex-col md:flex-row items-start gap-8">
                <div className="flex flex-col gap-1.5 pt-1.5">
                  <span className="text-[120px] font-medium text-[#1E1E1E]/5 leading-none tracking-tighter">
                    01
                  </span>
                </div>

                <div className="max-w-[320px] space-y-2 pt-12">
                  <h3 className="font-bold text-xl tracking-tight">
                    Clear Sounds
                  </h3>
                  <p className="text-[#1E1E1E]/50 text-[15px] leading-[1.6]">
                    Making your dream music come true stay with Sequoias Sounds!
                    Get the best studio gear from Sweetwater.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <button className="bg-[#1E1E1E] hover:bg-[#333333] text-white px-6 py-2.5 rounded-full font-medium text-sm flex items-center gap-4 transition-all duration-300 group shadow-xl active:scale-95">
                  View All Products
                  <div className="bg-[#3B82F6] text-white p-1 rounded-full group-hover:translate-x-1 transition-transform">
                    <MoveRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>
            </div>

            {/* Hero Image Component */}
            <div className="absolute top-1/2 right-[-8%] -translate-y-1/2 w-[65%] h-[90%] z-10 pointer-events-none hidden md:block">
              <div className="relative w-full h-full flex items-center justify-center translate-y-8">
                <Image
                  src="/shop/hero-big.png"
                  alt="Sequoia Headphones"
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                  priority
                />
              </div>
            </div>

            <div className="relative z-20 mt-8 flex items-center gap-4">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1E1E1E]/30">
                Follow us on:
              </span>
              <div className="flex gap-3">
                {[Twitter, Instagram, Linkedin].map((Icon, idx) => (
                  <button
                    key={idx}
                    className="w-8 h-8 rounded-full bg-[#F3F5F2] flex items-center justify-center text-[#1E1E1E]/40 hover:text-[#1E1E1E] hover:bg-[#EBECE9] transition-all duration-300"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column Grid */}
          <div className="lg:col-span-1 lg:row-span-2 grid grid-rows-12 gap-4 h-full">
            {/* Drum Kit Card */}
            <div className="row-span-5 bg-white rounded-[30px] p-5 shadow-sm border border-[#EBECE9] flex flex-col justify-between group overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="font-bold text-lg tracking-tighter leading-none mb-0.5">
                  Pro Studio <br /> Drum Kit
                </h3>
                <p className="text-[9px] font-bold text-[#1E1E1E]/30 uppercase tracking-widest">
                  Sequoia Signature
                </p>
              </div>

              <div className="relative w-full aspect-square mt-1 transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/shop/hero-drum.jpg"
                  alt="Pro Studio Drum Kit"
                  fill
                  className="object-contain"
                />
              </div>

              <button className="absolute bottom-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#EBECE9] text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white transition-all duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Effect Processor Card */}
            <div className="row-span-7 bg-white rounded-[30px] p-5 shadow-sm border border-[#EBECE9] flex flex-col group overflow-hidden relative">
              <div className="flex justify-between items-start mb-1">
                <div className="p-2 bg-[#F3F5F2] rounded-lg group-hover:bg-[#3B82F6]/20 transition-colors duration-500">
                  <ShoppingCart className="w-3.5 h-3.5 text-[#1E1E1E]/70" />
                </div>
                <button className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#EBECE9] text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="relative w-full grow mt-1 transform group-hover:scale-105 transition-transform duration-700">
                <div className="absolute inset-8">
                  <Image
                    src="/shop/effect-processor-hero.jpg"
                    alt="Digital Effect Processor"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-3 space-y-0.5 relative z-10">
                <h3 className="font-bold text-base tracking-tight leading-none">
                  Digital Effect <br /> Processor
                </h3>
                <p className="text-[8px] font-bold text-[#1E1E1E]/20 uppercase tracking-widest pt-0.5">
                  Precision Audio Processing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Row Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:h-[320px]">
          {/* Merged Products & Social Proof Card */}
          <div className="bg-white rounded-[30px] p-5 shadow-sm border border-[#EBECE9] grid grid-cols-1 md:grid-cols-2 gap-8 group md:col-span-2 relative overflow-hidden">
            {/* More Products Section */}
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-sm">More Products</h3>
                <span className="text-[9px] font-bold text-[#1E1E1E]/30 uppercase tracking-widest">
                  460+ items
                </span>
              </div>
              <div className="flex gap-2 flex-grow">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex-1 aspect-square bg-[#F3F5F2] rounded-lg p-2 overflow-hidden relative border border-[#EBECE9]/50"
                  >
                    <Image
                      src={`https://placehold.co/100x100/transparent/1E1E1E/png?text=Item`}
                      alt="Item"
                      fill
                      className="object-contain p-1 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
                <div className="flex-1 aspect-square bg-[#1E1E1E] rounded-lg flex items-center justify-center text-white text-[9px] font-bold ring-4 ring-[#F3F5F2] group-hover:bg-[#1E1E1E]/90 transition-colors">
                  +455
                </div>
              </div>
            </div>

            {/* Separator for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-5 bottom-5 w-px bg-[#EBECE9]" />

            {/* Social Proof Section */}
            <div className="flex flex-col justify-between">
              <div className="relative z-10">
                <div className="flex -space-x-2 mb-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-white bg-[#EBECE9] overflow-hidden group-hover:translate-x-0.5 transition-transform"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <Image
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Avatar${i}`}
                        alt="Avatar"
                        width={28}
                        height={28}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-[28px] font-bold tracking-tighter leading-none mb-0.5">
                    5m+
                  </span>
                  <span className="text-[10px] font-bold text-[#1E1E1E]/30 uppercase tracking-[0.1em]">
                    Downloads
                  </span>
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-1.5 bg-[#F3F5F2] self-start px-2.5 py-1 rounded-full mt-3">
                <Star className="w-2 h-2 fill-[#F5A623] text-[#F5A623]" />
                <span className="text-[9px] font-black">4.6 reviews</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#4A90E2] rounded-full blur-[60px] opacity-[0.05] pointer-events-none" />
          </div>

          {/* Behringer Card */}
          <div className="bg-white rounded-[30px] p-5 shadow-sm border border-[#EBECE9] flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10 flex justify-between items-start">
              <div className="bg-[#FFF4E5] text-[#F5A623] px-2 py-0.5 rounded-full flex items-center gap-1.5 border border-[#F5A623]/10">
                <div className="w-1 h-1 bg-[#F5A623] rounded-full animate-pulse" />
                <span className="text-[7px] font-black uppercase tracking-[0.15em]">
                  Classic
                </span>
              </div>
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#EBECE9] text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white transition-all duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="relative w-full flex-grow mt-1 transform group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-2">
                <Image
                  src="/shop/behringer-hero.png"
                  alt="Behringer Pro Studio Audio"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-auto">
              <h3 className="relative z-10 font-bold text-lg tracking-tight leading-tight">
                Behringer Pro Studio Audio
              </h3>

              <div className="relative z-10 mt-2 flex justify-between items-center">
                <button className="w-7 h-7 bg-[#3B82F6] rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md">
                  <Play className="w-3 h-3 text-white fill-white" />
                </button>
                <div className="flex items-center gap-1 text-[9px] font-black text-[#1E1E1E]/50">
                  <Star className="w-2 h-2 fill-[#F5A623] text-[#F5A623]" />
                  <span>4.8</span>
                </div>
              </div>
            </div>
          </div>

          {/* Promo Card (Black) */}
          <div className="bg-[#1E1E1E] rounded-[30px] p-5 shadow-2x flex flex-col justify-between text-white relative overflow-hidden group">
            <div className="relative z-10 space-y-1">
              <h3 className="font-bold text-[22px] tracking-tighter leading-none text-[#3B82F6]">
                Studio Gear
              </h3>
              <p className="text-white/40 text-[10px] leading-relaxed max-w-[130px]">
                Professional audio equipment from Sweetwater.
              </p>
            </div>

            <button className="relative z-10 mt-auto bg-white text-[#1E1E1E] px-6 py-2 rounded-full font-black text-[9px] hover:bg-[#3B82F6] hover:text-white transition-all active:scale-95 w-fit shadow-lg uppercase tracking-widest">
              Explore
            </button>

            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
              <div className="absolute top-[-10%] right-[-10%] w-48 h-48 border border-white/20 rounded-full" />
            </div>
          </div>
        </div>

        {/* Trending Gear Section */}
        <section className="pt-6 space-y-6">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tighter text-[#1E1E1E]">
                Trending Gear
              </h2>
              <p className="text-[#1E1E1E]/40 text-xs font-medium">
                Curated top picks from the latest Sweetwater collection.
              </p>
            </div>
            <button className="group flex items-center gap-2 font-black text-[9px] uppercase tracking-[0.2em] text-[#1E1E1E]/60 hover:text-[#1E1E1E] transition-colors">
              View All
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-[#EBECE9] group-hover:bg-[#1E1E1E] group-hover:text-white transition-all text-xs">
                <MoveRight className="w-3 h-3" />
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Gibson Les Paul",
                sub: "Standard '60s Electric",
                price: "$2,799",
                color: "#F5A623",
                tag: "Top Seller",
              },
              {
                title: "Taylor 214ce",
                sub: "Grand Auditorium Acoustic",
                price: "$1,399",
                color: "#4A90E2",
                tag: "Award Winning",
              },
              {
                title: "Shure SM7B",
                sub: "Vocal Mic & Filter",
                price: "$399",
                color: "#1E1E1E",
                tag: "Essential",
              },
            ].map((product, i) => (
              <div
                key={i}
                className="bg-white rounded-[30px] p-6 shadow-sm border border-[#EBECE9] group hover:shadow-lg hover:shadow-[#1E1E1E]/5 transition-all duration-500 flex flex-col h-[400px]"
              >
                <div className="flex justify-between items-start mb-1">
                  <div className="space-y-0.5">
                    <h3 className="font-bold text-xl tracking-tighter leading-none">
                      {product.title}
                    </h3>
                    <p className="text-[11px] text-[#1E1E1E]/40 font-medium">
                      {product.sub}
                    </p>
                  </div>
                  <div
                    className="px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest bg-[#F3F5F2] border border-[#EBECE9]"
                    style={{ color: product.color }}
                  >
                    {product.tag}
                  </div>
                </div>

                <div className="relative grow my-4 group-hover:scale-105 transition-transform duration-700">
                  <Image
                    src={`https://placehold.co/600x600/transparent/1E1E1E/png?text=${product.title.split(" ")[0]}`}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-[#F3F5F2]">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-[#1E1E1E]/30 uppercase tracking-[0.15em]">
                      Price From
                    </span>
                    <span className="text-[24px] font-black tracking-tighter text-[#1E1E1E]">
                      {product.price}
                    </span>
                  </div>
                  <button className="w-11 h-11 bg-[#1E1E1E] text-white rounded-full flex items-center justify-center hover:bg-[#3B82F6] transition-all transform active:scale-90 shadow-md">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Grid */}
        <section className="pt-8 pb-8 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h2 className="text-3xl font-bold tracking-tighter">
              Shop by Category
            </h2>
            <p className="text-[#1E1E1E]/40 text-xs font-medium">
              Explore professional equipment across all musical genres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: "Guitars",
                items: "1,200+ Products",
                bg: "#3B82F6",
                color: "white",
                img: "Guitars",
              },
              {
                name: "Keyboards",
                items: "850+ Products",
                bg: "white",
                color: "#1E1E1E",
                img: "Keys",
              },
              {
                name: "Studio",
                items: "1,400+ Products",
                bg: "#1E1E1E",
                color: "white",
                img: "Studio",
              },
              {
                name: "Live Sound",
                items: "600+ Products",
                bg: "white",
                color: "#1E1E1E",
                img: "Live",
              },
            ].map((cat, idx) => (
              <div
                key={idx}
                className={`rounded-[30px] p-6 h-56 relative overflow-hidden group cursor-pointer border ${cat.bg === "white" ? "border-[#EBECE9]" : "border-transparent"} flex flex-col shadow-sm hover:shadow-lg transition-all duration-500`}
                style={{ backgroundColor: cat.bg, color: cat.color }}
              >
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold tracking-tighter">
                      {cat.name}
                    </h3>
                    <p
                      className={`text-[10px] font-bold uppercase tracking-widest mt-0.5 ${cat.color === "white" ? "text-white/40" : "text-[#1E1E1E]/30"}`}
                    >
                      {cat.items}
                    </p>
                  </div>
                  <button
                    className={`w-8 h-8 rounded-full border flex items-center justify-center group-hover:scale-110 transition-all ${cat.color === "white" ? "border-white/20" : "border-black/5"}`}
                  >
                    <MoveRight className="w-4 h-4" />
                  </button>
                </div>

                <div
                  className={`absolute bottom-[-10%] right-[-5%] w-32 h-32 opacity-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 pointer-events-none`}
                >
                  <Image
                    src={`https://placehold.co/400x400/transparent/${cat.color === "white" ? "FFFFFF" : "1E1E1E"}/png?text=${cat.img}`}
                    alt={cat.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
