"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";
import { BlogPost } from "@/types/blog";
import { blogApi } from "@/lib/api/blogs";
import { SectionHeader } from "./SectionHeader";

function BlogCard({ item }: { item: BlogPost }) {
  return (
    <Link
      href={`/blog/${item._id}`}
      className="group relative flex flex-col justify-between bg-zinc-900/30 border border-white/5 p-1 rounded-sm overflow-hidden transition-all duration-500 hover:bg-zinc-900/50 hover:border-white/10"
    >
      <div className="relative aspect-video overflow-hidden rounded-sm">
        <Image
          src={
            item.coverImage ||
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
          {item.subTitle ||
            "Read more about this topic in our detailed blog post."}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-[11px] text-zinc-600 uppercase tracking-wider">
            {new Date(item.createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-white transition-all group-hover:bg-white group-hover:text-black">
            <IconChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function BlogSkeleton() {
  return (
    <div className="animate-pulse bg-zinc-900/30 border border-white/5 p-1 rounded-sm overflow-hidden">
      <div className="aspect-video bg-white/5 rounded-sm" />
      <div className="p-5 md:p-6 space-y-4">
        <div className="h-4 bg-white/10 rounded w-3/4" />
        <div className="h-3 bg-white/5 rounded w-full" />
        <div className="h-3 bg-white/5 rounded w-5/6" />
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="bg-zinc-900/30 border border-white/5 p-1 rounded-sm overflow-hidden">
      <div className="relative aspect-video overflow-hidden rounded-sm">
        <Image
          src="https://placehold.co/300x200?text=Stay+Tuned"
          alt="stay tuned"
          fill
          unoptimized
          className="object-fit"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="flex flex-col p-5 md:p-6">
        <h3 className="mb-2 text-lg font-medium text-white">
          Stay Tuned for more blogs
        </h3>

        <p className="text-[13px] font-light text-zinc-500">
          We will be updating this section with more blogs soon.
        </p>

        <div className="mt-5 flex items-center justify-end">
          <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-white">
            <IconChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlogSection() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await blogApi.getActive();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoadingBlogs(false);
      }
    }
    fetchBlogs();
  }, []);

  let content;

  if (isLoadingBlogs) {
    content = Array.from({ length: 3 }).map((_, i) => <BlogSkeleton key={i} />);
  } else if (blogs.length > 0) {
    content = blogs.map((item) => <BlogCard key={item._id} item={item} />);
  } else {
    content = <EmptyState />;
  }

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
          {content}
        </div>
      </div>
    </section>
  );
}
