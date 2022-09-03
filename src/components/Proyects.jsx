import React, { useState } from "react";
import { Modal } from "./Modal";

export const Proyects = ({ language, type }) => {
  const { title, description, projectsArray } = language;

  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const handleShowModal = (
    title,
    description,
    linkToPage,
    linkToGit,
    image
  ) => {
    setModalProps({ title, description, linkToPage, linkToGit, image });
    setShowModal(true);
    setTimeout(() => {
      const modal = document.getElementById("modal");
      modal.classList.remove("animate-hideModal");
      modal.classList.add("animate-showModal");
      modal.classList.remove("-translate-y-full");
    }, 50);
  };

  const handleCloseModal = () => {
    const modal = document.getElementById("modal");

    modal.classList.remove("animate-showModal");
    modal.classList.add("animate-hideModal");

    setTimeout(() => {
      setShowModal(false);
    }, 720);
  };

  return (
    <div className="w-full h-full flex flex-col pb-[10vh] lg:pb-0 lg:ml-[5vw] pt-4 items-center overflow-auto">
      <h1>{title}</h1>
      <p>{description}</p>

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
                  linkToPage,
                  linkToGit,
                  image
                );
              }}
              className="flex flex-col justify-center items-center mt-8 w-1/4 border-[1px] border-[rgba(255,255,255,0.3)] cursor-pointer"
              key={title}
            >
              <img className="w-full h-full aspect-video" src={image} />
            </div>
          )
        )}
      </div>
    </div>
  );
};
