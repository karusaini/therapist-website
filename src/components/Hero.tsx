"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import scrollDownAnimation from "@/animations/scroll-down.json";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Therapy background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-3xl px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight"
        >
          Compassionate Therapy with Dr. Serena Blake
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl mb-8 font-sans text-white/90"
        >
          Heal. Grow. Thrive. Personalized support—online or in‑person.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <Button className="relative inline-flex items-center justify-center px-6 py-3 sm:text-lg text-base font-semibold text-white rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-colors duration-300 cursor-pointer">
              Book a Free Consult
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Lottie Scroll Down */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 z-10 cursor-pointer"
      >
        <ScrollLink to="about" smooth duration={600}>
          <Lottie
            animationData={scrollDownAnimation}
            loop
            className="w-12 h-12 mx-auto opacity-80 hover:opacity-100 transition-opacity"
          />
        </ScrollLink>
      </motion.div>
    </section>
  );
}
