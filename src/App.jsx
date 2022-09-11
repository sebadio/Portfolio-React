import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

import { useTranslation } from "react-i18next";
import { changeLanguage } from "./helper/changeLanguage";

import "./index.css";

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full h-screen  bg-[#252326] text-[#C4C1C5]">
      <Suspense
        fallback={
          <div className="loading w-4 h-4 border-8  p-4 m-4 rounded-full border-t-slate-900 animate-spin"></div>
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
              element={
                <About
                  language={t("about", { returnObjects: true })}
                  type={t("type")}
                />
              }
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
                <Courses
                  type={t("type")}
                  language={t("courses", { returnObjects: true })}
                />
              }
            />
            <Route
              path="/projects"
              element={
                <Proyects
                  language={t("projects", { returnObjects: true })}
                  type={t("type")}
                />
              }
            />
            <Route
              path="/languages"
              element={
                <Languages language={t("languages", { returnObjects: true })} />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact language={t("contact", { returnObjects: true })} />
              }
            />
          </Routes>
        </BrowserRouter>

        <SwitchLanguage language={t("type")} changeLanguage={changeLanguage} />
      </Suspense>
    </div>
  );
};

export default App;
