import i18next from "i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    backend: {
      loadPath:
        "https://sebadio.github.io/Portafolio/assets/locales/{{lng}}/translation.json",
    },
    detection: {
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie, localStorage"],
    },
  });

export const changeLanguage = () => {
  i18next.changeLanguage(
    localStorage.getItem("i18nextLng") === "es" ? "en" : "es"
  );
  localStorage.setItem(
    "i18nextLng",
    localStorage.getItem("i18nextLng") === "es" ? "en" : "es"
  );
};
