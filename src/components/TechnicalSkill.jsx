import React from "react";
import { useState } from "react";

export const TechnicalSkill = ({ title, imgLink }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col items-center w-1/2 h-1/2 lg:w-[9vw] mt-4 lg:mt-0 hover:text-[#496F69] transition-all overflow-hidden">
      {isLoading && (
        <div
          className={`w-full h-full flex justify-center items-center ${
            !isLoading ? "hidden" : ""
          }`}
        >
          <div className="w-1/2 aspect-square bg-[rgba(255,255,255,0.4)] rounded-full animate-ping"></div>
        </div>
      )}

      <img
        onLoad={() => setIsLoading(false)}
        className={`w-full${!isLoading ? "hidden" : ""}`}
        src={imgLink}
        alt={title}
      />
      <span className="text-lg mt-2 font-semibold">{title}</span>
    </div>
  );
};
