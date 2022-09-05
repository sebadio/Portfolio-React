import React, { useState } from "react";
import { AnimatedTitle } from "./AnimatedTitle";
import { InteractiveDiv } from "./InteractiveDiv";
import { Modal } from "./Modal";

export const Courses = ({ language, type }) => {
  const { title, description, coursesArray } = language;

  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const handleShowModal = (
    title,
    description,
    image,
    linkToGit,
    linkToPage,
    linkToCourse,
    type
  ) => {
    setModalProps({
      title,
      description,
      image,
      linkToGit,
      linkToPage,
      linkToCourse,
      type,
    });
    setShowModal(true);
    setTimeout(() => {
      const modal = document.getElementById("modal");
      const modalBg = document.getElementById("modalBg");

      modalBg.style.transition = `0.75s ease`;
      modalBg.style.opacity = `1`;

      modal.style.transition = `0.75s ease`;
      modal.style.transform = `translateY(0px)`;
    }, 50);
  };

  const handleCloseModal = () => {
    const modal = document.getElementById("modal");
    const modalBg = document.getElementById("modalBg");

    modal.style.transform = `translateY(-100vh)`;
    modalBg.style.opacity = `0`;

    setTimeout(() => {
      setShowModal(false);
    }, 720);
  };

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
