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
  <div
    className={`bg-gray-50 border overflow-hidden px-2 py-1 rounded-2xl max-w-xs w-full hover:shadow-lg transition-shadow duration-300`}
  >
    <div
      className={`overflow-hidden mb-4 flex items-center justify-center h-40`}
    >
      <img
        src={image}
        alt={title}
        className="object-contain w-full h-full transition-transform duration-300 hover:scale-110"
      />
    </div>
    <div className="mx-3 pb-4">
      <div className="text-gray-400 text-sm mb-1">{tags}</div>
      <div className="font-bold text-xl">{title}</div>
    </div>
  </div>
);

export default ProjectCard;
