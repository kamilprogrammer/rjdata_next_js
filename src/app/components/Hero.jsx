"use client";
import { Meteors } from "../components/ui/meteors";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { FlipWords } from "../components/ui/flip-words";
import { HeroScroll } from "./hero_image";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

function Hero() {
  const { theme } = useTheme();
  return (
    <div>
      <div className="z-10 flex min-h-12 items-center justify-center mt-16 mb-2 ">
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
        >
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>🧑‍✈️ Wanna Be An Employee</span>
              <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </motion.div>
      </div>

      <div
        className={`relative flex h-[500px] sm:h-[1400px] md:h-[1000px] lg:h-[1300px] w-full flex-col items-center justify-start overflow-hidden bg-background md:shadow-xl`}
      >
        <div className="items-center justify-center flex">
          <span className="font-bold pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-300 to-black/10 bg-clip-text text-center text-6xl sm:text-9xl leading-none text-transparent dark:from-white dark:to-slate-900/10">
            RJ Data <br />
            IT Solutions
          </span>
        </div>
        <Meteors number={30} />

        <div className="flex justify-center">
          <span className="text-xl sm:text-2xl font-medium text-gray-400 space-y-1 text-center mt-2">
            We'll change the way of How you think of
            <br />
            <FlipWords
              duration={12}
              words={[
                "Technology",
                "Networks",
                "DataCenters",
                "Information Technology",
                "Cloud Computing",
                "Security Systems",
              ]}
              className={"text-black dark:text-white"}
            />
          </span>
        </div>

        <HeroScroll />
      </div>

      {/*<span className=" text-2xl sm:text-4xl">
          How are{" "}
          
          ?
        </span>
      
      <div className="flex flex-col items-center justify-center">
        <span className="text-5xl font-bold self-center">Social Media</span>
        <Dock_Social />
      </div>

      <AnimatedTooltipPreview></AnimatedTooltipPreview>
      <div className="mx-12">
        <div className="relative">
          <div
            className={
              "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
            }
          >
            <MagicCard
              className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              Magic
            </MagicCard>
            <MagicCard
              className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              Card
            </MagicCard>
          </div>
        </div>
      </div>*/}
    </div>
  );
}

export default Hero;
