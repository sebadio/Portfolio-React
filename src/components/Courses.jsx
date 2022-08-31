import React from "react";

export const Courses = ({ language }) => {
  const { title, description, coursesArray } = language;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
