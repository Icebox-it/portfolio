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
} from "@/components/ui/navigation-menu"

const Menu = () => {
  return (
    <div className="fixed-top w-screen bg-white bg-opacity-50">
      <NavigationMenu className="text-center">
        <NavigationMenuList>
          <NavigationMenuItem>
              <NavigationMenuLink href="/" className="no-underline text-black">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#aboutMe" className="no-underline text-black">
                ABOUT ME
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#skill" className="no-underline text-black">
                SKILL
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#career" className="no-underline text-black">
                経歴
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className="no-underline text-black">
                CONTACT
              </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Menu;
