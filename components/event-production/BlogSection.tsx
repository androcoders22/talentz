"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";
import { DevToArticle } from "@/types/blog";
import { SectionHeader } from "./SectionHeader";

const staticBlog = [
  {
    id: "warehouse-restock",
    title: "Warehouse Restock: Popular Models Back in Inventory",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    description:
      "Our latest shipment has arrived and several high-demand models are now back in stock. This restock includes some of the most requested items from the past few months. Availability may be limited, so customers are encouraged to place orders early while inventory lasts.",
  },
];

export function BlogSection() {
  const [blogs, setBlogs] = useState<DevToArticle[]>([]);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=d3vshoaib",
        );
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoadingBlogs(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <section
      id="blog"
      className="py-12 md:py-16 bg-zinc-950 border-t border-white/5 relative z-10 w-full overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="News & Updates"
          title="Blogs & Updates"
          description="Stay informed with the latest updates on our inventory, product releases, and behind-the-scenes insights."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {isLoadingBlogs
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-zinc-900/30 border border-white/5 p-1 rounded-[1.75rem] overflow-hidden"
                >
                  <div className="aspect-video bg-white/5 rounded-[1.5rem]" />
                  <div className="p-5 md:p-6 space-y-4">
                    <div className="h-4 bg-white/10 rounded w-3/4" />
                    <div className="h-3 bg-white/5 rounded w-full" />
                    <div className="h-3 bg-white/5 rounded w-5/6" />
                  </div>
                </div>
              ))
            : blogs.length > 0
              ? blogs.map((item) => (
                  <Link
                    key={item.id}
                    href={`/blog/${item.id}`}
                    className="group relative flex flex-col justify-between bg-zinc-900/30 border border-white/5 p-1 rounded-[1.75rem] overflow-hidden transition-all duration-500 hover:bg-zinc-900/50 hover:border-white/10"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-[1.5rem]">
                      <Image
                        src={
                          item.cover_image ||
                          item.social_image ||
                          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                        }
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    </div>
                    <div className="flex grow flex-col p-5 md:p-6">
                      <h3 className="mb-2 text-lg font-medium leading-[1.2] text-white line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="grow line-clamp-3 text-[13px] font-light leading-relaxed text-zinc-500">
                        {item.description}
                      </p>
                      <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] text-zinc-600 uppercase tracking-wider">
                            {new Date(item.published_at).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              },
                            )}
                          </span>
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all group-hover:bg-white group-hover:text-black">
                          <IconChevronRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              : staticBlog.map((item, index) => (
                  <Link
                    key={index}
                    href={`/blog/${item.id}`}
                    className="group relative flex flex-col justify-between bg-zinc-900/30 border border-white/5 p-1 rounded-[1.75rem] overflow-hidden transition-all duration-500 hover:bg-zinc-900/50 hover:border-white/10"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-[1.5rem]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    </div>
                    <div className="flex grow flex-col p-5 md:p-6">
                      <h3 className="mb-2 text-lg font-medium leading-[1.2] text-white">
                        {item.title}
                      </h3>
                      <p className="grow line-clamp-3 text-[13px] font-light leading-relaxed text-zinc-500">
                        {item.description}
                      </p>
                      <div className="mt-5 flex items-center justify-between">
                        <div className="h-px grow bg-white/10 transition-colors group-hover:bg-white/20" />
                        <div className="ml-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all group-hover:bg-white group-hover:text-black">
                          <IconChevronRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
        </div>
      </div>
    </section>
  );
}
