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
          <p className="text-gray-600 flex justify-between dark:text-gray-300">
            <span>Institute of Engineering & Science IPS Academy</span> <span className="text-sm">Sep 2016 - July 2020 </span>
          </p>
          <p className="text-sm mt-1.5 text-gray-600 dark:text-gray-300">
            GPA : 7.1
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
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Java</li>
                <li>HTML, CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Technologies & Frameworks
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>React.js, Next.js, Node.js, Express</li>
                <li>MongoDB, MySQL</li>
                <li>Tailwind CSS, Bootstrap</li>
                <li>Sequalize, Prisma</li>
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
          {experience.map((item) => (
            <>
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6"
              >
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {item?.title}
                </h4>
                <p className="text-gray-600  flex justify-between dark:text-gray-300 mb-2">
                  <p> {item?.company}</p>
                  <span className="text-sm"> {item?.duration}</span>
                </p>
                <ul className="space-y-1  text-gray-600 dark:text-gray-300">
                  {item.details.map((ob, index) => (
                    <li
                      key={index}
                      className="relative  before:content-['•'] pl-6 before:absolute before:left-0  before:text-2xl"
                    >
                      {ob}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          ))}
        </div>
      </motion.div>

      {/* Certificates */}
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Certificates
        </h3>
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            {certificates.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
