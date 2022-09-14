import React from "react";
import { useState } from "react";

export const LanguageCard = ({ props }) => {
  const { title, description, image } = props;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`my-2 p-8 h-1/2 rounded-2xl w-full lg:w-1/3 flex flex-col justify-center items-center gap-4 bg-[rgba(0,0,0,0.6)] shadow-lg shadow-[rgba(0,0,0,0.7)] backdrop-blur-md`}
    >
      <h2
        className={`${
          title === "Spanish" || title === "Español"
            ? "text-yellow-400"
            : "text-blue-600"
        } font-bold text-xl`}
      >
        {title}
      </h2>
      <p className="text-center">{description}</p>
      <div className="h-1/2 lg:h-3/4 rounded-full aspect-square border-4 border-[rgba(255,255,255,0.8)] shadow-lg shadow-[rgba(0,0,0,0.5)] overflow-hidden">
        {isLoading && (
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-full bg-[rgba(255,255,255,0.25)] animate-pulse rounded-full "></div>
          </div>
        )}
        <img
          onLoad={() => setIsLoading(false)}
          className="rounded-full  aspect-square"
          src={image}
        />
      </div>
    </div>
  );
};
