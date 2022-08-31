import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faCode,
  faEnvelope,
  faHouse,
  faIdBadge,
  faLanguage,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useState } from "react";

export const NavBar = ({ language }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className="bg-[#252326] h-[10vh] lg:h-full lg:w-[10vw] lg:flex-col flex w-full absolute bottom-0 z-20 border-t-2 lg:border-t-0 lg:border-r-2 border-[#FFF5FF] shadow-2xl shadow-black "
    >
      <Link
        className="hover:bg-[#4D4352] hover:text-[#FFF5FF] lg:text-xl transition-all w-full h-full flex flex-col justify-center items-center "
        to={"/"}
      >
        <FontAwesomeIcon icon={faHouse} />
        <span
          className={`${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full "
          } transition-all whitespace-nowrap text-center w-full hidden lg:block`}
        >
          {language.home}
        </span>
      </Link>
      <Link
        className="hover:bg-[#4D4352] hover:text-[#FFF5FF] lg:text-xl transition-all w-full h-full flex flex-col justify-center items-center "
        to={"/about"}
      >
        <FontAwesomeIcon icon={faIdBadge} />
        <span
          className={`${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full "
          } transition-all whitespace-nowrap text-center w-full hidden lg:block`}
        >
          {language.about}
        </span>
      </Link>
      <Link
        className="hover:bg-[#4D4352] hover:text-[#FFF5FF] lg:text-xl transition-all w-full h-full flex flex-col justify-center items-center "
        to={"/skills"}
      >
        <FontAwesomeIcon icon={faCode} />
        <span
          className={`${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full "
          } transition-all whitespace-nowrap text-center w-full hidden lg:block`}
        >
          {language.skills}
        </span>
      </Link>
      <Link
        className="hover:bg-[#4D4352] hover:text-[#FFF5FF] lg:text-xl transition-all w-full h-full flex flex-col justify-center items-center "
        to={"/courses"}
      >
        <FontAwesomeIcon icon={faChalkboardUser} />
        <span
          className={`${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full "
          } transition-all whitespace-nowrap text-center w-full hidden lg:block`}
        >
          {language.courses}
        </span>
      </Link>
      <Link
        className="hover:bg-[#4D4352] hover:text-[#FFF5FF] lg:text-xl transition-all w-full h-full flex flex-col justify-center items-center "
        to={"/projects"}
      >
        <FontAwesomeIcon icon={faListCheck} />
        <span
          className={`${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full "
          } transition-all whitespace-nowrap text-center w-full hidden lg:block`}
        >
          {language.projects}
        </span>
      </Link>
      <Link
        className="hover:bg-[#4D4352] hover:text-[#FFF5FF] lg:text-xl transition-all w-full h-full flex flex-col justify-center items-center "
        to={"/languages"}
      >
        <FontAwesomeIcon icon={faLanguage} />
        <span
          className={`${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full "
          } transition-all whitespace-nowrap text-center w-full hidden lg:block`}
        >
          {language.languages}
        </span>
      </Link>
      <Link
        className="hover:bg-[#4D4352] hover:text-[#FFF5FF] lg:text-xl transition-all w-full h-full flex flex-col justify-center items-center "
        to={"/contact"}
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <span
          className={`${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full "
          } transition-all whitespace-nowrap text-center w-full hidden lg:block`}
        >
          {language.contact}
        </span>
      </Link>
    </nav>
  );
};
