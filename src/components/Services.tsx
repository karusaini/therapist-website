"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HeartHandshake, BrainCog, ShieldCheck } from "lucide-react";

// Optional Lottie animations
import anxietyIcon from "@/animations/anxiety.json";
import relationshipIcon from "@/animations/relationship.json";
import traumaIcon from "@/animations/trauma.json";

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Learn to manage overwhelming thoughts, reduce daily stress, and feel more in control. Dr. Blake uses mindfulness and evidence-based therapy to help you create calm and clarity.",
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
    <section
      id="services"
      className="bg-gradient-to-b from-white to-gray-50 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-gray-900 mb-14">
          How I Can Help
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
                <Card className="rounded-2xl border-none shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden hover:scale-[1.02]">
                  {/* Background Image */}
                  <div className="relative w-full h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Icon Circle */}
                  <div className="w-20 h-20 mx-auto -mt-10 z-10 relative bg-white rounded-full shadow-lg flex items-center justify-center">
                    {service.icon ? (
                      <Lottie
                        animationData={service.icon}
                        loop
                        className="w-12 h-12"
                      />
                    ) : (
                      <LucideIcon className="w-8 h-8 text-indigo-600" />
                    )}
                  </div>

                  {/* Text Content */}
                  <CardHeader className="text-center mt-4">
                    <CardTitle className="text-xl text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-1 justify-between text-center">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <Link
                      href={`/services/${service.slug}`}
                      className="mx-auto"
                    >
                      <Button
                        variant="outline"
                        className="rounded-full px-6 py-2 text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-colors duration-300 shadow-md cursor-pointer"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
