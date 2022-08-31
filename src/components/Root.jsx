import React from "react";

export const Root = ({ language }) => {
  return (
    <div className="flex relative w-full h-[80vh] m-auto md:h-full justify-center">
      <div className="relative max-h-full h-min sm:h-auto w-max rounded-3xl my-auto md:my-8 overflow-hidden">
        <img
          id="photo"
          className="max-h-full"
          src="https://raw.githubusercontent.com/sebadio/Portfolio-React/main/docs/assets/FotoCV.jpg"
        />

        <div className="absolute bottom-0 h-1/3 w-full flex flex-col justify-center items-center gap-4 md:gap-12 backdrop-blur-xl">
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-3xl">{language.title}</h1>
            <p className="font-semibold text-lg">{language.description}</p>
          </div>
          <a
            className="py-2 px-6 rounded-full border-2 w-max font-bold transition-all border-[#B2A7B8] hover:bg-[#4D4352]"
            href="https://sebadio.github.io/Portfolio-React/assets/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {language.description === "Desarrollador Web Junior"
              ? "Descargar "
              : "Download "}
            CV
          </a>
        </div>
      </div>
    </div>
  );
};
