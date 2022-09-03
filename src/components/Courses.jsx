import React, { useState } from "react";
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

      <div className="flex flex-wrap justify-around items-center h-full p-2">
        {coursesArray.map(({ title, description, link, image }) => (
          <div
            onClick={() => {
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
            className="w-full lg:w-1/4 border-[#B2A7B8] border-[1px] shadow-md shadow-black hover:scale-125 transition-all"
            key={title}
          >
            <img src={image} />
          </div>
        ))}
      </div>
    </div>
  );
};
