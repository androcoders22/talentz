"use client";

import Image from "next/image";
import {
  IconArrowRight,
  IconStarFilled,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconShoppingCart,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { Footer } from "@/components/Footer";
import { ShopCategoriesBar } from "@/components/ShopCategoriesBar";

export default function ShopPage() {
  return (
    <div className="text-[#1E1E1E] font-sans selection:bg-[#3B82F6]/30">
      <ShopCategoriesBar />
      <div className="container mx-auto px-4 space-y-4 pt-4">
        {/* Hero Section Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:h-[620px]">
          {/* Main Hero Card (Large White) */}
          <div className="lg:col-span-3 lg:row-span-2 bg-white rounded-[40px] py-6 md:py-10 px-4 md:px-5 relative overflow-hidden flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-[#EBECE9]">
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

              <div className="mt-10">
                <button className="bg-[#1E1E1E] hover:bg-[#333333] text-white pl-8 pr-2 py-2 rounded-full font-bold text-[13px] flex items-center gap-8 transition-all duration-300 group  active:scale-95">
                  View All Products
                  <div className="bg-[#3B82F6] text-white p-1.5 rounded-full group-hover:translate-x-1 transition-transform">
                    <IconArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>
            </div>

            {/* Hero Image Component */}
            <div className="absolute top-1/2 right-[-8%] -translate-y-1/2 w-[65%] h-[90%] z-10 pointer-events-none hidden md:block">
              <div className="relative w-full h-full flex items-center justify-center translate-y-8">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[14px_14px]" />
                <div className="absolute bottom-0 left-0 w-full h-[60%] " />
                <Image
                  src="/shop/hero-big.png"
                  alt="Sequoia Headphones"
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                  priority
                />
              </div>
            </div>

            <div className="relative z-20 mt-3 flex flex-col gap-4">
              <div className="flex gap-2.5">
                {[IconBrandTwitter, IconBrandInstagram, IconBrandLinkedin].map(
                  (Icon, idx) => (
                    <button
                      key={idx}
                      className="w-9 h-9 rounded-full bg-[#F3F5F2] flex items-center justify-center text-[#1E1E1E]/40 hover:text-[#1E1E1E] hover:bg-[#EBECE9] transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ),
                )}
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
                <IconArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Effect Processor Card */}
            <div className="row-span-7 bg-white rounded-[30px] p-5 shadow-sm border border-[#EBECE9] flex flex-col group overflow-hidden relative">
              <div className="flex justify-between items-start mb-1">
                <div className="p-2 bg-[#F3F5F2] rounded-lg group-hover:bg-[#3B82F6]/20 transition-colors duration-500">
                  <IconShoppingCart className="w-3.5 h-3.5 text-[#1E1E1E]/70" />
                </div>
                <button className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#EBECE9] text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white transition-all duration-300">
                  <IconArrowUpRight className="w-3.5 h-3.5" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:h-[260px]">
          {/* Bottom Left: Limited Drop Showcase */}
          <div className="bg-white rounded-[30px] p-8 shadow-sm border border-[#EBECE9] flex items-center justify-between group md:col-span-2 overflow-hidden relative">
            <div className="relative z-10 max-w-[380px] flex flex-col h-full gap-y-8">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-2.5 h-2.5 bg-[#EF4444] rounded-full animate-ping" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#EF4444]">
                    Limited Drop
                  </span>
                </div>
                <h3 className="font-bold text-4xl tracking-tighter leading-none whitespace-nowrap">
                  Midnight Sequoia
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-[#1E1E1E]/50 text-[13px] leading-relaxed">
                  Only 50 units worldwide. <br /> Masterfully crafted for
                  professionals & audio studios
                </p>
                <span className="text-2xl font-black tracking-tight">$429</span>
              </div>
            </div>

            {/* Overlapping Product Image */}
            <div className="absolute right-[-10%] top-[45%] -translate-y-1/2 w-[70%] h-[140%] -rotate-70 group-hover:scale-105 transition-all duration-700 pointer-events-none">
              <Image
                src="/shop/midnight-violin.jpg"
                alt="Midnight Sequoia Violin"
                fill
                className="object-contain"
              />
            </div>

            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#3B82F6]/5 blur-[80px] rounded-full" />
          </div>

          {/* Behringer Card */}
          <div className="bg-white rounded-[30px] p-4 shadow-sm border border-[#EBECE9] flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10 flex justify-between items-start">
              <div className="bg-[#FFF4E5] text-[#F5A623] px-2 py-0.5 rounded-full flex items-center gap-1.5 border border-[#F5A623]/10">
                <div className="w-1 h-1 bg-[#F5A623] rounded-full animate-pulse" />
                <span className="text-[7px] font-black uppercase tracking-[0.15em]">
                  Classic
                </span>
              </div>
              <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#EBECE9] text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white transition-all duration-300">
                <IconArrowUpRight className="w-3 h-3" />
              </button>
            </div>

            <div className="relative w-full grow mt-1 transform group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-1">
                <Image
                  src="/shop/behringer-hero.png"
                  alt="Behringer Pro Studio Audio"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex justify-between items-start gap-2">
                <h3 className="relative z-10 font-bold text-base tracking-tight leading-tight">
                  Behringer Pro Studio Audio
                </h3>
                <div className="flex items-center gap-1 text-[8px] font-black text-[#1E1E1E]/50 shrink-0 mt-0.5">
                  <IconStarFilled className="w-2 h-2 text-[#F5A623]" />
                  <span>4.8</span>
                </div>
              </div>
            </div>
          </div>

          {/* Roland V-Drums Card */}
          <div className="bg-white rounded-[30px] p-4 shadow-sm border border-[#EBECE9] flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10 flex justify-between items-start">
              <div className="bg-[#E6F0FF] text-[#3B82F6] px-2 py-0.5 rounded-full flex items-center gap-1.5 border border-[#3B82F6]/10">
                <div className="w-1 h-1 bg-[#3B82F6] rounded-full animate-pulse" />
                <span className="text-[7px] font-black uppercase tracking-[0.15em]">
                  Roland V-Drums
                </span>
              </div>
              <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#EBECE9] text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white transition-all duration-300">
                <IconArrowUpRight className="w-3 h-3" />
              </button>
            </div>

            <div className="relative w-full grow mt-1 transform group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-3">
                <Image
                  src="/shop/bottom-right-hero.png"
                  alt="Roland V-Drums TD516"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex justify-between items-start gap-2">
                <h3 className="relative z-10 font-bold text-base tracking-tight leading-tight">
                  Roland V-Drums TD516
                </h3>
                <div className="flex items-center gap-1 text-[8px] font-black text-[#1E1E1E]/50 shrink-0 mt-0.5">
                  <IconStarFilled className="w-2 h-2 text-[#F5A623]" />
                  <span>4.9</span>
                </div>
              </div>
              <p className="text-[8px] text-[#1E1E1E]/40 font-medium leading-tight mt-1 line-clamp-2">
                5-piece Electronic Drum Set with V51 Module, 18" Ride & Premium
                Mesh
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
