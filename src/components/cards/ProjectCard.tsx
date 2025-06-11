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
    className={`group bg-white dark:bg-gray-900 border  dark:border-2 overflow-hidden rounded-2xl max-w-xs w-full transition-all duration-300 hover:-translate-y-1`}
  >
    <div
      className={`${bg} dark:bg-opacity-20 overflow-hidden mb-4 flex items-center justify-center h-48 sm:h-48 relative`}
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-black/20 transition-colors duration-300" />
    </div>
    <div className="px-4 pb-5">
      <div className="text-gray-500 dark:text-gray-400 text-sm mb-2 font-medium">
        {tags}
      </div>
      <h3 className="font-bold text-xl text-gray-800 dark:text-gray-200 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors duration-300">
        {title}
      </h3>
    </div>
  </div>
);

export default ProjectCard;
