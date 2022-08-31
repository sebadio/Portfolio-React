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
import { useEffect } from "react";

export const NavBar = ({ language }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  useEffect(() => {
    setSelectedLanguage(language);
    console.log(language);
  }, [language]);

  return (
    <nav
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className="w-[5rem] transition-all hover:w-1/12 h-screen flex flex-col justify-evenly text-center border-r-2 shadow-2xl shadow-black border-[#FFF5FF]"
    >
      <Link
        className="hover:bg-[#4D4352] hover:text-[#FFF5FF] text-xl transition-all w-full h-full flex flex-col justify-center items-center "
        to={"/"}
      >
        <FontAwesomeIcon icon={faHouse} />
        <span
          className={`${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full "
          } transition-all whitespace-nowrap text-center w-full`}
        >
          {selectedLanguage && selectedLanguage.navbar.home}
        </span>
      </Link>
      <Link
        className="hover:bg-[#4D4352] hover:text-[#FFF5FF] text-xl transition-all w-full h-full flex flex-col justify-center items-center "
        to={"/about"}
      >
        <FontAwesomeIcon icon={faIdBadge} />
        <span
          className={`${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full "
          } transition-all whitespace-nowrap text-center w-full`}
        >
          {selectedLanguage && selectedLanguage.navbar.about}
        </span>
      </Link>
      <Link
        className="hover:bg-[#4D4352] hover:text-[#FFF5FF] text-xl transition-all w-full h-full flex flex-col justify-center items-center "
        to={"/skills"}
      >
        <FontAwesomeIcon icon={faCode} />
        <span
          className={`${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full "
          } transition-all whitespace-nowrap text-center w-full`}
        >
          {selectedLanguage && selectedLanguage.navbar.skills}
        </span>
      </Link>
      <Link
        className="hover:bg-[#4D4352] hover:text-[#FFF5FF] text-xl transition-all w-full h-full flex flex-col justify-center items-center "
        to={"/courses"}
      >
        <FontAwesomeIcon icon={faChalkboardUser} />
        <span
          className={`${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full "
          } transition-all whitespace-nowrap text-center w-full`}
        >
          {selectedLanguage && selectedLanguage.navbar.courses}
        </span>
      </Link>
      <Link
        className="hover:bg-[#4D4352] hover:text-[#FFF5FF] text-xl transition-all w-full h-full flex flex-col justify-center items-center "
        to={"/projects"}
      >
        <FontAwesomeIcon icon={faListCheck} />
        <span
          className={`${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full "
          } transition-all whitespace-nowrap text-center w-full`}
        >
          {selectedLanguage && selectedLanguage.navbar.projects}
        </span>
      </Link>
      <Link
        className="hover:bg-[#4D4352] hover:text-[#FFF5FF] text-xl transition-all w-full h-full flex flex-col justify-center items-center "
        to={"/languages"}
      >
        <FontAwesomeIcon icon={faLanguage} />
        <span
          className={`${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full "
          } transition-all whitespace-nowrap text-center w-full`}
        >
          {selectedLanguage && selectedLanguage.navbar.languages}
        </span>
      </Link>
      <Link
        className="hover:bg-[#4D4352] hover:text-[#FFF5FF] text-xl transition-all w-full h-full flex flex-col justify-center items-center "
        to={"/contact"}
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <span
          className={`${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full "
          } transition-all whitespace-nowrap text-center w-full`}
        >
          {selectedLanguage && selectedLanguage.navbar.contact}
        </span>
      </Link>
    </nav>
  );
};
