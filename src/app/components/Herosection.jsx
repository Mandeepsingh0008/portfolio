"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <div className="relative    overflow-hidden  text-white h-[5rem] sm:h-[5rem] pt-4">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center pt-10 sm:pt-8 lg:pt-10 p-5 sm:p-8 lg:p-10 z-50 ">
        <div className="text-3xl font-semibold">Profile</div>

        {/* Hamburger Menu (Hidden on sm and above) */}
        <button
          className="sm:hidden text-white text-3xl z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navbar for sm and larger screens */}
        <div className="hidden sm:flex sm:gap-6 sm:text-lg ">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#experience" className="hover:text-gray-300">Experience</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-[#1e2a47]/90 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 h-[18rem] ${
            menuOpen ? "opacity-100 visible sm:hidden" : "opacity-0 invisible"
          }`}
        >
          <a href="#about" className="text-xl my-4 hover:text-gray-300" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" className="text-xl my-4 hover:text-gray-300" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#projects" className="text-xl my-4 hover:text-gray-300" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="text-xl my-4 hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </nav>

 
    </div>
  );
};

export default Portfolio;
