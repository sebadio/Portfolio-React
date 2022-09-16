import React from "react";
import { useState } from "react";

export const TechnicalSkill = ({ title, imgLink }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      after={title}
      className={`flex flex-col items-center w-1/3 aspect-square lg:w-[9vw] mt-4 lg:mt-0 hover:text-[#496F69] transition-all 
                  after:content-[attr(after)] after:-bottom-4 after:left-0 after:font-semibold after:text-center after:w-full after:h-4`}
    >
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
    </div>
  );
};
