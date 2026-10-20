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
      <h1 className="mt-10 text-center text-4xl font-semibold text-[#e8dfcc] hover:animate-pulse  ">
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
          <LanguageGrid gridSize={8} />
        </div>

        <div className="w-80 m-auto">
          <h1 className="text-4xl text-center mt-30 font-extrabold hover:animate-pulse  text-[#e8dfcc] ">
            Accomplishments
          </h1>
          <div className="mt-10 tech-float grid grid-flow-cols gap-5 ">
            <ProjectPost
              name="ColorStack"
              headline="Member · Computer Science Community"
              date="October 2026 - Present"
              badge="Community Member"
              title="💻 ColorStack Member"
              description="Proud member of ColorStack, a community supporting Black and Latinx computer science students through professional development, mentorship, and opportunities to grow and succeed in the tech industry."
              technologies={[
                "Computer Science",
                "Professional Development",
                "Community",
              ]}
              link="https://www.colorstack.org/"
              linkLabel="Visit ColorStack"
              emblemSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-eyR7E07d_vI89R2nVQFLSPumD7SN8U5a-E0SkfoxA&s=10"
            />
            <ProjectPost
              name="Exotic Solutions"
              headline="Multichain Yield Infrastructure "
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
              link="https://www.base.org/blog/announcing-the-onchain-summer-buildathon-winners#:~:text=FrenMint%20for%20letting%20users%20maximize%20their%20experience%20on%20friend%2Etech"
              linkLabel="View Anoouncment!"
              emblemSrc={
                "https://avatars.githubusercontent.com/u/330475156?s=200&v=4"
              }
            />
            <ProjectPost
              name="FrenMint"
              headline="Web3 App/Blockchain Finance "
              date="2022"
              badge="Hackathon Winner"
              title="🏆 Coinbase-Sponsored Blockchain Hackathon"
              description="Won a Coinbase-sponsored blockchain hackathon in 2022. An early milestone in my journey building blockchain applications and exploring decentralized technology."
              technologies={["Blockchain", "Solidity", "Web3"]}
              link="https://www.base.org/blog/announcing-the-onchain-summer-buildathon-winners#:~:text=FrenMint%20for%20letting%20users%20maximize%20their%20experience%20on%20friend%2Etech"
              linkLabel="View Announcment"
              emblemSrc={
                "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F28ac103c2a0e4d29b02625d2b29b4d60%2Fprojects%2F1e1b2953d68e40aaa347036f9f9d2763%2F5c38d6c4-9c32-4070-858a-846aab338cc0.jpeg&w=1024&q=75"
              }
            />
          </div>
        </div>

        <div className=" tech-float mt-20 mb-15 text-3xl gap-3 font-bold flex justify-center ">
          <h1 className="text-md">Connect WIth Me</h1>
          <div className="flex gap-2">
            <button className="flex justify-start  border  border-[#3d3123] bg-[#161514] px-5  py-1 rounded-sm text-[20px] border-">
              <div className="flex     gap-3    m-auto">
                <img
                  src="https://cdn-icons-png.magnific.com/256/3800/3800024.png?semt=ais_white_label"
                  alt=""
                  className="w-5.5 mt-auto mb-auto"
                />
                <h1 className="text-nowrap text-md  mt-auto mb-auto">Slack</h1>
              </div>
            </button>
            <button className="flex justify-start  border  border-[#3d3123] bg-[#161514] px-5  py-1 rounded-sm text-[20px] border-">
              <div className="flex     gap-3    m-auto">
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
