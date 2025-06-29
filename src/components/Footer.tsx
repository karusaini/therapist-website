"use client";

import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-serif font-bold mb-2">
            Dr. Serena Blake
          </h3>
          <p className="text-sm text-white/80">
            Licensed Clinical Psychologist (PsyD)
          </p>
          <p className="mt-2 text-white/70">
            Helping you heal, grow, and thrive—one step at a time.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-200" />
            <a href="tel:+1234567890" className="hover:underline">
              (323) 555-0192
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-200" />
            <a
              href="mailto:serena@blakepsychology.com"
              className="hover:underline"
            >
              serena@blakepsychology.com
            </a>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-blue-200 mt-0.5" />
            <span>287 Maplewood Drive, Los Angeles, CA 90026</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 text-sm">
            <Link href="#about" className="hover:underline text-white/90">
              About
            </Link>
            <Link href="#contact" className="hover:underline text-white/90">
              Contact
            </Link>
            <Link href="#services" className="hover:underline text-white/90">
              Services
            </Link>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-blue-300 transition-colors" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-blue-300 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 text-xs text-white/60 text-center">
        © {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.
      </div>
    </footer>
  );
}
