import React from "react";

const Navbar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 to-blue-950 flex flex-col items-center justify-center">
      <nav className="flex justify-center items-center gap-60 py-3 px-5">
        <a
          href="#A"
          className="bg-slate-900 p-10 rounded-full nav-item text-2xl font-bold text-white relative transition-transform duration-300 hover:scale-110 hover:text-yellow-400"
        >
          A
        </a>
        <a
          href="#M"
          className="nav-item text-2xl font-bold text-white relative transition-transform duration-300 hover:scale-110 hover:text-yellow-400"
        >
          M
        </a>
        <a
          href="#M"
          className="nav-item text-2xl font-bold text-white relative transition-transform duration-300 hover:scale-110 hover:text-yellow-400"
        >
          M
        </a>
        <a
          href="#A"
          className="nav-item text-2xl font-bold text-white relative transition-transform duration-300 hover:scale-110 hover:text-yellow-400"
        >
          A
        </a>
        <a
          href="#R"
          className="nav-item text-2xl font-bold text-white relative transition-transform duration-300 hover:scale-110 hover:text-yellow-400"
        >
          R
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
