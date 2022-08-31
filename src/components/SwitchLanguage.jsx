import React from "react";

export const SwitchLanguage = ({ language, changeLanguage }) => {
  return (
    <button
      onClick={changeLanguage}
      className="rounded-full fixed top-2 right-2 transition-all opacity-40 hover:opacity-100"
    >
      <img
        className="rounded-full transition-all"
        src={
          language === "es"
            ? "https://raw.githubusercontent.com/sebadio/Portfolio-React/main/docs/assets/locales/es/spanish64.png"
            : "https://raw.githubusercontent.com/sebadio/Portfolio-React/main/docs/assets/locales/en/english64.png"
        }
        alt={language === "es" ? "Cambiar Lenguage" : "Change Language"}
      />
    </button>
  );
};
