import React from "react";
import { AnimatedTitle } from "./AnimatedTitle";
import { LanguageCard } from "./LanguageCard";

export const Languages = ({ language }) => {
  const { title, description, es, en } = language;

  return (
    <div className="w-full h-full p-4 flex flex-col pb-[10vh] lg:pb-0 lg:ml-[5vw] pt-4 items-center overflow-auto">
      <h1 className="text-[#496F69] flex justify-center items-center font-extrabold text-4xl">
        {<AnimatedTitle title={title} />}
      </h1>
      <p>{description}</p>
      <div className="w-full h-screen flex flex-wrap justify-center items-center mb-[10vh] lg:mb-0 gap-4">
        <LanguageCard props={es} />

        <LanguageCard props={en} />
      </div>
    </div>
  );
};
