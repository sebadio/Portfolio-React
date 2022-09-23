import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import {
  Root,
  About,
  Contact,
  Courses,
  Languages,
  Proyects,
  Skills,
  Form,
} from "../pages";

export const AnimatedRoutes = ({ t }) => {
  const location = useLocation();

  return (
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
          element={<Contact language={t("contact", { returnObjects: true })} />}
        />
        <Route
          path="/form"
          element={<Form language={t("contact", { returnObjects: true })} />}
        />
      </Routes>
    </AnimatePresence>
  );
};
