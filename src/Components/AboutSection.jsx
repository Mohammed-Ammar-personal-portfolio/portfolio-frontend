import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-20 px-10 text-white"
    >
      {/* Background Design */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.1"
            d="M0,160L48,133.3C96,107,192,53,288,58.7C384,64,480,128,576,138.7C672,149,768,107,864,117.3C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">About Me</h2>

        {/* Description */}
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          I'm <span className="font-bold">Ammar</span>, a passionate frontend
          developer with a knack for crafting responsive and visually stunning
          websites. With expertise in React, Tailwind CSS, and modern web
          technologies, I bring designs to life and make web experiences
          seamless and engaging.
        </p>

        {/* Skills */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
            <h3 className="text-lg font-semibold">React.js</h3>
          </div>
          <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
            <h3 className="text-lg font-semibold">Tailwind CSS</h3>
          </div>
          <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
            <h3 className="text-lg font-semibold">JavaScript</h3>
          </div>
          <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
            <h3 className="text-lg font-semibold">Node.js</h3>
          </div>
          <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
            <h3 className="text-lg font-semibold">UI/UX Design</h3>
          </div>
          <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
            <h3 className="text-lg font-semibold">Responsive Design</h3>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-md font-bold shadow-lg hover:bg-yellow-500 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
