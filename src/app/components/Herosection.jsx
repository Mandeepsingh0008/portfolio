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
    <div className="flex flex-col items-center justify-center text-white px-4 sm:px-8 md:px-16 lg:px-24 relative min-h-screen overflow-hidden">
      {/* Navbar (Unchanged) */}
      <nav className="absolute top-10 left-5 sm:left-10 flex justify-between items-center w-full px-3 sm:px-12 lg:px-24">
        <div className="text-3xl font-semibold">Profile</div>
        
        {/* Hamburger Menu (Hidden on `sm` and above) */}
        <button
          className="sm:hidden text-white text-3xl z-50 mr-[1.6rem] "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navbar for sm and larger screens */}
        <div className="hidden sm:flex sm:gap-6 sm:text-lg">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#experience" className="hover:text-gray-300">Experience</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Menu (Fix: `h-screen` to prevent overflow) */}
        <div
          className={`fixed inset-0 bg-[#1e2a47]/90 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 h-[20rem] mt-[2.2rem] ${
            menuOpen ? "opacity-100 visible sm:hidden" : "opacity-0 invisible"
          }`}
        >
          <a href="#about" className="text-2xl my-4 hover:text-gray-300" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" className="text-2xl my-4 hover:text-gray-300" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#projects" className="text-2xl my-4 hover:text-gray-300" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="text-2xl my-4 hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </nav>

      {/* Main Content (Fix: Adjust margin to prevent cut-off) */}
      <div className="flex md:flex-row items-center md:space-x-10 p-6 gap-6 sm:gap-[4rem] flex-col-reverse mt-[6rem]">
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Hi, I'm <span className="text-[#a8b2d1]">Mandeep Singh</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#ccd6f6]">
            I'm a passionate full-stack developer with <strong>6 months</strong> of hands-on experience in <strong>React</strong> and <strong>Node.js</strong>. I specialize in building efficient, scalable web applications. Let’s connect and bring your ideas to life!
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a href="https://acrobat.adobe.com/id/urn:aaid:sc:ap:b57a57c4-4cf0-4e19-b2ac-25964caf1d3d.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-4 sm:px-6 py-2 bg-[#1e90ff] hover:bg-[#187bcd] rounded-full text-base sm:text-lg font-semibold">   
                My Resume
              </button>
            </a>
            <a href="https://wa.me/7060924004" target="_blank" rel="noopener noreferrer">
              <button className="px-4 sm:px-6 py-2 bg-[#4c5fd5] hover:bg-[#3b4cc2] rounded-full text-base sm:text-lg font-semibold">   
                Contact Me
              </button>
            </a>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          {/* Image with hover movement */}
          <div className="mt-4 md:mt-0">
          <div className="w-[16rem] sm:w-[20rem] md:w-[20rem] h-[16rem] sm:h-[18rem] md:h-[20rem] bg-[#1e2a47] rounded-full flex items-center justify-center animate-float">
            <img
              src="/me.png"
              alt="Avatar"
              className="w-[12rem] h-[16rem] sm:w-[14rem] sm:h-[19.8rem]"
            />
          </div>
        </div>
      </div>

      {/* Tailwind Custom Styles for Floating Animation */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
        </div>
      
    
  );
};

export default Portfolio;
