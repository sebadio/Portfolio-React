import React, { Suspense } from "react";
import Fallback from "./Fallback";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const About = React.lazy(() => import("../pages/About"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Courses = React.lazy(() => import("../pages/Courses"));
const Form = React.lazy(() => import("../pages/Form"));
const Languages = React.lazy(() => import("../pages/Languages"));
const Proyects = React.lazy(() => import("../pages/Proyects"));
const Root = React.lazy(() => import("../pages/Root"));
const Skills = React.lazy(() => import("../pages/Skills"));

export const AnimatedRoutes = ({ t }) => {
  const location = useLocation();

  return (
    <Suspense fallback={<Fallback />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
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
            element={<Skills language={t("skills", { returnObjects: true })} />}
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
          <Route
            path="/form"
            element={<Form language={t("contact", { returnObjects: true })} />}
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};
