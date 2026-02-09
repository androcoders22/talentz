"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  IconArrowRight,
  IconPhone,
  IconMail,
  IconTools,
  IconDeviceSpeaker,
  IconMusic,
  IconBulb,
  IconMicrophone,
  IconMessage,
  IconCheck,
  IconBrandInstagram,
  IconInfoCircle,
} from "@tabler/icons-react";
import Link from "next/link";

export default function ServicesPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 md:pt-24 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-light tracking-tight leading-[1.05] mb-8">
            Expert
            <br />
            <span className="font-bold text-primary italic">
              Service & Repairs
            </span>
            <br />
            Division
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Keeping your musical instruments and professional audio gear in peak
            condition. Oman's leading technical service partner for performers
            and venues.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="rounded-full px-10 h-14 text-lg">
              Request Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 h-14 text-lg"
            >
              Our Specialists
            </Button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden group"
        >
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
            alt="Service and Repairs"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-10 left-10 text-white text-left">
            <span className="bg-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
              Technical Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-bold italic text-white leading-tight">
              Precision Care for <br /> Your Sound
            </h2>
          </div>
        </motion.div>
      </section>

      {/* Trust Band */}
      <section className="border-y border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-1">30+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Years of Luthier Exp
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-1">10+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Years of Electronics Exp
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-1">Pro</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Standard Equipment
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-1">GCC</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Wide Expertise
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electronic Instruments Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1]">
              Electronic <br />
              <span className="text-primary italic">Hardware Specialist</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Our electronics technician brings over 10 years of international
                experience in the maintenance and repair of complex hardware. We
                offer precision diagnosis and resolution for a wide range of
                professional gear.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-6">
                {[
                  "Power Amplifiers",
                  "Active & Passive Speakers",
                  "Digital & Analogue Mixers",
                  "Synthesizers & Keyboards",
                  "Digital Pianos",
                  "Guitar Amplifiers",
                  "Effect Pedals",
                  "Microphones",
                  "Studio Interfaces",
                  "Moving Heads & DMX Controls",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground/80 text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-8">
                <Button variant="outline" className="rounded-full px-8">
                  Get Electronic Audit
                </Button>
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
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
              alt="Electronic Repair Specialist"
              className="relative rounded-[2.5rem] shadow-2xl border border-border"
            />
          </motion.div>
        </div>
      </section>

      {/* Luthier Section */}
      <section className="bg-muted/30 py-24 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative lg:order-last"
            >
              <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-full" />
              <img
                src="https://images.unsplash.com/photo-1541689592655-f5f52824a3b1?w=800&h=600&fit=crop"
                alt="Guitar Luthier at work"
                className="relative rounded-[2.5rem] shadow-2xl border border-border"
              />
            </motion.div>
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1]">
                Master Luthier & <br />
                <span className="text-primary italic">String Specialist</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  With over 30 years of dedicated experience, our guitar
                  specialist and luthier provides museum-grade care for your
                  stringed instruments. We understand that playability is just
                  as important as sound.
                </p>
                <div className="grid grid-cols-1 gap-6 pt-6">
                  <div className="p-6 bg-card border border-border rounded-2xl">
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <IconTools className="text-primary h-5 w-5" />{" "}
                      Professional Guitar Setup
                    </h4>
                    <p className="text-sm">
                      Truss rod adjustment, action height, intonation, fret
                      smoothening, and saddle adjustment.
                    </p>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-2xl">
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <IconCheck className="text-primary h-5 w-5" /> Structural
                      & Fretwork
                    </h4>
                    <p className="text-sm">
                      Refretting, leveling, crowning, polishing, crack repairs,
                      and bridge replacement.
                    </p>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-2xl opacity-60 italic">
                    <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <IconInfoCircle className="text-primary h-5 w-5" />{" "}
                      Woodwind & Brasswind
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Details coming soon—our team is expanding to serve more
                      disciplines.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="container mx-auto px-4 py-24" id="quote-form">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase italic">
              REQUEST A <span className="text-primary">QUOTE</span>
            </h2>
            <p className="text-muted-foreground uppercase tracking-wider text-xs">
              Tell us about your gear and the issues you're facing
            </p>
          </div>

          <div className="bg-card border border-border rounded-[3rem] p-8 md:p-16 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <IconTools className="h-64 w-64" />
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground ml-1">
                  Name (Required)
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-background border border-border rounded-2xl px-6 py-4 focus:border-primary outline-none transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground ml-1">
                  Email (Required)
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full bg-background border border-border rounded-2xl px-6 py-4 focus:border-primary outline-none transition-colors"
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground ml-1">
                  Phone (Required)
                </label>
                <input
                  type="tel"
                  placeholder="+968 XXXX XXXX"
                  className="w-full bg-background border border-border rounded-2xl px-6 py-4 focus:border-primary outline-none transition-colors"
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground ml-1">
                  Message / Gear Details
                </label>
                <textarea
                  placeholder="Describe your equipment and the issue..."
                  className="w-full bg-background border border-border rounded-2xl px-6 py-4 focus:border-primary outline-none transition-colors min-h-[150px] resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <Button
                  size="lg"
                  className="w-full rounded-full h-16 text-lg shadow-xl shadow-primary/20"
                >
                  Submit Request
                  <IconArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="bg-card/50 py-24 border-t border-border text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 mb-12">
            <div className="text-left">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Call Technical Desk
              </div>
              <div className="text-xl font-bold">+968 2478 3443</div>
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Email Repairs
              </div>
              <div className="text-xl font-bold">service@talentz.net</div>
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Service Hours
              </div>
              <div className="text-xl font-bold">Sat-Thu, 9am - 8pm</div>
            </div>
          </div>
          <Button variant="outline" className="rounded-full px-12 h-14">
            View Location on Maps
          </Button>
        </div>
      </section>
    </div>
  );
}
