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
const { es, en } = await fetchLanguages();

console.log({ es, en });

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(es);

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
    </div>
  );
}

export default App;
