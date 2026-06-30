"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../components/Button";
import Link from "next/link";

export const AboutScreen: React.FC = () => {
  const values = [
    {
      title: "Structural Integrity",
      description: "We use premium concrete mixes, refined grade steel, and experienced structural engineering design to guarantee build stability.",
      icon: (
        <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Exquisite Craftsmanship",
      description: "From custom woodwork to imported marble flooring, every minor detail in our finishing goes through a strict QC inspector.",
      icon: (
        <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: "Absolute Transparency",
      description: "We ensure timely delivery, absolute alignment on project costs, and frequent construction status updates to investors.",
      icon: (
        <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex-1 w-full bg-white dark:bg-brand-deep pt-24">
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#b8955a_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Learn More
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About 7e Builders &amp; Developers
          </h1>
          <p className="text-zinc-400 text-base max-w-xl mx-auto">
            A premier name in high-end real estate construction and luxury commercial development in Pakistan.
          </p>
        </div>
      </section>

      {/* History and legacy Section */}
      <section className="py-24 bg-white dark:bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6 text-left">
            <h2 className="text-3xl font-bold text-brand-navy dark:text-white">
              Our Journey of Shaping Horizons
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Established with the ambition to disrupt Pakistani real estate construction standardizations, **7e Builders &amp; Developers (Pvt) Ltd** has grown into a highly trusted brand name in Lahore and Islamabad.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Over the last fifteen years, we have designed and built custom high-end residential villas, modern multi-unit apartment complexes, and landmark commercial high-rises. Our structures are recognized for their modern aesthetic elevations and robust engineering integrity.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              We coordinate closely with certified structural consultants, interior design houses, and premium material vendors to verify that every square foot of build meets local DHA, LDA, and international safety compliance.
            </p>
          </div>

          <div className="relative h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/project-tower.png"
              alt="7E Builders Islamabad residential tower architectural exterior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-zinc-50 dark:bg-brand-dark-navy/20 border-y border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission Card */}
          <div className="bg-white dark:bg-brand-dark-navy p-10 rounded-2xl shadow-md border border-zinc-100 dark:border-zinc-800 text-left flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-brand-navy dark:text-white">Our Mission</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              To construct landmark premium structures combining aesthetic excellence, modern luxury, and robust structural engineering, assuring absolute transparency and timely delivery for our clients and investors.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white dark:bg-brand-dark-navy p-10 rounded-2xl shadow-md border border-zinc-100 dark:border-zinc-800 text-left flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-brand-navy dark:text-white">Our Vision</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              To be recognized as the absolute standard of premium construction and design innovation in South Asia, building structures that inspire generations and redefine local real estate horizons.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white dark:bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-16">
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Our Pillars
            </span>
            <h2 className="text-3xl font-bold text-brand-navy dark:text-white">
              Values That Drive Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-8 rounded-xl bg-zinc-50 dark:bg-brand-dark-navy border border-zinc-100 dark:border-zinc-800 text-left flex flex-col gap-4"
              >
                <div className="p-3 bg-white dark:bg-brand-navy w-fit rounded-lg shadow-sm border border-zinc-200/20">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy dark:text-white">
                  {v.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Board */}
      <section className="py-24 bg-zinc-50 dark:bg-brand-deep border-t border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-16">
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Leadership
            </span>
            <h2 className="text-3xl font-bold text-brand-navy dark:text-white">
              Our Executive Board
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Providing strategic vision and executing world-class project standards.
            </p>
          </div>

          <div className="flex flex-col gap-12 max-w-4xl mx-auto">
            {/* CEO Card Detailed */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-white dark:bg-brand-dark-navy p-8 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 text-left">
              <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 rounded-xl overflow-hidden border-2 border-brand-gold shadow-lg">
                <Image
                  src="/images/ceo-tahseen-asghar-2026.jpeg"
                  alt="Muhammad Tahseen Asghar Tahseen Satti Chairman and CEO of 7E Builders"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy dark:text-white">
                    Muhammad Tahseen Asghar
                  </h3>
                  <span className="text-xs font-bold uppercase text-brand-gold tracking-widest block mt-1">
                    Chairman &amp; CEO, 7e Builders &amp; Developers
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Muhammad Tahseen Asghar is the founder and chief architect of the 7e legacy. With over 25 years of hands-on experience in real estate procurement, contracting, and steel structures, he has guided the corporation from a local contractor into a leading name in Lahore.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Under his visionary direction, the company has completed iconic residential communities in DHA, maintaining a solid track record of completing projects ahead of schedule.
                </p>
              </div>
            </div>

            {/* MD Card Detailed */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-white dark:bg-brand-dark-navy p-8 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 text-left">
              <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 rounded-xl overflow-hidden border-2 border-brand-gold shadow-lg">
                <Image
                  src="/images/director.jpeg"
                  alt="Bilal Satti Managing Director of 7E Builders"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy dark:text-white">
                    Bilal Satti
                  </h3>
                  <span className="text-xs font-bold uppercase text-brand-gold tracking-widest block mt-1">
                    Managing Director, 7e Builders &amp; Developers
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Bilal Satti holds a master&apos;s degree in Civil &amp; Structural Engineering. He directs project construction workflows, corporate partnerships, and technical design verification.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  He has spearheaded the digital transformation of construction management at 7e, introducing advanced smart villa technologies, energy-efficient elevations, and eco-friendly landscaping methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-navy text-white text-center border-t border-brand-gold/10">
        <div className="max-w-4xl mx-auto px-4 flex flex-col gap-6 items-center">
          <h2 className="text-3xl font-bold">
            Ready to Discover a Premium Real Estate Investment?
          </h2>
          <p className="text-zinc-300 text-sm max-w-xl">
            Book an appointment with our Managing Director at our Lahore Head Office today.
          </p>
          <div className="mt-2">
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
