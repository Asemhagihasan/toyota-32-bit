import { Box } from "@mui/material";

function Content({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
        color: "#fff",
        mr: { xs: "0.5rem", s: "0.5rem" },
      }}
    >
      {children}
    </Box>
  );
}

export default Content;
