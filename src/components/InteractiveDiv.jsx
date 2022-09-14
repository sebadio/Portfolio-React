import React from "react";
import { useState } from "react";

export const InteractiveDiv = ({ image, title, handleShowModal, type }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      onClick={handleShowModal}
      className={`w-full ${
        type === "projects" ? "lg:w-1/3" : "lg:w-1/4"
      } relative overflow-hidden border-[#B2A7B8] border-[1px] hover:border-[#496f6960] shadow-md shadow-black transition-all h-auto aspect-video
          after:flex after:justify-center after:items-center after:content-[attr(after)] after:bottom-0 left-0 after:w-full after:h-1/3 after:absolute after:text-white after:font-bold after:text-center after:text-lg lg:after:text-2xl ${
            !window.matchMedia("(any-hover: none)").matches &&
            "after:translate-y-full"
          } after:transition-all
          after:bg-[rgba(0,0,0,0.75)] after:backdrop-blur-md hover:cursor-pointer hover:after:translate-y-0`}
      key={title}
      after={title}
    >
      {isLoading && (
        <div className="w-full h-full bg-[rgba(0,0,0,0.55)] animate-pulse flex justify-center items-center gap-2">
          <div className="rounded-full w-4 h-4 bg-[#496f69] animate-bounce delayed-1"></div>
          <div className="rounded-full w-4 h-4 bg-[#496f69] animate-bounce delayed-2"></div>
          <div className="rounded-full w-4 h-4 bg-[#496f69] animate-bounce delayed-3"></div>
        </div>
      )}
      <img
        onLoad={() => setIsLoading(false)}
        className={`${isLoading ? "opacity-0" : "opacity-100"} transition-all`}
        src={image}
      />
    </div>
  );
};
