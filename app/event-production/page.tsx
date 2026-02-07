"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IconArrowRight, IconPhone, IconMail } from "@tabler/icons-react";

export default function EventProductionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            World-Class <span className="text-primary">Event Production</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oman's leading partner for events and entertainment production
            solutions. Sound, Light, LED screens, staging and more for events of
            all sizes.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] mb-16"
        >
          <img
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&h=800&fit=crop"
            alt="Event Production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-white/80 text-lg max-w-2xl">
              From Grammy Award-winning concerts to destination weddings, we
              deliver the largest inventory of professional audiovisual
              equipment in Oman.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Sound & Audio",
              description:
                "Professional PA systems, line arrays, monitors, and mixing consoles from leading brands like Adamson, Yamaha, and Shure.",
            },
            {
              title: "Lighting",
              description:
                "Moving heads, LED fixtures, architectural lighting, and DMX controls from Cameo, Fabulux, and more.",
            },
            {
              title: "LED Screens",
              description:
                "High-resolution indoor and outdoor LED displays for concerts, corporate events, and exhibitions.",
            },
            {
              title: "Staging & Rigging",
              description:
                "Custom staging solutions, trusses, and professional rigging for any venue or event size.",
            },
            {
              title: "Tents & Marquees",
              description:
                "All-weather tent solutions from intimate 10-person setups to 3000+ person venues.",
            },
            {
              title: "Grandstand Seating",
              description:
                "Professional seating arrangements for sporting events, ceremonies, and large gatherings.",
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-muted/30 p-6 rounded-2xl hover:bg-muted/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Notable Projects */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Notable Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Recent Highlights</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                • Royal Opera House Muscat - Military Band & Celebrate Oman
                events
              </li>
              <li>• Red Bull Car Park Drift Finals 2016</li>
              <li>• His Majesty's Award ceremonies</li>
              <li>• Mercedes SUV Range Launch</li>
              <li>• OIEC Motor Show - Toyota, Lexus & BMW stands</li>
              <li>• Grammy Award-winning artist concerts</li>
            </ul>
          </div>
          <div className="bg-primary/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Client Testimonials</h3>
            <blockquote className="text-muted-foreground italic mb-4">
              "Truly world class service. Talentz provides Light & Sound with
              giant LED screens that is really an eye/ear candy. Simply the best
              in the business!"
            </blockquote>
            <p className="text-sm font-medium">— Cloud 9 Band Oman</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-black text-white rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make Your Event a Success?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Contact our team today for a personalized quote. We cater to events
            of all sizes and budgets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-full px-8 py-6 h-auto bg-white text-black hover:bg-white/90">
              <IconMail className="mr-2 h-5 w-5" />
              Get a Quote
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 h-auto border-white/20 text-white hover:bg-white/10"
            >
              <IconPhone className="mr-2 h-5 w-5" />
              +968-2478-3443
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
