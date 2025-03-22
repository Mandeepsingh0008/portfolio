"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative h-auto py-16 flex flex-col items-center bg-gradient-to-br from-[#162250] to-[#183f7a] text-white px-6">
      
      {/* Heading Section */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
        Let's Connect! 🚀
      </h1>
      <p className="text-lg text-gray-300 mt-2">
        Reach out to me anytime.
      </p>

      {/* Full Stack Developer Tagline */}
      <p className="text-lg text-gray-200 mt-4 text-center max-w-2xl">
        I'm a <span className="text-[#4fc3f7] font-semibold">Full Stack Developer</span>  
        skilled in <span className="text-[#ff9800] font-semibold">React, Node.js, MongoDB, and Express</span>.  
        I build scalable and efficient web applications.
      </p>

      {/* Contact Card */}
      <div className="mt-8 bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-lg text-center border border-white/20 transition-all duration-300 hover:shadow-2xl">
        
        {/* Contact Info */}
        <div className="space-y-6">
          {/* Email */}
          <a
            href="mailto:mandeep@gmail.com"
            className="flex items-center gap-4 text-lg hover:text-blue-400 transition duration-300 justify-center"
          >
            <FaEnvelope className="text-2xl text-blue-400" />
            mandeep@gmail.com
          </a>

          {/* Phone */}
          <a
            href="tel:+917060924004"
            className="flex items-center gap-4 text-lg hover:text-green-400 transition duration-300 justify-center"
          >
            <FaPhone className="text-2xl text-green-400" />
            +91 70609 24004
          </a>

          {/* Address */}
          <div className="flex items-center gap-4 text-lg justify-center">
            <FaMapMarkerAlt className="text-2xl text-red-400" />
            Dehradun, India
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://www.linkedin.com/in/mandeep-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-400 hover:text-blue-500 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/mandeep-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-gray-300 transition-all duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
