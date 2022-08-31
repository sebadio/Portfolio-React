import React from "react";

export const Proyects = ({ language }) => {
  const { title, description, projectsArray } = language;

  return (
    <div className="w-full h-full flex flex-col pb-[10vh] lg:pb-0 lg:ml-[5vw] pt-4 items-center overflow-auto">
      <h1>{title}</h1>
      <p>{description}</p>

      <div className="flex flex-col justify-center items-center p-4">
        {projectsArray.map(({ title, description, linkToPage, linkToGit }) => (
          <div
            className="flex flex-col justify-center items-center mt-8"
            key={title}
          >
            <h3>{title}</h3>
            <p>{description}</p>
            <a
              className="hover:text-[#496F69] transition-all"
              href={linkToGit}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="hover:text-[#496F69] transition-all"
              href={linkToPage}
              target="_blank"
              rel="noopener noreferrer"
            >
              Page
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
