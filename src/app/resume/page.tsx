"use client";
import { motion, type Variants } from "framer-motion";

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

const education = [
  {
    institute: "Institute of Engineering & Science IPS Academy",
    duration: "Sept 2016 – July 2020",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
  },
];

const skills = [
  {
    label: "Languages",
    value: "JavaScript, TypeScript, Java, SQL",
  },
  {
    label: "Technologies",
    value:
      "React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, Tailwind CSS, HTML, CSS",
  },
  {
    label: "Tools & Cloud",
    value: "Prisma ORM, AWS (Amplify, EC2, S3 Bucket), Git",
  },
  {
    label: "Soft Skills",
    value: "Problem solving, Time management, Leadership, Communication",
  },
];

const experience = [
  {
    title: "Associate Software Engineer",
    company: "Gigatorb Software Pvt Ltd – Indore, IN",
    duration: "Jan 2024 – Current",
    details: [
      "Developed modern full-stack web applications using Next.js, React.js, Node.js, Express.js, SQL, and MongoDB, integrating Material UI, ShadCN, and Tailwind CSS to build responsive and user-centric interfaces.",
      "Built scalable RESTful APIs and managed databases using Prisma ORM, efficiently handling both SQL and NoSQL (MongoDB) for seamless frontend-backend communication and optimized data operations.",
      "Deployed projects on AWS using Amplify, EC2, and S3 to deliver robust, scalable, and secure hosting solutions.",
      "Collaborated with clients to gather requirements and develop scalable functionalities, successfully delivering over 5 projects that aligned with business needs.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Techdome Solutions Private Limited – Indore, IN",
    duration: "July 2023 – Sept 2023",
    details: [
      "Built and optimized responsive web pages to ensure a seamless user experience across various devices.",
      "Integrated APIs and enhanced application features, while gaining proficiency in Redux and Redux Toolkit for efficient and scalable state management.",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company: "CodeBetter – Indore, IN",
    duration: "Feb 2023 – May 2023",
    details: [
      "Built responsive React applications with reusable components, state management, and seamless API integration.",
    ],
  },
];

const certificates = [
  "React.js from CodeBetter in 2023.",
  "Java from Simplilearn in 2022.",
];

const Resume = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mx-auto bg-white border dark:bg-gray-900/90 rounded-3xl dark:shadow p-8 min-h-screen transition-colors duration-200"
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          Resume
        </h2>
        <div className="w-20 h-1 bg-sky-400 rounded mb-6" />
      </motion.div>

      {/* Education */}
      <motion.div variants={itemVariants} className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Education
        </h3>
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Bachelor of Engineering
          </h4>
          <p className="text-gray-600 dark:text-gray-300">
            Institute of Engineering & Science IPS Academy
          </p>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div variants={itemVariants} className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Skills
        </h3>
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Programming Languages
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Technologies & Frameworks
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>React.js/Next.js</li>
                <li>Node.js/Express</li>
                <li>MongoDB/MySQL</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Tools & Platforms
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Git/GitHub</li>
                <li>AWS</li>
                <li>Docker</li>
                <li>VS Code</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Soft Skills
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Communication</li>
                <li>Time Management</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div variants={itemVariants} className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Experience
        </h3>
        <div className="space-y-6">
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6"
          >
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Full Stack Developer
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Gigatorb Software Pvt Ltd
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
              <li>
                Developed and maintained web applications using React.js and Node.js
              </li>
              <li>
                Implemented responsive designs and ensured cross-browser
                compatibility
              </li>
              <li>
                Collaborated with the team to deliver high-quality software
                solutions
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6"
          >
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Software Developer
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Techdome Solutions Private Limited
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
              <li>
                Built and maintained RESTful APIs using Node.js and Express
              </li>
              <li>
                Worked with MongoDB and MySQL databases for data storage and
                retrieval
              </li>
              <li>
                Implemented authentication and authorization using JWT
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6"
          >
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Frontend Developer
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              CodeBetter
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
              <li>
                Developed user interfaces using React.js and modern CSS frameworks
              </li>
              <li>
                Implemented responsive designs and ensured cross-browser
                compatibility
              </li>
              <li>
                Collaborated with designers to create pixel-perfect implementations
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Certificates */}
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Certificates
        </h3>
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>React.js Certification - Coursera</li>
            <li>Java Programming - Udemy</li>
            <li>Web Development Bootcamp - Udemy</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
