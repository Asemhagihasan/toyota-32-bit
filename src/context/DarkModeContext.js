import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();
const selectedTheme = localStorage.getItem("selectedTheme");
const themeCheck = selectedTheme === "dark";
function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(themeCheck);

  function setDarkMode() {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  }
  function setLightMode() {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  }

  useEffect(() => {
    if (themeCheck) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, [isDarkMode]);
  return (
    <DarkModeContext.Provider
      value={{ isDarkMode, setIsDarkMode, selectedTheme }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}

export { useDarkMode, DarkModeProvider };
