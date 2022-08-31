import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import { Root } from "./components/Root";
import { About } from "./components/About";
import { NavBar } from "./components/NavBar";
import { Contact } from "./components/Contact";
import { Courses } from "./components/Courses";
import { Languages } from "./components/Languages";
import { Proyects } from "./components/Proyects";
import { Skills } from "./components/Skills";
import { SwitchLanguage } from "./components/SwitchLanguage";

import { fetchLanguages } from "./helper/fetchLanguages";

const { es, en } = await fetchLanguages();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex w-full h-screen bg-[#252326] text-[#C4C1C5]">
      <BrowserRouter>
        <NavBar language={es} />

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
      <SwitchLanguage />
    </div>
  </React.StrictMode>
);
