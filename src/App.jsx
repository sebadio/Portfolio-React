import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { NavBar, SwitchLanguage } from "./components";

import { useTranslation } from "react-i18next";
import { changeLanguage } from "./helper/changeLanguage";

import "./index.css";
import { AnimatedRoutes } from "./components/AnimatedRoutes";

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
          <AnimatedRoutes t={t} />
        </BrowserRouter>

        <SwitchLanguage language={t("type")} changeLanguage={changeLanguage} />
      </Suspense>
    </div>
  );
};

export default App;
