"use client";
import React from 'react'

export default function Herosection2() {
  return (
    <>
    <div className=" overflow-hidden flex md:flex-row items-center md:space-x-10 p-6 gap-6 sm:gap-[4rem] flex-col-reverse  text-white justify-center h-[45rem] sm:h-[37rem]">
        <div className="text-center md:text-left mt-4x max-w-lg">
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
          <div className="mt-2 md:mt-0">
          <div className="w-[16rem] sm:w-[20rem] md:w-[20rem] h-[16rem] sm:h-[18rem] md:h-[20rem] bg-[#1e2a47] rounded-full flex items-center justify-center animate-float ">
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
     ` }</style>
    </div>
        
       </>
  )
}
