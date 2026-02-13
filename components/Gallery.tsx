"use client";

import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import Image from "next/image";

const projects = [
  {
    title: "Audio Engineering",
    src: "/gallery-1.jpg",
  },
  {
    title: "Studio Services",
    src: "/gallery-3.jpg",
  },
  {
    title: "Event Production",
    src: "/gallery-2.jpg",
  },
  {
    title: "Curated Gear",
    src: "/gallery-5.jpg",
  },
  {
    title: "Talent Management",
    src: "/gallery-4.jpg",
  },
  {
    title: "Global Distribution",
    src: "/gallery-6.jpg",
  },
];

const Gallery = () => {
  return (
    <section className="pb-40">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Our Work</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Explore the breadth of what we do — from world-class audio to global
          distribution.
        </p>

        <ScrollStack useWindowScroll>
          {projects.map((project, index) => (
            <ScrollStackItem key={index}>
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover"
              />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default Gallery;
