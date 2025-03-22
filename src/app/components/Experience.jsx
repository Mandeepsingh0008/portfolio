export default function Experience() {
  return (
      <section id="experience" className=" text-white p-4  lg:p-16 h-[50rem] sm:h-[58rem]">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-center mt-5  ">EXPERIENCE</h2>
          
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-10 sm:mt-14">
              <img src="/html.png" alt="HTML" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
              <img src="/css.png" alt="CSS" className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" />
              <img src="/react.png" alt="React" className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" />
              <img src="/node.png" alt="Node" className="w-28 h-20 sm:w-32 sm:h-24 md:w-40 md:h-24 mt-2 sm:mt-4" />
              <img src="/mongodb.png" alt="MongoDB" className="w-36 h-12 sm:w-48 sm:h-14 md:w-56 md:h-16 mt-2 sm:mt-4" />
          </div>
          
          <div className="mt-16 sm:mt-20 md:mt-24 space-y-16 sm:space-y-20 md:space-y-24 max-w-3xl mx-auto border-l-4 border-blue-500 pl-4 sm:pl-6 md:pl-8">
              <ExperienceCard 
                  year="2023 - Present"
                  role="Codeware IT Pvt Ltd" 
                  description="Completed a 6-month internship focused on software development and web technologies. Gained hands-on experience in MERN stack development, built real-world applications, and collaborated with senior developers to optimize backend APIs and frontend performance." 
              />
              <ExperienceCard 
                  year="2024 - 2025"
                  role="Edusprouts Pvt Ltd" 
                  description="Completed a 6-month internship where I worked on full-stack development projects. Developed and optimized dynamic web applications using React.js and Node.js, improved database efficiency with MongoDB, and implemented robust authentication systems. Contributed to UI/UX enhancements and backend API integrations, ensuring smooth and efficient application performance." 
              />
          </div>
      </section>
  );
}

function ExperienceCard({ year, role, description }) {
  return (
      <div className="relative pl-4 sm:pl-6 md:pl-8">
          <div className="absolute left-[-0.75rem] sm:left-[-1rem] md:left-[-1.25rem] top-[1.5rem] sm:top-[2rem] w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full"></div>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6 md:mt-8">{year}</p>
          <h3 className="text-2xl sm:text-xl md:text-2xl font-bold text-white">{role}</h3>
          <p className="text-[#a8b2d1] mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg">{description}</p>
      </div>
  );
}