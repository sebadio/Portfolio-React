import { useLinkMovement } from "../hooks/";

export const ProjectLink = ({ id, type, link, language }) => {
  const { handleMouseEnter, handleMouseLeave, handleMouseMove } =
    useLinkMovement();

  return (
    <a
      id={id}
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="py-2 px-4 backdrop-blur-3xl font-bold bg-[rgba(0,0,0,0.3)] border-[#fc398662] shadow-md shadow-[#496F6933] border-[1px] m-1 transition-all perspective"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {language === "es" ? "Ir a " : "Go To"} {type}
    </a>
  );
};
