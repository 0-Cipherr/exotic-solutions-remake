import git from "../assets/git.png";
import java from "../assets/java.png";
import javascript from "../assets/js.png";
import sql from "../assets/postgresql.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import solidity from "../assets/solidity.svg";
import typescript from "../assets/typescript.png";

const languages = [
  ["Solidity", solidity],
  ["Python", python],
  ["TypeScript", typescript],
  ["JavaScript", javascript],
  ["Java", java],
  ["SQL", sql],
  ["React", react],
  ["Git", git],
];

function LanguageGrid() {
  return (
    <div className="grid grid-cols-3 gap-x-14 gap-y-14  w-fullmx-auto">
      {languages.map(([name, icon]) => (
        <div
          key={name}
          className=" invisible sm:visible flex flex-col items-center justify-center gap-3"
        >
          <img src={icon} alt={name} className="w-18 h-20 object-contain" />
        </div>
      ))}
    </div>
  );
}
export default LanguageGrid;
