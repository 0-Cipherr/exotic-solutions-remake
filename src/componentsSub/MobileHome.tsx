import { useEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import "../ActivityCalendar.css";
import LanguageGrid from "./LanguageGrid";
import ProjectPost from "./ProjectPost";

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
    <div className="visible md:hidden w-full min-w-0 overflow-hidden mt-3">
      <h1 className="mt-10 text-center text-4xl font-semibold text-white hover:animate-pulse  ">
        Stylish Websites
      </h1>

      <div className="mt-10 flex justify-center w-full min-w-0 gap-3 overflow-x-auto">
        {webMockImages.map((item, index) => {
          return (
            <img
              key={index}
              src={item}
              alt={`Website design preview ${index}`}
              className="tech-float h-auto w-[45%] max-w-none shrink-0 rounded-xl object-cover"
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
        <div className="w-80  m-auto mt-10">
          <LanguageGrid />
        </div>

        <div className="w-80 m-auto">
          <h1 className="text-4xl text-center mt-30 font-extrabold hover:animate-pulse underline  ">
            Accomplishments
          </h1>
          <div className="mt-10 tech-float grid grid-flow-cols gap-5 ">
            <ProjectPost
              name="Exotic Solutions"
              headline="Software Engineer · Blockchain Developer"
              badge="Currently Building"
              title="Building Telos — Cross-Chain Yield Infrastructure"
              description="Currently developing Telos, a cross-chain DeFi protocol focused on making yield strategies accessible through a unified vault infrastructure.

Building ERC-4626 vaults, clone-based deployments, and cross-chain messaging with LayerZero. Focused on vault factories, registry architecture, and secure interactions between supported networks."
              technologies={[
                "Solidity",
                "Foundry",
                "ERC-4626",
                "LayerZero",
                "OpenZeppelin",
                "EVM",
              ]}
              link="https://github.com/0-Cipherr"
              linkLabel="Explore My GitHub"
            />
            <ProjectPost
              name="Exotic Solutions"
              headline="Software Engineer · Blockchain Developer"
              date="2022"
              badge="Hackathon Winner"
              title="🏆 Coinbase-Sponsored Blockchain Hackathon"
              description="Won a Coinbase-sponsored blockchain hackathon in 2022. An early milestone in my journey building blockchain applications and exploring decentralized technology."
              technologies={["Blockchain", "Solidity", "Web3"]}
              link="YOUR_PROJECT_URL"
              linkLabel="Explore the Project"
            />
          </div>
        </div>

        <div className="mt-20 text-3xl gap-3 font-bold flex justify-center">
          <h1 className="text-md">Connect WIth Me</h1>
          <div className="flex gap-2">
            <button className="flex justify-start  border  border-[#3d3123] bg-[#161514] px-5  py-1 rounded-sm text-[20px] border-">
              <div className="flex border    gap-3    m-auto">
                <img
                  src="https://cdn-icons-png.magnific.com/256/3800/3800024.png?semt=ais_white_label"
                  alt=""
                  className="w-5.5 mt-auto mb-auto"
                />
                <h1 className="text-nowrap text-md  mt-auto mb-auto">Slack</h1>
              </div>
            </button>
            <button className="flex justify-start  border  border-[#3d3123] bg-[#161514] px-5  py-1 rounded-sm text-[20px] border-">
              <div className="flex border    gap-3    m-auto">
                <img
                  src="https://www.svgrepo.com/show/353655/discord-icon.svg"
                  alt=""
                  className="w-5.5 mt-auto mb-auto"
                />
                <h1 className="text-nowrap text-md  mt-auto mb-auto">
                  Discord
                </h1>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHome;
