import React from "react";

export const Skills = ({ language }) => {
  const { title, description, skillsArray, softSkillsDescription, softSkills } =
    language;

  return (
    <div className="w-full h-full flex flex-col pb-[10vh] lg:pb-0 lg:ml-[5vw] pt-4 items-center overflow-auto">
      <h1 className="text-[#496F69] font-extrabold text-4xl">{title}</h1>
      <p className="p-4">{description}</p>
      <div className="flex flex-wrap justify-center items-baseline p-4 lg:gap-4">
        {skillsArray.map((skill) => (
          <div
            key={skill.title}
            className="flex flex-col items-center w-1/2 lg:w-1/5 mt-4 lg:mt-0 hover:text-[#496F69] transition-all"
          >
            <img className="w-full" src={skill.imgLink} alt={skill.title} />
            <span className="text-lg mt-2 font-semibold">{skill.title}</span>
          </div>
        ))}
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
    </div>
  );
};
