import React from "react";

export const SwitchLanguage = ({ language, changeLanguage }) => {
  return (
    <button
      onClick={changeLanguage}
      className="rounded-full fixed top-2 right-2 transition-all opacity-40 hover:opacity-100"
    >
      {language && language.type === "es" ? (
        <img
          className="rounded-full"
          src="https://raw.githubusercontent.com/sebadio/Portfolio-React/main/src/media/spanish64.png"
          alt="SwitchLanguage"
        />
      ) : (
        <img
          src="https://raw.githubusercontent.com/sebadio/Portfolio-React/main/src/media/english64.png"
          alt="SwitchLanguage"
        />
      )}
    </button>
  );
};
