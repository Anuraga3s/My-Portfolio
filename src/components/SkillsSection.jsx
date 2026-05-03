import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },

  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "RestAPI Framework", category: "tools" },

  // Core Subjects
  { name: "Data Structures and Algorithms", category: "core" },
  { name: "Object Oriented Programming", category: "core" },
  { name: "Database Management System", category: "core" },
  { name: "Operating System", category: "core" },
];

const categories = ["all", "frontend", "backend", "tools", "core"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-gradient-to-b from-white via-purple-50 to-slate-100 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(147,51,234,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.2) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Expertise
          </span>
        </h2>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105",
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/50"
                  : "border border-slate-200 text-muted-foreground hover:border-purple-400/50 hover:bg-white/70 dark:border-white/20 dark:text-gray-300 dark:hover:bg-white/5"
              )}
            >
              {category === "core"
                ? "Core CS"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="p-6 rounded-xl backdrop-blur-md bg-white/80 border border-slate-200 shadow-lg shadow-slate-200/60 hover:border-purple-400/50 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30 group dark:bg-white/10 dark:border-white/20 dark:shadow-none"
            >
              <h3 className="font-bold text-foreground text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                {skill.name}
              </h3>
              <div className="mt-4 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
