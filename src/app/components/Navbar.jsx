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
    <nav className="sticky top-8 z-10 my-6 backdrop-filter backdrop-blur-3xl max-h-24 mx-12 rounded-full sm:px-0  px-12 border-gray-600 border-2 py-2">
      <div className="flex px-14 justify-between">
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
        <div className="hidden md:flex  items-center justify-center space-x-6">
          <a className="" href="#">
            Home
          </a>
          <a className="" href="#">
            Projects
          </a>
          <a className="" href="#">
            Collaborate
          </a>

          <div
            className={`p-3 hover:text-white dark:bg-black bg-white dark:text-white text-black rounded-2xl hover:bg-teal-900`}
          >
            <div className="flex items-center space-x-2">
              <DynamicIcon name="headset" size={16} />
              <a href="#">Call</a>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <Button size="icon">
            <Menu />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
