"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/Button";
import { InputText } from "../components/InputText";

export const HomeScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
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
          : "message";
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const stats = [
    { number: "15+", label: "Years of Legacy" },
    { number: "120+", label: "Completed Projects" },
    { number: "10+", label: "Ongoing Developments" },
    { number: "5000+", label: "Happy Homeowners" },
  ];

  const projects = [
    {
      title: "Prime Enclave Islamabad",
      category: "Residential",
      location: "Islamabad",
      image: "/images/project-tower.png",
      status: "Ongoing",
      description: "A prestigious gated residential enclave in the heart of Islamabad, offering premium plot files, villas, and row houses with state-of-the-art infrastructure and serene surroundings.",
    },
    {
      title: "Bahria Enclave",
      category: "Residential",
      location: "Bahria Town, Islamabad",
      image: "/images/project-villa.png",
      status: "Completed",
      description: "An exclusive luxury housing community within Bahria Town delivering elegantly designed villas, superior finishing standards, and a complete family lifestyle experience.",
    },
    {
      title: "Royal Homes",
      category: "Residential",
      location: "Islamabad",
      image: "/images/project-townhouse.png",
      status: "Ongoing",
      description: "Modern townhouses and smart homes engineered to redefine affordable luxury, featuring contemporary elevations, spacious layouts, and premium imported material work.",
    },
  ];

  const testimonials = [
    {
      quote: "7e Builders built our dream villa in DHA Phase 6. Their craftsmanship and attention to detail are unmatched. The structure is solid and the finish is highly premium.",
      author: "Barrister Suleman Khan",
      role: "Homeowner",
    },
    {
      quote: "Working with 7e Developers on our corporate office in Gulberg was a fantastic experience. They delivered the project on time and the corporate glass design has become a landmark.",
      author: "Dr. Ayesha Malik",
      role: "CEO, Malik Enterprises",
    },
  ];

  return (
    <div className="flex-1 w-full bg-white dark:bg-brand-deep">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-navy">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/project-villa.png"
            alt="Luxury villa exterior by 7E Builders in Islamabad"
            fill
            className="object-cover opacity-20 filter brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-navy/80 to-brand-navy/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl flex flex-col gap-6">
            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-brand-gold uppercase animate-fade-in">
              7e Builders &amp; Developers
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Building <span className="text-brand-gold">Dreams</span>,<br />
              Creating <span className="text-brand-gold">Futures</span>.
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-lg">
              Crafting premium luxury properties, high-rise apartments, and iconic commercial landmarks with solid craftsmanship, transparency, and architectural brilliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
              <Link href="/projects">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Explore Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Featured Hero Box */}
          <div className="w-full max-w-md bg-white/5 dark:bg-brand-dark-navy/40 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl flex flex-col gap-4 text-left">
            <span className="text-[10px] tracking-wider uppercase font-semibold text-brand-gold">
              Featured Listing
            </span>
            <div className="relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/project-townhouse.png"
                alt="Vista Valley Islamabad townhouse exterior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 right-3 bg-brand-gold text-brand-deep text-[10px] font-bold uppercase px-2.5 py-1 rounded">
                Selling Fast
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Vista Valley</h3>
              <p className="text-xs text-zinc-400">Islamabad</p>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              A scenic valley-side residential community with premium plot files, lush green landscapes, and modern infrastructure in the twin cities.
            </p>
            <Link href="/projects" className="mt-2">
              <Button variant="gold" size="sm" className="w-full">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-400">Scroll Down</span>
          <div className="w-5 h-8 border-2 border-zinc-400 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-navy dark:bg-brand-dark-navy border-y border-brand-gold/10 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-3xl md:text-5xl font-extrabold text-brand-gold tracking-tight">
                  {stat.number}
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About legacy Section */}
      <section className="py-24 bg-zinc-50 dark:bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Legacy Images */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="absolute inset-0 -m-4 border-2 border-brand-gold/15 rounded-xl -z-10" />
            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-lg mt-8">
              <Image
                src="/images/project-villa.png"
                alt="Islamabad luxury residential villa construction exterior"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/project-tower.png"
                alt="Islamabad residential tower development exterior"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Legacy Content */}
          <div className="flex flex-col gap-6 text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Legacy of Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy dark:text-white leading-tight">
              Crafting Landmark Structures That Define Luxury Living
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              At 7e Builders &amp; Developers, our philosophy is anchored in quality, transparency, and innovation. For over 15 years, we have delivered iconic projects that serve as structural landmarks.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              From raw foundation layout to premium woodwork finishes, our engineers and architects coordinate with the finest craftsmen. We do not just build apartments and villas; we build generational spaces that you are proud to call home.
            </p>
            <div className="mt-4">
              <Link href="/about">
                <Button variant="primary" size="md">
                  Read Our Full Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="py-24 bg-white dark:bg-brand-deep/50 border-t border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy dark:text-white">
              Our Iconic Developments
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Discover a selected range of our luxury residential housing, upscale apartments, and landmark office projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group flex flex-col bg-white dark:bg-brand-dark-navy rounded-xl overflow-hidden shadow-lg border border-zinc-100 dark:border-zinc-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-left"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} ${project.location} residential project exterior`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-brand-navy/80 text-white text-[10px] font-semibold uppercase px-2.5 py-1 rounded backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded text-brand-deep ${
                      project.status === "Completed" ? "bg-green-400" : project.status === "Ongoing" ? "bg-amber-400" : "bg-sky-400"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                    {project.location}
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/projects">
              <Button variant="outline" size="md">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Team Preview */}
      <section className="py-24 bg-zinc-50 dark:bg-brand-deep border-t border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-16">
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy dark:text-white">
              The Visionaries Behind 7e
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Dedicated to delivering excellence and pushing boundaries in Pakistani real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* CEO Card */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-brand-dark-navy p-6 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-800 text-left">
              <div className="relative w-36 h-36 shrink-0 rounded-full overflow-hidden border-2 border-brand-gold">
                <Image
                  src="/images/ceo-tahseen-asghar-2026.jpeg"
                  alt="Muhammad Tahseen Asghar Tahseen Satti Chairman and CEO of 7E Builders"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-xl font-bold text-brand-navy dark:text-white">
                    Muhammad Tahseen Asghar
                  </h3>
                  <span className="text-xs font-semibold uppercase text-brand-gold tracking-widest">
                    Chairman &amp; CEO
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs italic leading-relaxed">
                  &quot;Building dreams requires vision. At 7e, we transform raw structures into majestic realities, prioritizing structural integrity above all.&quot;
                </p>
              </div>
            </div>

            {/* Director Card */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-brand-dark-navy p-6 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-800 text-left">
              <div className="relative w-36 h-36 shrink-0 rounded-full overflow-hidden border-2 border-brand-gold">
                <Image
                  src="/images/director.jpeg"
                  alt="Bilal Satti Managing Director of 7E Builders"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-xl font-bold text-brand-navy dark:text-white">
                    Bilal Satti
                  </h3>
                  <span className="text-xs font-semibold uppercase text-brand-gold tracking-widest">
                    Managing Director
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs italic leading-relaxed">
                  &quot;Our goal is simple: to deliver architectural masterpieces that stand the test of time. Quality is our identity.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-navy text-white border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 flex flex-col justify-between text-left gap-6"
              >
                <p className="text-zinc-300 text-sm leading-relaxed italic">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex flex-col">
                  <span className="font-bold text-brand-gold text-sm">{t.author}</span>
                  <span className="text-zinc-500 text-xs">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white dark:bg-brand-deep border-t border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Copy */}
          <div className="flex flex-col gap-6 text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy dark:text-white">
              Let&apos;s Build Your Future Together
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Have a project in mind or looking for a premium residential investment? Drop us a message, and our real estate investment counselors will reach out to you within 24 hours.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                <span className="p-2.5 rounded-full bg-brand-gold/10 text-brand-gold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span>+92 300 5309701</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                <span className="p-2.5 rounded-full bg-brand-gold/10 text-brand-gold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span>ceo@7ebuildersanddevelopers.com</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-zinc-50 dark:bg-brand-dark-navy p-8 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold animate-bounce">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy dark:text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs">
                  Thank you for contacting 7e Builders. Our executive will call you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <InputText
                  label="Full Name"
                  placeholder="Enter your name"
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
                  label="Your Message"
                  placeholder="Tell us about your project requirements..."
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
    </div>
  );
};
