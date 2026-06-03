"use client";

import React, { useState } from "react";
import { Button } from "../components/Button";
import { InputText } from "../components/InputText";

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API submit
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    // Map id to state keys. e.target.id might be "input-full-name", etc.
    const key = id.includes("name")
      ? "name"
      : id.includes("email")
        ? "email"
        : id.includes("phone")
          ? "phone"
          : id.includes("subject")
            ? "subject"
            : "message";
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const offices = [
    {
      city: "Head Office — Islamabad",
      address: "Office No.1 Building 7E Lehtrar Road, Thandapani, Islamabad",
      phone: "+92 300 5309701",
      email: "ceo@7ebuildersanddevelopers.com",
    },
  ];

  return (
    <div className="flex-1 w-full bg-white dark:bg-brand-deep pt-24">
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#b8955a_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact Our Executive Office
          </h1>
          <p className="text-zinc-400 text-base max-w-xl mx-auto">
            Schedule corporate meetings, builder consultations, or investment inquiries with our team.
          </p>
        </div>
      </section>

      {/* Info & Form Section */}
      <section className="py-24 bg-white dark:bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Office Details */}
          <div className="flex flex-col gap-10 text-left">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold text-brand-navy dark:text-white">
                Contact Information
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Reach out to us directly via phone lines or visit our head office. Our real estate counselors are available Monday to Saturday (9:00 AM - 6:00 PM).
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {offices.map((office, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-zinc-50 dark:bg-brand-dark-navy border border-zinc-100 dark:border-zinc-800 flex flex-col gap-3"
                >
                  <h3 className="text-lg font-bold text-brand-navy dark:text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                    {office.city}
                  </h3>
                  <div className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400 pl-4">
                    <p className="flex gap-2">
                      <svg className="w-5 h-5 text-brand-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {office.address}
                    </p>
                    <p className="flex gap-2 items-center">
                      <svg className="w-5 h-5 text-brand-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {office.phone}
                    </p>
                    <p className="flex gap-2 items-center">
                      <svg className="w-5 h-5 text-brand-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {office.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-50 dark:bg-brand-dark-navy p-8 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 text-left">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold animate-bounce">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy dark:text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs">
                  We have received your query. An investment representative will call you back within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <InputText
                  label="Full Name"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputText
                    label="Email Address"
                    type="email"
                    placeholder="name@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <InputText
                    label="Phone Number"
                    type="tel"
                    placeholder="+92 300 1234567"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <InputText
                  label="Subject"
                  placeholder="e.g. Booking Inquiries, Site Visit"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
                <InputText
                  label="Your Message"
                  placeholder="State your building or purchasing requirements in detail..."
                  multiline
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button type="submit" variant="secondary" isLoading={loading} className="w-full mt-2">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Mock Map Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="h-96 w-full rounded-2xl overflow-hidden relative border border-zinc-200 dark:border-zinc-800 shadow-lg">
          {/* Custom luxury map background styling */}
          <div className="absolute inset-0 bg-brand-navy flex flex-col items-center justify-center gap-4 text-center px-4">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#b8955a_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
            <svg className="w-12 h-12 text-brand-gold animate-bounce z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="z-10">
              <h4 className="text-xl font-bold text-white">Office No.1 Building 7E, Lehtrar Road, Islamabad</h4>
              <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
                Thandapani, Lehtrar Road, Islamabad, Pakistan
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 mt-2"
            >
              <Button variant="outline" size="sm">
                Open in Google Maps
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
