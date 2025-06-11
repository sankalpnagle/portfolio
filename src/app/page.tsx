import AboutCard from "@/components/cards/AboutCard";
import { VscCloud } from "react-icons/vsc";
import { BsBrush } from "react-icons/bs";
import { GoTerminal } from "react-icons/go";
import { IoCodeSlashOutline } from "react-icons/io5";

const aboutCards = [
  {
    icon: <IoCodeSlashOutline className="text-sky-400" />,
    title: "Full-Stack Development",
    description:
      "Building scalable and responsive web apps using React, Next.js, Node.js, and MongoDB with clean and maintainable code.",
    color: "bg-gray-50 dark:bg-gray-900",
  },
  {
    icon: <GoTerminal className="text-sky-400" />,
    title: "Backend Development",
    description:
      "Designing robust REST APIs, handling authentication, database modeling, and server-side logic using Node.js, Express, Prisma, and SQL.",
    color: "bg-gray-50 dark:bg-gray-900",
  },
  {
    icon: <BsBrush className="text-sky-400" />,
    title: "Web Design",
    description:
      "Creating responsive, accessible, and pixel-perfect interfaces using React, Tailwind CSS, ShadCN, and TypeScript.",
    color: "bg-gray-50 dark:bg-gray-900",
  },
  {
    icon: <VscCloud className="text-sky-400" />,
    title: "Cloud & Deployment",
    description:
      "Deploying applications on AWS with Docker, setting up CI/CD pipelines, and managing production environments.",
    color: "bg-gray-50 dark:bg-gray-900",
  },
];

export default function Home() {
  return (
    <div className="mx-auto bg-white dark:bg-gray-900/90 rounded-3xl dark:shadow p-8 transition-colors duration-200">
      {/* About Section */}
      <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        About
      </h2>
      <div className="w-20 h-1 bg-sky-400 rounded mb-3" />

      <p className="text-gray-600 bg-white rounded-xl py-6 px-5 dark:bg-gray-900 transition-colors duration-200 dark:text-gray-100 mb-2">
        I'm a skilled Full-Stack MERN Developer focused on building scalable,
        responsive web applications using React, Next.js, Node.js, MongoDB, and
        SQL. I've delivered real-world solutions across healthcare, logistics,
        and pet care owning both frontend and backend development, along with
        deployment on AWS. I write clean, maintainable code and work with modern
        tools like TypeScript, Prisma, and Docker to create high-performance
        applications.
      </p>

      {/* What I Do Section */}
      <h3 className="text-2xl font-semibold my-6 text-gray-900 dark:text-gray-100">
        What I Do!
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {aboutCards.map((card, idx) => (
          <AboutCard
            key={idx}
            icon={card.icon}
            title={card.title}
            description={card.description}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
}
