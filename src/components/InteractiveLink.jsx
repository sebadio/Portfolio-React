import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useInteractiveLink } from "../hooks/";

export const InteractiveLink = ({
  id,
  link,
  icono,
  handleMailClick = null,
}) => {
  const { handleMouseEnter, handleMouseLeave, handleMouseMove } =
    useInteractiveLink();

  if (id === "mail") {
    return (
      <Link
        onMouseEnter={(e) => {
          handleMouseEnter(e);
        }}
        onMouseMove={(e) => {
          handleMouseMove(e);
        }}
        onMouseLeave={(e) => {
          handleMouseLeave(e);
        }}
        to="/form"
        className="cursor-pointer w-[150px] h-[150px] text-white bg-transparent flex justify-center items-center relative active:scale-75 transition-all ease-in-out"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          id={id}
          className="relative z-10 pointer-events-none w- text-3xl"
          icon={icono}
        />
        <div
          id={`${id}bg`}
          className="absolute w-[60px] h-[60px] bg-[#fc3986] rounded-3xl pointer-events-none shadow-xl shadow-[#fc398633] bg"
        ></div>
      </Link>
    );
  }

  return (
    <a
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      href={link}
      target={icono === faPhone ? "_self" : "_blank"}
      className="cursor-pointer w-[150px] h-[150px] text-white bg-transparent flex justify-center items-center relative active:scale-75 transition-all ease-in-out"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        id={id}
        className="relative z-10 pointer-events-none w- text-3xl"
        icon={icono}
      />
      <div
        id={`${id}bg`}
        className="absolute w-[60px] h-[60px] bg-[#fc3986] rounded-3xl pointer-events-none shadow-xl shadow-[#fc398633] bg"
      ></div>
    </a>
  );
};
