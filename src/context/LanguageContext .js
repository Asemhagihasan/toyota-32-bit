import React, { createContext, useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation();
  const storedLan = localStorage.getItem("i18nextLng");
  const [selectedLanguage, setSelectedLanguage] = useState(storedLan || "en");

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  function changeLanguage(lng) {
    setSelectedLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  }

  return (
    <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}
