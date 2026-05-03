import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    id: 1,
    title: "Career Forge",
    description:
      "Placement preparation platform with roadmaps, mock interviews, and AI-powered resume reviews.",
    image: "/projects/careerForge.png",
    tags: ["React", "Node.js", "MongoDB", "AI Integration", "MERN Stack"],
    link: "https://career-forge-7a8uekc5n-anuraga3s-projects.vercel.app/login",
    github: "https://github.com/Anuraga3s/Career-Forge",
  },
  {
    id: 2,
    title: "Car Rental App",
    description:
      "Responsive car-rental platform with browsing, booking, and availability-focused workflows.",
    image: "/projects/carRental.png",
    tags: ["React", "TensorFlow", "Python", "WebSocket"],
    link: "https://car-rental-five-fawn.vercel.app/cars",
    github: "https://github.com/Anuraga3s/Car-Rental",
  },
  {
    id: 3,
    title: "E-Library",
    description:
      "Online library experience for discovering, browsing, and managing book collections.",
    image: "/projects/eLibrary.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://book-store-ten-omega.vercel.app/",
    github: "https://github.com/Anuraga3s/Book-Store",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "Weather interface that presents current conditions and forecasts in a clean dashboard.",
    image: "/projects/weatherDashboard.png",
    tags: ["React Native", "Firebase", "TypeScript"],
    link: "https://anuraga3s.github.io/Weather-Application/",
    github: "https://github.com/Anuraga3s/Weather-Application",
  },
  {
    id: 5,
    title: "AI Background Remover",
    description:
      "AI image utility that removes backgrounds and exports transparent assets for creative work.",
    image: "/projects/aibgRemover.png",
    tags: ["Storybook", "TypeScript", "Tailwind CSS"],
    link: "https://ai-background-remover-one.vercel.app/",
    github: "https://github.com/Anuraga3s/Background-Remover",
  },
];

export const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    setIsAutoPlay(false);
  };

  const currentProject = PROJECTS[currentIndex];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-100 px-4 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(147,51,234,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.2) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-black tracking-normal text-foreground md:text-5xl">
            Selected{" "}
            <span className="bg-gradient-to-r from-purple-300 to-cyan-200 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A concise look at the projects, product thinking, and engineering
            details behind my recent work.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Main Project Display */}
            <div className="relative h-96 md:h-full min-h-96 group/image overflow-hidden rounded-2xl">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* Project Information */}
            <div className="space-y-8 perspective">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/40">
                  <span className="text-purple-300 text-sm font-semibold">
                    Project {currentIndex + 1} of {PROJECTS.length}
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-black text-foreground transition-all duration-500">
                  {currentProject.title}
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {currentProject.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {currentProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-lg bg-white/80 border border-slate-200 text-foreground text-sm font-medium hover:bg-white transition-all duration-300 cursor-default dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-950 text-white font-semibold hover:bg-slate-800 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Project
                </a>
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-foreground font-semibold hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:-translate-y-0.5 dark:border-slate-600 dark:text-slate-100 dark:hover:border-cyan-300"
                >
                  <Github className="w-5 h-5" />
                  Code
                </a>
              </div>

              {/* Progress bar */}
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                  style={{
                    width: `${((currentIndex + 1) / PROJECTS.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute -bottom-20 left-0 right-0 flex items-center justify-between px-4">
            {/* Left Button */}
            <button
              onClick={prevSlide}
              aria-label="Show previous project"
              className={cn(
                "p-3 rounded-full transition-all duration-300",
                "border border-purple-500/50 hover:border-purple-400",
                "hover:bg-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30",
                "transform hover:-translate-x-1"
              )}
            >
              <ChevronLeft className="w-6 h-6 text-purple-400" />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
            {PROJECTS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Show project ${index + 1}`}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-purple-500 to-pink-500 scale-110"
                      : "bg-gray-600 hover:bg-gray-400"
                  )}
                />
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              aria-label="Show next project"
              className={cn(
                "p-3 rounded-full transition-all duration-300",
                "border border-cyan-500/50 hover:border-cyan-400",
                "hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30",
                "transform hover:translate-x-1"
              )}
            >
              <ChevronRight className="w-6 h-6 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Floating stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-32 pt-16 border-t border-white/10">
          {[
            { number: "5+", label: "Projects" },
            { number: "5+", label: "Live Builds" },
            { number: "1+", label: "Years Experience" },
            { number: "MERN", label: "Core Stack" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
