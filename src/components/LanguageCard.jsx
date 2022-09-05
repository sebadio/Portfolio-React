import React from "react";

export const LanguageCard = ({ props }) => {
  console.log(props);
  const { title, description, image } = props;

  return (
    <div
      className={`my-2 p-8 h-1/2 rounded-2xl w-full lg:w-1/3 flex flex-col justify-center items-center gap-4 bg-[rgba(0,0,0,0.6)] shadow-lg shadow-[rgba(0,0,0,0.7)]`}
    >
      <h2
        className={`${
          title === "Spanish" || title === "Español"
            ? "text-yellow-400"
            : "text-blue-600"
        } font-bold text-xl`}
      >
        {title}
      </h2>
      <p className="text-center">{description}</p>
      <img
        className="rounded-full border-4 border-[rgba(255,255,255,0.8)] shadow-lg shadow-[rgba(0,0,0,0.5)]"
        src={image}
      />
    </div>
  );
};
