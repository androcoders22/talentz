"use client";

import { HeroSection } from "@/components/event-production/HeroSection";
import { ExpertiseSection } from "@/components/event-production/ExpertiseSection";
import { GallerySection } from "@/components/event-production/GallerySection";
import { InstagramSection } from "@/components/event-production/InstagramSection";
import { BlogSection } from "@/components/event-production/BlogSection";
import { TestimonialsSection } from "@/components/event-production/TestimonialsSection";
import { ContactSection } from "@/components/event-production/ContactSection";
import { FooterSection } from "@/components/event-production/FooterSection";
import { FloatingActions } from "@/components/event-production/FloatingActions";

/**
 * EventProductionPage
 *
 * This page has been refactored to use modular components located in
 * @/components/event-production/ to improve maintainability and readability.
 */
export default function EventProductionPage() {
  return (
    <main className="bg-transparent text-white min-h-screen relative">
      <HeroSection />
      <ExpertiseSection />
      <GallerySection />
      <InstagramSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
      <FloatingActions />
    </main>
  );
}
