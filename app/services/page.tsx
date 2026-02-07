"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  IconPhone,
  IconMail,
  IconTools,
  IconMusic,
  IconSpeakerphone,
} from "@tabler/icons-react";

export default function ServicesPage() {
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
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Service & <span className="text-primary">Repairs</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Keep your gear in top working condition. Expert repairs for musical
            instruments and professional audio equipment in Oman.
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
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=800&fit=crop"
            alt="Service and Repairs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-white/80 text-lg max-w-2xl">
              From speakers and digital pianos to guitars and pro audio gear -
              we've got you covered.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Service Categories */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Electronic Instruments */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 text-white p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <IconSpeakerphone className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold">
                Electronic Instruments Specialist
              </h2>
            </div>
            <p className="text-white/70 mb-6">
              With over 10 years experience in maintenance and repair of
              electronic hardware across multiple countries.
            </p>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Power Amplifiers</li>
              <li>• Active / Passive Loudspeakers & Subwoofers</li>
              <li>• Mixing Consoles (Analogue & Digital)</li>
              <li>• Keyboards, Synthesizers & Digital Pianos</li>
              <li>• Guitar Amplifiers & Effect Pedals</li>
              <li>• Microphones</li>
              <li>• Studio Monitors, Audio Interfaces & Headphones</li>
              <li>• Professional Lights (Moving Heads, LED, DMX)</li>
            </ul>
          </motion.div>

          {/* Guitar & Stringed Instruments */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-primary/10 p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <IconMusic className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold">
                Guitar & Stringed Instrument Luthier
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              With over 30 years of experience, our guitar specialist can
              address any issues with stringed instruments.
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                • Guitar Setup (Truss rod, action, intonation, fret smoothening)
              </li>
              <li>• Re-stringing (6 string, 12 string, Floyd Rose)</li>
              <li>• Crack Repairs</li>
              <li>• Bridge Refitting or Replacement</li>
              <li>• Refretting, Leveling, Crowning & Polishing</li>
              <li>• Electronics Repair</li>
              <li>• Violin Repairs</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why Service With Us */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Why Service With Talentz?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Experienced Technicians",
              description:
                "Our team has decades of combined experience across pro audio, lighting, and musical instruments.",
            },
            {
              title: "Genuine Parts",
              description:
                "As authorized dealers for major brands, we use genuine replacement parts for all repairs.",
            },
            {
              title: "Quick Turnaround",
              description:
                "We understand your gear is important. We work efficiently to get you back to playing.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-muted/30 p-6 rounded-2xl"
            >
              <IconTools className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-black text-white rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Your Gear Repaired?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Contact us for a quote. We'll assess your equipment and provide an
            honest evaluation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-full px-8 py-6 h-auto bg-white text-black hover:bg-white/90">
              <IconMail className="mr-2 h-5 w-5" />
              Request a Quote
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
