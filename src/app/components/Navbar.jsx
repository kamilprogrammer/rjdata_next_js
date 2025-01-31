"use client";
import { Button } from "../components/ui/button";
import Image from "next/image";
import { DynamicIcon } from "lucide-react/dynamic";
import { Menu } from "lucide-react";
import rjdata_white from "../assets/rjdata_white.png";
import rjdata from "../assets/rjdata.jpg";
import { ModeToggle } from "./ui/toggle";
import { useState } from "react";
import { useTheme } from "next-themes";

function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="sticky top-0 sm:top-4 z-50 mb-6 sm:my-6 backdrop-filter backdrop-blur-3xl max-h-24 mx-0 xl:mx-80 sm:mx-14 rounded-none sm:rounded-full px-4 xs:px-6 sm:px-12 border-gray-600 bg-white/10 border-0 sm:border-2 py-2">
      <div className="flex px-0 sm:px-14 justify-between">
        {theme === "light" ? (
          <Image
            src={rjdata}
            width={60}
            height={60}
            alt="logo"
            className="lg:w-18 mr-4 mb-2"
          />
        ) : (
          <Image
            src={rjdata_white}
            width={60}
            height={60}
            alt="logo"
            className="lg:w-18 mr-4 mb-2 mt-2"
          />
        )}
        <div className="flex items-center justify-center space-x-6">
          <a className="" href="/main">
            Home
          </a>
          <a className="" href="/projects">
            Projects
          </a>

          <a className="" href="#social">
            Call us
          </a>
        </div>
        <div className="hidden sm:flex items-center space-x-8">
          <Button size="icon">
            <Menu />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
