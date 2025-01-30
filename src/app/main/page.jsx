"use client";
import { Meteors } from "../components/ui/meteors";
import { MagicCard } from "../components/ui/magic-card";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

import { AnimatedTooltipPreview } from "../components/Circles_hero";
import { useTheme } from "next-themes";
import { FlipWords } from "../components/ui/flip-words";

function Main() {
  const { theme } = useTheme();
  return (
    <div>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
        <Meteors number={30} />
        <div className="items-center justify-center flex">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-300 to-black bg-clip-text text-center mb-6 text-7xl sm:text-9xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Rj-Data
          </span>
        </div>
        <span className=" text-2xl sm:text-4xl">
          How are{" "}
          <FlipWords
            duration={1}
            words={["you", "they"]}
            className={"text-white dark:text-black"}
          />
          ?
        </span>
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
      </div>
      <div className="h-96 bg-red-900">
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
        <div>121212</div>
      </div>
    </div>
  );
}

export default Main;
