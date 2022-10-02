import { motion } from "framer-motion";

export const SwitchLanguage = ({ language, changeLanguage }) => {
  return (
    <motion.img
      drag={true}
      dragConstraints={{
        left: -(window.innerWidth - window.innerWidth * 0.1),
        top: 0,
        right: -10,
        bottom: window.innerHeight - window.innerHeight * 0.2,
      }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      whileTap={{ cursor: "grabbing" }}
      whileDrag={{ cursor: "grabbing" }}
      onClick={changeLanguage}
      className="rounded-full z-50 w-[3rem] h-[3rem] lg:w-auto lg:h-auto fixed top-2 right-4 shadow-lg shadow-black opacity-40 transition-opacity hover:opacity-100 hover:cursor-pointer"
      src={
        language === "es"
          ? "https://raw.githubusercontent.com/sebadio/Portfolio-React/main/docs/assets/locales/es/spanish64.png"
          : "https://raw.githubusercontent.com/sebadio/Portfolio-React/main/docs/assets/locales/en/english64.png"
      }
      alt={language === "es" ? "Cambiar Lenguage" : "Change Language"}
    />
  );
};
