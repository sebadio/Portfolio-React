import React from "react";
import { motion } from "framer-motion";
import { animation } from "../helper/";
import { useState } from "react";

const Root = ({ language }) => {
  const { initial, animate, exit } = animation;
  const [isLoading, setIsLoading] = useState(true);

  const { title, description, cvLink } = language;

  return (
    <motion.div
      className="flex relative w-full h-[80vh] mt-4 lg:mt-0 p-2 md:h-full justify-center"
      initial={initial}
      animate={animate}
      exit={exit}
    >
      <div
        className={`relative max-h-full h-min sm:h-auto aspect-[9/16] rounded-3xl my-auto md:my-8 overflow-hidden ${
          isLoading ? "border-2 border-white" : ""
        }`}
      >
        {isLoading && (
          <div className="h-full w-full flex justify-center items-center">
            <div className="w-8 aspect-square h-auto p-2 border-4 border-[#fc3986] border-t-[rgba(0,0,0,0.3)] border-l-[rgba(0,0,0,0.3)] rounded-full animate-spin"></div>
          </div>
        )}

        <img
          onLoad={() => setIsLoading(false)}
          id="photo"
          className="max-h-full rounded-3xl"
          src="https://raw.githubusercontent.com/sebadio/Portfolio-React/main/docs/assets/FotoCV.webp"
        />

        <div className="absolute bottom-0 h-1/3 w-full flex flex-col justify-center rounded-b-3xl items-center gap-4 md:gap-12 backdrop-blur-xl">
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-[#f9f9f9] text-3xl">{title}</h1>
            <p className="font-semibold text-[#f9f9f9] text-lg">
              {description}
            </p>
          </div>
          <a
            className="relative py-2 px-6 rounded-full w-max font-bold border-2 transition-all shadow-2xl shadow-black hover:bg-[#fc398660] hover:text-white"
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            description={description}
          >
            {description === "Desarrollador Web Junior"
              ? "Descargar "
              : "Download "}
            CV
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Root;
