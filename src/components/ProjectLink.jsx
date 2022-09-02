import React from "react";

export const ProjectLink = ({ id, type, link }) => {
  const getOffset = (e) => {
    const top = e.target.offsetTop;
    const left = e.target.offsetLeft;

    return {
      left,
      top,
    };
  };

  const handleMouseEnter = (e) => {
    const i = e.target;

    i.style.transition = "all 0.15s ease";

    setTimeout(() => {
      i.style.transition = ``;
    }, 150);
  };
  const handleMouseLeave = (e) => {
    const i = e.target;
    i.style.background = "";

    setTimeout(() => {
      i.style.transition = ``;
    }, 150);
  };
  const handleMouseMove = (e) => {
    const { left, top } = getOffset(e);

    const x = e.pageX - left;
    const y = e.pageY - top;

    const i = e.target;
    i.style.background = `radial-gradient(circle 40px at ${x}px ${y}px, rgba(255,255,255,0.3), transparent)`;
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
      className="p-2 backdrop-blur-3xl border-white border-[1px] m-1 transition-all"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      Go to {type}
    </a>
  );
};
