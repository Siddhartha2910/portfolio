import { CometCard } from "../animations/Cometcard";
import ButtonX from "./ButtonX";
import { Github } from "lucide-react";

const ProjectCard = ({ image, title, description, github, tech = [] }) => {
  return (
    <div className="flex justify-center">
      <CometCard>
        <div
          className="
            w-65 sm:w-75 md:w-[320px]
            rounded-2xl
            bg-[#1F2121]
            p-3
            transition-all duration-300 ease-out
            hover:shadow-xl hover:shadow-white-500/20
            hover:-translate-y-1
          "
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Image */}
          <div className="relative aspect-5/4 w-full mb-4">
            <img
              src={image}
              alt={title}
              className="
                absolute inset-0
                h-full w-full
                rounded-xl
                object-cover
              "
              style={{ transform: "translateZ(30px)" }}
            />
          </div>

          {/* Title */}
          <h3
            className="text-white text-lg font-semibold mb-2"
            style={{ transform: "translateZ(20px)" }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="text-gray-400 text-sm mb-3 line-clamp-2"
            style={{ transform: "translateZ(15px)" }}
          >
            {description}
          </p>

          {/* Tech Stack */}
          {tech.length > 0 && (
            <div
              className="flex flex-wrap gap-2 mb-3"
              style={{ transform: "translateZ(10px)" }}
            >
              {tech.map((item, index) => (
                <span
                  key={index}
                  className="text-xs bg-black text-white px-2 py-1 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* GitHub Link */}
            
            <div className="mt-3 flex justify-end" style={{ transform: "translateZ(15px)" }}>
              <ButtonX
                as="a"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                label="View Code"
                icon={Github}
              />
            </div>


        </div>
      </CometCard>
    </div>
  );
};

export default ProjectCard;
