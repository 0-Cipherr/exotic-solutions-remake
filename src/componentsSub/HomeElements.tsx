import Quote from "../componentsSub/Quote";
import LanguageGrid from "./LanguageGrid";

function HomeElements() {
  return (
    <div className="flex justify-between ">
      <Quote />
      <LanguageGrid />
    </div>
  );
}

export default HomeElements;
