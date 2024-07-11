import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledInput = styled("input")(() => ({
  padding: "0.8rem 1.2rem",
  border: "1px solid var(--color-grey-300)",
  color: "var(--color-brand-50)",
  fontSize: "16px",
  backgroundColor: "var(--color-grey-50)",
  borderRadius: "7px",
  "&:focus": {
    outline: "2px solid transparent",
    outlineOffset: "2px",
    border: "solid 2px var(--color-brand-600)",
  },
  maxWidth: "568px",
  minWidth: "320px",
  flexGrow: "2",
}));

export default function Input({ label, ...props }) {
  return (
    <>
      {label && (
        <Typography
          variant="subtitle2"
          sx={{ fontSize: "1.2rem", mb: "1", color: "var(--color-grey-700)" }}
        >
          {label}
        </Typography>
      )}
      <StyledInput {...props} />
    </>
  );
}
