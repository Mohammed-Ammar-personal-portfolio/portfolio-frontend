import React from "react";
import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaDocker, FaChevronDown } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiHtml5, SiCss3, SiTypescript, SiPostgresql, SiGraphql } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Animated Particles in Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="particle-container">
          {[...Array(30)].map((_, index) => (
            <motion.div
              key={index}
              className="particle w-2 h-2 rounded-full bg-purple-400 opacity-75 absolute"
              animate={{
                y: ["0%", "100%"],
                x: ["-50%", "150%"],
                scale: [0.5, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content with smooth appearing animation */}
      <motion.div
        className="relative p-20 z-10 container mx-auto px-6 py-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 50 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        ref={titleRef}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: titleInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: titleInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          I'm Ammar, a passionate frontend developer with a knack for crafting
          responsive and visually stunning websites. With expertise in React,
          Tailwind CSS, and modern web technologies, I bring designs to life and
          make web experiences seamless and engaging.
        </motion.p>

        {/* Skills Section */}
        <motion.div
          className="skills-overlay flex justify-center gap-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: skillsInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          ref={skillsRef}
        >
          {[ 
            { icon: <FaReact className="text-5xl hover:text-blue-400" />, label: "React" },
            { icon: <SiTailwindcss className="text-5xl hover:text-teal-400" />, label: "Tailwind CSS" },
            { icon: <FaNodeJs className="text-5xl hover:text-green-400" />, label: "Node.js" },
            { icon: <FaAws className="text-5xl hover:text-yellow-400" />, label: "AWS" },
            { icon: <FaGitAlt className="text-5xl hover:text-purple-400" />, label: "Git" },
            { icon: <FaDocker className="text-5xl hover:text-blue-600" />, label: "Docker" },
            { icon: <SiMongodb className="text-5xl hover:text-green-600" />, label: "MongoDB" },
            { icon: <SiExpress className="text-5xl hover:text-gray-600" />, label: "Express.js" },
            { icon: <SiHtml5 className="text-5xl hover:text-orange-500" />, label: "HTML5" },
            { icon: <SiCss3 className="text-5xl hover:text-blue-500" />, label: "CSS3" },
            { icon: <SiTypescript className="text-5xl hover:text-blue-500" />, label: "TypeScript" },
            { icon: <SiPostgresql className="text-5xl hover:text-blue-600" />, label: "PostgreSQL" },
            { icon: <SiGraphql className="text-5xl hover:text-pink-500" />, label: "GraphQL" }
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: skillsInView ? 1 : 0, scale: skillsInView ? 1 : 0.5 }}
              transition={{ duration: 0.5,  delay: skillsInView ? 0.8 + index * 0.2 : 0 }}
            >
              {skill.icon}
              <p className="mt-2">{skill.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="cta-button m-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 20 }}
          transition={{ duration: 1, delay: 1 }}
          ref={ctaRef}
        >
          <a
            href="/resume"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-lg"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

       {/* Decorative Wave */}
       <a
        href="#skills"
        className="absolute bottom-9 text-white text-3xl animate-bounce"
      >
        <FaChevronDown />
      </a>
    </div>
  );
};

export default AboutSection;
