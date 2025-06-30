"use client";

import Image from "next/image";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HeartHandshake, BrainCog, ShieldCheck } from "lucide-react";

import anxietyIcon from "@/animations/anxiety.json";
import relationshipIcon from "@/animations/relationship.json";
import traumaIcon from "@/animations/trauma.json";

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Learn to manage overwhelming thoughts, reduce stress, and feel more in control. Dr. Blake uses mindfulness and evidence-based therapy to help you create calm and clarity.",
    image: "/services/anxiety.jpg",
    icon: anxietyIcon,
    lucide: BrainCog,
    slug: "anxiety",
  },
  {
    title: "Relationship Counseling",
    description:
      "Improve communication, rebuild trust, and deepen your connections. Whether individual or couples therapy, Serena helps you navigate conflict with empathy and skill.",
    image: "/services/relationship.jpg",
    icon: relationshipIcon,
    lucide: HeartHandshake,
    slug: "relationship",
  },
  {
    title: "Trauma Recovery",
    description:
      "Begin healing in a safe, supportive space. Using proven trauma-informed techniques, Dr. Blake helps you process difficult experiences and move forward with strength.",
    image: "/services/trauma.jpg",
    icon: traumaIcon,
    lucide: ShieldCheck,
    slug: "trauma",
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-white via-blue-50 to-blue-100 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-blue-900 mb-14">
          How I Can Help You Heal
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const LucideIcon = service.lucide;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="w-20 h-20 mx-auto -mt-10 z-10 relative bg-white rounded-full shadow-md flex items-center justify-center">
                  {service.icon ? (
                    <Lottie
                      animationData={service.icon}
                      loop
                      className="w-12 h-12"
                    />
                  ) : (
                    <LucideIcon className="w-8 h-8 text-blue-600" />
                  )}
                </div>

                <CardHeader className="text-center mt-4">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col flex-1 justify-between text-center px-6 pb-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <Link href={`/services/${service.slug}`} className="mx-auto">
                    <Button className="rounded-full px-6 py-6 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-md cursor-pointer">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
