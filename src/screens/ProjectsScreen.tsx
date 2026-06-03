"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../components/Button";
import Link from "next/link";

export const ProjectsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "All" | "Residential" | "Completed" | "Ongoing"
  >("All");

  const categories = ["All", "Residential", "Completed", "Ongoing"];

  const projects = [
    {
      title: "Prime Enclave Islamabad",
      category: "Residential",
      location: "Islamabad",
      image: "/images/project-tower.png",
      status: "Ongoing",
      specs: ["Premium Plot Files", "Gated Community", "Modern Infrastructure", "24/7 Security"],
      description: "A prestigious gated residential enclave in the heart of Islamabad, offering premium plot files, villas, and row houses with state-of-the-art infrastructure and serene surroundings.",
    },
    {
      title: "Bahria Enclave",
      category: "Residential",
      location: "Bahria Town, Islamabad",
      image: "/images/project-villa.png",
      status: "Completed",
      specs: ["Luxury Villas", "Landscaped Gardens", "Premium Finishing", "Family Lifestyle"],
      description: "An exclusive luxury housing community within Bahria Town delivering elegantly designed villas, superior finishing standards, and a complete family lifestyle experience.",
    },
    {
      title: "Rawal Enclave",
      category: "Residential",
      location: "Rawalpindi / Islamabad",
      image: "/images/project-apartments.png",
      status: "Completed",
      specs: ["Residential Plots", "Rawal Lake Proximity", "Developed Sector", "Utility Services"],
      description: "A well-developed residential project near Rawal Lake offering plot files in a fully serviced community with utilities, greenery, and easy connectivity to Islamabad.",
    },
    {
      title: "Royal Homes",
      category: "Residential",
      location: "Islamabad",
      image: "/images/project-townhouse.png",
      status: "Ongoing",
      specs: ["Modern Townhouses", "Contemporary Elevations", "Imported Material", "Spacious Layouts"],
      description: "Modern townhouses and smart homes engineered to redefine affordable luxury, featuring contemporary elevations, spacious layouts, and premium imported material work.",
    },
    {
      title: "Vista Valley",
      category: "Residential",
      location: "Islamabad",
      image: "/images/project-villa.png",
      status: "Ongoing",
      specs: ["Valley-Side Plots", "Green Landscape", "Scenic Views", "Road Infrastructure"],
      description: "A scenic valley-side residential community offering premium plot files set among lush green landscapes, mountain views, and modern infrastructure in the twin cities corridor.",
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : activeTab === "Completed" || activeTab === "Ongoing"
      ? projects.filter((p) => p.status === activeTab)
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="flex-1 w-full bg-white dark:bg-brand-deep pt-24">
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#b8955a_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Our Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Iconic Building Projects
          </h1>
          <p className="text-zinc-400 text-base max-w-xl mx-auto">
            Explore our premium housing villas, commercial plazas, and smart high-rise residential properties.
          </p>
        </div>
      </section>

      {/* Projects Filter and Grid */}
      <section className="py-24 bg-white dark:bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          {/* Tabs */}
          <div className="flex justify-center border-b border-zinc-200 dark:border-zinc-800 pb-2">
            <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`text-xs font-bold uppercase tracking-widest pb-3 transition-all duration-300 relative border-b-2 whitespace-nowrap focus:outline-none ${
                    activeTab === cat
                      ? "text-brand-gold border-brand-gold"
                      : "text-zinc-400 border-transparent hover:text-brand-navy dark:hover:text-white"
                  }`}
                  onClick={() =>
                    setActiveTab(cat as "All" | "Residential" | "Completed" | "Ongoing")
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                className="group bg-zinc-50 dark:bg-brand-dark-navy rounded-2xl overflow-hidden shadow-lg border border-zinc-100 dark:border-zinc-800 flex flex-col lg:flex-row transition-all duration-300 hover:shadow-2xl"
              >
                {/* Image Section */}
                <div className="relative h-64 lg:h-auto lg:w-[45%] shrink-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-brand-navy/95 text-white text-[10px] font-semibold uppercase px-2.5 py-1 rounded backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded text-brand-deep ${
                      project.status === "Completed" ? "bg-green-400" : project.status === "Ongoing" ? "bg-amber-400" : "bg-sky-400"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-between gap-6 text-left">
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
                      {project.location}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-navy dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      Project Specifications:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {project.specs.map((spec, index) => (
                        <div key={index} className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-2">
                    <Link href="/contact">
                      <Button variant="outline" size="sm" className="w-full lg:w-auto">
                        Inquire Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                No projects found in this category. We are launching exciting new developments soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-brand-navy text-white text-center border-t border-brand-gold/10">
        <div className="max-w-4xl mx-auto px-4 flex flex-col gap-6 items-center">
          <h2 className="text-3xl font-bold">
            Interested in Booking a Site Visit?
          </h2>
          <p className="text-zinc-300 text-sm max-w-lg">
            Schedule an exclusive site visit to any of our projects with our dedicated project managers.
          </p>
          <div className="mt-2">
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Schedule Site Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
