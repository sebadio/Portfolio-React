import { motion } from "framer-motion";
import React from "react";
import { animation } from "../helper/animation";
import { AnimatedTitle } from "./AnimatedTitle";
import { LanguageCard } from "./LanguageCard";

export const Languages = ({ language }) => {
  const { title, description, es, en } = language;

  const { initial, animate, exit } = animation;

  return (
    <motion.div
      className="w-full h-full p-4 flex flex-col pb-[10vh] lg:pb-0 lg:ml-[5vw] pt-4 items-center overflow-auto"
      initial={initial}
      animate={animate}
      exit={exit}
    >
      <AnimatedTitle title={title} />
      <p className="mt-8 text-white font-semibold bg-[rgba(0,0,0,0.5)] rounded-full p-2 px-4">
        {description}
      </p>
      <div className="w-full h-screen flex flex-wrap justify-center items-center mb-[10vh] lg:mb-0 gap-4">
        <LanguageCard props={es} />

        <LanguageCard props={en} />
      </div>
    </motion.div>
  );
};
