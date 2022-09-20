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
    <div className="flex w-full h-screen aniBg text-[#C4C1C5]">
      <Suspense
        fallback={
          <div className="w-full h-screen flex justify-center items-center">
            <div className="w-8 aspect-square h-auto p-2 border-4 border-[#fc3986] border-t-[rgba(0,0,0,0.3)] border-l-[rgba(0,0,0,0.3)] rounded-full animate-spin"></div>
          </div>
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
