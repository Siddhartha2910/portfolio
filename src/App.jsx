import { useEffect, useState } from "react";
import Header from "./layout/Header";
import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Projects} from "@/sections/Projects";
import {Experience} from "@/sections/Experience";
import {Skills} from "@/sections/Skills";
import {Contact} from "@/sections/Contact";
import Loader from "./components/common/Loader";
import ClickSpark from "./components/animations/ClickSpark";
import LightRays from "./components/backgrounds/LightRays";
import { Toaster } from "react-hot-toast";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    // <div className="min-h-screen bg-black overflow-x-hidden">
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(10px)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
          },
        }}
      />

    {/* GLOBAL LIGHT RAYS BACKGROUND */}
    <div className="absolute top-0 left-0 w-full h-[80vh] z-1 pointer-events-none">
      <LightRays
        raysOrigin="top-center"
        raysColor="white"
        raysSpeed={0.6}
        lightSpread={0.4}
        rayLength={4}
        followMouse={false}
        pulsating={false}
        fadeDistance={0.7}
      />
    </div>
      <header className="justify-center items-center h-20 p-10">
      <Header />
      </header>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      </ClickSpark>
    </div>
  )
}

export default App
