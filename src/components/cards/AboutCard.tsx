import React from "react";

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
  icon,
  title,
  description,
  color = "bg-gray-50 dark:bg-gray-800/50",
}) => (
  <div
    className={`${color} dark:border-2 rounded-2xl p-6 flex sm:flex-row flex-col gap-3 items-start max-w-md transition-colors duration-200`}
  >
    <div className="text-3xl">{icon}</div>
    <div>
      <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-200 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default AboutCard;
