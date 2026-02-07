"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch mx-auto">
        <div className="relative h-[300px] lg:h-auto">
          <Image
            src="/why-talentz.jpg"
            width={800}
            height={600}
            alt="Why Choose Us"
            className="w-full h-full object-cover rounded-[1.5rem] "
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
                Since 2002, we have grown from a music instrument store to
                become Oman's leading event production company and trusted
                musical instrument retailer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b py-1">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                Official Brand Distributors
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-2">
                Authorized dealers for Roland, Boss, Kawai, Sennheiser, Shure,
                Ibanez, Tama, Adamson, Presonus, D'Addario, Taylor, Ortega and
                many more global brands.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b py-1">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                World-Class Event Production
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-2">
                From Grammy Award-winning concerts to destination weddings, we
                deliver the largest inventory of professional audiovisual
                equipment in Oman.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b py-1">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                Expert Repairs & Service
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-2">
                Our luthier has 30+ years experience with guitars and stringed
                instruments. Electronic technicians with 10+ years repairing pro
                audio and lighting gear.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b py-1">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                Talentz Music Institute (TMI)
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-2">
                Piano, Keyboard, Guitar, Violin, Drums & Ukulele classes with
                ABRSM & RSL exam preparation. Qualified teachers and comfortable
                learning environment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border-b py-1">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                Downtown Muscat Showroom
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-2">
                Visit our Ruwi showroom to test instruments, have a jam session,
                or discuss your needs. Shop online with delivery across Oman.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
