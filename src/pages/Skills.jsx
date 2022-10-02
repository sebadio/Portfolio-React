import { motion } from "framer-motion";
import { animation } from "../helper/";
import { AnimatedTitle, TechnicalSkill } from "../components/";

const Skills = ({ language }) => {
  const { title, description, skillsArray, softSkillsDescription, softSkills } =
    language;

  const { initial, animate, exit } = animation;

  return (
    <motion.div
      className="w-full h-full flex flex-col lg:justify-evenly pb-[10vh] lg:pb-0 lg:ml-[5vw] pt-4 items-center overflow-auto"
      initial={initial}
      animate={animate}
      exit={exit}
    >
      <AnimatedTitle title={title} />

      <div className="flex flex-col lg:flex-row items-baseline mb-4">
        <p className="m-2 lg:mx-12 p-8 text-5xl bg-[rgba(0,0,0,0.5)] backdrop-blur-md rounded-lg text-white">
          {description}
        </p>

        <div className="flex w-full flex-wrap justify-center items-baseline h-full p-4 lg:p-0 lg:gap-4">
          {skillsArray.map(({ title, imgLink }) => (
            <TechnicalSkill key={title} title={title} imgLink={imgLink} />
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center">
        <p className="p-8 text-3xl bg-[rgba(0,0,0,0.5)] backdrop-blur-md rounded-xl m-2 lg:mx-12 text-white text-center lg:text-end flex-1">
          {softSkillsDescription}
        </p>
        <div className="flex flex-2 justify-center p-4 flex-wrap lg:w-1/2 gap-4">
          {softSkills.map((softSkill) => (
            <span
              key={softSkill}
              className="py-2 px-4 hover:scale-105 transition-all font-bold cursor-default select-none bg-[rgba(0,0,0,0.40)] text-white backdrop-blur-md hover:text-[#fc3986] border-[#fff] border-2 rounded-full"
            >
              {softSkill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
