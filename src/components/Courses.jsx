import React from "react";

export const Courses = ({ language }) => {
  const { title, description, coursesArray } = language;

  return (
    <div className="w-full h-full flex flex-col pb-[10vh] lg:pb-0 lg:ml-[5vw] pt-4 items-center overflow-auto">
      <h1>{title}</h1>
      <p>{description}</p>
      {coursesArray.map(({ title, description, link, image }) => (
        <div className="w-1/5" key={title}>
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={link}>Go to</a>
          <img src={image} />
        </div>
      ))}
    </div>
  );
};
