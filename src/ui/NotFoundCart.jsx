import { Box, Typography } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";

function NotFoundCart() {
  return (
    <Box
      sx={{
        minWidth: "275px",
        maxWidth: "612px",
        height: "175px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "gray",
      }}
    >
      <SearchOffIcon style={{ fontSize: 50 }} />
      <Typography variant="h6">No products found.</Typography>
    </Box>
  );
}

export default NotFoundCart;
