import React from "react";

export const InteractiveDiv = ({ image, title, handleShowModal, type }) => {
  console.log(type);
  return (
    <div
      onClick={handleShowModal}
      className={`w-full lg:${
        type === "projects" ? "w-1/3" : "w-1/4"
      } relative overflow-hidden border-[#B2A7B8] border-[1px] hover:border-[#496f6960] shadow-md shadow-black transition-all
            after:flex after:justify-center after:items-center after:content-[attr(after)] after:bottom-0 left-0 after:w-full after:h-1/3 after:absolute after:text-white after:font-bold after:text-center after:text-lg lg:after:text-2xl ${
              !window.matchMedia("(any-hover: none)").matches &&
              "after:translate-y-full"
            } after:transition-all
            after:bg-[rgba(0,0,0,0.75)] after:backdrop-blur-md hover:cursor-pointer hover:after:translate-y-0`}
      key={title}
      after={title}
    >
      <img src={image} />
    </div>
  );
};
