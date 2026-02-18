"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  IconCheck,
  IconBrandInstagram,
  IconInfoCircle,
  IconChevronDown,
} from "@tabler/icons-react";
import { useState } from "react";
import { TopSelling } from "@/components/TopSelling";

export default function InstitutePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const schedule = [
    { cat: "Morning", sat: "9:00 to 10:00 am", weekdays: "9:30 to 10:30 am" },
    { cat: "Morning", sat: "10:00 to 11:00 am", weekdays: "10:30 to 11:30 am" },
    {
      cat: "Morning",
      sat: "11:00 am to 12:00 pm",
      weekdays: "11:30 am to 12:30 pm",
    },
    { cat: "Afternoon / Evening", sat: "2:30 to 3:30 pm", weekdays: "–" },
    {
      cat: "Afternoon / Evening",
      sat: "3:30 to 4:30 pm",
      weekdays: "3:30 to 4:30 pm",
    },
    {
      cat: "Afternoon / Evening",
      sat: "5:00 to 6:00 pm",
      weekdays: "5:00 to 6:00 pm",
    },
    {
      cat: "Afternoon / Evening",
      sat: "6:00 to 7:00 pm",
      weekdays: "6:00 to 7:00 pm",
    },
    {
      cat: "Afternoon / Evening",
      sat: "7:00 to 8:00 pm",
      weekdays: "7:00 to 8:00 pm",
    },
  ];

  const fees = [
    { instrument: "KEYBOARD", b1: "21", b2: "25", b3: "29", b4: "35" },
    { instrument: "GUITAR*", b1: "25", b2: "29", b3: "35", b4: "39" },
    { instrument: "PIANO", b1: "25", b2: "29", b3: "35", b4: "39" },
    { instrument: "VIOLIN", b1: "25", b2: "29", b3: "35", b4: "39" },
    {
      instrument: "DRUMS & PERCUSSION",
      b1: "25",
      b2: "29",
      b3: "35",
      b4: "39",
    },
  ];

  const faqs = [
    {
      q: "When do you need an instrument?",
      a: "When a student begins to learn music!",
    },
    {
      q: "Where do you find your instruments & how do you get your best price?",
      a: "Talentz has a full line of standard instruments, many of which are used in classrooms at TMI. All enrolled students are eligible for an additional discount on most instruments and products. A beginner student does not need the top-of-the-line instrument; however, a poor quality instrument must be avoided to help maintain a student’s interest and desire to pursue music.",
    },
    {
      q: "Any tips for parents?",
      a: "Kids are interested in everything; It’s up to you to help your child narrow his focus and concentrate on pursuits that will be rewarding.",
    },
    {
      q: "What is the difference between Piano Lessons and Keyboard Lessons?",
      a: "A Piano is an acoustic instrument with weighted keys taught hand-separately combining into pieces (Classical focus). A Keyboard is an electronic instrument with un-weighted keys taught as Right-Hand melody and Left-Hand chords with rhythms (Pop/Contemporary focus).",
    },
    {
      q: "What is a good guitar for a student to begin learning?",
      a: "Generally, Nylon String (Classical) guitars are easiest for young beginners. As you progress, you may choose Steel String (Acoustic) or Electric guitars based on your preferred genre like Rock, Metal, or Folk.",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-8 md:pt-10 pb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-6"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.05] mb-4">
            Muscat's Center for
            <br />
            <span className="font-bold text-primary italic">
              Music & Creativity
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            Talentz Music Institute (TMI) is an innovative learning center
            located in Muscat. Educating and building confidence in music lovers
            since 2002.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="rounded-full px-10 h-14 text-lg">
              Book Lessons
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 h-14 text-lg"
            >
              View Fees
            </Button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-[300px] md:h-[400px] rounded-[2.5rem] overflow-hidden group mb-12"
        >
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=192 0&h=1080&fit=crop"
            alt="Talentz Music Institute"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-6 left-6 text-white text-left">
            <span className="bg-primary px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-2 inline-block">
              Est. 2002
            </span>
            <h2 className="text-xl md:text-3xl font-bold italic text-white leading-tight">
              A Quest to Educate <br /> & Build Confidence
            </h2>
          </div>
        </motion.div>

        {/* Teaching System Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {[
            {
              title: "Notation Rudiments",
              desc: "Applicable theory and instrument specific skills correctly taught from the start.",
            },
            {
              title: "Age 7+ to Adults",
              desc: "Theory & Practical combined for children and adults of all skill levels.",
            },
            {
              title: "Sing/Play Along",
              desc: "Interactive format designed to make learning engaging and intuitive.",
            },
            {
              title: "Pro Instruments",
              desc: "Piano & Keyboards provided by TMI in professional teaching facilities.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-card border border-border rounded-3xl"
            >
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <IconCheck className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Language of Music Section */}
      <section className="bg-muted/30 py-8 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 italic">
                Learning the <br />
                <span className="text-primary italic">Language of Music</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                If music is a language then musicians should be ‘literate’ in
                every sense. Our music theory program helps you:
              </p>
              <div className="space-y-4">
                {[
                  "Sight-read music with confidence",
                  "Develop musical interpretation and general musicianship",
                  "Write down your own compositions and arrangements",
                  "Prepare for internationally recognized ABRSM & RSL exams",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-foreground/80 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507838596058-a563b7af29ad?w=800&h=600&fit=crop"
                alt="Music Theory"
                className="rounded-[2.5rem] shadow-2xl border border-border"
              />
              <div className="absolute -top-6 -right-6 bg-primary text-white p-8 rounded-3xl shadow-xl">
                <div className="text-4xl font-bold mb-1">ABRSM</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-80 text-center">
                  RSL RockSchool
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Class Schedule Table */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 uppercase italic">
            TMI <span className="text-primary">TIME SLOTS</span>
          </h2>
          <p className="text-muted-foreground uppercase tracking-widest text-xs">
            Group in-person Lessons — Closed on Fridays
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted text-muted-foreground uppercase text-[9px] tracking-widest">
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Saturdays (Weekend)</th>
                <th className="px-5 py-3">Sun to Thu (Weekdays)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {schedule.map((row, i) => (
                <tr key={i} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 text-xs font-bold text-primary">
                    {row.cat}
                  </td>
                  <td className="px-6 py-4 text-xs font-medium">{row.sat}</td>
                  <td className="px-6 py-4 text-xs font-medium text-muted-foreground">
                    {row.weekdays}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* Detailed Investment Table */}
      <section className="bg-card py-8 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 uppercase italic">
              MONTHLY <span className="text-primary">FEES</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <span>Admission: OMR 7</span>
              <span className="text-primary opacity-20 hidden md:block">|</span>
              <span>4 Classes / Month</span>
              <span className="text-primary opacity-20 hidden md:block">|</span>
              <span>60 Min Group Lessons</span>
            </div>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden rounded-[2rem] border border-border bg-background shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary/5 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-[0.2em]">
                  <th className="px-8 py-8">Classes</th>
                  <th className="px-4 py-8 text-center bg-primary/5">
                    Beginner-Gr 2
                  </th>
                  <th className="px-4 py-8 text-center">Grades 3 & 4</th>
                  <th className="px-4 py-8 text-center bg-primary/5">
                    Grades 5 & 6
                  </th>
                  <th className="px-4 py-8 text-center uppercase text-primary font-black">
                    Grades 7 & 8
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {fees.map((row, i) => (
                  <tr
                    key={i}
                    className="group hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-8 py-6 font-bold text-foreground">
                      {row.instrument}
                    </td>
                    <td className="px-4 py-6 text-center text-sm font-medium bg-primary/5">
                      OMR {row.b1}
                    </td>
                    <td className="px-4 py-6 text-center text-sm font-medium">
                      OMR {row.b2}
                    </td>
                    <td className="px-4 py-6 text-center text-sm font-medium bg-primary/5">
                      OMR {row.b3}
                    </td>
                    <td className="px-4 py-6 text-center text-lg font-black text-primary">
                      OMR {row.b4}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-8 bg-muted/20 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-muted-foreground max-w-lg">
                *GUITAR OPTIONS: CLASSICAL, ACOUSTIC, ELECTRIC, BASS. <br />
                Other instruments (Ukulele, Recorder, Viola): Consult
                Administrator for availability.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold">OMR 8</div>
                  <div className="text-[10px] uppercase opacity-60">
                    Online/1:1 (30-45m)
                  </div>
                </div>
                <div className="text-center text-primary">
                  <div className="text-lg font-black italic underline decoration-2">
                    Individual
                  </div>
                  <div className="text-[10px] uppercase opacity-60 font-bold">
                    Personalized Pace
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TopSelling />
      {/* TMI Benefits & Philosophy */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Dedicated and qualified teachers",
                "Timely and integrated curriculum",
                "Professional instruments provided",
                "Learning with current technology",
                "Undivided attention to students",
                "International exam prep (ABRSM/RSL)",
                "Comfortable learning environment",
                "Central Location (Downtown Muscat)",
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-muted/30 rounded-2xl border border-border/50"
                >
                  <IconCheck className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground/80">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-10 bg-primary text-primary-foreground rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <IconInfoCircle className="absolute -bottom-8 -right-8 h-48 w-48 opacity-10 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 italic">
                TMI Tips to Students
              </h3>
              <p className="text-lg opacity-90 leading-relaxed mb-6">
                "Study after study has proven that Music education dramatically
                increases early brain development and improves overall academic
                performance."
              </p>
              <p className="font-bold flex items-center gap-2">
                <span className="h-1 w-8 bg-white/30 rounded-full" />
                Essential habit: 30 minutes practice daily.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold italic mb-6">
              Frequently <br /> Asked Questions
            </h3>
            <div className="space-y-3 font-medium">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-border pb-4">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex justify-between items-center text-left py-2 hover:text-primary transition-colors text-sm"
                  >
                    <span>{faq.q}</span>
                    <IconChevronDown
                      className={`h-4 w-4 transform transition-transform ${activeFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeFaq === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-xs text-muted-foreground mt-2 leading-relaxed"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </div>
              ))}
            </div>
            <div className="p-6 bg-muted/50 border border-border rounded-3xl mt-8">
              <h4 className="font-bold mb-2">Notice:</h4>
              <p className="text-xs text-muted-foreground">
                Public holidays follow government declarations. Schools closed
                on public holidays with no make-ups organized.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-card/50 py-8 border-t border-border text-center">
        <div className="container mx-auto px-4">
          <IconBrandInstagram className="h-8 w-8 text-primary mx-auto mb-3" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 italic uppercase">
            Join the TMI Family
          </h2>
          <div className="flex flex-wrap justify-center gap-12 mb-12">
            <div className="text-left">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Call Us
              </div>
              <div className="text-xl font-bold">9385-8803</div>
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Email Us
              </div>
              <div className="text-xl font-bold">institute@talentz.net</div>
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Visit Us
              </div>
              <div className="text-xl font-bold">CBD / Downtown Muscat</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-12 h-16 text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20"
            >
              Enroll Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-12 h-16 text-lg"
            >
              Follow @talentzmusicinstitute
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
