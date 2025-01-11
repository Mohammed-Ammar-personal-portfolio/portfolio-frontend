import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import client from "../Content/contentful";

const HeroSection = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [avathar, setAvathar] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      const response = await client.getEntries({ content_type: "author" });
      const author = response.items[0]?.fields;
      setName(author.name);
      setDescription(author.description);
      setAvathar(author.avathar.fields.file.url);
    };
    fetchContent();
  }, []);

  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white flex items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-6 sm:px-12 md:px-24"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl font-bold mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          Hi, I'm <span className="text-yellow-400">{name}</span>, a{" "}
          <span className="text-yellow-400">Frontend Developer</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl mb-8 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          <a
            href="#work"
            className="bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Professional Image or Illustration */}
      {avathar && (
        <motion.div
          className="absolute bottom-0 right-0 p-10 sm:p-16 hidden lg:block z-10"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={avathar}
            alt={`${name}'s Profile`}
            className="rounded-full w-40 h-40 sm:w-56 sm:h-56 object-cover shadow-lg border-4 border-white z-10"
          />
        </motion.div>
      )}

      {/* Background Element */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-700 to-blue-600 opacity-20 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>
    </section>
  );
};

export default HeroSection;
