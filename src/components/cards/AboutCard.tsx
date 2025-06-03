import React from "react";

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className={`bg-gray-50 rounded-2xl p-6 flex gap-3 items-start max-w-md`}>
    <div className="text-3xl">{icon}</div>
    <div>
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default AboutCard;
