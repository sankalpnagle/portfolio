"use client";
import { useState } from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import ProjectModal from "@/components/modal/ProjectModal";
import { motion, type Variants } from "framer-motion";

const projects = [
  {
    image: "/images/pet-img.jpg",
    tags: "Pet Journal, Web App",
    title: "Story of Pets",
    category: "Full Stack App",
    type: "Website",
    client: "Client Project",
    languages: "React, Node.js, Firebase",
    preview: "https://pets-story-frontend.vercel.app/",
    description:
      "Story of Pets is a full-stack web app where users can register up to five pets and maintain weekly and monthly journals. It helps track pet activities, routines, and memories, with user authentication and Firebase database integration.",
  },
  {
    image: "/images/port-img.png",
    tags: "Marine Industry, Calculator",
    title: "Port Cost",
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
    category: "Dashboard",
    type: "Web App",
    client: "Personal Project",
    languages: "React, Redux, Node.js",
    preview: "https://main.d36pecy2ni8irx.amplifyapp.com/dashboard",
    description:
      "A responsive and user-friendly dashboard designed to display and monitor product sales data in both weekly and monthly views. The dashboard features interactive bar charts and graphs that visually represent key metrics such as total sales, revenue trends, and top-selling products. Users can easily filter data by time periods to gain insights into performance over specific intervals. In addition to sales analytics, the dashboard also allows users to track payment statuses and view recent transactions. With integrated product management tools, it enables efficient monitoring of inventory, product listings, and overall business performance—all in one centralized interface optimized for desktop and mobile devices.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full mx-auto bg-white border dark:bg-gray-900/90 rounded-3xl dark:shadow p-8 min-h-screen transition-colors duration-200"
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          Portfolio
        </h2>
        <div className="w-20 h-1 bg-sky-400 rounded mb-6" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            onClick={() => {
              setSelectedProject(project);
              setOpen(true);
            }}
            className="cursor-pointer"
          >
            <ProjectCard
              image={project.image}
              tags={project.tags}
              title={project.title}
            />
          </motion.div>
        ))}
      </motion.div>

      {selectedProject && (
        <ProjectModal
          open={open}
          onOpenChange={(isOpen) => {
            setOpen(isOpen);
            if (!isOpen) setSelectedProject(null);
          }}
          project={selectedProject}
        />
      )}
    </motion.div>
  );
}
