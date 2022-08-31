import React, { Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import {
  Root,
  About,
  Contact,
  Courses,
  Languages,
  NavBar,
  Proyects,
  Skills,
  SwitchLanguage,
} from "./components";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    backend: {
      loadPath:
        "https://sebadio.github.io/Portfolio-React/assets/locales/{{lng}}/translation.json",
    },
    detection: {
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie, localStorage"],
    },
  });

const App = () => {
  const { t } = useTranslation();

  const changeLanguage = () => {
    i18next.changeLanguage(
      localStorage.getItem("i18nextLng") === "es" ? "en" : "es"
    );
    localStorage.setItem(
      "i18nextLng",
      localStorage.getItem("i18nextLng") === "es" ? "en" : "es"
    );
  };

  return (
    <div className="flex w-full h-screen bg-[#252326] text-[#C4C1C5]">
      <Suspense
        fallback={
          <div className="loading w-4 h-4 border-8 p-4 m-4 rounded-full border-t-slate-900 animate-spin"></div>
        }
      >
        <BrowserRouter basename="/Portfolio-React/">
          <NavBar language={t("navbar", { returnObjects: true })} />

          <Routes>
            <Route
              path="/"
              element={<Root language={t("root", { returnObjects: true })} />}
            />
            <Route
              path="/about"
              element={<About language={t("about", { returnObjects: true })} />}
            />
            <Route
              path="/skills"
              element={
                <Skills language={t("skills", { returnObjects: true })} />
              }
            />
            <Route
              path="/courses"
              element={
                <Courses language={t("courses", { returnObjects: true })} />
              }
            />
            <Route
              path="/projects"
              element={
                <Proyects language={t("projects", { returnObjects: true })} />
              }
            />
            <Route path="/languages" element={<Languages />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>

        <SwitchLanguage language={t("type")} changeLanguage={changeLanguage} />
      </Suspense>
    </div>
  );
};

export default App;
