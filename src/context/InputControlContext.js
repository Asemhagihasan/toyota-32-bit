import { createContext, useContext, useRef, useState } from "react";

const InputControlContext = createContext();

function InputControlProvider({ children }) {
  const keyboard = useRef();
  const [value, setValue] = useState("");
  function onChangeInput(e) {
    const input = e.target.value;
    if (isNaN(input)) return;
    setValue(input);
    keyboard?.current?.setInput(input);
  }
  return (
    <InputControlContext.Provider
      value={{ value, onChangeInput, keyboard, setValue }}
    >
      {children}
    </InputControlContext.Provider>
  );
}

function useInputControl() {
  const context = useContext(InputControlContext);
  return context;
}

export { useInputControl, InputControlProvider };
