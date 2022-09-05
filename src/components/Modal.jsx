import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ProjectLink } from "./ProjectLink";

export const Modal = ({ props, handleCloseModal }) => {
  const {
    title,
    description,
    image,
    linkToGit,
    linkToPage,
    linkToCourse,
    type,
    disabled,
  } = props;

  return (
    <div
      id="modalBg"
      className="fixed z-30 top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.6)] backdrop-blur-sm flex justify-center items-center"
    >
      <div
        id="modal"
        className="flex flex-col z-50 bg-[#252326] w-[95vw] lg:w-1/2 h-auto p-4 rounded-lg shadow-lg shadow-[rgba(0,0,0,0.8)] -translate-y-[100vh]"
      >
        <div className="flex justify-between">
          <h1 className="text-[#B2A7B8] font-bold text-2xl select-none">
            {title}
          </h1>
          <FontAwesomeIcon
            className="text-[#B2A7B8] text-3xl cursor-pointer hover:text-[#496F69] transition-all"
            onClick={handleCloseModal}
            icon={faXmark}
          />
        </div>

        <hr className="my-4 h-[1px] border-none bg-[#B2A7B8]" />

        <div className="flex flex-wrap gap-8">
          <img
            className="w-full lg:w-1/2 rounded-md shadow-[rgba(0,0,0,0.5)] shadow-md"
            src={image}
            alt={`${title} Image`}
          />
          <p className="my-auto lg:w-[40%] overflow-auto">{description}</p>
        </div>

        <hr className="my-4 h-[1px] border-none bg-[#B2A7B8]" />

        <div className="h-20 flex flex-wrap justify-center items-center lg:gap-8">
          {linkToGit && (
            <ProjectLink
              id={`Git`}
              language={type}
              type={"GitHub"}
              link={linkToGit}
            />
          )}
          {linkToPage && disabled !== "true" && (
            <ProjectLink
              id={`Page`}
              language={type}
              type={type === "es" ? "Pagina" : "Page"}
              link={linkToPage}
              disabled={disabled}
            />
          )}
          {linkToCourse && (
            <ProjectLink
              id={`Page`}
              language={type}
              type={type === "es" ? "Curso" : "Course"}
              link={linkToCourse}
            />
          )}
        </div>
      </div>
    </div>
  );
};
