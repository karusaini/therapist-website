"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import Link from "next/link";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-gradient-to-b from-white to-blue-50 py-24 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-blue-900 mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-5">
          {faqData.map((item, i) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <AccordionItem
                value={`q${i}`}
                className="bg-white rounded-xl border border-blue-100 shadow-sm"
              >
                <AccordionTrigger className="text-base sm:text-lg text-left text-blue-900 px-5 py-4 hover:bg-blue-50 transition-colors font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-blue-800 text-sm px-5 pb-5 pt-1 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <div className="mt-16 bg-white border border-blue-100 rounded-2xl p-6 text-center shadow-md">
          <HelpCircle className="w-8 h-8 text-blue-500 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-blue-800 mb-4 text-sm">
            Reach out directly and I’ll be happy to guide you.
          </p>
          <Link href="/contact">
            <button className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition shadow cursor-pointer">
              Contact Dr. Blake
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

const faqData = [
  {
    question: "Do you accept insurance?",
    answer:
      "No, but I provide a superbill you can submit to your insurance company for reimbursement.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "Yes, I offer virtual therapy via Zoom for clients located in California.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Please notify me at least 24 hours in advance to avoid being charged for a missed session.",
  },
  {
    question: "How long is each therapy session?",
    answer:
      "Sessions typically last 50 minutes, which is standard for individual psychotherapy.",
  },
  {
    question: "What issues can you help with?",
    answer:
      "I specialize in treating anxiety, relationship challenges, trauma recovery, stress management, and self-esteem issues.",
  },
];
