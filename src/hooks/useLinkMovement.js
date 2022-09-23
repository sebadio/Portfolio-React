import { getOffset } from "../helper/";

export const useLinkMovement = () => {
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

      const x = e.pageX - (left + i.offsetParent.offsetLeft);
      const y = e.pageY - (top + i.offsetParent.offsetTop);

      const centerX = left + i.offsetParent.offsetLeft + width / 2;
      const centerY = top + i.offsetParent.offsetTop + height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateX = ((-1 * (15 * mouseY)) / (height / 2)).toFixed(2);
      const rotateY = ((15 * mouseX) / (width / 2)).toFixed(2);

      i.style.background = `radial-gradient(circle 40px at ${x}px ${y}px, #fc398699, rgba(0,0,0,0.15))`;
      i.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.1, 1.1, 1.1)`;
    }
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  };
};
