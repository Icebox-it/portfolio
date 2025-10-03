import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Menu = () => {
  return (
    <div
      className="fixed-top w-100 d-flex justify-content-center bg-white opacity-60"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <NavigationMenu className="">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="no-underline text-black">
              HOME
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#aboutMe"
              className="no-underline text-black"
            >
              ABOUT ME
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#career"
              className="no-underline text-black"
            >
              WORK
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#skill"
              className="no-underline text-black"
            >
              SKILL
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Menu;
