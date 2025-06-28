"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-100 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-serif font-bold text-gray-900"
        >
          Dr. Serena Blake
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <Link href="#about" className="hover:text-black">
            About
          </Link>
          <Link href="#services" className="hover:text-black">
            Services
          </Link>
          <Link href="#faq" className="hover:text-black">
            FAQ
          </Link>
          <Link href="#contact" className="hover:text-black">
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t shadow-md px-4 py-4 space-y-2 text-gray-700 animate-slide-down">
          <Link
            href="#about"
            onClick={toggleMenu}
            className="block px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            About
          </Link>
          <Link
            href="#services"
            onClick={toggleMenu}
            className="block px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Services
          </Link>
          <Link
            href="#faq"
            onClick={toggleMenu}
            className="block px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            FAQ
          </Link>
          <Link
            href="#contact"
            onClick={toggleMenu}
            className="block px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
