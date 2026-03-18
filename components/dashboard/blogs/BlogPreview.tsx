"use client";

import React, { useEffect, useState } from "react";
import { MdPreview } from "md-editor-rt";
import "md-editor-rt/lib/style.css";

const EDITOR_ID = "blog-preview";

export function BlogCatalog({ content }: { content: string }) {
  const [headings, setHeadings] = useState<
    { id: string; text: string; indent: number }[]
  >([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Wait for MdPreview to render the DOM
    const timer = setTimeout(() => {
      const elements = Array.from(
        document.querySelectorAll(
          `#${EDITOR_ID} h1, #${EDITOR_ID} h2, #${EDITOR_ID} h3, #${EDITOR_ID} h4`,
        ),
      );

      const newHeadings = elements
        .map((el) => {
          let indent = 0;
          if (el.tagName.toLowerCase() === "h3") indent = 4;
          if (el.tagName.toLowerCase() === "h4") indent = 8;
          return {
            id: el.id,
            text: el.textContent || "",
            indent,
          };
        })
        .filter((h) => h.id);

      setHeadings(newHeadings);
    }, 500); // 500ms should be enough for md-editor-rt to finish rendering

    return () => clearTimeout(timer);
  }, [content]);

  useEffect(() => {
    if (headings.length === 0) return;

    // IntersectionObserver to highlight TOC items
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries.filter((e) => e.isIntersecting);
        if (visibleHeadings.length > 0) {
          // Find the top-most visible heading
          visibleHeadings.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
          setActiveId(visibleHeadings[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 },
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      // Highlight the last item if scrolled to the absolute bottom
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 150
      ) {
        if (headings.length > 0) {
          setActiveId(headings[headings.length - 1].id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      headings.forEach((heading) => {
        const el = document.getElementById(heading.id);
        if (el) observer.unobserve(el);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="hidden lg:block space-y-4">
      <div className="text-white font-semibold mb-6 border-l-2 border-white pl-4">
        Table of Contents
      </div>
      <ul className="space-y-4 text-sm font-medium text-neutral-400 pl-4 border-l-2 border-white/10 relative">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <li
              key={heading.id}
              className={`cursor-pointer transition-colors block leading-relaxed ${
                isActive ? "text-white font-semibold" : "hover:text-white"
              }`}
              style={{ paddingLeft: `${heading.indent}px` }}
              onClick={() => {
                const el = document.getElementById(heading.id);
                if (el) {
                  // Scroll, accounting for the top sticky header
                  window.scrollTo({
                    top: el.offsetTop - 120,
                    behavior: "smooth",
                  });
                }
              }}
            >
              {/* Active Marker Indicator line over the border-l-2 */}
              {isActive && (
                <div
                  className="absolute left-[-2px] w-[2px] h-6 bg-white rounded-full -mt-1"
                  style={{ transition: "top 0.2s ease-out" }}
                />
              )}
              {heading.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function BlogPreview({ content }: { content: string }) {
  return (
    <>
      <MdPreview
        id={EDITOR_ID}
        modelValue={content}
        theme="dark"
        style={{ backgroundColor: "transparent" }}
      />
      <style jsx global>{`
        #${EDITOR_ID} {
          background-color: transparent !important;
        }
        #${EDITOR_ID} .md-editor-preview {
          color: rgb(212 212 216) !important; /* neutral-300 */
          font-size: 1.2rem !important;
          line-height: 1.7 !important;
        }
        /* Override any green from md-editor-rt */
        #${EDITOR_ID} a {
          color: #60a5fa !important; /* blue-400 */
        }
        #${EDITOR_ID} blockquote {
          border-left-color: rgb(163 163 163) !important; /* neutral-400 */
        }
        #${EDITOR_ID} pre {
          background-color: rgba(255, 255, 255, 0.05) !important;
        }
        #${EDITOR_ID} code {
          color: #e5e7eb !important;
        }
        #${EDITOR_ID} h1,
        #${EDITOR_ID} h2,
        #${EDITOR_ID} h3,
        #${EDITOR_ID} h4,
        #${EDITOR_ID} h5,
        #${EDITOR_ID} h6 {
          color: white !important;
        }
      `}</style>
    </>
  );
}
