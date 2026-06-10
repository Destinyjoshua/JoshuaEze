"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#pillars", label: "Pillars" },
    { href: "/#thinking", label: "Thinking" },
    { href: "/#journey", label: "Journey" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl">
      <div className="max-w-screen-2xl mx-auto">
        <div className="px-8 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-x-3">
            <div className="w-9 h-9 rounded-2xl bg-[#c9a84c] flex items-center justify-center">
              <span className="text-[#0a0a0a] font-bold text-2xl tracking-tighter">JE</span>
            </div>
            <div>
              <span className="font-semibold text-2xl tracking-tighter">Joshua Eze</span>
              <span className="ml-2 text-xs text-[#c9a84c] font-medium">@mrjoshuaeze</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-9 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive(link.href) ? "nav-active" : "text-[#a3a3a3] hover:text-white"} font-medium`}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/blog"
              className={`nav-link font-medium ${isActive("/blog") ? "nav-active" : "text-[#a3a3a3] hover:text-white"}`}
            >
              Blog
            </Link>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-x-4">
            <a
              href="https://x.com/mrjoshuaeze"
              target="_blank"
              className="px-5 py-2.5 text-sm font-medium border border-white/20 hover:bg-white/5 rounded-3xl transition-colors flex items-center gap-x-2"
            >
              Follow on X
            </a>
            <a
              href="#contact"
              className="js-calendly-trigger px-6 py-2.5 bg-[#c9a84c] hover:bg-[#b8973e] transition-all font-semibold text-sm rounded-3xl flex items-center gap-x-2 text-[#0a0a0a] cursor-pointer"
            >
              Let's talk strategy
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#a3a3a3] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-[#0a0a0a] pt-20 px-6">
          <div className="flex flex-col gap-y-1 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="mobile-nav-link py-4 px-2 border-b border-white/10 text-[#a3a3a3]"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="mobile-nav-link py-4 px-2 border-b border-white/10 text-[#a3a3a3]"
            >
              Blog
            </Link>

            <div className="pt-8 flex flex-col gap-y-3">
              <a
                href="https://x.com/mrjoshuaeze"
                target="_blank"
                className="flex items-center justify-center gap-x-2 py-3.5 border border-white/20 rounded-3xl text-sm font-medium"
              >
                Follow on X
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="js-calendly-trigger flex items-center justify-center gap-x-2 py-3.5 bg-[#c9a84c] text-[#0a0a0a] rounded-3xl text-sm font-semibold cursor-pointer"
              >
                Let's talk strategy
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
