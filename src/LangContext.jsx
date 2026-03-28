import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { translations } from "./i18n";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");
  const t = translations[lang];
  const toggle = () => {
    const next = lang === "en" ? "fr" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };
  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

LangProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLang = () => useContext(LangContext);
