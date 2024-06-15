import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
function CloseButton({ sx, ...props }) {
  return (
    <IconButton
      sx={{
        margin: "0.7rem 0 0.5rem 1.5rem",
        color: "var(--color-grey-700)",
        ...sx,
      }}
      {...props}
    >
      <CloseIcon />
    </IconButton>
  );
}

export default CloseButton;
