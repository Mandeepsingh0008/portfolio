"use client"
import React from "react";
import { FaCode, FaServer, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className=" text-white p-6 sm:p-4  h-[46rem] sm:h-[38rem]">
      <div className="text-4xl text-center font-bold ml-4 text-white mb-8 sm:text-3xl md:text-4xl lg:text-5xl">About Me</div>
      <section 
        id="about" 
        className="flex flex-col md:flex-row items-center bg-[#1e2a47] p-6 rounded-lg shadow-lg gap-6 md:gap-12 sm:p-3 md:p-6 lg:p-10 sm:mt-[3rem]"
      >
        <motion.img
          src="/about.png" 
          alt="Avatar" 
          className="w-48 h-56 sm:w-36 sm:h-44 md:w-56 md:h-64 lg:w-72 lg:h-80 object-cover rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
        
        <div className="ml-6 space-y-6 sm:space-y-4 md:space-y-8 lg:space-y-10">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2 sm:text-xl md:text-2xl lg:text-3xl">
              <FaCode className="text-[#64ffda]" /> Frontend Developer
            </h2>
            <p className="text-[#a8b2d1] text-sm sm:text-xs md:text-sm lg:text-base">
              I'm a front-end developer with experience in building responsive and optimized sites.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2 sm:text-xl md:text-2xl lg:text-3xl">
              <FaServer className="text-[#64ffda]" /> Backend Developer
            </h2>
            <p className="text-[#a8b2d1] text-sm sm:text-xs md:text-sm lg:text-base">
              I have experience developing fast and optimized back-end systems and APIs.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2 sm:text-xl md:text-2xl lg:text-3xl">
              <FaPalette className="text-[#64ffda]" /> Graphic Design
            </h2>
            <p className="text-[#a8b2d1] text-sm sm:text-xs md:text-sm lg:text-base">
              I specialize in creating <strong>visually appealing</strong> landing pages and crafting <strong>cohesive design systems</strong> that enhance user experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
