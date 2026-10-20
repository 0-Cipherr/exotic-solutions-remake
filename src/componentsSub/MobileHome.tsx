import { useEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import "../ActivityCalendar.css";
import LanguageGrid from "./LanguageGrid";

function MobileHome() {
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
    <div className="visible md:hidden w-full min-w-0 overflow-hidden mt-8">
      <h1 className="mt-10 text-center text-3xl font-semibold text-white hover:animate-pulse">
        Stylish Websites
      </h1>

      <div className="mt-6 flex justify-center w-full min-w-0 gap-3 overflow-x-auto">
        {webMockImages.map((item, index) => {
          return (
            <img
              key={index}
              src={item}
              alt={`Website design preview ${index}`}
              className="h-auto w-[48%] max-w-none shrink-0 rounded-xl object-cover"
              loading="lazy"
            />
          );
        })}
      </div>

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
      <div className="text-white">
        <h1 className="text-4xl text-center mt-30 font-extrabold hover:animate-pulse ">
          Expirience
        </h1>
        <div className="w-70  m-auto mt-10">
          <LanguageGrid />
        </div>

        <div className="mt-20 text-3xl gap-3 font-bold flex justify-center">
          <h1>Connect With Me on Slack</h1>
          <button className="flex border border-[#33291D] bg-[#11100F] px-5 rounded-sm text-[20px] border-">
            <h1>Connect</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileHome;
