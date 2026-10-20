import Quote from "../componentsSub/Quote";
import LanguageGrid from "./LanguageGrid";
import MobileHome from "./MobileHome";

function HomeElements() {
  return (
    <div className=" justify-between w-full">
      <div className="md:flex">
        <div className="w-full border ">
          <Quote />
          <MobileHome />
        </div>
        <div className="border hidden md:block  md:justify-end md:w-full">
          <LanguageGrid />
        </div>
      </div>
    </div>
  );
}

export default HomeElements;
