import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contact = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-gray-900 mb-8"
      >
        Contact Me
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid gap-10 md:grid-cols-2"
      >
        {/* Contact Form */}
        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h3>
          <form
            action="https://formspree.io/f/your-form-id" // Replace with Formspree or backend endpoint
            method="POST"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info and Map */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center justify-center"
        >
          {/* Social Links */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Reach Me Directly
            </h3>
            <ul className="space-y-3">
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-gray-600"
              >
                <FaEnvelope className="text-blue-500" />
                <a href="mailto:your-email@example.com" className="hover:underline">
                  your-email@example.com
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-gray-600"
              >
                <FaPhone className="text-green-500" />
                <a href="tel:+1234567890" className="hover:underline">
                  +1234567890
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-gray-600"
              >
                <FaLinkedin className="text-blue-600" />
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-gray-600"
              >
                <FaGithub className="text-gray-800" />
                <a
                  href="https://github.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-gray-600"
              >
                <FaTwitter className="text-blue-400" />
                <a
                  href="https://twitter.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </motion.li>
            </ul>
          </div>
          {/* Optional Location Map */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full h-64"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              My Location
            </h3>
            <MapContainer center={[12.9716, 77.5946]} zoom={13} className="h-full w-full rounded-lg">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[12.9716, 77.5946]}>
                <Popup>I'm here!</Popup>
              </Marker>
            </MapContainer>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
