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
            Why Talentz?
          </h2>
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed max-w-md">
            Since 2002, Talentz has been Oman's premier destination for
            professional audio, video, lighting, and musical instruments. We
            combine expertise with passion to deliver excellence.
          </p>

          <Accordion className="w-full">
            <AccordionItem value="item-1" className="border-b py-1">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                20+ Years of Excellence
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-2">
                Established in 2002, we have over two decades of experience
                serving the Omani market with top-tier AV solutions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b py-1">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                Official Brand Distribution
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-2">
                We are official distributors for world-renowned brands like
                Roland, Boss, Kawai, Sennheiser, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b py-1">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                Certified Service Center
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-2">
                Our workshop provides professional repairs for audio gear,
                lighting, LED screens, and musical instruments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b py-1">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                Event Production Experts
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-2">
                From intimate gatherings to large-scale productions, we provide
                complete sound, lighting, and staging solutions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b py-1">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                Quality Music Education
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-2">
                Talentz Music Institute follows ABRSM & Trinity curriculum,
                offering affordable and high-quality lessons.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border-b py-1">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                Muscat Based Showroom
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-2">
                Visit our showroom in downtown Muscat to experience our products
                firsthand or shop online for home delivery.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
