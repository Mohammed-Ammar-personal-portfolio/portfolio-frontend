import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import client from "../Content/contentful";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");
  const { ref, inView } = useInView({
    triggerOnce: false, // This makes sure the animation runs each time the element comes into view
    threshold: 0.5, // Triggers when 50% of the element is in view
  });

  useEffect(() => {
    const fetchContent = async () => {
      const response = await client.getEntries({ content_type: "author" });
      const author = response.items[0]?.fields;
      setName(author.name);
      setDescription(author.description);
      setAvatar(author.avathar.fields.file.url);
    };
    fetchContent();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Animated Particles in Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="particle-container">
          {[...Array(40)].map((_, index) => (
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

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-6 sm:px-12 md:px-24"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl font-bold mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: inView ? 1 : 0.8, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          Hi, I'm <span className="text-yellow-400">{name}</span>, a{" "}
          <span className="text-yellow-400">Frontend Developer</span>
        </motion.h1>
        <motion.p
          className="text-xl mb-8 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          <a
            href="#skills"
            className="bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-all duration-300"
          >
            View My Skills
          </a>
        </motion.div>
      </motion.div>

      {/* Avatar */}
      {avatar && (
        <motion.div
          className="absolute bottom-0 left-0 p-10 hidden lg:block z-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={avatar}
            alt={`${name}'s Profile`}
            className="rounded-full w-40 h-40 sm:w-56 sm:h-56 object-cover shadow-lg border-4 border-white z-10"
          />
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
