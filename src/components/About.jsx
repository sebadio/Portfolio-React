import React from "react";

export const About = ({ language, type }) => {
  const { title, description, age, nationality, residence, email, phone } =
    language;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 p-4 lg:ml-[5vw]">
      <h2 className="text-[#496F69] font-extrabold text-4xl">{title}</h2>
      <div className="flex flex-wrap w-full gap-12 lg:h-full mt-24 lg:gap-0">
        <p className="flex-1 w-full h-min">{description}</p>
        <div className="flex-1 flex-col lg:flex-row flex justify-center">
          <ul>
            <li className="p-1">
              <span className="text-white font-bold ">
                {type === "es" ? "Edad: " : "Age: "}
              </span>
              {age}
            </li>
            <li className="p-1">
              <span className="text-white font-bold ">
                {type === "es" ? "Nacionalidad: " : "Nationality: "}
              </span>
              {nationality}
            </li>
            <li className="p-1">
              <span className="text-white font-bold ">
                {type === "es" ? "Residencia: " : "Residence: "}
              </span>
              {residence}
            </li>
            <li className="p-1">
              <a href={`mailto:${email}`}>
                <span className="text-white font-bold ">Email: </span>
                {email}
              </a>
            </li>
            <li className="p-1">
              <span className="text-white font-bold ">
                {type === "es" ? "Telefono: " : "Phone: "}
              </span>
              {phone}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
