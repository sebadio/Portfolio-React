import React, { useState } from "react";
import { useModal } from "../hooks/useModal";
import { AnimatedTitle } from "./AnimatedTitle";
import { InteractiveDiv } from "./InteractiveDiv";
import { Modal } from "./Modal";

export const Courses = ({ language, type }) => {
  const { title, description, coursesArray } = language;

  const { handleCloseModal, handleShowModal, modalProps, showModal } =
    useModal();

  return (
    <div className="w-full flex flex-col pb-[10vh] lg:pb-0 lg:ml-[5vw] pt-4 justify-center items-center overflow-auto">
      <h1
        id="titulo"
        className="text-[#496F69] flex justify-center items-center font-extrabold text-5xl"
      >
        {<AnimatedTitle title={title} />}
      </h1>
      <p className="mt-4">{description}</p>

      {showModal && (
        <Modal
          handleCloseModal={() => {
            handleCloseModal();
          }}
          props={modalProps}
        />
      )}

      <div className="flex flex-wrap justify-around items-center p-2 mt-12 gap-3">
        {coursesArray.map(({ title, description, link, image }) => (
          <InteractiveDiv
            handleShowModal={() => {
              handleShowModal(
                title,
                description,
                image,
                undefined,
                undefined,
                link,
                type
              );
            }}
            image={image}
            title={title}
            type="courses"
            key={title}
          />
        ))}
      </div>
    </div>
  );
};
