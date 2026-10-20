import {
  SiGit,
  SiJavascript,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSolidity,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
const languages = [
  { name: "Solidity", Icon: SiSolidity },
  { name: "Python", Icon: SiPython },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "React", Icon: SiReact },
  { name: "Git", Icon: SiGit },
];

function LanguageGrid() {
  return (
    <div className=" mx-auto grid w-full grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
      {languages.map(({ name, Icon }) => (
        <div
          key={name}
          className="group flex flex-col items-center justify-center gap-4
            rounded-xl border border-[#33291D] bg-[#11100F]
            px-4 py-7 transition-all duration-300
            hover:border-[#C6A15B]/60 hover:bg-[#171410]
            hover:shadow-[0_0_25px_rgba(198,161,91,0.07)]"
        >
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
          <span
            className="text-sm tracking-wide text-[#928675]
              transition-colors duration-300
              group-hover:text-[#E8DFCC]"
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default LanguageGrid;
