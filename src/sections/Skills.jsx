import { useState, useEffect } from "react";
import MagnetLines from "../components/animations/MagnetLines";
import vercelIcon from "../assets/vercel.svg";
import expressicon from "../assets/express.svg";
import githubicon from "../assets/github.svg";
import socketdotioicon from "../assets/socketdotio.svg";
export const Skills = () => {
  const skillsData = {
    frontend: [
      { name: "React.js", type: "UI Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", type: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "JavaScript", type: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", type: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "HTML5", type: "Markup", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", type: "Styling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", type: "Styling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Socket.IO", type: "Realtime", icon: socketdotioicon },
      { name: "REST APIs", type: "Integration", icon: "https://img.icons8.com/ios-filled/50/ffffff/api.png" },
    ],
    backend: [
      { name: "Python", type: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", type: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Node.js", type: "Runtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", type: "Framework", icon: expressicon },
      { name: "MongoDB", type: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", type: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "OAuth", type: "Auth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg" },
      { name: "Webhooks", type: "Integration", icon: "https://img.icons8.com/ios-filled/50/ffffff/webhook.png" },
    ],
    data: [
      { name: "Pandas", type: "Data Analysis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", type: "Computation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Scikit-learn", type: "ML Library", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "TensorFlow", type: "Deep Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "OpenCV", type: "Computer Vision", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    ],
    tools: [
    { name: "VS Code", type: "Editor", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", type: "API Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Jupyter Notebook", type: "Notebook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    { name: "GitHub", type: "Version Control", icon: githubicon },
    { name: "Kaggle", type: "Platform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg" },
    { name: "Vercel", type: "Deployment", icon: vercelIcon },
    { name: "Streamlit", type: "App Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
  ],
  };


  const tabs = ["frontend", "backend", "data", "tools"];
  const [activeTab, setActiveTab] = useState("frontend");
  const [visible, setVisible] = useState([]);

  const [scrollMargin, setScrollMargin] = useState("0px");

  useEffect(() => {
    const updateMargin = () => {
      if (window.innerWidth >= 768) {
        setScrollMargin("10px"); // desktop
      } else {
        setScrollMargin("0px"); // mobile
      }
    };

    updateMargin();
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  useEffect(() => {
    setVisible([]);
    const timeout = setTimeout(() => {
      setVisible(skillsData[activeTab].map((_, i) => i));
    }, 100);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <section
      id="skills"
      style={scrollMargin !== "0px" ? { scrollMarginTop: scrollMargin } : undefined}
      className="min-h-screen bg-black text-white py-24 px-6 md:px-16"
    >
    <div className="max-w-7xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-start">

  {/* LEFT → ALL SKILLS CONTENT */}
  <div>
    
    {/* Heading */}
    <div className="text-center md:text-left mb-4">
      <h2 className="text-4xl md:text-5xl font-bold relative inline-block mb-4 group">
        Skills
        <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
      </h2>

      <p className="text-gray-400 mb-6">
        Technologies I work with
      </p>
    </div>

    {/* Tabs */}
    <div className="border-b border-white/10 mb-5 flex flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-3 text-xs tracking-widest uppercase border-b-2 transition ${
            activeTab === tab
              ? "text-white border-white"
              : "text-gray-500 border-transparent hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skillsData[activeTab].map((skill, i) => (
        <div
          key={i}
          className={`group bg-neutral-900/40 backdrop-blur-sm p-6 flex flex-col gap-3 rounded-xl border border-white/5 
          transition-all duration-150
          ${visible.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          hover:border-white/20 hover:bg-neutral-900`}
          style={{ transitionDelay: `${i * 20}ms` }}
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-7 h-7 grayscale brightness-75 transition-all duration-150 
            group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
          />

          <p className="text-sm text-gray-300 transition group-hover:text-white">
            {skill.name}
          </p>

          <p className="text-[10px] uppercase tracking-wider text-gray-500">
            {skill.type}
          </p>
        </div>
      ))}
    </div>

  </div>

  {/* RIGHT → Magnet Lines */}
  <div className="hidden md:flex justify-center items-center">
    <div className="mt-30 ml-15 ">
    <MagnetLines
      rows={10}
      columns={12}
      containerSize="50vmin"
      lineColor="white"
      lineWidth="2px"
      lineHeight="30px"
      baseAngle={0}
    />
    </div>
  </div>

</div>
    </section>
  );
};