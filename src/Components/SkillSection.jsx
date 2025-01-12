import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiHtml5 } from 'react-icons/si';

const skills = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact className="text-blue-500" />, level: 90 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, level: 85 },
      { name: 'HTML & CSS', icon: <SiHtml5 className="text-orange-500" />, level: 95 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 90 },
      { name: 'Express.js', icon: <SiExpress className="text-gray-700" />, level: 85 },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, level: 80 },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-red-500" />, level: 90 },
      { name: 'AWS', icon: <FaAws className="text-yellow-500" />, level: 75 },
      { name: 'Docker', icon: <FaDocker className="text-blue-500" />, level: 70 },
    ],
  },
];

const SkillCard = ({ category, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl"
  >
    <h3 className="text-xl font-bold text-gray-800 mb-4">{category}</h3>
    {skills.map((skill) => (
      <div key={skill.name} className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="flex items-center gap-3 text-gray-700 text-lg">
            {skill.icon} {skill.name}
          </span>
          <span className="text-sm text-gray-500">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-teal-400 h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </div>
    ))}
  </motion.div>
);

const SkillsSection = () => (
  <div
    id="skills"
    className="container mx-auto px-4 py-20 bg-gray-100 relative z-10"
  >
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
      Skills & Technologies
    </h2>
    <motion.div
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      {skills.map((category) => (
        <SkillCard
          key={category.category}
          category={category.category}
          skills={category.skills}
        />
      ))}
    </motion.div>
  </div>
);


export default SkillsSection;
