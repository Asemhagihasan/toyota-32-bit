import { IconButton } from "@mui/material";

function CustomButton({ sx, children, ...props }) {
  return (
    <IconButton
      sx={{
        ...sx,
      }}
      {...props}
    >
      {children}
    </IconButton>
  );
}

export default CustomButton;
