import { motion } from "framer-motion";
import React from "react";
import { animation } from "../helper/animation";
import { AnimatedTitle } from "./AnimatedTitle";
import { TechnicalSkill } from "./TechnicalSkill";

export const Skills = ({ language }) => {
  const { title, description, skillsArray, softSkillsDescription, softSkills } =
    language;

  const { initial, animate, exit } = animation;

  return (
    <motion.div
      className="w-full h-full flex flex-col pb-[10vh] lg:pb-0 lg:ml-[5vw] pt-4 items-center overflow-auto"
      initial={initial}
      animate={animate}
      exit={exit}
    >
      <h1 className="text-[#496F69] flex justify-center items-center font-extrabold text-4xl">
        {<AnimatedTitle title={title} />}
      </h1>

      <div className="flex flex-col h-[40vh] lg:flex-row justify-center items-center">
        <p className="p-4">{description}</p>

        <div className="flex w-full flex-wrap justify-center items-baseline h-full p-4 lg:p-0 lg:gap-4">
          {skillsArray.map(({ title, imgLink }) => (
            <TechnicalSkill key={title} title={title} imgLink={imgLink} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="p-4">{softSkillsDescription}</p>
        <div className="flex justify-center p-4 flex-wrap lg:w-1/2 gap-4">
          {softSkills.map((softSkill) => (
            <span
              key={softSkill}
              className="py-2 px-4 hover:-translate-y-2 transition-all font-bold cursor-default select-none hover:text-[#496F69] border-[#B2A7B8] border-2 rounded-full"
            >
              {softSkill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
