import { useState } from "react";

export const TechnicalSkill = ({ title, imgLink }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      after={title}
      className={`flex flex-col gap-1 items-center w-1/3 h-auto overflow-hidden aspect-square lg:w-[9vw] mt-4 lg:mt-0 transition-all backdrop-blur-md p-2 rounded-xl m-1 bg-[rgba(0,0,0,0.5)] 
                hover:after:text-[#fc3986] after:transition-all after:content-[attr(after)] after:-bottom-4  
                 after:left-0 after:rounded-full after:flex after:justify-center 
                 after:items-center after:font-semibold after:text-white after:text-center after:w-[90%] after:h-5`}
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
        className={`w-9/12 ${isLoading ? "hidden" : ""}`}
        src={imgLink}
        alt={title + "image"}
      />
    </div>
  );
};
