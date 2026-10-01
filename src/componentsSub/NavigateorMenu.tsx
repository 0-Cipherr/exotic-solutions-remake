"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import logo from "../assets/logo.png";

export function NavigatorMenu() {
  return (
    <div className="border sm:p-2 md:p-0 bg-black border rounded-md text-white flex  justify-between ">
      <div>
        <img src={logo} alt="Logo" className="w-50" />
      </div>
      <div className="w-full  m-auto flex justify-end">
        <NavigationMenu className={"   mt-auto"}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={
                  "animate-pulse text-[19px] sm:text-[23px] md:text-[22px] !bg-black !text-white hover:!bg-black hover:!text-white focus:!bg-black focus:!text-white data-[state=open]:!bg-purple-600 data-[state=open]:!text-white "
                }
              >
                Contact
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className={
                  "border !bg-black hover:bg-black  !text-white text-[20px] hover:!bg-black hover:!text-white focus:!bg-black focus:!text-white data-[state=open]:!bg-purple-600 data-[state=open]:!text-white "
                }
              >
                <ul className="grid w-[130px] md:w-[200px] text-xs md:text-md">
                  <li>
                    <NavigationMenuLink
                      render={
                        <a href="#" className="flex-row items-center gap-2">
                          <FaLinkedin />
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
                          <SiLinktree />
                          LinkTree
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

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2">{children}</div>
          </div>
        }
      />
    </li>
  );
}
