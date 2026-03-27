import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/animations/ProjectCard";

const projects = [
  {
    image: `${import.meta.env.BASE_URL}image3.jpeg`,
    title: "HygroSkin",
    description: "AI-powered smart skincare wearable that monitors hydration and provides insights.",
    github: "https://github.com/yourrepo",
    tech: ["React", "FastAPI", "Machine Learning"],
  },
  {
    image: `${import.meta.env.BASE_URL}image3.jpeg`,
    title: "Crypto Time Series Analysis",
    description: "Time series forecasting using Matic cryptocurrency dataset.",
    github: "https://github.com/yourrepo",
    tech: ["Python", "Pandas", "Matplotlib"],
  },
  {
    image: `${import.meta.env.BASE_URL}image3.jpeg`,
    title: "Crypto Time Series Analysis",
    description: "Time series forecasting using Matic cryptocurrency dataset.",
    github: "https://github.com/yourrepo",
    tech: ["Python", "Pandas", "Matplotlib"],
  },
  {
    image: `${import.meta.env.BASE_URL}image3.jpeg`,
    title: "Crypto Time Series Analysis",
    description: "Time series forecasting using Matic cryptocurrency dataset.",
    github: "https://github.com/yourrepo",
    tech: ["Python", "Pandas", "Matplotlib"],
  },
  {
    image: `${import.meta.env.BASE_URL}image3.jpeg`,
    title: "Crypto Time Series Analysis",
    description: "Time series forecasting using Matic cryptocurrency dataset.",
    github: "https://github.com/yourrepo",
    tech: ["Python", "Pandas", "Matplotlib"],
  },
];

/* ── Heading animation ── */
const HeadingReveal = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="text-center mb-12 overflow-hidden">
      <motion.h2
        initial={{ y: 60, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-5xl font-bold relative inline-block mb-4 group"
      >
        Projects
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full" />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-gray-400 text-center"
      >
        Some of my recent work
      </motion.p>
    </div>
  );
};

/* ── Desktop grid (unchanged behaviour) ── */
const DesktopGrid = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="hidden sm:grid max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  );
};

/* ── Mobile carousel ── */
const MobileCarousel = () => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const inView = useInView(trackRef, { once: true, margin: "-40px" });

  /* Track active card via scroll position */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const scrollLeft = track.scrollLeft;
      const cardWidth = track.scrollWidth / projects.length;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, projects.length - 1));
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.scrollWidth / projects.length;
    track.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  };

  return (
    <div className="sm:hidden w-full">
      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto gap-5 px-6 pb-4 snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="snap-center shrink-0"
            style={{ width: "82vw", maxWidth: "320px" }}
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              duration: 0.55,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Mobile card — no CometCard (no mouse on touch) */}
            <MobileCard project={project} index={i} isActive={activeIndex === i} />
          </motion.div>
        ))}

        {/* trailing space so last card centres */}
        <div className="shrink-0 w-[calc(9vw-10px)]" />
      </div>

      {/* Dot indicator */}
      <div className="flex justify-center gap-2 mt-5">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to project ${i + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width: activeIndex === i ? "24px" : "6px",
              height: "6px",
              background: activeIndex === i ? "#fff" : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>

      {/* Counter */}
      <p className="text-center text-xs text-gray-600 mt-3 tracking-widest uppercase">
        {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
      </p>
    </div>
  );
};

/* ── Mobile card (touch-optimised, no 3D tilt) ── */
const MobileCard = ({ project, index, isActive }) => {
  const { image, title, description, github, tech = [] } = project;

  return (
    <motion.div
      animate={{
        scale: isActive ? 1 : 0.96,
        opacity: isActive ? 1 : 0.6,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="rounded-2xl bg-[#1F2121] p-3 w-full"
      style={{
        boxShadow: isActive
          ? "0 0 0 1px rgba(255,255,255,0.12), 0 20px 60px rgba(0,0,0,0.6)"
          : "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      {/* Image with subtle reveal */}
      <div className="relative aspect-5/4 w-full mb-4 overflow-hidden rounded-xl">
        <motion.img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: isActive ? 1 : 1.04 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/* Shimmer line on active */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              className="absolute inset-0 w-1/3 bg-linear-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Title */}
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>

      {/* Tech stack */}
      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tech.map((item, idx) => (
            <span
              key={idx}
              className="text-xs bg-black text-white px-2 py-1 rounded-md"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {/* GitHub link */}
      <div className="mt-3 flex justify-end">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 border border-white/10 rounded-lg px-3 py-1.5 transition-all duration-200 active:scale-95 hover:border-white/30 hover:text-white"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View Code
        </a>
      </div>
    </motion.div>
  );
};

/* ── Main export ── */
export const Projects = () => {
  const [scrollMargin, setScrollMargin] = useState("0px");

  useEffect(() => {
    const updateMargin = () => {
      if (window.innerWidth >= 768) {
        setScrollMargin("10px");
      } else {
        setScrollMargin("0px");
      }
    };

    updateMargin();
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  return (
    <section id="projects" style={scrollMargin !== "0px" ? { scrollMarginTop: scrollMargin } : undefined}>
      <HeadingReveal />
      <DesktopGrid />
      <MobileCarousel />
    </section>
  );
};