"use client";

import { SectionHeader } from "./SectionHeader";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-12 md:py-16 bg-zinc-950 border-t border-white/5 relative z-10 w-full overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Client Stories"
          title="Testimonials"
          description="100+ brands have trusted Talentz to elevate their events, environments, and production quality."
        />

        {/* Stacked Vertical Layout on Mobile, Masonry Grid on Desktop */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:space-x-0 pt-2 pb-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 min-w-[85vw] md:min-w-0 snap-center shrink-0">
            {/* Cloud 9 Testimonial (Active) */}
            <div className="bg-black border border-white/10 rounded-sm text-white p-5 md:p-7 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-3.5 h-3.5 text-[#ffffff] fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-light leading-relaxed text-zinc-300">
                  Working with Talentz has been a truly great experience so far;
                  they have an amazing team, a perfect environment and true
                  professionalism. None of their team members from labor to
                  managerial level has ever said no to any work or last minute
                  requests and would support and stand with us together to
                  achieve one goal that is CLIENT satisfaction. I highly
                  recommend them for future events in Oman and wish them a great
                  success in near future.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-sm font-bold">
                  MEO
                </div>
                <div>
                  <h4 className="font-medium text-sm">Mosaic Events Oman</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Yaseen Kamal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
