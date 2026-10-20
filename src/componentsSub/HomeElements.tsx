import { useEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import Quote from "../componentsSub/Quote";
import LanguageGrid from "./LanguageGrid";
import MobileHome from "./MobileHome";

function HomeElements() {
  const webMockImages = [
    "https://exoticsolutions.vercel.app/mobile1.png",
    "https://exoticsolutions.vercel.app/desktop1.png",
  ];

  const username = "0-Cipherr";

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const blockSize =
    containerWidth < 350
      ? 6
      : containerWidth < 450
        ? 8
        : containerWidth < 600
          ? 9
          : 12;

  const blockMargin = containerWidth < 400 ? 2 : 3;
  return (
    <div className=" justify-between w-full md:p-5  m-auto">
      <div className="md:flex md:mt-8">
        <div className="w-full   ">
          <Quote />
          <MobileHome />
        </div>
        <div className=" hidden md:block  md:justify-end md:w-full m-auto">
          <LanguageGrid gridSize={8} />
        </div>
      </div>
      <div className="hidden md:block">
        <section className="github-activity mt-20 m-auto">
          <header className="github-activity-header">
            <div>
              <span className="github-activity-label">DEVELOPER ACTIVITY</span>

              <h2>My GitHub Activity</h2>

              <p>Building, learning, and shipping projects.</p>
            </div>

            <a
              className="github-activity-link"
              href="https://github.com/0-Cipherr"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub ↗
            </a>
          </header>
          <div ref={containerRef} className="github-activity-calendar ">
            {containerWidth > 0 && (
              <GitHubCalendar
                username={username}
                colorScheme="dark"
                blockSize={blockSize}
                blockMargin={blockMargin}
                fontSize={containerWidth < 400 ? 10 : 12}
                showTotalCount
                theme={{
                  dark: [
                    "#171513", // No contributions
                    "#3B3020", // Low activity
                    "#66502D", // Moderate activity
                    "#9A763A", // High activity
                    "#D6B36A", // Highest activity
                  ],
                }}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomeElements;
