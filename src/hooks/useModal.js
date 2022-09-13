import React, { useState } from "react";

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const handleShowModal = (
    title,
    description,
    image,
    linkToGit,
    linkToPage,
    linkToCourse,
    type,
    disabled
  ) => {
    setModalProps({
      title,
      description,
      image,
      linkToGit,
      linkToPage,
      linkToCourse,
      type,
      disabled,
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

  return {
    handleCloseModal,
    handleShowModal,
    modalProps,
    showModal,
  };
};
