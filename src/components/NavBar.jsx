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

import { NavLink } from "react-router-dom";
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
      className="bg-[rgba(0,0,0,0.75)] h-[10vh] lg:h-full lg:w-[5vw] lg:hover:w-[10vw] backdrop-blur-xl transition-all lg:flex-col flex w-full fixed bottom-0 z-20 border-t-2 lg:border-t-0 lg:border-r-2 border-[#B2A7B8] shadow-2xl shadow-black "
    >
      <NavLink
        className={({ isActive }) =>
          `hover:bg-[#fc398660] hover:text-[#FFF5FF] lg:text-xl transition-all w-full h-full flex flex-col justify-center items-center lg:pt-[1.32rem] ${
            isActive ? "text-[#FFF5FF] bg-[#fc398660]" : ""
          }`
        }
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
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:bg-[#fc398660] hover:text-[#FFF5FF] lg:text-xl transition-all w-full h-full flex flex-col justify-center items-center lg:pt-[1.32rem] ${
            isActive ? "text-[#FFF5FF] bg-[#fc398660]" : ""
          }`
        }
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
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:bg-[#fc398660] hover:text-[#FFF5FF] lg:text-xl transition-all w-full h-full flex flex-col justify-center items-center lg:pt-[1.32rem] ${
            isActive ? "text-[#FFF5FF] bg-[#fc398660]" : ""
          }`
        }
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
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:bg-[#fc398660] hover:text-[#FFF5FF] lg:text-xl transition-all w-full h-full flex flex-col justify-center items-center lg:pt-[1.32rem] ${
            isActive ? "text-[#FFF5FF] bg-[#fc398660]" : ""
          }`
        }
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
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:bg-[#fc398660] hover:text-[#FFF5FF] lg:text-xl transition-all w-full h-full flex flex-col justify-center items-center lg:pt-[1.32rem] ${
            isActive ? "text-[#FFF5FF] bg-[#fc398660]" : ""
          }`
        }
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
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:bg-[#fc398660] hover:text-[#FFF5FF] lg:text-xl transition-all w-full h-full flex flex-col justify-center items-center lg:pt-[1.32rem] ${
            isActive ? "text-[#FFF5FF] bg-[#fc398660]" : ""
          }`
        }
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
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:bg-[#fc398660] hover:text-[#FFF5FF] lg:text-xl transition-all w-full h-full flex flex-col justify-center items-center lg:pt-[1.32rem] ${
            isActive ? "text-[#FFF5FF] bg-[#fc398660]" : ""
          }`
        }
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
      </NavLink>
    </nav>
  );
};
