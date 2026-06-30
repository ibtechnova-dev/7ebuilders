"use client";

import React, { useState } from "react";
import Link from "next/link";
import { InputText } from "./InputText";
import { Button } from "./Button";
import { LogoMark } from "./LogoMark";
import { ceoSocialProfiles } from "../lib/seo";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-4 text-left">
            <div className="flex items-center gap-3">
              <LogoMark className="h-11 w-auto shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-base font-bold tracking-tight text-white leading-none">
                  7E BUILDERS
                </span>
                <span className="text-[10px] tracking-wider text-brand-gold uppercase leading-tight font-medium">
                  &amp; Developers
                </span>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mt-2">
              Building luxury residential and commercial structures with premium
              craftsmanship. Creating futures with robust concrete foundations
              and breathtaking architectural designs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-brand-gold transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Head Office
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400">
              <li className="flex gap-2">
                <svg
                  className="w-5 h-5 text-brand-gold shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Office No.1 Building 7E Lehtrar Road, Thandapani, Islamabad</span>
              </li>
              <li className="flex gap-2 items-center">
                <svg
                  className="w-5 h-5 text-brand-gold shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+92 300 5309701</span>
              </li>
              <li className="flex gap-2 items-center">
                <svg
                  className="w-5 h-5 text-brand-gold shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>ceo@7ebuildersanddevelopers.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="flex flex-col gap-4 text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Newsletter
            </h3>
            <p className="text-zinc-400 text-sm">
              Subscribe to stay updated on our upcoming commercial launches and luxury housing projects.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <InputText
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-zinc-900 border-zinc-700 bg-white"
              />
              <Button type="submit" variant="secondary" className="w-full text-xs font-semibold py-2">
                Subscribe
              </Button>
            </form>
            {subscribed && (
              <span className="text-xs text-brand-gold font-medium animate-pulse">
                Thank you for subscribing!
              </span>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-xs text-zinc-500" suppressHydrationWarning>
              &copy; {new Date().getFullYear()}{" "}
              7e Builders &amp; Developers (Pvt) Ltd. All Rights Reserved.
            </p>
            <p className="text-xs text-zinc-500">
              Developed by <span className="text-brand-gold">IBTechnova</span>
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="text-[10px] uppercase tracking-wider text-zinc-500">
              Connect with our CEO
            </span>
            <div className="flex gap-4">
            <a
              href={ceoSocialProfiles[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-brand-gold transition-colors"
              aria-label="Tahseen Satti on Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>
            <a
              href={ceoSocialProfiles[1]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-brand-gold transition-colors"
              aria-label="Tahseen Satti on Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href={ceoSocialProfiles[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-brand-gold transition-colors"
              aria-label="Tahseen Satti on TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.3 6.3 0 00-.88-.05 6.34 6.34 0 00-5.34 9.74A6.34 6.34 0 0015.82 15V8.05a8.16 8.16 0 004.77 1.52V6.69z" />
              </svg>
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
