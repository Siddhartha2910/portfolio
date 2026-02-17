import ProjectCard from "../components/animations/ProjectCard";

export const Projects = () => {
  return (
    <section
      id="projects"
      style={{
            scrollMarginTop: "10px",
        }}
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Projects
        </h2>
        <p className="text-gray-400 mt-3">
          Some of my recent work
        </p>
      </div>

      {/* Cards Grid */}
      <div className="
        max-w-6xl mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-10
      ">
        <ProjectCard
          image="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          title="HygroSkin"
          description="AI-powered smart skincare wearable that monitors hydration and provides insights."
          github="https://github.com/yourrepo"
          tech={["React", "FastAPI", "Machine Learning"]}
        />

        <ProjectCard
          image="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          title="Crypto Time Series Analysis"
          description="Time series forecasting using Matic cryptocurrency dataset."
          github="https://github.com/yourrepo"
          tech={["Python", "Pandas", "Matplotlib"]}
        />

        <ProjectCard
          image="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          title="Crypto Time Series Analysis"
          description="Time series forecasting using Matic cryptocurrency dataset."
          github="https://github.com/yourrepo"
          tech={["Python", "Pandas", "Matplotlib"]}
        />

        <ProjectCard
          image="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          title="Crypto Time Series Analysis"
          description="Time series forecasting using Matic cryptocurrency dataset."
          github="https://github.com/yourrepo"
          tech={["Python", "Pandas", "Matplotlib"]}
        />

        <ProjectCard
          image="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          title="Crypto Time Series Analysis"
          description="Time series forecasting using Matic cryptocurrency dataset."
          github="https://github.com/yourrepo"
          tech={["Python", "Pandas", "Matplotlib"]}
        />

      </div>
    </section>
  );
};
