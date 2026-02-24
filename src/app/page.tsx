"use client";
import AboutCard from "@/components/cards/AboutCard";
import { VscCloud } from "react-icons/vsc";
import { BsBrush } from "react-icons/bs";
import { GoTerminal } from "react-icons/go";
import { IoCodeSlashOutline } from "react-icons/io5";
import { motion, type Variants } from "framer-motion";

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
      "Creating responsive, accessible, and pixel-perfect interfaces using React, Tailwind CSS, ShadCN, and Material UI.",
    color: "bg-gray-50 dark:bg-gray-900",
  },
  {
    icon: <VscCloud className="text-sky-400" />,
    title: "Cloud & Deployment",
    description:
      "Deploying applications on AWS with GitHub Actions, setting up CI/CD pipelines, and managing production environments.",
    color: "bg-gray-50 dark:bg-slate-900",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mx-auto bg-white dark:bg-gray-900/90 rounded-3xl border dark:shadow p-8 transition-colors duration-200"
    >
      {/* About Section */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          About
        </h2>
        <div className="w-20 h-1 bg-sky-400 rounded mb-3" />
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-gray-600 bg-white rounded-xl py-6 px-5 dark:bg-gray-900 transition-colors duration-200 dark:text-gray-100 mb-2"
      >
        Full-Stack Web Developer with 2 years of experience in building and
        deploying scalable web applications using the MERN stack and cloud
        technologies. Proficient in JavaScript, React.js, Next.js, Node.js,
        Express.js, MongoDB, MySQL, and AWS for developing secure,
        high-performance solutions. Experienced in implementing CI/CD pipelines
        for automated development workflows. Passionate about creating clean,
        maintainable, and user-focused software solutions.
      </motion.p>

      {/* What I Do Section */}
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-semibold my-6 text-gray-900 dark:text-gray-100">
          What I Do!
        </h3>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
      >
        {aboutCards.map((card, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <AboutCard
              icon={card.icon}
              title={card.title}
              description={card.description}
              color={card.color}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
