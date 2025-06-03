"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import ProjectModal from "@/components/modal/ProjectModal";

const projects = [
  {
    image: "/images/dino.png",
    tags: "Travel Landing , UX/UI",
    title: "Chul Urina",
    bg: "bg-[#fef4e9]",
    category: "Mockup",
    type: "Website",
    client: "Envato",
    languages: "Photoshop, Figma",
    preview: "https://www.envato.com",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequuntur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseq quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequuntur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseq quo obcaecati rerum sit non.",
  },
  {
    image: "/images/alien.png",
    tags: "Travel Landing , UX/UI",
    title: "Aura Dione",
    bg: "bg-[#f6eeff]",
    category: "Logo",
    type: "Website",
    client: "Envato",
    languages: "Photoshop, Figma",
    preview: "https://www.envato.com",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequuntur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseq quo obcaecati rerum sit non.",
  },
  {
    image: "/images/elephant.png",
    tags: "Travel Landing , UX/UI",
    title: "T-Shirt Design",
    bg: "bg-[#e0f4ff]",
    category: "Graphic Design",
    type: "Website",
    client: "Envato",
    languages: "Photoshop, Figma",
    preview: "https://www.envato.com",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequuntur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseq quo obcaecati rerum sit non.",
  },
  {
    image: "/images/astronaut.png",
    tags: "Travel Landing , UX/UI",
    title: "Packaging Box",
    bg: "bg-[#e6f1ff]",
    category: "Mockup",
    type: "Website",
    client: "Envato",
    languages: "Photoshop, Figma",
    preview: "https://www.envato.com",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequuntur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseq quo obcaecati rerum sit non.",
  },
  {
    image: "/images/watermelon.png",
    tags: "Travel Landing , UX/UI",
    title: "Modern Bag Design",
    bg: "bg-[#fbe8f3]",
    category: "Graphic Design",
    type: "Website",
    client: "Envato",
    languages: "Photoshop, Figma",
    preview: "https://www.envato.com",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequuntur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseq quo obcaecati rerum sit non.",
  },
  {
    image: "/images/robot.png",
    tags: "Travel Landing , UX/UI",
    title: "Chul Urina",
    bg: "bg-[#faf6e6]",
    category: "Logo",
    type: "Website",
    client: "Envato",
    languages: "Photoshop, Figma",
    preview: "https://www.envato.com",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequuntur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseq quo obcaecati rerum sit non.",
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
