"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import scrollDownAnimation from "@/animations/scroll-down.json";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gray-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Optional shimmer effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Animated Image */}
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

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 1 }}
          className="text-center md:text-left flex flex-col justify-center items-center md:items-start"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
            Meet Dr. Serena Blake
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5 max-w-lg">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
            Los Angeles, CA, with eight years of experience and over 500 client
            sessions.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-lg">
            She blends evidence-based approaches—like cognitive-behavioral
            therapy and mindfulness—with compassionate, personalized care to
            help you overcome anxiety, strengthen relationships, and heal from
            trauma.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 1.2, duration: 1 }}
            className="italic text-gray-600 text-sm mt-6"
          >
            “It’s never too late to rewrite your story.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 1.6, duration: 1 }}
            className="mt-4 font-serif text-lg font-semibold text-gray-900"
          >
            – Dr. Serena Blake
          </motion.p>
        </motion.div>
      </div>

      {/* Lottie Scroll Down */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-10"
      >
        <Lottie animationData={scrollDownAnimation} loop />
      </motion.div>
    </section>
  );
}
