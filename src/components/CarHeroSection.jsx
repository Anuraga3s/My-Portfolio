import { ArrowDown, ArrowRight, Mail, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

const TireScene = lazy(() =>
  import("./TireScene").then((module) => ({ default: module.TireScene })),
);

const HERO_METRICS = [
  { value: "5+", label: "Deployed projects" },
  { value: "MERN", label: "Primary stack" },
  { value: "UI + API", label: "End-to-end builds" },
];

export const CarHeroSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const sceneLayerRef = useRef(null);
  const smokeLayerRef = useRef(null);
  const depthLayerRef = useRef(null);
  const gridLayerRef = useRef(null);
  const pointerFrameRef = useRef(null);
  const scrollFrameRef = useRef(null);
  const [isSceneReady, setIsSceneReady] = useState(false);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hasRoomForScene = window.matchMedia("(min-width: 900px)").matches;

    if (prefersReducedMotion || !hasRoomForScene) return;

    let idleId;
    let fallbackId;
    let isCancelled = false;

    const loadScene = () => {
      if (!isCancelled) {
        setIsSceneReady(true);
      }
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(loadScene, { timeout: 1200 });
    } else {
      fallbackId = window.setTimeout(loadScene, 350);
    }

    return () => {
      isCancelled = true;
      if (idleId !== undefined) {
        window.cancelIdleCallback(idleId);
      }
      if (fallbackId !== undefined) {
        window.clearTimeout(fallbackId);
      }
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!section || !hasFinePointer) return;

    const pointer = { x: 0, y: 0 };

    const applyParallax = (x, y) => {
      if (contentRef.current) {
        contentRef.current.style.transform = `perspective(1000px) rotateX(${
          y * 0.08
        }deg) rotateY(${-x * 0.08}deg) translate3d(0, 0, 0)`;
      }
      if (sceneLayerRef.current) {
        sceneLayerRef.current.style.transform = `translate3d(${x * 0.2}px, ${
          y * 0.2
        }px, 0)`;
      }
      if (smokeLayerRef.current) {
        smokeLayerRef.current.style.transform = `translate3d(${x * 0.12}px, ${
          y * 0.12
        }px, 0)`;
      }
      if (depthLayerRef.current) {
        depthLayerRef.current.style.transform = `translate3d(${x * 0.08}px, ${
          y * 0.08
        }px, 0)`;
      }
      if (gridLayerRef.current) {
        gridLayerRef.current.style.transform = `translate3d(${x * 0.04}px, ${
          y * 0.04
        }px, 0)`;
      }
    };

    const handlePointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 18;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 18;

      if (pointerFrameRef.current) return;

      pointerFrameRef.current = window.requestAnimationFrame(() => {
        applyParallax(pointer.x, pointer.y);
        pointerFrameRef.current = null;
      });
    };

    const resetParallax = () => {
      if (pointerFrameRef.current) {
        window.cancelAnimationFrame(pointerFrameRef.current);
        pointerFrameRef.current = null;
      }
      applyParallax(0, 0);
    };

    section.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    section.addEventListener("pointerleave", resetParallax);

    return () => {
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", resetParallax);
      resetParallax();
    };
  }, []);

  useEffect(() => {
    const updateHeroOpacity = () => {
      if (!sectionRef.current || !contentRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.min(
        1,
        Math.max(0, -rect.top / window.innerHeight),
      );

      contentRef.current.style.opacity = Math.max(
        0.55,
        1 - scrollProgress * 0.45,
      );
      scrollFrameRef.current = null;
    };

    const handleScroll = () => {
      if (scrollFrameRef.current) return;
      scrollFrameRef.current = window.requestAnimationFrame(updateHeroOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollFrameRef.current) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-linear-to-br from-white via-slate-100 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div
        ref={sceneLayerRef}
        className="absolute inset-0 hidden opacity-35 transition-transform duration-150 ease-out lg:block"
      >
        {isSceneReady && (
          <Suspense fallback={null}>
            <TireScene />
          </Suspense>
        )}
      </div>

      <div
        ref={smokeLayerRef}
        className="absolute inset-0 opacity-25 mix-blend-screen transition-transform duration-150 ease-out"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(168,85,247,0.18), transparent 42%, rgba(34,211,238,0.12))",
        }}
      />

      <div
        ref={depthLayerRef}
        className="absolute inset-0 opacity-40 transition-transform duration-150 ease-out"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(15,23,42,0.18))",
        }}
      />

      <div
        ref={gridLayerRef}
        className="absolute inset-0 opacity-[0.08] transition-transform duration-150 ease-out"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.35) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div
        className="relative z-10 min-h-[100svh] w-full overflow-hidden px-4 py-28 sm:px-6 lg:px-8"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          ref={contentRef}
          className="mx-auto flex min-h-[calc(100svh-14rem)] w-full max-w-5xl flex-col items-center justify-center text-center perspective transition-opacity duration-300 will-change-transform"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-slate-300 bg-white/75 px-4 py-2.5 backdrop-blur-md transition-colors duration-300 hover:border-cyan-400/60 sm:px-5 dark:border-slate-700/80 dark:bg-slate-900/70 dark:hover:border-cyan-400/40">
            <Zap className="h-4 w-4 shrink-0 text-purple-400" />
            <span className="text-sm font-medium text-muted-foreground">
              Software Engineer specializing in full-stack development and AI-powered applications
            </span>
          </div>

          <div className="mx-auto mb-10 w-full max-w-5xl space-y-6">
            <h1 className="text-4xl font-black leading-tight tracking-normal text-foreground sm:text-6xl lg:text-7xl">
              Building fast, reliable
              <br className="hidden sm:block" />{" "}
              <span className="bg-linear-to-r from-purple-300 via-cyan-200 to-teal-300 bg-clip-text text-transparent">
                web experiences
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground md:text-xl">
              I build production-ready web applications and AI-powered tools
              that solve real-world problems. Developed 5+ projects and
              scalable MERN platforms. Focused on performance, clean
              architecture, and practical problem-solving.
            </p>
          </div>

          <div className="mb-10 flex w-full max-w-md flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
            <button
              onClick={scrollToProjects}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-base font-semibold transition-all duration-300",
                "bg-slate-950 text-white dark:bg-white dark:text-slate-950",
                "hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-cyan-500/20 dark:hover:bg-cyan-100",
              )}
            >
              View Projects
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="#contact"
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-7 py-3.5 text-base font-semibold text-foreground transition-all duration-300 dark:border-slate-600 dark:text-slate-100",
                "hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-700 dark:hover:border-cyan-300 dark:hover:text-cyan-100",
              )}
            >
              Contact Me
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <dl className="grid w-full max-w-3xl grid-cols-1 gap-3 text-left sm:grid-cols-3">
            {HERO_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-slate-200 bg-white/70 px-5 py-4 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-900/55"
              >
                <dt className="text-2xl font-black text-foreground">
                  {metric.value}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <button
          onClick={scrollToProjects}
          aria-label="Scroll to projects"
          className="group absolute bottom-7 left-1/2 -translate-x-1/2 cursor-pointer rounded-full border border-slate-300 bg-white/75 p-3 text-slate-700 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-cyan-300 dark:hover:text-cyan-200"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};
