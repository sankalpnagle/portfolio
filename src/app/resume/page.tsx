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
      "React.js, Next.js, Node.js, Express.js, MongoDB, MySql, Tailwind Css, Html, Css",
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
    company: "Gigabit Software Pvt Ltd – Indore, IN",
    duration: "Jan 2024 – Current",
    details: [
      "Developed modern full-stack web applications using Next.js, React.js, Node.js, Express.js, SQL and MongoDB integrating Material UI, ShadCN, and Tailwind CSS for responsive and visually appealing UIs.",
      "Designed and implemented RESTful APIs, enabling efficient communication between services.",
      "Managed structured databases efficiently with Prisma ORM, handling both SQL and NoSQL databases.",
      "Collaborated with clients to gather requirements and develop scalable functionalities, successfully delivering over 5 projects that aligned with business needs.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Techdome Solutions Private Limited – Indore, IN",
    duration: "July 2023 – Sept 2023",
    details: [
      "Developed and optimized responsive web pages, ensuring seamless user experience across devices.",
      "Implemented APIs and enhanced application functionality, while gaining expertise in Redux and Redux Toolkit for efficient state management.",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company: "CodeBetter – Indore, IN",
    duration: "Feb 2023 – May 2023",
    details: [
      "Gained hands-on experience in full-stack development, learning to build dynamic UIs with React, create RESTful APIs using Node.js and Express.js, and integrate databases like MongoDB and SQL.",
    ],
  },
];


const certificates = [
  "React.js from CodeBetter in 2023.",
  "Java from Simplilearn in 2022.",
];

const Resume = () => {
  return (
    <div className=" mx-auto bg-white rounded-3xl shadow p-8 min-h-screen">
      <h2 className="text-3xl font-bold mb-2">Resume</h2>
      <div className="w-20 h-1 bg-sky-400 rounded mb-8" />

      {/* Education */}
      <h3 className="text-xl font-semibold mb-4 text-sky-500">Education</h3>
      <div className="bg-gray-50 rounded-xl p-5 mb-8">
        <div className="flex justify-between flex-col md:flex-row md:items-center mb-1">
          <span className="font-bold">{education[0].institute}</span>
          <span className="text-gray-500">{education[0].duration}</span>
        </div>
        <div className="text-gray-700">{education[0].degree}</div>
      </div>

      {/* Skills */}
      <h3 className="text-xl font-semibold mb-4 text-sky-500">Skills</h3>
      <div className="bg-gray-50 rounded-xl p-5 mb-8">
        <ul className="space-y-2">
          {skills.map((skill, idx) => (
            <li key={idx}>
              <span className="font-semibold">{skill.label}:</span>{" "}
              <span className="text-gray-700">{skill.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      <h3 className="text-xl font-semibold mb-4 text-sky-500">Experience</h3>
      <div className="space-y-6 mb-8">
        {experience.map((exp, idx) => (
          <div key={idx} className="bg-gray-50 rounded-xl p-5">
            <div className="flex justify-between flex-col md:flex-row md:items-center mb-1">
              <span className="font-bold">{exp.company}</span>
              <span className="text-gray-500">{exp.duration}</span>
            </div>
            <p className="font-semibold"> {exp.title}</p>
            <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Certificates */}
      <h3 className="text-xl font-semibold mb-4 text-sky-500">Certificates</h3>
      <div className="bg-gray-50 rounded-xl p-5 mb-8">
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          {certificates.map((cert, idx) => (
            <li key={idx}>{cert}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
