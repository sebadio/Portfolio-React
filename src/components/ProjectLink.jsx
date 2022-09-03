import React from "react";
import { getOffset } from "../helper/getOffset";

export const ProjectLink = ({ id, type, link, language }) => {
  const handleMouseEnter = (e) => {
    if (!window.matchMedia("(any-hover: none)").matches) {
      const i = e.target;

      i.style.transition = "all 0.15s ease";

      setTimeout(() => {
        i.style.transition = ``;
      }, 150);
    }
  };
  const handleMouseLeave = (e) => {
    if (!window.matchMedia("(any-hover: none)").matches) {
      const i = e.target;
      i.style.background = "";
      i.style.transform = ``;
      setTimeout(() => {
        i.style.transition = ``;
      }, 150);
    }
  };

  const handleMouseMove = (e) => {
    if (!window.matchMedia("(any-hover: none)").matches) {
      const i = e.target;
      const { left, top } = getOffset(e);
      const { width, height } = i.getBoundingClientRect();

      const x = e.pageX - left;
      const y = e.pageY - top;

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateX = ((-1 * (15 * mouseY)) / (height / 2)).toFixed(2);
      const rotateY = ((15 * mouseX) / (width / 2)).toFixed(2);

      i.style.background = `radial-gradient(circle 40px at ${x}px ${y}px, #496F6999, rgba(0,0,0,0.3))`;
      i.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.1, 1.1, 1.1)`;
    }
  };

  return (
    <a
      id={id}
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="py-2 px-4 backdrop-blur-3xl font-bold bg-[rgba(0,0,0,0.3)] border-[#496f6962] shadow-md shadow-[#496F6933] border-[1px] m-1 transition-all perspective"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {language === "es" ? "Ir a " : "Go To"} {type}
    </a>
  );
};
