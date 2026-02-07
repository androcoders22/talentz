"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  IconPhone,
  IconMail,
  IconClock,
  IconMapPin,
} from "@tabler/icons-react";

export default function InstitutePage() {
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
            Talentz <span className="text-primary">Music Institute</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An innovative learning center for music and creativity in Muscat,
            Oman. Welcoming students since April 2002.
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
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1600&h=800&fit=crop"
            alt="Music Institute"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-white/80 text-lg max-w-2xl">
              Prepare for internationally recognized ABRSM & RSL exams, or
              simply enjoy music as a hobby.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Available Classes */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Available Classes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Piano",
            "Keyboard",
            "Guitar",
            "Violin",
            "Recorder",
            "Drums",
            "Ukulele",
            "Theory",
          ].map((instrument, index) => (
            <motion.div
              key={instrument}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-muted/30 p-6 rounded-2xl text-center hover:bg-muted/50 transition-colors"
            >
              <h3 className="text-lg font-bold">{instrument}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TMI Benefits */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-primary/10 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Why Choose TMI?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                Dedicated and qualified ABRSM/RSL-trained teachers
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                Professional instruments in teaching facilities
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                Small group classes (max 4 students) for personalized attention
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                ABRSM & RSL exam preparation offered
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                Central location in Downtown Muscat (Ruwi)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                Online lessons available (45 minutes, 1:1)
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Class Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary mb-2">
                  Group Lessons (In-person)
                </h3>
                <p className="text-white/70 text-sm">
                  60 minutes per week, max 4 students per batch
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">
                  Online Lessons
                </h3>
                <p className="text-white/70 text-sm">
                  45 minutes, 1:1 private lessons
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">
                  Individual Lessons
                </h3>
                <p className="text-white/70 text-sm">
                  30 minutes, personalized instruction
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Exams</h3>
                <p className="text-white/70 text-sm">
                  ABRSM/RSL exams held in April/May & Nov/Dec
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guitar Options */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Guitar Lesson Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { type: "Classical", desc: "Nylon string, classical repertoire" },
            { type: "Acoustic", desc: "Steel string, pop & folk music" },
            { type: "Electric", desc: "Rock, metal, and contemporary" },
            { type: "Bass", desc: "Electric bass fundamentals" },
          ].map((guitar, index) => (
            <motion.div
              key={guitar.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-muted/30 p-6 rounded-2xl"
            >
              <h3 className="text-lg font-bold mb-2">{guitar.type}</h3>
              <p className="text-sm text-muted-foreground">{guitar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-black text-white rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Your Musical Journey
              </h2>
              <p className="text-white/70 mb-6">
                Visit us to book your lessons today. Classes available for
                children (age 7+) and adults.
              </p>
              <div className="space-y-3 text-white/80">
                <div className="flex items-center gap-3">
                  <IconPhone className="h-5 w-5 text-primary" />
                  <span>9385-8803</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconMail className="h-5 w-5 text-primary" />
                  <span>institute@talentz.net</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconMapPin className="h-5 w-5 text-primary" />
                  <span>Downtown Muscat (Ruwi)</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-white/50 mb-2">Admission Fee</p>
              <p className="text-4xl font-bold mb-4">OMR 7</p>
              <Button className="rounded-full px-8 py-6 h-auto bg-white text-black hover:bg-white/90">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
