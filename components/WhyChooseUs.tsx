"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch mx-auto">
        <div className="relative h-[300px] lg:h-auto">
          <img
            src="https://placehold.co/800x600"
            alt="Why Choose Us"
            className="w-full h-full object-cover rounded-[1.5rem]"
          />
        </div>

        <div className="p-8 lg:p-10 bg-white border border-muted rounded-[1.5rem] flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed max-w-md">
            We pride ourselves on offering products that meet the highest
            standards of quality. Each item is carefully selected and crafted.
          </p>

          <Accordion className="w-full">
            <AccordionItem value="item-1" className="border-b py-1">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                Unrivaled Quality
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-2">
                Our products are made with the highest quality materials and
                craftsmanship.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b py-1">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                Sustains bullous
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-2">
                We focus on sustainability and durability in every piece we
                offer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b py-1">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                Unrivaled Variety
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-2 italic">
                We believe in offering great value
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b py-1">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                Legacy Of Excellence
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-2">
                Over 10 years of providing top-notch services to our clients.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b py-1">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                Eco-Friendly Mining
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-2">
                We use sustainable mining practices to protect our environment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border-b py-1">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                Global Shipping
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-2">
                Fast and reliable shipping to over 50 countries worldwide.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
