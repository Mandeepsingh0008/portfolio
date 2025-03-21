"use client";
import React from "react";
import { motion } from "framer-motion";

const Progress = ({ value }) => (
  <div className="w-full rounded-full h-4 overflow-hidden shadow-md">
    <motion.div
      className="bg-gradient-to-r from-blue-500 to-purple-600 h-4"
      initial={{ width: "0%" }}
      animate={{ width: `${value}%` }}
      transition={{ duration: 1 }}
    ></motion.div>
  </div>
);

export default function ProficiencyPage() {
  return (
    <div className="flex flex-col items-center text-center p-8  mt-[4rem]">
      <motion.h1
        className="text-4xl font-extrabold text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Proficiency
      </motion.h1>

      <div className="w-full max-w-lg space-y-8 mt-[3rem]">
        {[
          { label: "Frontend / Design", value: 85 },
          { label: "Backend", value: 90 },
          { label: "Programming", value: 88 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white shadow-lg rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex justify-between text-md font-semibold text-gray-800">
              <span>{item.label}</span>
              <span>{item.value}%</span>
            </div>
            <Progress value={item.value} />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <img
          src="robot.png"
          alt="Automation illustration"
          className="w-[22rem] mt-[2rem] drop-shadow-lg rounded-[10rem]"
        />
      </motion.div>
    </div>
  );
}
