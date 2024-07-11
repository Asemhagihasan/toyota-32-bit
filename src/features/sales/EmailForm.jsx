import { Button, Stack } from "@mui/material";
import VirtualKeyboard from "../VirtualKeyboard/Keyboard";
import { useRef } from "react";
import CustomInput from "../../ui/CustomInput";
import LinkButton from "../../ui/LinkButton";
import { useTranslation } from "react-i18next";
import Input from "../../ui/Input";

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
        type="email"
        placeholder={translate("salePage.userEmailAddress")}
        sx={{
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
