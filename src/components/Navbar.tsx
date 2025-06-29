"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const sections = ["about", "services", "faq", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl md:text-2xl font-serif font-bold text-blue-800 tracking-tight"
        >
          Dr. Serena Blake
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-blue-700">
          {sections.map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`hover:text-blue-900 transition ${
                activeSection === id ? "text-blue-900 font-semibold" : ""
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </nav>

        <button onClick={toggleMenu} className="md:hidden text-blue-800">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-t border-blue-100 shadow-lg px-4 py-4 space-y-2 text-blue-800">
          {sections.map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded-md hover:bg-blue-50 transition"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
