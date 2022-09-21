import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { getOffset } from "../helper/getOffset";
import { Link } from "react-router-dom";

export const InteractiveLink = ({
  id,
  link,
  icono,
  handleMailClick = null,
}) => {
  const handleMouseMove = (e) => {
    if (!window.matchMedia("(any-hover: none)").matches) {
      const { left, top } = getOffset(e);

      const layerX = e.pageX - left;
      const layerY = e.pageY - top;

      const x = layerX - 60;
      const y = layerY - 60;

      const i = document.querySelector(`#${id}`);
      const bg = document.querySelector(`#${id}bg`);

      i.style.transform = `translate(${x / 4}px , ${y / 4}px)`;
      bg.style.transform = `translate(${x / 8}px , ${y / 8}px)`;
    }
  };

  const handleMouseEnter = (e) => {
    if (!window.matchMedia("(any-hover: none)").matches) {
      const i = document.querySelector(`#${id}`);
      const bg = document.querySelector(`#${id}bg`);

      i.style.transition = "all 0.15s ease";
      bg.style.transition = "all 0.15s ease";

      setTimeout(() => {
        i.style.transition = ``;
        bg.style.transition = ``;
      }, 150);
    }
  };

  const handleMouseLeave = (e) => {
    if (!window.matchMedia("(any-hover: none)").matches) {
      const i = document.querySelector(`#${id}`);
      const bg = document.querySelector(`#${id}bg`);

      i.style.transition = "all 0.25s ease";
      bg.style.transition = "all 0.25s ease";

      i.style.transform = `translate(${0}px , ${0}px)`;
      bg.style.transform = `translate(${0}px , ${0}px)`;

      setTimeout(() => {
        i.style.transition = ``;
        bg.style.transition = ``;
      }, 250);
    }
  };

  if (id === "mail") {
    return (
      <Link
        onMouseEnter={(e) => {
          handleMouseEnter(e);
        }}
        onMouseMove={(e) => {
          handleMouseMove(e);
        }}
        onMouseLeave={(e) => {
          handleMouseLeave(e);
        }}
        to="/form"
        className="cursor-pointer w-[150px] h-[150px] text-white bg-transparent flex justify-center items-center relative active:scale-75 transition-all ease-in-out"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          id={id}
          className="relative z-10 pointer-events-none w- text-3xl"
          icon={icono}
        />
        <div
          id={`${id}bg`}
          className="absolute w-[60px] h-[60px] bg-[#fc3986] rounded-3xl pointer-events-none shadow-xl shadow-[#fc398633] bg"
        ></div>
      </Link>
    );
  }

  return (
    <a
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      href={link}
      target={icono === faPhone ? "_self" : "_blank"}
      className="cursor-pointer w-[150px] h-[150px] text-white bg-transparent flex justify-center items-center relative active:scale-75 transition-all ease-in-out"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        id={id}
        className="relative z-10 pointer-events-none w- text-3xl"
        icon={icono}
      />
      <div
        id={`${id}bg`}
        className="absolute w-[60px] h-[60px] bg-[#fc3986] rounded-3xl pointer-events-none shadow-xl shadow-[#fc398633] bg"
      ></div>
    </a>
  );
};
