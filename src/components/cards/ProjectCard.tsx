import React from "react";

interface ProjectCardProps {
  image: string;
  tags: string;
  title: string;
  bg?: string; // background color for the image container
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  tags,
  title,
  bg = "bg-pink-50",
}) => (
  <div className={`bg-gray-50  rounded-2xl p-5 max-w-xs w-full`}>
    <div
      className={`rounded-xl overflow-hidden mb-4 bg-white flex items-center justify-center h-40`}
    >
      <img src={image} alt={title} className="object-contain w-full h-full" />
    </div>
    <div className="text-gray-400 text-sm mb-1">{tags}</div>
    <div className="font-bold text-xl">{title}</div>
  </div>
);

export default ProjectCard;
