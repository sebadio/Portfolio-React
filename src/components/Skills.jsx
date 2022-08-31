import React from "react";

export const Skills = ({ language }) => {
  const { title, description, softSkillsDescription, softSkills } = language;

  return (
    <div className="w-full h-full flex flex-col lg:ml-[5vw] justify-center items-center">
      <h1 className="text-[#496F69] font-extrabold text-4xl">{title}</h1>
      <p>{description}</p>
    </div>
  );
};
