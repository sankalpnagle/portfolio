"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import ProjectModal from "@/components/modal/ProjectModal";

const projects = [
  {
    image: "/images/pet-img.jpg",
    tags: "Pet Journal, Web App",
    title: "Story of Pets",
    bg: "bg-[#fef4e9]",
    category: "Full Stack App",
    type: "Website",
    client: "Client Project",
    languages: "React, Node.js, Firebase",
    preview: "",
    description:
      "Story of Pets is a full-stack web app where users can register up to five pets and maintain weekly and monthly journals. It helps track pet activities, routines, and memories, with user authentication and Firebase database integration.",
  },
  {
    image: "/images/port-img.png",
    tags: "Marine Industry, Calculator",
    title: "Port Cost",
    bg: "bg-[#e0f4ff]",
    category: "Enterprise App",
    type: "Web Application",
    client: "Gigatorb Software",
    languages: "React, Java Spring Boot",
    preview: "https://www.portcosts.com/home",
    description:
      "Port Cost is an enterprise-grade web tool built for the marine industry to calculate customizable port service costs and generate PDAs. It supports dynamic forms and real-time data rendering for accurate expense planning.",
  },
  {
    image: "/images/phar-img.png",
    tags: "E-commerce, Pharmacy",
    title: "Salus Pharmacy",
    bg: "bg-[#faf6e6]",
    category: "E-commerce Platform",
    type: "Website",
    client: "Client Product",
    languages: "Next.js, Prisma, MySQL",
    preview: "https://www.saluspharmacy.com/",
    description:
      "Salus Pharmacy is a full-featured e-commerce platform for ordering medicines online. It supports role-based access for doctors, pharmacy staff, and admins, allowing prescription uploads, order tracking, payments, and inventory management.",
  },
  {
    image: "/images/dash-img.png",
    tags: "Dashboard, Data Visualization",
    title: "Dashboard",
    bg: "bg-[#e6f1ff]",
    category: "Dashboard",
    type: "Web App",
    client: "Personal Project",
    languages: "React, Redux, Node.js",
    preview: "",
    description:
      "A responsive dashboard that displays product sales data with weekly and monthly filters. It features interactive charts, graphs, and product management tools to help visualize and monitor sales performance.",
  },
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <div className="w-full mx-auto bg-white rounded-3xl shadow p-8 min-h-screen">
      <h2 className="text-3xl font-bold mb-2">Portfolio</h2>
      <div className="w-20 h-1 bg-sky-400 rounded mb-6" />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="w-full cursor-pointer"
            onClick={() => {
              setSelected(project);
              setOpen(true);
            }}
          >
            <ProjectCard
              image={project.image}
              tags={project.tags}
              title={project.title}
              bg={project.bg}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal
          open={open}
          onOpenChange={(o) => {
            setOpen(o);
            if (!o) setSelected(null);
          }}
          project={selected}
        />
      )}
    </div>
  );
}
