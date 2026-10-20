import {
  SiExpress,
  SiFlask,
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiOpenzeppelin,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSolidity,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";

import { FaJava } from "react-icons/fa";

const technologies = [
  // Programming Languages
  { name: "Solidity", Icon: SiSolidity, category: "Languages" },
  { name: "TypeScript", Icon: SiTypescript, category: "Languages" },
  { name: "Flask", Icon: SiFlask, category: "Backend" },
  { name: "Git", Icon: SiGit, category: "Tools" },

  { name: "Node.js", Icon: SiNodedotjs, category: "Backend" },
  { name: "React", Icon: SiReact, category: "Frontend" },

  { name: "Python", Icon: SiPython, category: "Languages" },
  { name: "SQL", Icon: SiPostgresql, category: "Languages" },
  { name: "Java", Icon: FaJava, category: "Languages" },
  { name: "JavaScript", Icon: SiJavascript, category: "Languages" },

  // Frontend
  { name: "Vite", Icon: SiVite, category: "Frontend" },

  // Backend
  { name: "Express", Icon: SiExpress, category: "Backend" },

  // Blockchain & Development
  { name: "OpenZeppelin", Icon: SiOpenzeppelin, category: "Blockchain" },
];
function LanguageGrid({ gridSize }: any) {
  return (
    <div className="mx-auto grid w-full grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
      {technologies.slice(0, gridSize).map((item, index) => {
        const Icon: any = item?.Icon;
        const result = (
          <>
            <div
              key={index}
              className="group flex flex-col items-center justify-center gap-4
            rounded-xl border border-[#33291D] bg-[#11100F]
            px-4 py-7 transition-all duration-300
            hover:border-[#C6A15B]/60 hover:bg-[#171410]
            hover:shadow-[0_0_25px_rgba(198,161,91,0.07)]"
            >
              {Icon && (
                <>
                  <Icon
                    size={40}
                    color="currentColor"
                    className="text-[#E8DFCC] transition-all duration-300
              group-hover:scale-110 group-hover:text-[#C6A15B]"
                    style={{
                      stroke: "currentColor",
                      strokeWidth: 0.6,
                      paintOrder: "stroke",
                    }}
                    aria-label={name}
                  />
                </>
              )}

              <span
                className="text-sm tracking-wide text-[#928675]
              transition-colors duration-300
              group-hover:text-[#E8DFCC]"
              >
                {item.name}
              </span>
            </div>
          </>
        );
        return result;
      })}
    </div>
  );
}

export default LanguageGrid;
