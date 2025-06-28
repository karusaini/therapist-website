// components/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-gray-900 mb-10">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem value="q1">
            <AccordionTrigger className="text-lg text-gray-800">
              Do you accept insurance?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-sm">
              No, but I provide a superbill you can submit to your insurance
              company for reimbursement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger className="text-lg text-gray-800">
              Are online sessions available?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-sm">
              Yes, I offer virtual therapy via Zoom for clients located in
              California.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger className="text-lg text-gray-800">
              What is your cancellation policy?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-sm">
              Please notify me at least 24 hours in advance to avoid being
              charged for a missed session.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger className="text-lg text-gray-800">
              How long is each therapy session?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-sm">
              Sessions typically last 50 minutes, which is standard for
              individual psychotherapy.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5">
            <AccordionTrigger className="text-lg text-gray-800">
              What issues can you help with?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-sm">
              I specialize in treating anxiety, relationship challenges, trauma
              recovery, stress management, and self-esteem issues.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
