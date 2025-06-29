"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <section id="faq" className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4 rounded-xl"
        >
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
                className="bg-white rounded-xl border border-gray-200 transition-colors"
              >
                <AccordionTrigger className="text-lg text-left text-gray-800 px-4 py-3 hover:bg-gray-100 rounded-t-xl transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm px-4 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
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
