import KeyboardIcon from "@mui/icons-material/Keyboard";
import { IconButton } from "@mui/material";
function CustomKeyboardIcon({ onClick, showKeyboard }) {
  return (
    <IconButton
      sx={{
        position: "absolute",
        top: "36px",
        left: "92%",
        color: `${
          showKeyboard ? "var(--color-brand-600)" : "var(--color-grey-700)"
        }`,
      }}
      onClick={onClick}
    >
      <KeyboardIcon />
    </IconButton>
  );
}

export default CustomKeyboardIcon;
