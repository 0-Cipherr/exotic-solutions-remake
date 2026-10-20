"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { FaDiscord, FaGithub, FaLinkedin, FaSlack } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import logo from "../assets/logo.png";

export function NavigatorMenu() {
  return (
    <div className="border border-[#33291D] border-t-0 border-r-0 border-l-0 text-[#e8dfcc] sm:p-2 md:p-0 bg-black  rounded-xs text-white flex  justify-between ">
      <div>
        <img src={logo} alt="Logo" className="w-50" />
      </div>
      <div className="w-full  text-[#e8dfcc]  m-auto flex justify-end gap-3">
        <button className="mt-auto hidden md:block  mb-auto hover:animate-pulse">
          <h1>Expirience</h1>
        </button>
        <button className="mt-auto mb-auto hidden md:block hover:animate-pulse">
          <h1>Accomplishments </h1>
        </button>

        <NavigationMenu className={"   mt-auto"}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={
                  "hover:animate-pulse  text-[19px] sm:text-[23px] md:text-[22px] !bg-black !text-white hover:!bg-black hover:!text-white focus:!bg-black focus:!text-white data-[state=open]:!bg-purple-600 data-[state=open]:!text-white "
                }
              >
                <h1 className="text-[#e8dfcc] text-lg">Contact</h1>
              </NavigationMenuTrigger>

              <NavigationMenuContent
                className={"border text-[#e8dfcc] bg-black   text-[20px]  "}
              >
                <ul className="grid w-[130px] md:w-[200px]  text-xs md:text-md">
                  <li>
                    <NavigationMenuLink
                      render={
                        <a href="#" className="flex-row items-center gap-2 ">
                          <FaLinkedin className="text-blue-500" />
                          LinkedIn
                        </a>
                      }
                      className={
                        " !bg-black hover:bg-black  !text-white text-[20px] hover:!bg-black hover:!text-white focus:!bg-black focus:!text-white data-[state=open]:!bg-purple-600 data-[state=open]:!text-white "
                      }
                    />
                  </li>
                  <li>
                    <NavigationMenuLink
                      render={
                        <a href="#" className="flex-row items-center gap-2">
                          <SiLinktree className="text-lime-500" />
                          LinkTree
                        </a>
                      }
                      className={
                        " !bg-black hover:bg-black  !text-white text-[20px] hover:!bg-black hover:!text-white focus:!bg-black focus:!text-white data-[state=open]:!bg-purple-600 data-[state=open]:!text-white "
                      }
                    />
                  </li>{" "}
                  <li>
                    <NavigationMenuLink
                      render={
                        <a
                          href="https://discord.com/users/1562180668526436439"
                          target="_blank"
                          className="flex gap-3"
                        >
                          <FaDiscord className="text-[30px] text-blue-500" />
                          <h1>Discord</h1>
                        </a>
                      }
                      className={
                        " !bg-black hover:bg-black  !text-white text-[20px] hover:!bg-black hover:!text-white focus:!bg-black focus:!text-white data-[state=open]:!bg-purple-600 data-[state=open]:!text-white "
                      }
                    />
                  </li>
                  <li>
                    <NavigationMenuLink
                      render={
                        <a
                          href="https://telos-shs6494.slack.com/team/U0C8SD7RU78"
                          target="_blank"
                          className="flex gap-3"
                        >
                          <FaSlack className="text-[30px] text-orange-400" />
                          <h1>Slack</h1>
                        </a>
                      }
                      className={
                        " !bg-black hover:bg-black  !text-white text-[20px] hover:!bg-black hover:!text-white focus:!bg-black focus:!text-white data-[state=open]:!bg-purple-600 data-[state=open]:!text-white "
                      }
                    />
                  </li>
                  <li>
                    <NavigationMenuLink
                      render={
                        <a
                          href="#"
                          target="_blank"
                          className="flex-row items-center gap-2"
                        >
                          <FaGithub />
                          Github
                        </a>
                      }
                      className={
                        " !bg-black hover:bg-black  !text-white text-[20px] hover:!bg-black hover:!text-white focus:!bg-black focus:!text-white data-[state=open]:!bg-purple-600 data-[state=open]:!text-white "
                      }
                    />
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
