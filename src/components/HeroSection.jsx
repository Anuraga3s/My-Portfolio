import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 perspective"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div className="container max-w-4xl mx-auto text-center z-10 perspective">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in block mb-2"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 block mb-2">
              {" "}
              Anurag
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 block hover:animate-pulse transition-transform duration-300 hover:scale-105">
              {" "}
              Choudhary
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 hover:text-primary transition-colors duration-300 cursor-default">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 transform hover:scale-110 transition-transform duration-300">
            <a
              href="#projects"
              className="cosmic-button inline-block transform hover:-translate-y-0.5"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce hover:scale-125 transition-transform duration-300 cursor-pointer">
        <span className="text-sm text-muted-foreground mb-2 hover:text-primary transition-colors"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary hover:text-primary animate-pulse" />
      </div>
    </section>
  );
};