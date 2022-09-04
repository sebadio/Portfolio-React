import React from "react";

export const AnimatedTitle = ({ title }) => {
  const handleTranslate = (e) => {
    if (!window.matchMedia("(any-hover: none)").matches) {
      const element = e.target;
      element.style.transform = `translateY(-10px) rotateZ(-20deg)`;
      setTimeout(() => {
        element.style.transform = "";
      }, 250);
    }
  };

  return title.split("").map((element, index) => (
    <pre
      key={index}
      className="transition-all cursor-default select-none font-sans"
      onMouseEnter={handleTranslate}
    >
      {element}
    </pre>
  ));
};
