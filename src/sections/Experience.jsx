import { motion } from "framer-motion";
import Carousel from "../components/animations/Carousel";
import { useEffect, useState } from "react";
import DotGrid from "../components/backgrounds/DotGrid";
export const Experience = () => {
  const experiences = [
    {
    role: "AI/LLM Intern",
    company: "Swecha Foundation (Affiliated with IIIT Hyderabad)",
    duration: "2025",
    description: `Completed an AI-focused internship at Swecha, contributing to the development of a Large Language Model for real-world applications. Worked on prompt engineering, dataset preprocessing, and model evaluation to enhance response quality and contextual accuracy. Collaborated with the team to integrate LLM capabilities into practical solutions and deployment workflows.`,
  },
    {
    role: "Treasury Representative",
    company: "VJ Data Questers",
    duration: "2025 - Present",
    description: `Led financial management for club activities, including budgeting for workshops and technical events, and coordinating fund allocation with domain leads to ensure efficient execution.`  },
  {
    role: "DSA Mentor",
    company: "Smart Interviews",
    duration: "2025 - Present",
    description: `Delivering ongoing DSA training sessions for junior students (2-2 and 3-1 semesters), improving problem-solving skills and coding interview readiness. Received a stipend of ₹6000.`,
  },
  ];
  const [scrollMargin, setScrollMargin] = useState("0px");

useEffect(() => {
    const updateMargin = () => {
        if (window.innerWidth >= 768) {
        setScrollMargin("10px"); // desktop
        } else {
        setScrollMargin("0px"); // mobile
        }
    };

    updateMargin(); // initial check
    window.addEventListener("resize", updateMargin);

    return () => window.removeEventListener("resize", updateMargin);
    }, []);

  return (
    <section
      id="experience"
      className="relative bg-black py-24 px-6 md:px-16"
      style={scrollMargin !== "0px" ? { scrollMarginTop: scrollMargin } : undefined}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#1a1a1a"
            activeColor="#737279"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
      </div>
      
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold relative inline-block mb-4 group">
          Experience
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
        </h2>

        <p className="text-gray-400 text-center mb-6">
          My journey so far
        </p>
      </div>
    {/* 📱 MOBILE CAROUSEL */}
        <div className="block md:hidden">
        <div className="relative min-h-95 flex justify-center">
          <Carousel
          items={experiences}
          baseWidth={320}
          autoplay={false}
          loop
          />
        </div>
        </div>
<div className="hidden md:block">
  {/* your timeline code */}

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">

        {/* Vertical Line (Desktop Only) */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-linear-to-b from-white/40 to-transparent"></div>

        <div className="flex flex-col gap-14">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row items-start"
            >

              {/* Dot (Desktop Only) */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                <div className="absolute inset-0 w-3 h-3 bg-white rounded-full animate-ping opacity-30"></div>
              </div>

              {/* Card Wrapper */}
              <div
                className={`w-full md:w-[45%] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                {/* Card */}
                <div className="
                  backdrop-blur-xl
                  bg-white/5
                  border border-white/10
                  rounded-2xl
                  p-6
                  shadow-[0_0_30px_rgba(255,255,255,0.05)]
                  hover:bg-white/10
                  hover:scale-[1.02]
                  hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]
                  transition duration-300
                ">

                  <h3 className="text-xl font-semibold text-white tracking-wide">
                    {exp.role}
                    <div className="w-10 h-0.5 bg-white/30 mt-2"></div>
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    {exp.company} • {exp.duration}
                  </p>

                  <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
      </div>
    </section>
  );
};