import React from "react";

export const AnimatedTitle = ({ title }) => {
  const handleTranslate = (e) => {
    if (!window.matchMedia("(any-hover: none)").matches) {
      const element = e.target;
      element.style.transform = `translateY(-10px) rotateZ(-20deg)`;
      element.style.color = "#F5F5F5";
      setTimeout(() => {
        element.style.transform = "";
        element.style.color = "";
      }, 250);
    }
  };

  return (
    <h1 className="text-[#fc3986] flex justify-center items-center font-extrabold text-5xl">
      {title.split("").map((element, index) => (
        <pre
          key={index}
          className="transition-all cursor-default select-none font-sans"
          onMouseEnter={handleTranslate}
        >
          {element}
        </pre>
      ))}
    </h1>
  );
};
