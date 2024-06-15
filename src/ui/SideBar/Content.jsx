import { Typography } from "@mui/material";

function Content({ children }) {
  return (
    <Typography
      variant="subtitle2"
      sx={{
        color: "var(--color-grey-800);",
        fontWeight: "500",
        fontSize: "1rem",
      }}
    >
      {children}
    </Typography>
  );
}

export default Content;
