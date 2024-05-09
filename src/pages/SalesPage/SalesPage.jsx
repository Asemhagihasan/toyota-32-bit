import { Box, Stack } from "@mui/material";
import LocationSetter from "../../features/sales/LocationSetter";
import { Outlet } from "react-router-dom";
import Cart from "../../features/Cart/Cart";

function SalesPage() {
  return (
    <>
      <Box sx={{ position: "relative", height: "100%" }}>
        <Stack
          spacing={1}
          sx={{
            padding: "2rem 1.2rem",
            maxWidth: "800px",
            marginLeft: { xs: "2.5rem", lg: "0" },
          }}
        >
          <LocationSetter />
          <Outlet />
        </Stack>
      </Box>
      <Cart />
    </>
  );
}

export default SalesPage;
