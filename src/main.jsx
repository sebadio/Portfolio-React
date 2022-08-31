import React, { useState } from "react";
import ReactDOM from "react-dom/client";
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
import App from "./App";

const { es, en } = await fetchLanguages();

// const [selectedLanguage, setSelectedLanguage] = useState(
//   localStorage.getItem("selectedLanguage")
//     ? localStorage.getItem("selectedLanguage")
//     : "es"
// );

// const changeLanguage = () => {
//   const previousLanguage = localStorage.getItem("selectedLanguage")
//     ? localStorage.getItem("selectedLanguage")
//     : "es";
//   localStorage.setItem(
//     "selectedLanguage",
//     previousLanguage === "es" ? "en" : "es"
//   );
//   setSelectedLanguage(previousLanguage === "es" ? en : es);
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
