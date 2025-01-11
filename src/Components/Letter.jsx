import React from "react";
import { Link } from "react-router-dom"; // Or use anchor tags for internal scrolling

const Letter = ({ letter, target }) => {
  return (
    <div className="relative">
      <Link
        to={`${target}`} // This links to the section identified by 'target'
        className="text-6xl sm:text-8xl font-extrabold text-white transition-all duration-300 transform hover:scale-125"
      >
        {letter}
      </Link>
      <span
        className="absolute top-16 left-1/2 transform -translate-x-1/2 text-sm opacity-0 transition-opacity duration-300"
      >
        {target.charAt(0).toUpperCase() + target.slice(1)} {/* Capitalized target section name */}
      </span>
    </div>
  );
};

export default Letter;
