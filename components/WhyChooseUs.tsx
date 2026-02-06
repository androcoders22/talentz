"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-muted/30 rounded-[3rem] overflow-hidden">
        <div className="aspect-4/5 relative">
          <img
            src="https://placehold.co/600x800"
            alt="Why Choose Us"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 md:p-12">
          <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
          <p className="text-muted-foreground mb-10">
            We offer the best eco-friendly products that are sustainable,
            affordable and high quality. Our main goal is customer satisfaction.
          </p>

          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Premium Quality</AccordionTrigger>
              <AccordionContent>
                Our products are made with the highest quality materials and
                craftsmanship.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Customer Service</AccordionTrigger>
              <AccordionContent>
                24/7 support for all your needs and questions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Eco-Friendly</AccordionTrigger>
              <AccordionContent>
                Sustainable materials and ethical manufacturing processes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Legacy Of Excellence</AccordionTrigger>
              <AccordionContent>
                Over 10 years of providing top-notch services to our clients.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
