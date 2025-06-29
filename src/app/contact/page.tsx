"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const router = useRouter();

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);

    setTimeout(() => {
      router.push("/#faq");
    }, 3000);
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-8 border border-blue-100"
      >
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-blue-900 text-center mb-6">
          Contact Dr. Blake
        </h1>
        <p className="text-blue-800 text-center text-sm mb-10">
          Have a question or ready to schedule a session? Fill out the form
          below and I’ll get back to you promptly.
        </p>

        {submitted ? (
          <div className="text-center py-20">
            <h2 className="text-xl text-blue-800 font-semibold mb-2">
              Thank you!
            </h2>
            <p className="text-blue-700 text-sm">
              Your message has been received. You will be redirected shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-blue-800 font-medium mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full border ${
                  errors.name ? "border-red-400" : "border-blue-100"
                } rounded-lg px-4 py-2 text-sm text-blue-900 shadow-sm focus:outline-none focus:ring-2 ${
                  errors.name ? "focus:ring-red-200" : "focus:ring-blue-200"
                }`}
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-blue-800 font-medium mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full border ${
                  errors.email ? "border-red-400" : "border-blue-100"
                } rounded-lg px-4 py-2 text-sm text-blue-900 shadow-sm focus:outline-none focus:ring-2 ${
                  errors.email ? "focus:ring-red-200" : "focus:ring-blue-200"
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-blue-800 font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`w-full border ${
                  errors.message ? "border-red-400" : "border-blue-100"
                } rounded-lg px-4 py-2 text-sm text-blue-900 shadow-sm focus:outline-none focus:ring-2 ${
                  errors.message ? "focus:ring-red-200" : "focus:ring-blue-200"
                }`}
              />
              {errors.message && (
                <p className="text-sm text-red-600 mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded-full transition shadow-md cursor-pointer"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
