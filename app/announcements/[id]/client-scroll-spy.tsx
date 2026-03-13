"use client";

import { useEffect } from "react";

export default function ClientScrollSpy() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const tocItem = document.querySelector(`li[data-target="${id}"]`);

          if (entry.isIntersecting) {
            document.querySelectorAll("#toc-list li").forEach((li) => {
              li.classList.remove("text-white", "font-semibold", "border-l-2", "border-blue-500", "-ml-4", "pl-4");
              li.classList.add("text-neutral-400");
            });

            if (tocItem) {
              tocItem.classList.add("text-white", "font-semibold", "border-l-2", "border-blue-500", "-ml-[18px]", "pl-4");
              tocItem.classList.remove("text-neutral-400");
            }
          }
        });
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0.1 }
    );

    const headings = document.querySelectorAll("h2[id]");
    headings.forEach((heading) => observer.observe(heading));

    const tocLinks = document.querySelectorAll("#toc-list li");
    tocLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = (e.currentTarget as HTMLElement).getAttribute("data-target");
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  return null;
}
