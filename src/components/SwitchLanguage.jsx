import { motion } from "framer-motion";
import React from "react";

export const SwitchLanguage = ({ language, changeLanguage }) => {
  const handleDrag = (e) => {
    console.log(e);
  };

  return (
    <motion.img
      drag={true}
      dragConstraints={{
        left: -(window.innerWidth - window.innerWidth * 0.2),
        top: 0,
        right: -10,
        bottom: window.innerHeight - window.innerHeight * 0.2,
      }}
      onClick={changeLanguage}
      className="rounded-full w-[3rem] h-[3rem] lg:w-auto lg:h-auto fixed top-2 right-4 transition-all shadow-lg shadow-black opacity-40 hover:opacity-100 hover:cursor-pointer"
      src={
        language === "es"
          ? "https://raw.githubusercontent.com/sebadio/Portfolio-React/main/docs/assets/locales/es/spanish64.png"
          : "https://raw.githubusercontent.com/sebadio/Portfolio-React/main/docs/assets/locales/en/english64.png"
      }
      alt={language === "es" ? "Cambiar Lenguage" : "Change Language"}
    />
  );
};
