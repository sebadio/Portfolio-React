import React from "react";

export const About = ({ language }) => {
  const { title, description } = language;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 p-4 lg:mx-[10vw]">
      <h2 className="text-[#496F69] font-extrabold text-4xl">{title}</h2>
      <p>{description}</p>
    </div>
  );
};
