import { motion } from "framer-motion";
import React from "react";
import { animation } from "../helper/animation";
import { useModal } from "../hooks/useModal";
import { AnimatedTitle } from "./AnimatedTitle";
import { InteractiveDiv } from "./InteractiveDiv";
import { Modal } from "./Modal";

export const Proyects = ({ language, type }) => {
  const { title, description, projectsArray } = language;

  const { handleCloseModal, handleShowModal, modalProps, showModal } =
    useModal();

  const { initial, animate, exit } = animation;

  return (
    <motion.div
      className="w-full h-full flex flex-col pb-[10vh] lg:pb-0 lg:ml-[5vw] pt-4 items-center overflow-auto"
      initial={initial}
      animate={animate}
      exit={exit}
    >
      <h1 className="text-[#496F69] flex justify-center items-center font-extrabold text-5xl">
        {<AnimatedTitle title={title} />}
      </h1>
      <p className="mt-4 px-4">{description}</p>

      {showModal && (
        <Modal
          handleCloseModal={() => {
            handleCloseModal();
          }}
          props={modalProps}
        />
      )}

      <div className="flex flex-col lg:flex-row lg:justify-center w-full flex-wrap gap-2 items-center p-4">
        {projectsArray.map(
          ({ title, description, linkToPage, linkToGit, image, disabled }) => (
            <InteractiveDiv
              handleShowModal={() => {
                handleShowModal(
                  title,
                  description,
                  image,
                  linkToGit,
                  linkToPage,
                  undefined,
                  type,
                  disabled
                );
              }}
              type="projects"
              title={title}
              key={title}
              image={image}
            />
          )
        )}
      </div>
    </motion.div>
  );
};
