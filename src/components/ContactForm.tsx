"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { motion } from "framer-motion";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Phone is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Please describe what brings you here"),
  time: z.string().min(1, "Preferred time is required"),
  consent: z.boolean().refine((val) => val, {
    message: "You must agree to be contacted.",
  }),
});

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      time: "",
      consent: false,
    },
  });

  async function onSubmit(values: unknown) {
    console.log(values);

    await toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
      loading: "Sending your message...",
      success: "Form submitted successfully!",
      error: "Something went wrong.",
    });

    form.reset();
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-gray-50 py-24 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8 sm:p-10 border border-gray-200"
      >
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-gray-900 mb-10">
          Book a Free Consultation
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 text-gray-800"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-base">Name</Label>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-base">Phone</Label>
                  <FormControl>
                    <Input placeholder="(123) 456-7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-base">Email</Label>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-base">What brings you here?</Label>
                  <FormControl>
                    <Textarea
                      placeholder="Briefly describe your concerns or goals"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-base">
                    Preferred time to reach you
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="e.g., afternoons after 2pm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex items-start gap-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-1"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <Label className="text-sm text-gray-700">
                      I agree to be contacted via phone or email
                    </Label>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full rounded-full text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 text-base shadow-sm cursor-pointer"
            >
              Submit
            </Button>
          </form>
        </Form>
      </motion.div>
    </section>
  );
}
