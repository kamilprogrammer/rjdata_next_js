"use client";
import Hero from "./components/Hero";
import { HoverEffect } from "@/app/components/ui/card-hover-effect";
import { AnimatedTestimonials } from "@/app/components/ui/animated-testimonials";
import { Carousel } from "./components/ui/carousel";
import { Dock_Social } from "./components/social_media";
import abd from "@/app/assets/profile-pictures/abd.jpg";
import kmr from "@/app/assets/profile-pictures/kmr.jpg";
import baraa from "@/app/assets/profile-pictures/baraa.jpg";
import belal from "@/app/assets/profile-pictures/belal.jpg";
import basher from "@/app/assets/profile-pictures/basher.jpg";

import bir from "@/app/assets/partnerts/bir.jpg";
import sham from "@/app/assets/partnerts/sham.jpg";
import other from "@/app/assets/partnerts/other.jpg";

export default function Home() {
  const slideData = [
    {
      title: "Al-Bir Hospital",
      button: "Explore Component",
      src: bir,
    },
    {
      title: "Sham Exchange",
      button: "Explore Component",
      src: sham,
    },
    {
      title: "Total Trading",
      button: "Explore Component",
      src: other,
    },
    {
      title: "Al-Matin Factories",
      button: "Explore Component",
      src: other,
    },
  ];
  const projects = [
    {
      title: "💪 Reliability",
      description:
        "We pride ourselves on being a reliable partner, consistently delivering high-quality products and services ontime",
      link: "#features",
    },

    {
      title: "💯 Excellence",
      description:
        "High-quality hardware/software solutions with over +25 years of experience",
      link: "#features",
    },
    {
      title: "🪜 Scalability",
      description:
        "Solutions designed to grow and adapt with your business, ensuring top-notch security and stability",
      link: "#features",
    },
  ];
  const testimonials = [
    {
      quote:
        "At Work. Whenever and wherever you want. (By the way) this has alot of meanings :)",
      name: "AbdulRazzak Rifai",
      designation: "Co-Founder & CEO at Rjdata",
      src: abd,
    },
    {
      quote:
        "The Experience of sleeping is one of the things that a Software Engineer nor the IT Guy will have the oppertunity to try :|",
      name: "Kamel Rifai",
      designation: "CTO at Rjdata",
      src: kmr,
    },
    {
      quote:
        "Idk what to put here sry baraa... msg from kmr who has no time to sleep ;)",
      name: "Baraa Sheikh-Alsouq",
      designation: "Operations Director at Rjdata",
      src: baraa,
    },
    {
      quote:
        "I'm a 100% Drownaty and I can Do whatever it takes to make Everbody as mad as possible :)",
      name: "Belal Rifai",
      designation: "Engineering Lead at Rjdata",
      src: belal,
    },
    {
      quote:
        "Lorem ipsum dolor sit, amet consectetur recusandae voluptates sunt non repellat nobis culpa quidem.",
      name: "Basher Rifai",
      designation: "Team Leader at Rjdata",
      src: basher,
    },
  ];
  return (
    <>
      <Hero />
      <section id="features">
        <div className="flex flex-row items-center justify-center mt-20">
          <span className="text-5xl text-blue-500 font-bold mr-3 mb-10">
            {" "}
            _{" "}
          </span>
          <span className="text-3xl font-bold sm:text-5xl">Features</span>
          <span className="text-5xl text-blue-500 font-bold ml-3 mb-10">
            {" "}
            _{" "}
          </span>
        </div>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </section>
      <section id="members">
        <div className="flex flex-row items-center justify-center mt-20">
          <span className="text-5xl text-blue-500 font-bold mr-3 mb-10">
            {" "}
            _{" "}
          </span>
          <span className="text-2xl font-bold sm:text-5xl">Members</span>
          <span className="text-5xl text-blue-500 font-bold ml-3 mb-10">
            {" "}
            _{" "}
          </span>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </section>
      <section id="gallery">
        <div className="flex flex-row items-center justify-center mt-20">
          <span className="text-5xl text-blue-500 font-bold mr-3 mb-10">
            {" "}
            _{" "}
          </span>
          <span className="text-3xl font-bold sm:text-5xl">Gallery</span>
          <span className="text-5xl text-blue-500 font-bold ml-3 mb-10">
            {" "}
            _{" "}
          </span>
        </div>
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={slideData} />
        </div>
      </section>
      <section id="social">
        <div className="flex flex-row items-center justify-center mt-20">
          <span className="text-5xl text-blue-500 font-bold mr-3 mb-10">
            {" "}
            _{" "}
          </span>
          <span className="text-3xl font-bold sm:text-5xl">Social Media</span>
          <span className="text-5xl text-blue-500 font-bold ml-3 mb-10">
            {" "}
            _{" "}
          </span>
        </div>
        <div className="flex items-center justify-center text-center">
          <span className="text-normal text-xl text-gray-400 max-w-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            voluptates fugit molestias. This is our Social media links so you
            can contact us and say hi👋
          </span>
        </div>
        <div className="relative overflow-hidden w-full h-full py-20">
          <Dock_Social />
        </div>
      </section>
    </>
  );
}
