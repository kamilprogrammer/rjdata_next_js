"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import hero_image from "@/app/assets/hero.jpg";
import { Dock_Social } from "./social_media";
import { useState, useEffect } from "react";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden pt-0 z-20">
      <ContainerScroll titleComponent={<></>}>
        <div>
          <Image
            src={hero_image}
            alt="hero"
            height={100}
            width={1080}
            className="mx-auto rounded-2xl object-cover h-full object-right-bottom"
            draggable={false}
          />
        </div>
      </ContainerScroll>
    </div>
  );
}
