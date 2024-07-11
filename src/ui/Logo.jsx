import { Box } from "@mui/material";

function Logo() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <img
        style={{ width: "300px", height: "9.6rem" }}
        src="/logo.png"
        alt=""
      />
    </Box>
  );
}

export default Logo;
