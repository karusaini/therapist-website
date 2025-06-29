"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Stethoscope,
  Brain,
  MapPin,
  Clock,
  CalendarDays,
} from "lucide-react";
import Lottie from "lottie-react";
import scrollDownAnimation from "@/animations/scroll-down.json";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Card className="overflow-hidden border-none shadow-xl rounded-2xl">
            <div className="relative w-full aspect-[4/5]">
              <Image
                src="/dr-serena.webp"
                alt="Dr. Serena Blake"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Card>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 1 }}
          className="text-center md:text-left flex flex-col justify-center items-center md:items-start"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-blue-900 mb-4">
            Meet Dr. Serena Blake
          </h2>

          <div className="flex flex-col gap-3 text-sm text-gray-700 mb-4 w-full max-w-sm">
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-blue-500 mt-0.5" />
              <span>8 years of practice, 500+ sessions</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
              <span>1287 Maplewood Drive, Los Angeles, CA 90026</span>
            </div>
            <div className="flex items-start gap-2">
              <CalendarDays className="w-4 h-4 text-blue-500 mt-0.5" />
              <div>
                <p className="font-medium">Office Hours:</p>
                <ul className="ml-4 list-disc">
                  <li>In-person: Tue & Thu, 10 AM–6 PM</li>
                  <li>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-600 text-sm mb-4">
            <ShieldCheck className="w-5 h-5 text-blue-500" />
            <span>Licensed Clinical Psychologist (PsyD)</span>
          </div>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5 max-w-lg">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
            Los Angeles, CA, with eight years of experience and over 500 client
            sessions. She blends evidence-based approaches—like
            cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen
            relationships, and heal from trauma. Whether you meet in her
            Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
            committed to creating a safe, supportive space for you to thrive.
          </p>

          <ul className="text-left text-gray-700 text-sm space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-blue-500" />
              Evidence-based treatment for anxiety, trauma & depression
            </li>
            <li className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-blue-500" />
              Specializes in CBT, EMDR & mindfulness integration
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              Member of American Psychological Association
            </li>
          </ul>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 1.2, duration: 1 }}
            className="italic text-gray-600 text-sm mt-2"
          >
            “It’s never too late to rewrite your story.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 1.6, duration: 1 }}
            className="mt-2 font-serif text-lg font-semibold text-blue-900"
          >
            – Dr. Serena Blake
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-10"
      >
        <Lottie animationData={scrollDownAnimation} loop />
      </motion.div>
    </section>
  );
}
