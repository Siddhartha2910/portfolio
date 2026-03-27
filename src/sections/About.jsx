
import "./About.css";
import { motion } from "framer-motion";
import Cubes from "../components/animations/Cubes";

export const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Left side */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="cubes-wrapper">
        <Cubes 
            gridSize={8}
            maxAngle={45}
            radius={3}
            borderStyle="2px dotted #fff"
            faceColor="#060010"
            rippleColor="#ffffff"
            rippleSpeed={1.5}
            autoAnimate
            rippleOnClick
        />
        </div>

        </motion.div>

        {/* Right side */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
        >
          <div className="w-full">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold relative inline-block mb-4 group text-center md:text-left">
                About Me
                <span className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 -bottom-2 h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
              </h2>
            </div>
          </div>
          <p className="about-text text-justify md:text-left">
            I'm a passionate Web Developer focused on crafting clean, responsive, and user-friendly web applications. With a strong eye for design and a love for efficient code, I enjoy turning complex ideas into simple, functional, and visually engaging digital experiences.
            <br />
            {/* <br /> */}
            For over a year, I've been working with modern web technologies, primarily specializing in JavaScript frameworks like React.js & Next.js. I'm always eager to explore new tools and techniques to stay current and continue growing as a developer.
            <br />
            {/* <br /> */}
            When I'm not coding, you'll find me exploring graphic designing, experimenting with photography, or diving into learning a new skill. I believe that creativity and continuous learning are at the heart of meaningful and impactful web development.
          </p>
        </motion.div>

      </div>
    </section>
  );
};


