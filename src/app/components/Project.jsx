export default function Projects() {
  const projectData = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS.",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.com",
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with user authentication and payment integration.",
      github: "https://github.com/Mandeepsingh0008/ecommerce.git",
      demo: "https://yourecommerce.com",
    },
    {
      title: "Alpha",
      description: "A task management app with drag-and-drop functionality.",
      github: "https://github.com/Mandeepsingh0008/alpha.git",
      demo: "https://yourtaskmanager.com",
    },
    {
      title: "Music",
      description: "A task management app with drag-and-drop functionality.",
      github: "https://github.com/Mandeepsingh0008/music.git",
      demo: "https://yourtaskmanager.com",
    },
    {
      title: "Alpha",
      description: "A task management app with drag-and-drop functionality.",
      github: "https://github.com/Mandeepsingh0008/alpha.git",
      demo: "https://yourtaskmanager.com",
    },
  ];

  return (
    <section
      id="projects"
      className="py-6  text-white p-4 sm:p-6 lg:p-10 min-h-screen"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 mt-[2rem]">PROJECTS</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <div key={index} className="bg-[#1e2a47] p-6 sm:p-4 rounded-lg shadow-lg transition transform hover:scale-105">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-[#a8b2d1] my-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-green-600 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
