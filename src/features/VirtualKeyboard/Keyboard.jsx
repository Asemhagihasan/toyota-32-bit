import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import englishLayout from "simple-keyboard-layouts/build/layouts/english";
import turkish from "simple-keyboard-layouts/build/layouts/turkish";
import "./index.css";
import { useState } from "react";
import { MenuItem, Select } from "@mui/material";

function VirtualKeyboard({ setInput, keyboard, ip }) {
  const [keyboardLayout, setKeyboardLayout] = useState(turkish);
  const [layout, setLayout] = useState("default");

  function onChangeLanguage(e) {
    const selectedLanguage = e.target.value;
    switch (selectedLanguage) {
      case "turkish":
        setKeyboardLayout(turkish);
        break;
      case "englishLayout":
        setKeyboardLayout(englishLayout);
        break;
      default:
        return;
    }
  }

  function handleShift() {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  }

  function onKeyPress(button) {
    if (button === "{shift}" || button === "{lock}") handleShift();
  }

  function onChange(input) {
    setInput(input);
  }

  return (
    <>
      {ip ? (
        <Keyboard
          keyboardRef={(r) => (keyboard.current = r)}
          {...keyboardLayout}
          layoutName={"ip"}
          layout={{
            default: [""],
            ip: ["7 8 9", "4 5 6", "1 2 3", "{bksp} 0"],
          }}
          display={{
            "{bksp}": "del",
            "{enter}": "enter",
          }}
          onChange={onChange}
          onKeyPress={onKeyPress}
          onRender={() => console.log("Rendered")}
        />
      ) : (
        <>
          <Keyboard
            keyboardRef={(r) => (keyboard.current = r)}
            {...keyboardLayout}
            layoutName={layout}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
          <Select
            onChange={(e) => onChangeLanguage(e)}
            inputProps={{ defaultValue: "turkish" }}
            sx={{ width: "40%" }}
          >
            <MenuItem value={"turkish"}>Turkish</MenuItem>
            <MenuItem value={"englishLayout"}>English</MenuItem>
          </Select>
        </>
      )}
    </>
  );
}

export default VirtualKeyboard;
