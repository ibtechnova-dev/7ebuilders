export type ProjectStatus = "Ongoing" | "Completed";

export type Project = {
  slug: string;
  name: string;
  category: string;
  location: string;
  image: string;
  imageAlt: string;
  status: ProjectStatus;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "vista-valley",
    name: "Vista Valley",
    category: "Residential",
    location: "Islamabad",
    image: "/images/project-villa.png",
    imageAlt: "Vista Valley Islamabad residential villa exterior",
    status: "Ongoing",
    description:
      "A scenic valley-side residential community offering premium plot files set among lush green landscapes, mountain views, and modern infrastructure in the twin cities corridor.",
  },
  {
    slug: "prime-enclave-islamabad",
    name: "Prime Enclave Islamabad",
    category: "Residential",
    location: "Islamabad",
    image: "/images/project-tower.png",
    imageAlt: "Prime Enclave Islamabad residential tower exterior",
    status: "Ongoing",
    description:
      "A prestigious gated residential enclave in Islamabad offering premium plot files, villas, and row houses with modern infrastructure and serene surroundings.",
  },
  {
    slug: "bahria-enclave",
    name: "Bahria Enclave",
    category: "Residential",
    location: "Bahria Town, Islamabad",
    image: "/images/project-villa.png",
    imageAlt: "Bahria Enclave Islamabad luxury villa exterior",
    status: "Completed",
    description:
      "An exclusive luxury housing community within Bahria Town delivering elegantly designed villas, superior finishing standards, and a complete family lifestyle experience.",
  },
  {
    slug: "royal-homes",
    name: "Royal Homes",
    category: "Residential",
    location: "Islamabad",
    image: "/images/project-townhouse.png",
    imageAlt: "Royal Homes Islamabad modern townhouse exterior",
    status: "Ongoing",
    description:
      "Modern townhouses and smart homes engineered to redefine affordable luxury, featuring contemporary elevations, spacious layouts, and premium imported material work.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
