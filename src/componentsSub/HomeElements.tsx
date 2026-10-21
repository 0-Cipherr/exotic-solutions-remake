import { useEffect, useRef, useState } from "react";
import Quote from "../componentsSub/Quote";
import LanguageGrid from "./LanguageGrid";
import MobileHome from "./MobileHome";

function HomeElements() {
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

  // Adapt contribution square spacing to the available width.
  const blockMargin = containerWidth < 500 ? 2 : 3;

  // Estimate the square size needed to use the available width.
  const weekCount = 53;
  const availableWidth = Math.max(0, containerWidth - 40);

  const blockSize = Math.max(
    6,
    Math.floor((availableWidth - weekCount * blockMargin) / weekCount),
  );

  return (
    <div className="m-auto w-full justify-between md:p-5">
      <div className="md:mt-8 md:flex">
        <div className="w-full">
          <Quote />
          <MobileHome />
        </div>

        <div className="tech-float m-auto hidden w-full p-8 md:block md:justify-end">
          <LanguageGrid gridSize={8} />
        </div>
      </div>

      <div className="hidden w-full md:block">
        {/* <section className="github-activity mx-auto mt-20 w-full">
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

          <div
            ref={containerRef}
            className="github-activity-calendar w-full min-w-0"
          >
            {containerWidth > 0 && (
              <GitHubCalendar
                username={username}
                colorScheme="dark"
                blockSize={blockSize}
                blockMargin={blockMargin}
                fontSize={containerWidth < 400 ? 10 : 12}
                showTotalCount
                theme={{
                  dark: ["#171513", "#3B3020", "#66502D", "#9A763A", "#D6B36A"],
                }}
              />
            )}
          </div>
        </section> */}
        <div className="mt-3"></div>
      </div>
    </div>
  );
}

export default HomeElements;
