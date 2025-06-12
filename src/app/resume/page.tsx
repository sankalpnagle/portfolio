import React from "react";

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
    <div className="mx-auto bg-white border dark:bg-gray-900/90 rounded-3xl dark:shadow p-8 min-h-screen transition-colors duration-200">
      <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        Resume
      </h2>
      <div className="w-20 h-1 bg-sky-400 rounded mb-8" />

      {/* Education */}
      <h3 className="text-xl font-semibold mb-4 text-sky-500 dark:text-sky-400">
        Education
      </h3>
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5 mb-8">
        <div className="flex justify-between flex-col md:flex-row md:items-center mb-1">
          <span className="font-bold text-gray-900 dark:text-gray-100">
            {education[0].institute}
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            {education[0].duration}
          </span>
        </div>
        <div className="text-gray-700 dark:text-gray-300">
          {education[0].degree}
        </div>
      </div>

      {/* Skills */}
      <h3 className="text-xl font-semibold mb-4 text-sky-500 dark:text-sky-400">
        Skills
      </h3>
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5 mb-8">
        <ul className="space-y-2">
          {skills.map((skill, idx) => (
            <li key={idx}>
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {skill.label}:
              </span>{" "}
              <span className="text-gray-700 dark:text-gray-300">
                {skill.value}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      <h3 className="text-xl font-semibold mb-4 text-sky-500 dark:text-sky-400">
        Experience
      </h3>
      <div className="space-y-6 mb-8">
        {experience.map((exp, idx) => (
          <div
            key={idx}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5"
          >
            <div className="flex justify-between flex-col md:flex-row md:items-center mb-1">
              <span className="font-bold text-gray-900 dark:text-gray-100">
                {exp.company}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {exp.duration}
              </span>
            </div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">
              {exp.title}
            </p>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mt-2 space-y-1">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Certificates */}
      <h3 className="text-xl font-semibold mb-4 text-sky-500 dark:text-sky-400">
        Certificates
      </h3>
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5 mb-8">
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
          {certificates.map((cert, idx) => (
            <li key={idx}>{cert}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
