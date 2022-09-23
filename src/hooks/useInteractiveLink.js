import { getOffset } from "../helper/";

export const useInteractiveLink = () => {
  const handleMouseMove = (e) => {
    if (!window.matchMedia("(any-hover: none)").matches) {
      const { left, top } = getOffset(e);

      const layerX = e.pageX - left;
      const layerY = e.pageY - top;

      const x = layerX - 60;
      const y = layerY - 60;

      const i = e.target.firstChild;
      const bg = e.target.lastChild;

      i.style.transform = `translate(${x / 4}px , ${y / 4}px)`;
      bg.style.transform = `translate(${x / 8}px , ${y / 8}px)`;
    }
  };

  const handleMouseEnter = (e) => {
    if (!window.matchMedia("(any-hover: none)").matches) {
      const i = e.target.firstChild;
      const bg = e.target.lastChild;

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
      const i = e.target.firstChild;
      const bg = e.target.lastChild;

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

  return {
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  };
};
