import { Button, Stack } from "@mui/material";
import VirtualKeyboard from "../VirtualKeyboard/Keyboard";
import { useRef } from "react";
import CustomInput from "../../ui/CustomInput";
import LinkButton from "../../ui/LinkButton";

function EmailForm({ email, setEmail, setSendEmail }) {
  function onChangeInput(e) {
    const input = e.target.value;
    setEmail(input);
    keyboard?.current?.setInput(input);
  }
  const keyboard = useRef();
  return (
    <Stack sx={{ mt: "3rem" }}>
      <CustomInput
        type="email"
        text="Please enter the user's email address"
        sx={{
          "--Input-focusedHighlight":
            "var(--_Input-focusedHighlight, var(--joy-palette-focusVisible, var(--joy-palette-primary-500, #e67e22))) !important",
          width: "100% - 10px",
          marginLeft: "5px",
        }}
        value={email}
        onChange={onChangeInput}
      />
      <VirtualKeyboard setInput={setEmail} keyboard={keyboard} />
      <Button
        variant="contained"
        disableElevation
        sx={{
          backgroundColor: "#e28743",
          "&:hover": { backgroundColor: "#e67e22" },
          mt: "1rem",
        }}
        onClick={() => {
          setSendEmail(false);
        }}
      >
        Send
      </Button>
      <LinkButton
        to="-1"
        onClick={() => {
          setEmail("");
          setSendEmail(false);
        }}
      >
        &larr; Back to sale page
      </LinkButton>
    </Stack>
  );
}

export default EmailForm;
