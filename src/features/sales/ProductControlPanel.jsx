import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import { useRef } from "react";
import CustomInput from "../../ui/CustomInput";
import VirtualKeyboard from "../VirtualKeyboard/Keyboard";

function ProductControlPanel() {
  const keyboard = useRef();
  const [value, setValue] = useState("");
  function onChangeInput(e) {
    const input = e.target.value;
    if (isNaN(input)) return;
    setValue(input);
    keyboard?.current?.setInput(input);
  }
  return (
    <Box sx={{ width: "375px" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
        <CustomInput
          text="Search by code or name"
          sx={{
            "--Input-focusedHighlight":
              "var(--_Input-focusedHighlight, var(--joy-palette-focusVisible, var(--joy-palette-primary-500, #e67e22))) !important",
            width: "306.6px",
          }}
          value={value}
          onChange={onChangeInput}
        />
        <Button
          sx={{
            height: "3rem",
            fontSize: "2rem",
            borderRadius: "6px",
            backgroundColor: "#fff",
            color: "#333",
            "&:hover": { backgroundColor: "#fff" },
          }}
          variant="contained"
          disableElevation
        >
          -
        </Button>
      </Box>
      <Button
        variant="contained"
        disableElevation
        sx={{ width: "375px" }}
        color="success"
      >
        Kampanya getir
      </Button>
      <Stack sx={{ width: "375px" }}>
        <VirtualKeyboard ip={true} keyboard={keyboard} setInput={setValue} />
      </Stack>
    </Box>
  );
}

export default ProductControlPanel;
