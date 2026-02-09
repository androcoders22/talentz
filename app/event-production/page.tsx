"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  IconArrowRight,
  IconPhone,
  IconMail,
  IconDeviceSpeaker,
  IconBulb,
  IconScreenShare,
  IconTent,
  IconUsers,
  IconCertificate,
  IconMicrophone,
  IconVideo,
  IconBrandInstagram,
  IconCheck,
} from "@tabler/icons-react";
import Link from "next/link";

export default function EventProductionPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="bg-background min-h-screen">
      {/* New Hero Variation (Inspired by components/Hero.tsx) */}
      <section className="container mx-auto px-4 pt-16 md:pt-24 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-light tracking-tight leading-[1.05] mb-8">
            World-Class
            <br />
            <span className="font-bold text-primary italic">
              Event Production
            </span>
            <br />
            Resources
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Oman's leading partner for events and entertainment production
            solutions. Elevating experiences since 2002.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="rounded-full px-10 h-14 text-lg">
              Get Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 h-14 text-lg"
            >
              Inventory
            </Button>
          </div>
        </motion.div>

        {/* Featured Production Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden group"
        >
          <img
            src="https://placehold.co/1920x1080/111/444?text=Professional+Event+Setup"
            alt="Event Production Showcase"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-10 left-10 text-white text-left">
            <span className="bg-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
              Largest Inventory
            </span>
            <h2 className="text-3xl md:text-5xl font-bold italic text-white">
              Cutting-edge Solutions
            </h2>
          </div>
        </motion.div>
      </section>

      {/* Trust Band */}
      <section className="border-y border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-1">20+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-1">
                1000+
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Events Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-1">
                Largest
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Inventory in Oman
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-1">
                GCC Wide
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Service Coverage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1]">
              A Vision to Accommodate <br />
              <span className="text-primary italic">All Event Needs</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Talentz Event Production division is the leading partner for
                events and entertainment production solutions in Oman. Our team
                of professionals are friendly and flexible, maintaining a focus
                on customer satisfaction.
              </p>
              <p>
                From unique destination wedding setups to innovative car
                launches, beautiful architectural lighting to glitzy fashion
                shows, and concerts of Grammy Award-winning artists; we deliver
                quality service that goes above and beyond.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {[
                  "Largest AV Inventory",
                  "Professional Technicians",
                  "Cutting-edge Equipment",
                  "Flexible Budgeting",
                  "End-to-end Solutions",
                  "24/7 Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconCheck className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-full" />
            <img
              src="https://placehold.co/800x600/222/555?text=AV+Warehouse+Inventory"
              alt="Professional AV Gear"
              className="relative rounded-[2rem] shadow-2xl border border-border"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-muted/30 py-24 border-y border-border">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase italic">
            COMPREHENSIVE <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto uppercase tracking-wider text-sm">
            Everything you need for a successful event production
          </p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: IconDeviceSpeaker,
              title: "Sound & Audio",
              desc: "Professional PA systems, line arrays, and monitors from brands like Adamson and Yamaha.",
              img: "https://placehold.co/600x400/222/555?text=Sound+Systems",
            },
            {
              icon: IconBulb,
              title: "Professional Lighting",
              desc: "Moving heads, architectural lighting, and DMX controls for any atmosphere.",
              img: "https://placehold.co/600x400/222/555?text=Lighting",
            },
            {
              icon: IconScreenShare,
              title: "LED Screens & Projection",
              desc: "High-resolution indoor/outdoor LED displays and powerful projection mapping.",
              img: "https://placehold.co/600x400/222/555?text=LED+Screens",
            },
            {
              icon: IconTent,
              title: "Tents & Marquees",
              desc: "All-weather structures from intimate garden setups to 3000+ person venues.",
              img: "https://placehold.co/600x400/222/555?text=Tents",
            },
            {
              icon: IconUsers,
              title: "Grandstand Seating",
              desc: "Modular seating solutions for sporting events, ceremonies, and festivals.",
              img: "https://placehold.co/600x400/222/555?text=Seating",
            },
            {
              icon: IconVideo,
              title: "Special Effects",
              desc: "Fog machines, pyrotechnics, and innovative effects to wow your audience.",
              img: "https://placehold.co/600x400/222/555?text=Effects",
            },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all shadow-sm"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Notable Experience */}
      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase italic">
              NOTABLE <span className="text-primary">EXPERIENCE</span>
            </h2>
            <p className="text-muted-foreground">
              Our team has delivered excellence across a wide range of market
              segments and prestigious events.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors hover:bg-muted hover:text-foreground text-primary h-8 px-2.5 gap-2 group"
          >
            View full gallery{" "}
            <IconArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-card rounded-[2.5rem] p-10 border border-border">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <IconCertificate className="text-primary h-7 w-7" /> Past Event
              Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "Royal Opera House Muscat - Military Band",
                "Red Bull Car Park Drift Finals",
                "His Majesty's Award Ceremonies",
                "Mercedes SUV Range Launch",
                "OIEC Motor Show - Toyota, Lexus, BMW",
                "Grammy Award-winning artist concerts",
                "Environment Society of Oman Gala",
                "Destination Weddings across Oman",
              ].map((project) => (
                <div key={project} className="flex items-start gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-foreground/80 text-sm md:text-base leading-snug">
                    {project}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-[2.5rem] p-1">
            <div className="bg-card rounded-[calc(2.5rem-4px)] h-full p-10 flex flex-col justify-center">
              <div className="flex gap-1 mb-6 text-primary">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s}>★</span>
                ))}
              </div>
              <p className="text-xl italic text-foreground/90 mb-8 font-serif leading-relaxed">
                "Truly world class service. Talentz provides Light & Sound with
                giant LED screens that is really an eye/ear candy. Simply the
                best in the business!"
              </p>
              <div>
                <div className="font-bold text-foreground">
                  Cloud 9 Band Oman
                </div>
                <div className="text-xs text-primary uppercase tracking-widest mt-1 font-bold">
                  Valued Client
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-card/50 py-24 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <IconBrandInstagram className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 uppercase">
            Follow Our Journey
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto uppercase tracking-widest text-xs">
            Behind-the-scenes look at Oman's biggest event productions
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-muted rounded-2xl overflow-hidden hover:opacity-80 transition-opacity cursor-pointer border border-border"
              >
                <img
                  src={`https://placehold.co/400x400/222/555?text=IG+Shot+${i}`}
                  alt="Instagram Post"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            className="rounded-full px-8 hover:bg-primary/10 hover:text-primary transition-colors"
          >
            @talentzeventsproduction
          </Button>
        </div>
      </section>
    </div>
  );
}
