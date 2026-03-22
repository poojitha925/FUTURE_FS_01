// src/components/Navbar.jsx

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../data/portfolioData";

export default function Navbar({ dark, toggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add shadow when user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "var(--bg-secondary)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px var(--shadow)" : "none",
      }}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="font-bold text-lg tracking-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "var(--accent)",
          }}
        >
          Deva Poojitha
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: theme toggle + mobile menu button */}
        <div className="flex items-center gap-4">
          <ThemeToggle dark={dark} toggle={toggle} />

          {/* Hamburger - mobile only */}
          <button
            className="md:hidden p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: "var(--text-primary)" }}
          >
            <span className="block w-5 h-0.5 mb-1 rounded" style={{ backgroundColor: "var(--text-primary)" }} />
            <span className="block w-5 h-0.5 mb-1 rounded" style={{ backgroundColor: "var(--text-primary)" }} />
            <span className="block w-5 h-0.5 rounded" style={{ backgroundColor: "var(--text-primary)" }} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-4"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
