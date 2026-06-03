"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./Button";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-brand-deep/90 shadow-md backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded bg-white shadow-sm flex items-center justify-center border border-zinc-200">
              <Image
                src="/logo7e.jpeg"
                alt="7e Builders & Developers Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base md:text-lg font-bold tracking-tight text-brand-navy dark:text-white leading-none">
                7E BUILDERS
              </span>
              <span className="text-[10px] md:text-xs tracking-wider text-brand-gold uppercase leading-tight font-medium">
                &amp; Developers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-xs tracking-widest uppercase font-semibold transition-colors duration-300 pb-1 ${
                    isActive
                      ? "text-brand-gold"
                      : "text-brand-navy dark:text-zinc-300 hover:text-brand-gold"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button variant="secondary" size="sm">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-brand-navy dark:text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-brand-deep/90 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between pt-24 pb-12 px-6">
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className={`text-lg tracking-widest uppercase font-semibold transition-colors ${
                    isActive ? "text-brand-gold" : "text-white hover:text-brand-gold"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col items-center gap-4">
            <Link href="/contact" onClick={toggleMenu} className="w-full">
              <Button variant="secondary" size="md" className="w-full">
                Get a Quote
              </Button>
            </Link>
            <p className="text-zinc-500 text-xs tracking-wider" suppressHydrationWarning>
              7e Builders &amp; Developers &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
