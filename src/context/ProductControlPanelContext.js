import { createContext, useContext, useRef, useState } from "react";

const productPanelContext = createContext();

function ProductPanelProvider({ children }) {
  const keyboard = useRef();
  const [value, setValue] = useState("");
  function onChangeInput(e) {
    const input = e.target.value;
    if (isNaN(input)) return;
    setValue(input);
    keyboard?.current?.setInput(input);
  }
  return (
    <productPanelContext.Provider
      value={{ value, onChangeInput, keyboard, setValue }}
    >
      {children}
    </productPanelContext.Provider>
  );
}

function useProductPanel() {
  const context = useContext(productPanelContext);
  return context;
}

export { useProductPanel, ProductPanelProvider };
