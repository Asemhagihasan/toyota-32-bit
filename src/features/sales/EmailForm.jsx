import { Button, Stack } from "@mui/material";
import VirtualKeyboard from "../VirtualKeyboard/Keyboard";
import { useRef } from "react";
import Input from "../../ui/Input";
import LinkButton from "../../ui/LinkButton";
import { useTranslation } from "react-i18next";

function EmailForm({ email, setEmail, setSendEmail }) {
  const { t: translate } = useTranslation();
  function onChangeInput(e) {
    const input = e.target.value;
    setEmail(input);
    keyboard?.current?.setInput(input);
  }
  const keyboard = useRef();
  return (
    <Stack sx={{ mt: "3rem" }}>
      <Input
        placeholder="email"
        text={translate("salePage.userEmailAddress")}
        sx={{
          "--Input-focusedHighlight":
            "var(--_Input-focusedHighlight, var(--joy-palette-focusVisible, var(--joy-palette-primary-500,var(--color-orange-100) ))) !important",
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
          backgroundColor: "var(--color-orange-200)",
          "&:hover": { backgroundColor: "var(--color-orange-200)" },
          mt: "1rem",
        }}
        onClick={() => {
          setSendEmail(false);
        }}
      >
        {translate("salePage.send")}
      </Button>
      <LinkButton
        to="-1"
        onClick={() => {
          setEmail("");
          setSendEmail(false);
        }}
      >
        &larr; {translate("salePage.backToSalePage")}
      </LinkButton>
    </Stack>
  );
}

export default EmailForm;
