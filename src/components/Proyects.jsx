import React, { useState } from "react";
import { Modal } from "./Modal";

export const Proyects = ({ language, type }) => {
  const { title, description, projectsArray } = language;

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
    <div className="w-full h-full flex flex-col pb-[10vh] lg:pb-0 lg:ml-[5vw] pt-4 items-center overflow-auto">
      <h1 className="text-[#496F69] font-extrabold text-4xl">{title}</h1>
      <p className="mt-4">{description}</p>

      {showModal && (
        <Modal
          handleCloseModal={() => {
            handleCloseModal();
          }}
          props={modalProps}
        />
      )}

      <div className="flex flex-wrap gap-2 justify-center items-center p-4">
        {projectsArray.map(
          ({ title, description, linkToPage, linkToGit, image }) => (
            <div
              onClick={() => {
                handleShowModal(
                  title,
                  description,
                  image,
                  linkToGit,
                  linkToPage,
                  undefined,
                  type
                );
              }}
              className={`flex flex-col justify-center items-center relative
                          mt-8 w-full lg:w-1/3 
                          border-[1.5px] border-[rgba(255,255,255,0.3)] hover:border-[#496f6960]
                          transition-all cursor-pointer overflow-hidden
                          after:flex after:justify-center after:items-center after:content-[attr(after)] after:bottom-0 left-0 after:w-full after:h-1/2 after:absolute after:text-white after:font-bold after:text-center after:text-2xl ${
                            !window.matchMedia("(any-hover: none)").matches &&
                            "after:translate-y-full"
                          } after:transition-all
                          after:bg-[rgba(0,0,0,0.75)] hover:after:translate-y-0`}
              key={title}
              after={title}
            >
              <img className="w-full h-full aspect-video" src={image} />
            </div>
          )
        )}
      </div>
    </div>
  );
};
