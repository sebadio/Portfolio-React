import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";

import { SwitchLanguage } from "./components";
import NavBar from "./components/NavBar";

import { useTranslation } from "react-i18next";
import { changeLanguage } from "./helper/changeLanguage";

import "./index.css";
import Blob from "./components/Blob";
import Fallback from "./components/Fallback";
const AnimatedRoutes = React.lazy(() => import("./components/AnimatedRoutes"));

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full h-screen aniBg overflow-hidden text-[#C4C1C5]">
      <Suspense fallback={<Fallback />}>
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
