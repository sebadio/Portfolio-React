import React, { useState } from "react";

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

import { fetchLanguages } from "./helper/fetchLanguages";
import { useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  let es;
  let en;

  useEffect(() => {
    const respuesta = fetchLanguages();

    es = respuesta.es;
    en = respuesta.en;

    setIsLoading(false);
  }, []);

  const [selectedLanguage, setSelectedLanguage] = useState();

  const changeLanguage = () => {
    const previousLanguage = selectedLanguage;

    localStorage.setItem(
      "selectedLanguage",
      previousLanguage === "es" ? "en" : "es"
    );

    setSelectedLanguage(selectedLanguage === es ? en : es);
  };

  return (
    <div className="flex w-full h-screen bg-[#252326] text-[#C4C1C5]">
      {isLoading ? (
        <div className="loading w-4 h-4 border-8 p-4 m-4 rounded-full border-t-slate-900 animate-spin"></div>
      ) : (
        <>
          <BrowserRouter>
            <NavBar language={selectedLanguage && selectedLanguage} />

            <Routes>
              <Route path="/" element={<Root />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/proyects" element={<Proyects />} />
              <Route path="/languages" element={<Languages />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>

          <SwitchLanguage
            language={selectedLanguage && selectedLanguage}
            changeLanguage={changeLanguage}
          />
        </>
      )}
    </div>
  );
};

export default App;
