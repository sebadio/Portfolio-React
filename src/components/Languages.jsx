import React from "react";
import { AnimatedTitle } from "./AnimatedTitle";

export const Languages = ({ language }) => {
  const { title, description, es, en } = language;

  return (
    <div className="w-full h-full flex flex-col pb-[10vh] lg:pb-0 lg:ml-[5vw] pt-4 items-center overflow-auto">
      <h1 className="text-[#496F69] flex justify-center items-center font-extrabold text-4xl">
        {<AnimatedTitle title={title} />}
      </h1>
      <p>{description}</p>
      <div className="w-full flex justify-center gap-4">
        <div className="p-4 flex flex-col items-center">
          {
            <>
              <h2>{es.title}</h2>
              <p>{es.description}</p>
            </>
          }
        </div>
        <div className="p-4 flex flex-col items-center">
          <>
            <h2>{en.title}</h2>
            <p>{en.description}</p>
          </>
        </div>
      </div>
    </div>
  );
};
