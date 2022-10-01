import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";

import { NavBar, SwitchLanguage } from "./components";

import { useTranslation } from "react-i18next";
import { changeLanguage } from "./helper/changeLanguage";

import "./index.css";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { Blob } from "./components/Blob";

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full h-screen aniBg overflow-hidden text-[#C4C1C5]">
      <Suspense
        fallback={
          <div className="w-full h-screen flex justify-center items-center">
            <div className="w-8 aspect-square h-auto p-2 border-4 border-[#fc3986] border-t-[rgba(0,0,0,0.3)] border-l-[rgba(0,0,0,0.3)] rounded-full animate-spin"></div>
          </div>
        }
      >
        <HashRouter>
          <Blob child={1} />
          <Blob child={2} />
          <Blob child={3} />
          <NavBar language={t("navbar", { returnObjects: true })} />
          <AnimatedRoutes t={t} />
        </HashRouter>

        <SwitchLanguage language={t("type")} changeLanguage={changeLanguage} />
      </Suspense>
    </div>
  );
};

export default App;
