import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Car Rental App",
    description: "Web application for renting cars with real-time availability.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "REST API", "Full Stack"],
    demoUrl: "https://car-rental-five-fawn.vercel.app/cars",
    githubUrl: "https://github.com/Anuraga3s/Car-Rental",
  },
  {
    id: 2,
    title: "BookStore",
    description:
      "Interactive web app for browsing and purchasing books online.",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "CRUD", "MERN Stack", "Full Stack"],
    demoUrl: "https://book-store-frontend-real.onrender.com/",
    githubUrl: "https://github.com/Anuraga3s/Book-Store",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A dashboard displaying real-time weather data and forecasts.",
    image: "/projects/project3.png",
    tags: ["React", "OpenWeather API", "TailwindCSS", "Frontend", "API Integration"],
    demoUrl: "https://anuraga3s.github.io/Weather-Application/",
    githubUrl: "https://github.com/Anuraga3s/Weather-Application",
  },
  {
    id: 4,
    title: "Sorting Algorithm Visualizer",
    description:
      "Visual representation of various sorting algorithms in action.",
    image: "/projects/project4.png",
    tags: ["React", "Algorithms", "Data Structures", "Visualization", "Frontend"],
    demoUrl: "https://anuraga3s.github.io/Sorting-Algorithm-Visualizer/",
    githubUrl: "https://github.com/Anuraga3s/Sorting-Algorithm-Visualizer",
  },
  {
    id: 5,
    title: "Mathsmith Calculator",
    description:
      "Web based calculator",
    image: "/projects/project5.png",
    tags: ["React", "JavaScript", "TailwindCSS", "Frontend", "UI/UX"],
    demoUrl: "https://anuraga3s.github.io/MathSmith-Calculator/",
    githubUrl: "https://github.com/Anuraga3s/MathSmith-Calculator",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative perspective">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center fade-in-section">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto fade-in-section-delay">
          Here are some of my recent projects that reflect my journey of 
          applying core concepts to real-world development. Each project demonstrates 
          my growing expertise in building scalable,
           user-focused solutions with modern web technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 hover:rotate-1 card-3d"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground hover:scale-110 transition-transform duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                  {" "}
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-125 hover:translate-y-[-3px]"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-125 hover:translate-y-[-3px]"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 transform hover:translate-y-[-3px] hover:shadow-xl transition-all duration-300"
            target="_blank"
            href="https://github.com/Anuraga3s"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};