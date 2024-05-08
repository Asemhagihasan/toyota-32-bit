import { Typography } from "@mui/material";

function Content({ children }) {
  return (
    <Typography
      variant="subtitle2"
      sx={{
        color: "rgba(0, 0, 0, .87);",
        fontWeight: "600",
        fontSize: "1rem",
      }}
    >
      {children}
    </Typography>
  );
}

export default Content;
