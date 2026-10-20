import HomeElements from "./HomeElements";
import { NavigatorMenu } from "./NavigateorMenu";
import { StickyFooter } from "./StickyFooter";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <NavigatorMenu />

      <main className="flex-1">
        <HomeElements />
      </main>

      <StickyFooter />
    </div>
  );
}

export default Home;
