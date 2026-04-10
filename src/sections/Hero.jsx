import { useState } from "react";
import SplitText from "../components/animations/SplitText";
import RotatingText from "../components/animations/RotatingText";
import HeroPhoto from "../components/hero/HeroPhoto";
import ButtonX from "../components/animations/ButtonX";
import { Download } from "lucide-react";
import HeroPhoto2 from "../components/hero/HeroPhoto2";
import LightRays from "../components/backgrounds/LightRays";
export const Hero = () => {
  const [showTagline, setShowTagline] = useState(false);


  return (
    <section
      id="hero"
      className="
    relative
    min-h-[55vh] md:min-h-[80vh]
    flex items-center
    overflow-hidden
    bg-black
  "

    >
        <div className="absolute inset-0 z-0 pointer-events-none">
    {/* <LightRays
  raysOrigin="top-center"
  raysColor="#22d3ee"
  raysSpeed={1.2}
  lightSpread={0.8}
  rayLength={6}
  followMouse={true}
  mouseInfluence={0.2}
  noiseAmount={0.2}
  distortion={0.1}
  pulsating={true}
  fadeDistance={0.8}
  saturation={1.2}
/> */}
  </div>
        <div className="mx-auto w-full max-w-7xl px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* LEFT – already done */}
        {/* <div className="flex flex-col gap-5 max-w-2xl pl-3 text-left"> */}
        <div className="w-full pl-15">
            <SplitText
                text="Hello, I’m"
                tag="p"
                textAlign="left"
                className="ml-2 text-base uppercase tracking-widest text-white"
                splitType="chars"
                delay={40}
                duration={0.9}
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.2}
                rootMargin="-80px"
            />

            <SplitText
                text="Gade Siddhartha Kumar"
                tag="h1"
                textAlign="left"
                className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight"
                splitType="chars"
                delay={50}
                duration={1.2}
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.2}
                rootMargin="-80px"
                onLetterAnimationComplete={() => setShowTagline(true)}
            />


            {/* {showTagline && (
            <RotatingText
                texts={[
                "Data Scientist",
                "Web Developer",
                "AI & ML Enthusiast",
                "Problem Solver"
                ]}
                mainClassName="
                text-xl md:text-2xl
                font-medium
                text-gray-600
                "
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.03}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2200}
            />
            )} */}
            {showTagline && (
            <div className="flex items-center gap-3 mt-2">

                {/* Static prefix */}
                <span className="text-lg md:text-xl font-medium text-white">
                I am
                </span>

                {/* Rotating text */}
                    <RotatingText
                        texts={[
                            "Data Scientist",
                            "Web Developer",
                            "AI & ML Enthusiast",
                            "Problem Solver"
                        ]}
                        mainClassName="
                            px-4 py-1.5
                            text-lg md:text-xl
                            font-bold
                            tracking-tight
                            bg-white
                            text-black
                            rounded-md
                            shadow-sm
                            inline-flex
                            justify-center
                            text-center
                            min-w-[20ch]
                            transition-[width] duration-300 ease-out
                                        
                                "
                        staggerFrom="last"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                        />
                    </div>
                    )}


            {/* Resume Button (stable, not animated) */}
            <div
            className={`mt-6 transition-opacity duration-500 ${
                showTagline ? "opacity-100" : "opacity-0"
            }`}
            >
            <ButtonX
            as="a"
            href="/Siddhartha_Kumar_Gade.pdf"
            label="Resume"
            icon={Download}
            />

            </div>
            

            </div>
                    {/* RIGHT – photo */}
                    <div className="w-full flex justify-center z-30">
                        <HeroPhoto />
                        {/* <HeroPhoto2/> */}

                    </div>
            
            </div>
            </div>

      
    </section>
  );
};
