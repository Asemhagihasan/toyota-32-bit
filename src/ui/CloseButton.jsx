import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
function CloseButton({ setClicked, sx }) {
  return (
    <IconButton
      onClick={() => setClicked(false)}
      sx={{
        width: "2rem",
        height: "2rem",
        margin: "0.7rem 0 0.5rem 1.5rem",
        border: "1px solid #e5e5e5",
        boxShadow: "0 3px 5px rgba(0,0,0,.15)",
        ...sx,
      }}
    >
      <CloseIcon />
    </IconButton>
  );
}

export default CloseButton;
