import { BrainCircuit, Download, Layers } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 relative bg-gradient-to-b from-slate-100 to-white text-foreground dark:from-slate-900 dark:to-slate-950"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-6xl font-black mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-foreground">
              Software Engineer   <br />          
              Full-Stack + AI Applications
            </h3>

            <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-lg leading-relaxed">
              Software Engineer with a strong foundation in full-stack
              development and AI-powered applications. I have built 5+
              real-world projects using the MERN stack, including CareerForge—an
              AI-based placement coach. My work focuses on creating scalable,
              user-centric applications with clean architecture and efficient
              performance. I enjoy solving practical problems through code and
              integrating AI into modern web applications to deliver smarter
              solutions.
            </p>

            <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-lg leading-relaxed">
              Currently seeking opportunities as a Software Developer (SDE)
              where I can contribute to impactful products and grow as an
              engineer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 transform inline-block text-center"
              >
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1vaBMyBxbU34QZWgUJFU5M45xaQLhx_4m/view?usp=sharing"
                className="px-8 py-3 rounded-lg border-2 border-cyan-400 text-cyan-300 font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 transform inline-flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl backdrop-blur-md bg-white/80 border border-slate-200 shadow-lg shadow-slate-200/60 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 dark:bg-white/10 dark:border-white/20 dark:shadow-none">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-500/20 border border-purple-500/40">
                  <Layers className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">
                    Full-Stack Project Builder
                  </h4>
                  <p className="text-muted-foreground mt-2">
                    Building practical MERN applications with clean UI,
                    structured APIs, database logic, and production-focused
                    features.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl backdrop-blur-md bg-white/80 border border-slate-200 shadow-lg shadow-slate-200/60 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 dark:bg-white/10 dark:border-white/20 dark:shadow-none">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-cyan-500/20 border border-cyan-500/40">
                  <BrainCircuit className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">
                    AI Application Focus
                  </h4>
                  <p className="text-muted-foreground mt-2">
                    Designing smarter product flows like CareerForge, where AI
                    helps users prepare, decide, and move faster with
                    confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
